import React, { useState, useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import MenuCard from './components/MenuCard';
import OrderSidebar from './components/OrderSidebar';
import KitchenView from './components/KitchenView';
import ReRenderAuditPanel from './components/ReRenderAuditPanel';
import { generate200MenuItems, BASE_MENU_ITEMS, INITIAL_CATEGORIES } from './data/menuData';
import { FiSearch, FiFilter, FiAlertCircle } from 'react-icons/fi';
import './App.css';

// Tables Configuration (Nuclear 1-5, Family 6-10, Joint 11-12)
export const TABLES_CONFIG = [
  { id: 1, type: 'Nuclear', capacity: 4 },
  { id: 2, type: 'Nuclear', capacity: 4 },
  { id: 3, type: 'Nuclear', capacity: 4 },
  { id: 4, type: 'Nuclear', capacity: 4 },
  { id: 5, type: 'Nuclear', capacity: 4 },
  { id: 6, type: 'Family', capacity: 7 },
  { id: 7, type: 'Family', capacity: 7 },
  { id: 8, type: 'Family', capacity: 7 },
  { id: 9, type: 'Family', capacity: 7 },
  { id: 10, type: 'Family', capacity: 7 },
  { id: 11, type: 'Joint', capacity: 10 },
  { id: 12, type: 'Joint', capacity: 10 }
];

let ticketCounter = 1;

export default function App() {
  // App state (itemCount defaults to 9 items, toggles to 200 for benchmark)
  const [renderMode, setRenderMode] = useState('naive'); // 'naive' vs 'optimized'
  const [itemCount, setItemCount] = useState(9); // 9 items vs 200 items dataset
  
  const [selectedTable, setSelectedTable] = useState(1);
  const [tableFilterCategory, setTableFilterCategory] = useState('All'); // 'All', 'Nuclear', 'Family', 'Joint'
  
  // Table status per table: { [tableId]: 'Ordering' | 'Served' | 'Billed' }
  const [tableStatuses, setTableStatuses] = useState({});

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('All');

  // Draft Carts per table (Ordering state)
  const [tableCarts, setTableCarts] = useState({ 1: [] });

  // Served Items per table: { [tableId]: Array<{ item, quantity }> }
  const [tableServedItems, setTableServedItems] = useState({});

  // Billed History per table (All items ordered & sent to kitchen for that table)
  const [tableBilledHistory, setTableBilledHistory] = useState({});

  // Kitchen Tickets state
  const [kitchenTickets, setKitchenTickets] = useState([]);

  // Total global re-renders counter for audit metrics
  const [totalGlobalRenders, setTotalGlobalRenders] = useState(0);

  // Generate dataset based on itemCount toggle
  const fullDataset = useMemo(() => {
    return itemCount === 200 ? generate200MenuItems() : BASE_MENU_ITEMS;
  }, [itemCount]);

  // Selected table info
  const selectedTableInfo = TABLES_CONFIG.find(t => t.id === selectedTable) || TABLES_CONFIG[0];

  // Current active table's status
  const currentTableStatus = tableStatuses[selectedTable] || 'Ordering';

  // Handle setting table status
  const handleSetTableStatus = (status) => {
    setTableStatuses(prev => ({ ...prev, [selectedTable]: status }));
  };

  // Current active table's draft cart
  const currentCart = tableCarts[selectedTable] || [];

  // Current active table's served items
  const currentServedItems = tableServedItems[selectedTable] || [];

  // Current active table's billed history
  const currentBilledHistory = tableBilledHistory[selectedTable] || [];

  // Handle Add to Cart
  const handleAddToCart = (item) => {
    setTotalGlobalRenders(prev => prev + 1);
    setTableCarts(prevCarts => {
      const activeCart = prevCarts[selectedTable] || [];
      const existingIndex = activeCart.findIndex(i => i.id === item.id);
      
      let updatedCart;
      if (existingIndex > -1) {
        updatedCart = activeCart.map((cartItem, idx) =>
          idx === existingIndex 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCart = [...activeCart, { ...item, quantity: 1 }];
      }

      return { ...prevCarts, [selectedTable]: updatedCart };
    });
  };

  // Handle Remove from Cart
  const handleRemoveFromCart = (itemId) => {
    setTotalGlobalRenders(prev => prev + 1);
    setTableCarts(prevCarts => {
      const activeCart = prevCarts[selectedTable] || [];
      const existingItem = activeCart.find(i => i.id === itemId);

      let updatedCart;
      if (existingItem && existingItem.quantity > 1) {
        updatedCart = activeCart.map(i => 
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        updatedCart = activeCart.filter(i => i.id !== itemId);
      }

      return { ...prevCarts, [selectedTable]: updatedCart };
    });
  };

  // Clear Table State (Resets Ordering, Served, Billed for selected table)
  const handleClearTable = () => {
    setTableCarts(prev => ({ ...prev, [selectedTable]: [] }));
    setTableServedItems(prev => ({ ...prev, [selectedTable]: [] }));
    setTableBilledHistory(prev => ({ ...prev, [selectedTable]: [] }));
    handleSetTableStatus('Ordering');
  };

  // Send Order to Kitchen Display System (KDS)
  const handleSendToKitchen = (cartItems, note) => {
    const newTicket = {
      id: ticketCounter++,
      tableNumber: selectedTable,
      items: cartItems,
      note: note
    };

    // Add to active kitchen tickets
    setKitchenTickets(prev => [newTicket, ...prev]);

    // Append to Billed History for this table
    setTableBilledHistory(prev => {
      const existingBilled = prev[selectedTable] || [];
      const updatedBilled = [...existingBilled];
      cartItems.forEach(cartItem => {
        const foundIndex = updatedBilled.findIndex(b => b.id === cartItem.id);
        if (foundIndex > -1) {
          updatedBilled[foundIndex] = {
            ...updatedBilled[foundIndex],
            quantity: updatedBilled[foundIndex].quantity + cartItem.quantity
          };
        } else {
          updatedBilled.push({ ...cartItem });
        }
      });
      return { ...prev, [selectedTable]: updatedBilled };
    });

    // Clear draft cart
    setTableCarts(prev => ({ ...prev, [selectedTable]: [] }));
  };

  // Complete Kitchen Ticket (Mark as Served)
  const handleMarkTicketDone = (ticketId) => {
    const targetTicket = kitchenTickets.find(t => t.id === ticketId);
    if (!targetTicket) return;

    // Append ticket items to tableServedItems
    setTableServedItems(prev => {
      const tableId = targetTicket.tableNumber;
      const existingServed = prev[tableId] || [];
      const updatedServed = [...existingServed];

      targetTicket.items.forEach(ticketItem => {
        const foundIdx = updatedServed.findIndex(s => s.id === ticketItem.id);
        if (foundIdx > -1) {
          updatedServed[foundIdx] = {
            ...updatedServed[foundIdx],
            quantity: updatedServed[foundIdx].quantity + ticketItem.quantity
          };
        } else {
          updatedServed.push({ ...ticketItem });
        }
      });

      return { ...prev, [tableId]: updatedServed };
    });

    // Automatically set table status to Served
    setTableStatuses(prev => ({ ...prev, [targetTicket.tableNumber]: 'Served' }));

    // Remove from active kitchen tickets
    setKitchenTickets(prev => prev.filter(t => t.id !== ticketId));
  };

  // Filtered Menu Items
  const filteredMenuItems = fullDataset.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary = dietaryFilter === 'All' || item.dietary === dietaryFilter;
    return matchesCategory && matchesSearch && matchesDietary;
  });

  return (
    <div className="app-container">
      {/* Top Header Navigation */}
      <Header 
        renderMode={renderMode}
        setRenderMode={setRenderMode}
        itemCount={itemCount}
        setItemCount={setItemCount}
        tablesList={TABLES_CONFIG}
        selectedTable={selectedTable}
        setSelectedTable={setSelectedTable}
        tableFilterCategory={tableFilterCategory}
        setTableFilterCategory={setTableFilterCategory}
      />

      {/* Main Layout Container with React Router Routes */}
      <main className="main-content-layout">
        <Routes>
          {/* Default Route redirects to /Home */}
          <Route path="/" element={<Navigate to="/Home" replace />} />

          {/* Home / Menu & Order Route */}
          <Route 
            path="/Home" 
            element={
              <>
                <div className="menu-section">
                  {/* Mode Alert Banner */}
                  <div className={`audit-mode-banner ${renderMode}`}>
                    <FiAlertCircle size={18} />
                    <span>
                      {renderMode === 'naive' 
                        ? `Naive Mode Active: Updating any item quantity causes all ${filteredMenuItems.length} displayed menu cards to re-render!` 
                        : `Optimized Composition Mode Active: State changes isolated so only updated cards re-render!`}
                    </span>
                  </div>

                  {/* Filters & Search Toolbar */}
                  <div className="toolbar">
                    <div className="search-bar">
                      <FiSearch size={18} className="search-icon" />
                      <input 
                        type="text" 
                        placeholder="Search menu items by name..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    {/* Category Filters */}
                    <div className="category-pills">
                      {INITIAL_CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                          onClick={() => setSelectedCategory(cat)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Dietary Filter */}
                    <div className="dietary-filter">
                      <FiFilter size={16} />
                      <select value={dietaryFilter} onChange={(e) => setDietaryFilter(e.target.value)}>
                        <option value="All">All Diets</option>
                        <option value="Veg">Vegetarian</option>
                        <option value="Non-Veg">Non-Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                      </select>
                    </div>
                  </div>

                  {/* Menu Cards Grid */}
                  <div className="menu-grid">
                    {filteredMenuItems.map(item => {
                      const cartItem = currentCart.find(i => i.id === item.id);
                      const qty = cartItem ? cartItem.quantity : 0;

                      return (
                        <MenuCard 
                          key={item.id}
                          item={item}
                          quantityInCart={qty}
                          onAddToCart={handleAddToCart}
                          onRemoveFromCart={handleRemoveFromCart}
                          renderMode={renderMode}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Sidebar Running Order & Bill */}
                <OrderSidebar 
                  cartItems={currentCart}
                  servedItems={currentServedItems}
                  billedHistory={currentBilledHistory}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                  onClearTable={handleClearTable}
                  selectedTableInfo={selectedTableInfo}
                  tableStatus={currentTableStatus}
                  setTableStatus={handleSetTableStatus}
                  onSendToKitchen={handleSendToKitchen}
                />
              </>
            } 
          />

          {/* Kitchen View Route (/Kitchen) */}
          <Route 
            path="/Kitchen" 
            element={
              <KitchenView 
                kitchenTickets={kitchenTickets}
                onMarkTicketDone={handleMarkTicketDone}
              />
            } 
          />

          {/* Audit Panel Route (/Audit) */}
          <Route 
            path="/Audit" 
            element={
              <ReRenderAuditPanel 
                renderMode={renderMode}
                itemCount={itemCount}
                totalGlobalRenders={totalGlobalRenders}
              />
            } 
          />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
      </main>
    </div>
  );
}

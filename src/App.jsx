import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import MenuCard from './components/MenuCard';
import OrderSidebar from './components/OrderSidebar';
import KitchenView from './components/KitchenView';
import ReRenderAuditPanel from './components/ReRenderAuditPanel';
import InteractiveTableLayout from './components/InteractiveTableLayout';
import GuestAuthModal from './components/GuestAuthModal';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/HomePage';
import { useMenu } from './context/MenuContext';
import { useTheme } from './context/ThemeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSearch, FiFilter, FiAlertCircle } from 'react-icons/fi';
import { FaHeart, FaRegHeart, FaShoppingBag } from 'react-icons/fa';
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

let ticketCounter = Date.now();

export default function App() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Guest Authentication state persisted in localStorage
  const [activeGuest, setActiveGuest] = useState(() => {
    try {
      const saved = localStorage.getItem('qk_active_guest');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Modal open state (triggered by clicking Crown logo or button)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Menu Context consumption (Context API architecture)
  const { 
    currentDataset: fullDataset, 
    itemCount, 
    setItemCount, 
    renderMode, 
    setRenderMode, 
    categories: INITIAL_CATEGORIES 
  } = useMenu();
  
  // Selected Table initialized from active guest table or default 1
  const [selectedTable, setSelectedTable] = useState(() => {
    try {
      const saved = localStorage.getItem('qk_active_guest');
      if (saved) {
        const guest = JSON.parse(saved);
        if (guest && guest.tableId) return guest.tableId;
      }
    } catch {
      // fallback
    }
    return 1;
  });

  const [tableFilterCategory, setTableFilterCategory] = useState('All'); // 'All', 'Nuclear', 'Family', 'Joint'
  
  // Table status per table: { [tableId]: 'Ordering' | 'Served' | 'Billed' }
  const [tableStatuses, setTableStatuses] = useState(() => {
    try {
      const saved = localStorage.getItem('qk_table_statuses');
      const parsed = saved ? JSON.parse(saved) : {};
      return (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) ? parsed : {};
    } catch {
      return {};
    }
  });

  const [selectedCategory, setSelectedCategory] = useState('All'); // 'All', 'Meal', 'Favourites'
  const [mealSubCategory, setMealSubCategory] = useState('All'); // 'All', 'Starters', 'Main Course', 'Desserts', 'Beverages'
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('All');

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('qk_favorite_dishes');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  // Safe fallback for favorites
  const safeFavorites = Array.isArray(favorites) ? favorites : [];

  // Toggle Favorite Callback (memoized)
  const handleToggleFavorite = useCallback((item) => {
    setFavorites(prev => {
      const list = Array.isArray(prev) ? prev : [];
      let updated;
      if (list.includes(item.id)) {
        updated = prev.filter(id => id !== item.id);
        toast.info(`Removed ${item.name} from Favourites.`, { autoClose: 1500 });
      } else {
        updated = [...list, item.id];
        toast.success(`Added ${item.name} to Favourites! ❤️`, { autoClose: 1500 });
      }
      try {
        localStorage.setItem('qk_favorite_dishes', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  }, []);

  // Draft Carts per table with localStorage hydration
  const [tableCarts, setTableCarts] = useState(() => {
    try {
      const saved = localStorage.getItem('qk_table_carts');
      const parsed = saved ? JSON.parse(saved) : { 1: [] };
      return (parsed && typeof parsed === 'object') ? parsed : { 1: [] };
    } catch {
      return { 1: [] };
    }
  });

  // Served Items per table: { [tableId]: Array<{ item, quantity }> }
  const [tableServedItems, setTableServedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('qk_table_served_items');
      const parsed = saved ? JSON.parse(saved) : {};
      return (parsed && typeof parsed === 'object') ? parsed : {};
    } catch {
      return {};
    }
  });

  // Billed History per table
  const [tableBilledHistory, setTableBilledHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('qk_table_billed_history');
      const parsed = saved ? JSON.parse(saved) : {};
      return (parsed && typeof parsed === 'object') ? parsed : {};
    } catch {
      return {};
    }
  });

  // Kitchen Tickets state
  const [kitchenTickets, setKitchenTickets] = useState(() => {
    try {
      const saved = localStorage.getItem('qk_kitchen_tickets');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  // Total global re-renders counter for audit metrics
  const [totalGlobalRenders, setTotalGlobalRenders] = useState(0);

  // Sync state to localStorage (State Persistence Requirement)
  useEffect(() => {
    localStorage.setItem('qk_table_carts', JSON.stringify(tableCarts));
  }, [tableCarts]);

  useEffect(() => {
    localStorage.setItem('qk_table_statuses', JSON.stringify(tableStatuses));
  }, [tableStatuses]);

  useEffect(() => {
    localStorage.setItem('qk_table_served_items', JSON.stringify(tableServedItems));
  }, [tableServedItems]);

  useEffect(() => {
    localStorage.setItem('qk_table_billed_history', JSON.stringify(tableBilledHistory));
  }, [tableBilledHistory]);

  useEffect(() => {
    localStorage.setItem('qk_kitchen_tickets', JSON.stringify(kitchenTickets));
  }, [kitchenTickets]);

  useEffect(() => {
    if (activeGuest) {
      localStorage.setItem('qk_active_guest', JSON.stringify(activeGuest));
    } else {
      localStorage.removeItem('qk_active_guest');
    }
  }, [activeGuest]);

  // Synchronize table occupancy if activeGuest has an assigned tableId
  useEffect(() => {
    if (activeGuest && activeGuest.tableId) {
      setTableStatuses(prev => {
        const tid = Number(activeGuest.tableId);
        if (!prev[tid] || prev[tid] === 'Available') {
          return { ...prev, [tid]: 'Ordering' };
        }
        return prev;
      });
    }
  }, [activeGuest]);


  // Selected table info
  const selectedTableInfo = TABLES_CONFIG.find(t => t.id === selectedTable) || TABLES_CONFIG[0];

  // Current active table's status
  const currentTableStatus = tableStatuses[selectedTable] || 'Ordering';

  // Handle setting table status
  const handleSetTableStatus = (status) => {
    setTableStatuses(prev => ({ ...prev, [selectedTable]: status }));
  };

  // Current active table's draft cart (safe array fallback)
  const currentCart = (tableCarts && Array.isArray(tableCarts[selectedTable])) ? tableCarts[selectedTable] : [];

  // Current active table's served items (safe array fallback)
  const currentServedItems = (tableServedItems && Array.isArray(tableServedItems[selectedTable])) ? tableServedItems[selectedTable] : [];

  // Current active table's billed history (safe array fallback)
  const currentBilledHistory = (tableBilledHistory && Array.isArray(tableBilledHistory[selectedTable])) ? tableBilledHistory[selectedTable] : [];

  // useCallback Optimization for Add to Cart Handler
  const handleAddToCart = useCallback((item) => {
    if (!activeGuest) {
      toast.info('Please Sign Up or Log In as guest first to assign a table and place orders!', {
        icon: '👑',
        autoClose: 3000
      });
      setIsAuthModalOpen(true);
      return;
    }
    setTotalGlobalRenders(prev => prev + 1);
    setTableCarts(prevCarts => {
      const activeCart = (prevCarts && Array.isArray(prevCarts[selectedTable])) ? prevCarts[selectedTable] : [];
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
  }, [activeGuest, selectedTable]);

  // useCallback Optimization for Remove from Cart Handler
  const handleRemoveFromCart = useCallback((itemId) => {
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
  }, [selectedTable]);

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
      guestName: activeGuest ? activeGuest.name : `Guest #${selectedTable}`,
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

    // Tasteful toast notification for Kitchen KDS fulfillment
    toast.info(`Ticket #${ticketId} prepared & served to Table #${targetTicket.tableNumber}!`, {
      icon: '🍽️',
      position: 'top-right',
      autoClose: 3000
    });
  };

  // Guest Login / Registration Success Callback
  const handleLoginSuccess = (guest) => {
    setActiveGuest(guest);
    if (guest.tableId) {
      setSelectedTable(guest.tableId);
      // Synchronize table occupancy immediately
      setTableStatuses(prev => {
        const current = prev[guest.tableId];
        if (!current || current === 'Available') {
          return { ...prev, [guest.tableId]: 'Ordering' };
        }
        return prev;
      });
    }

    // Aesthetic welcome toast notification
    toast.success(`Welcome to Queen's Kitchen, ${guest.name}! Seated at Table #${guest.tableId}`, {
      icon: '👑',
      position: 'top-right',
      autoClose: 3500
    });
  };

  // Guest Logout Callback
  const handleLogout = () => {
    setActiveGuest(null);
    setIsAuthModalOpen(false);
    navigate('/');
    toast.info('You have signed out. Protected dining area is now locked.', {
      icon: '🔒',
      position: 'top-right',
      autoClose: 2500
    });
  };

  // Clear All Records (Practice Reset Handler)
  const handleResetAllData = () => {
    try {
      localStorage.removeItem('qk_registered_guests');
      localStorage.removeItem('qk_active_guest');
      localStorage.removeItem('qk_table_carts');
      localStorage.removeItem('qk_table_statuses');
      localStorage.removeItem('qk_table_served_items');
      localStorage.removeItem('qk_table_billed_history');
      localStorage.removeItem('qk_kitchen_tickets');
      localStorage.removeItem('qk_dining_feedbacks');
      localStorage.removeItem('qk_favorite_dishes');
    } catch (e) {
      console.error(e);
    }

    setActiveGuest(null);
    setSelectedTable(1);
    setTableStatuses({});
    setFavorites([]);
    setTableCarts({ 1: [] });
    setTableServedItems({});
    setTableBilledHistory({});
    setKitchenTickets([]);
    setTotalGlobalRenders(0);
    setIsAuthModalOpen(false);
    navigate('/');

    toast.success('All restaurant practice records have been reset! Fresh starting state restored.', {
      icon: '🧹',
      position: 'top-right',
      autoClose: 3500
    });
  };

  // Filtered Menu Items using useMemo for memoized filtering
  const filteredMenuItems = useMemo(() => {
    const list = Array.isArray(fullDataset) ? fullDataset : [];
    return list.filter(item => {
      // 1. Category Filter
      let matchesCategory = true;
      if (selectedCategory === 'Favourites') {
        matchesCategory = safeFavorites.includes(item.id);
      } else if (selectedCategory === 'Meal') {
        if (mealSubCategory !== 'All') {
          matchesCategory = item.category === mealSubCategory;
        }
      } else if (selectedCategory !== 'All') {
        matchesCategory = item.category === selectedCategory;
      }

      // 2. Search Query Filter
      const matchesSearch = !searchQuery.trim() || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      // 3. Dietary Filter
      const matchesDietary = dietaryFilter === 'All' || item.dietary === dietaryFilter;

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [fullDataset, selectedCategory, mealSubCategory, safeFavorites, searchQuery, dietaryFilter]);

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
        activeGuest={activeGuest}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
      />

      {/* Guest Authentication & Onboarding Modal (Crown click trigger) */}
      <GuestAuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        activeGuest={activeGuest}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
        onResetAllData={handleResetAllData}
      />

      {/* Main Layout Container with Protected Routes */}
      <main className="main-content-layout">
        <Routes>
          {/* Landing / Welcome Home Route (Vibrant Dining Showcase) */}
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenAuthModal={() => setIsAuthModalOpen(true)} 
                activeGuest={activeGuest} 
                onSelectCategory={(cat, sub) => {
                  setSelectedCategory(cat);
                  setMealSubCategory(sub || 'All');
                }}
              />
            } 
          />

          {/* Protected Home / Menu & Order Route */}
          <Route 
            path="/Home" 
            element={
              <ProtectedRoute 
                activeGuest={activeGuest} 
                onOpenAuthModal={() => setIsAuthModalOpen(true)}
              >
                <div className="menu-section">
                  {/* Mode Alert Banner */}
                  <div className={`audit-mode-banner ${renderMode}`}>
                    <FiAlertCircle size={18} />
                    <span>
                      {renderMode === 'naive' 
                        ? `Naive Mode Active: Updating any item quantity causes all ${filteredMenuItems.length} displayed menu cards to re-render!` 
                        : `Optimized Composition Mode Active: useCallback & React.memo isolate re-renders strictly to updated cards!`}
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

                    {/* Category Toolbar & Meal Courses */}
                    <div className="category-toolbar-wrap">
                      <div className="category-pills">
                        <button
                          type="button"
                          className={`cat-pill ${selectedCategory === 'All' ? 'active' : ''}`}
                          onClick={() => setSelectedCategory('All')}
                        >
                          All Items ({fullDataset.length})
                        </button>

                        <button
                          type="button"
                          className={`cat-pill meal-pill ${selectedCategory === 'Meal' ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedCategory('Meal');
                          }}
                          title="View Meals (50 Starters, 75 Main Course, 40 Desserts, 35 Beverages)"
                        >
                          🍽️ Meal
                        </button>

                        <button
                          type="button"
                          className={`cat-pill fav-pill ${selectedCategory === 'Favourites' ? 'active' : ''}`}
                          onClick={() => setSelectedCategory('Favourites')}
                          title="View your saved favourite dishes"
                        >
                          ❤️ Favourites ({safeFavorites.length})
                        </button>
                      </div>

                      {/* Course Selection under Meal: 50 Starters, 75 Main Course, 40 Desserts, 35 Beverages */}
                      {selectedCategory === 'Meal' && (
                        <div className="meal-subcategories-bar">
                          <span className="subcat-label">Courses:</span>
                          {[
                            { key: 'All', label: 'All Meals', count: 200 },
                            { key: 'Starters', label: 'Starters', count: 50 },
                            { key: 'Main Course', label: 'Main Course', count: 75 },
                            { key: 'Desserts', label: 'Desserts', count: 40 },
                            { key: 'Beverages', label: 'Beverages', count: 35 }
                          ].map(course => (
                            <button
                              key={course.key}
                              type="button"
                              className={`subcat-pill ${mealSubCategory === course.key ? 'active' : ''}`}
                              onClick={() => setMealSubCategory(course.key)}
                            >
                              {course.label} ({course.count})
                            </button>
                          ))}
                        </div>
                      )}
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
                    {filteredMenuItems.length === 0 ? (
                      <div className="empty-menu-state">
                        {selectedCategory === 'Favourites' ? (
                          <>
                            <div className="empty-heart-circle">
                              <FaHeart size={36} color="#ef4444" />
                            </div>
                            <h3>No Favourites Added Yet!</h3>
                            <p>Click the ❤️ heart icon on any dish card to add it to your personal favorites.</p>
                            <button className="bk-primary-btn" onClick={() => setSelectedCategory('All')}>
                              Browse All Dishes
                            </button>
                          </>
                        ) : (
                          <>
                            <p>No dishes found matching your current search or filters.</p>
                            <button className="bk-secondary-btn" onClick={() => { setSearchQuery(''); setDietaryFilter('All'); setSelectedCategory('All'); }}>
                              Reset Filters
                            </button>
                          </>
                        )}
                      </div>
                    ) : (
                      filteredMenuItems.map(item => {
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
                            isFavorite={safeFavorites.includes(item.id)}
                            onToggleFavorite={handleToggleFavorite}
                          />
                        );
                      })
                    )}
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
                  activeGuest={activeGuest}
                />

                {/* Floating Mobile Order Bar (Sticky trigger for phones & tablets) */}
                {currentCart.length > 0 && (
                  <div 
                    className="mobile-floating-order-bar" 
                    onClick={() => {
                      const el = document.getElementById('order-sidebar-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="mobile-bar-left">
                      <FaShoppingBag className="mobile-cart-icon" />
                      <div className="mobile-bar-texts">
                        <span className="mobile-bar-table">Table #{selectedTableInfo?.id} • {currentCart.reduce((sum, i) => sum + (i.quantity || 1), 0)} items</span>
                        <span className="mobile-bar-price">₹{currentCart.reduce((acc, item) => acc + ((item.price || 0) * (item.quantity || 1)), 0) + Math.round(currentCart.reduce((acc, item) => acc + ((item.price || 0) * (item.quantity || 1)), 0) * 0.05) + 10} Total</span>
                      </div>
                    </div>
                    <div className="mobile-view-order-btn">
                      View Order & Bill ➔
                    </div>
                  </div>
                )}
              </ProtectedRoute>
            } 
          />

          {/* Protected Floor Plan Route (/tables) */}
          <Route 
            path="/tables" 
            element={
              <ProtectedRoute 
                activeGuest={activeGuest} 
                onOpenAuthModal={() => setIsAuthModalOpen(true)}
              >
                <InteractiveTableLayout 
                  tablesList={TABLES_CONFIG}
                  selectedTable={selectedTable}
                  setSelectedTable={setSelectedTable}
                  tableStatuses={tableStatuses}
                  tableCarts={tableCarts}
                  tableBilledHistory={tableBilledHistory}
                  activeGuest={activeGuest}
                />
              </ProtectedRoute>
            } 
          />

          {/* Protected Kitchen View Route (/Kitchen) */}
          <Route 
            path="/Kitchen" 
            element={
              <ProtectedRoute 
                activeGuest={activeGuest} 
                onOpenAuthModal={() => setIsAuthModalOpen(true)}
              >
                <KitchenView 
                  kitchenTickets={kitchenTickets}
                  onMarkTicketDone={handleMarkTicketDone}
                />
              </ProtectedRoute>
            } 
          />

          {/* Protected Audit Panel Route (/Audit) */}
          <Route 
            path="/Audit" 
            element={
              <ProtectedRoute 
                activeGuest={activeGuest} 
                onOpenAuthModal={() => setIsAuthModalOpen(true)}
              >
                <ReRenderAuditPanel 
                  renderMode={renderMode}
                  itemCount={itemCount}
                  totalGlobalRenders={totalGlobalRenders}
                />
              </ProtectedRoute>
            } 
          />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
      </main>

      {/* React Toastify Notification Container */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme={theme === 'light' ? 'light' : 'dark'}
      />
    </div>
  );
}

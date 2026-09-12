import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCrown, FaUtensils, FaConciergeBell } from 'react-icons/fa';
import { FiActivity, FiLayers, FiUsers } from 'react-icons/fi';

/**
 * Header Component
 * Displays Queen's Kitchen Title & Logo, React Router Links,
 * Table Layout Category Filters (Nuclear 1-5, Family 6-10, Joint 11-12),
 * and Architecture Mode Switcher.
 */
export default function Header({ 
  renderMode, 
  setRenderMode, 
  itemCount, 
  setItemCount,
  tablesList,
  selectedTable,
  setSelectedTable,
  tableFilterCategory,
  setTableFilterCategory
}) {
  // Filter visible tables in selector based on selected table category filter
  const visibleTables = tablesList.filter(t => {
    if (tableFilterCategory === 'Nuclear') return t.id >= 1 && t.id <= 5;
    if (tableFilterCategory === 'Family') return t.id >= 6 && t.id <= 10;
    if (tableFilterCategory === 'Joint') return t.id >= 11 && t.id <= 12;
    return true; // 'All'
  });

  return (
    <header className="app-header">
      <div className="header-brand">
        <div className="brand-logo" title="Queen's Kitchen Logo Slot">
          <FaCrown size={24} className="logo-icon" />
        </div>
        <div>
          <h1 className="app-title queens-title">Queen's Kitchen</h1>
        </div>
      </div>

      {/* Navigation Tabs with React Router NavLinks */}
      <nav className="nav-tabs">
        <NavLink 
          to="/Home" 
          className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
        >
          <FaUtensils size={16} />
          <span>Menu & Order</span>
        </NavLink>

        <NavLink 
          to="/Kitchen" 
          className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
        >
          <FaConciergeBell size={16} />
          <span>Kitchen View (KDS)</span>
        </NavLink>

        <NavLink 
          to="/Audit" 
          className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
        >
          <FiActivity size={16} />
          <span>Re-Render Audit</span>
        </NavLink>
      </nav>

      {/* Controls & Table Layout Category Filter */}
      <div className="header-controls">
        {/* Table Type Category Filter */}
        <div className="control-group">
          <label><FiUsers size={16} /> Layout:</label>
          <select 
            value={tableFilterCategory} 
            onChange={(e) => setTableFilterCategory(e.target.value)}
            className="select-input category-select"
            title="Filter tables by seating layout capacity"
          >
            <option value="All">All Tables (1-12)</option>
            <option value="Nuclear">Nuclear (1-5 • 4 Guests)</option>
            <option value="Family">Family (6-10 • 7 Guests)</option>
            <option value="Joint">Joint (11-12 • 10 Guests)</option>
          </select>

          {/* Table Number Selector */}
          <select 
            value={selectedTable} 
            onChange={(e) => setSelectedTable(Number(e.target.value))}
            className="select-input"
          >
            {visibleTables.map(t => (
              <option key={t.id} value={t.id}>
                Table #{t.id} ({t.type} • {t.capacity} Seats)
              </option>
            ))}
          </select>
        </div>

        {/* Dataset Size Toggle (9 items vs 200 items) */}
        <div className="control-group">
          <label><FiLayers size={16} /> Dataset:</label>
          <button 
            className={`toggle-btn ${itemCount === 200 ? 'active-benchmark' : ''}`}
            onClick={() => setItemCount(itemCount === 9 ? 200 : 9)}
            title="Toggle dataset size between 9 items and 200 items for re-render testing"
          >
            {itemCount} Items
          </button>
        </div>

        {/* Naive vs Optimized Architecture Switcher */}
        <div className="mode-switcher">
          <button
            className={`mode-btn naive ${renderMode === 'naive' ? 'active' : ''}`}
            onClick={() => setRenderMode('naive')}
            title="Naive Mode: Parent state change re-renders ALL menu cards"
          >
            Naive Mode
          </button>
          <button
            className={`mode-btn optimized ${renderMode === 'optimized' ? 'active' : ''}`}
            onClick={() => setRenderMode('optimized')}
            title="Optimized Mode: Component composition minimizes re-renders"
          >
            Optimized Mode
          </button>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCrown, FaUtensils, FaConciergeBell, FaThLarge, FaUserCheck, FaUserCircle } from 'react-icons/fa';
import { FiActivity, FiLayers, FiUsers } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

/**
 * Header Component
 * Displays Queen's Kitchen Title & Logo (Clickable Crown for Guest Onboarding Modal),
 * Navigation Links (Menu & Order, Floor Plan, Kitchen KDS, Audit),
 * Active Guest Status Pill, Theme Toggle, Table Layout Filters,
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
  setTableFilterCategory,
  activeGuest,
  onOpenAuthModal
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
      {/* Brand & Crown Click Trigger */}
      <div className="header-brand-section">
        <div 
          className="header-brand" 
          onClick={onOpenAuthModal} 
          title="Click Crown to open Guest Sign Up / Login Access Window"
          style={{ cursor: 'pointer' }}
        >
          <div className="brand-logo" title="Click Crown to Register or Log In">
            <FaCrown size={24} className="logo-icon crown-pulse" />
          </div>
          <div>
            <h1 className="app-title queens-title">Queen's Kitchen</h1>
            <span className="brand-tagline">Royal Hospitality & Dining</span>
          </div>
        </div>

        {/* Guest Access Pill */}
        <button 
          className={`guest-pill-btn ${activeGuest ? 'logged-in' : 'guest-guest'}`}
          onClick={onOpenAuthModal}
          title={activeGuest ? `Active: ${activeGuest.name} (Click to switch)` : 'Click to Register / Log In'}
        >
          {activeGuest ? (
            <>
              <FaUserCheck className="guest-pill-icon" />
              <div className="guest-pill-texts">
                <span className="guest-pill-name">{activeGuest.name}</span>
                <span className="guest-pill-sub">Table #{activeGuest.tableId}</span>
              </div>
            </>
          ) : (
            <>
              <FaUserCircle className="guest-pill-icon" />
              <div className="guest-pill-texts">
                <span className="guest-pill-name">Guest Login</span>
                <span className="guest-pill-sub">Click Crown</span>
              </div>
            </>
          )}
        </button>
      </div>

      {/* Navigation Tabs with React Router NavLinks */}
      <nav className="nav-tabs">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
          style={{ textDecoration: 'none' }}
        >
          <FaCrown size={15} />
          <span>Home</span>
        </NavLink>

        <NavLink 
          to="/Home" 
          className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
          style={{ textDecoration: 'none' }}
        >
          <FaUtensils size={15} />
          <span>Menu & Order</span>
        </NavLink>

        <NavLink 
          to="/tables" 
          className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
          style={{ textDecoration: 'none' }}
        >
          <FaThLarge size={15} />
          <span>Floor Plan</span>
        </NavLink>

        <NavLink 
          to="/Kitchen" 
          className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
          style={{ textDecoration: 'none' }}
        >
          <FaConciergeBell size={15} />
          <span>Kitchen View (KDS)</span>
        </NavLink>

        <NavLink 
          to="/Audit" 
          className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
          style={{ textDecoration: 'none' }}
        >
          <FiActivity size={15} />
          <span>Re-Render Audit</span>
        </NavLink>
      </nav>

      {/* Controls: Theme, Layout, Benchmark, Naive/Optimized */}
      <div className="header-controls">
        {/* Dark / Light Mode Toggle */}
        <ThemeToggle />

        {/* Table Type Category Filter & Selector */}
        <div className="control-group">
          <label><FiUsers size={15} /> Layout:</label>
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
          <label><FiLayers size={15} /> Dataset:</label>
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

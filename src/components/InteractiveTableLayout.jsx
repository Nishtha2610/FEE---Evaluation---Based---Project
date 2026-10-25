import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaUtensils, FaCheckCircle, FaClock, FaReceipt, FaChair } from 'react-icons/fa';
import { FiFilter, FiInfo } from 'react-icons/fi';

/**
 * InteractiveTableLayout Component
 * Visual Restaurant Floor Plan & Reservation Architecture.
 * Organizes 12 tables into Nuclear (1-5), Family (6-10), and Joint (11-12) dining zones.
 * Displays real-time operational status (Available, Ordering, Served, Billed)
 * and enables direct one-click table selection and routing.
 */
export default function InteractiveTableLayout({
  tablesList,
  selectedTable,
  setSelectedTable,
  tableStatuses,
  tableCarts,
  tableBilledHistory,
  activeGuest
}) {
  const navigate = useNavigate();
  const [zoneFilter, setZoneFilter] = useState('All'); // 'All' | 'Nuclear' | 'Family' | 'Joint'
  const [statusFilter, setStatusFilter] = useState('All'); // 'All' | 'Available' | 'Ordering' | 'Served' | 'Billed'

  // Helper to determine accurate table status
  const getTableStatus = (tableId) => {
    const tid = Number(tableId);

    // 1. Check explicit table status
    const status = (tableStatuses && typeof tableStatuses === 'object') 
      ? (tableStatuses[tid] || tableStatuses[String(tid)]) 
      : null;
    if (status && status !== 'Available') return status;

    // 2. Check active cart or billed items
    const cart = (tableCarts && (tableCarts[tid] || tableCarts[String(tid)])) || [];
    if (cart.length > 0) return 'Ordering';

    const billed = (tableBilledHistory && (tableBilledHistory[tid] || tableBilledHistory[String(tid)])) || [];
    if (billed.length > 0) return 'Billed';

    // 3. Check if active registered guest is currently seated at this table
    if (activeGuest && Number(activeGuest.tableId) === tid) {
      return 'Ordering';
    }

    return 'Available';
  };

  // Helper to calculate total active bill for a table
  const getTableBillAmount = (tableId) => {
    const tid = Number(tableId);
    const cart = (tableCarts && (tableCarts[tid] || tableCarts[String(tid)])) || [];
    const billed = (tableBilledHistory && (tableBilledHistory[tid] || tableBilledHistory[String(tid)])) || [];
    const cartSum = cart.reduce((acc, i) => acc + (Number(i?.price || 0) * Number(i?.quantity || 1)), 0);
    const billedSum = billed.reduce((acc, i) => acc + (Number(i?.price || 0) * Number(i?.quantity || 1)), 0);
    return cartSum + billedSum;
  };

  // Helper to count active items
  const getTableItemCount = (tableId) => {
    const tid = Number(tableId);
    const cart = (tableCarts && (tableCarts[tid] || tableCarts[String(tid)])) || [];
    const billed = (tableBilledHistory && (tableBilledHistory[tid] || tableBilledHistory[String(tid)])) || [];
    const cartCount = cart.reduce((acc, i) => acc + Number(i?.quantity || 1), 0);
    const billedCount = billed.reduce((acc, i) => acc + Number(i?.quantity || 1), 0);
    return cartCount + billedCount;
  };

  // Filtering logic
  const filteredTables = tablesList.filter(table => {
    const matchesZone = zoneFilter === 'All' || table.type === zoneFilter;
    const currentStatus = getTableStatus(table.id);
    const matchesStatus = statusFilter === 'All' || currentStatus.toLowerCase() === statusFilter.toLowerCase();
    return matchesZone && matchesStatus;
  });

  // Analytics counts
  const totalTables = tablesList.length;
  const availableCount = tablesList.filter(t => getTableStatus(t.id) === 'Available').length;
  const occupiedCount = totalTables - availableCount;

  // Handle click on table
  const handleSelectTable = (tableId) => {
    setSelectedTable(tableId);
    navigate('/Home');
  };

  return (
    <div className="table-layout-page">
      {/* Top Banner & Metric Summary */}
      <div className="table-layout-header">
        <div>
          <h2 className="section-title">Restaurant Floor Plan & Dining Zones</h2>
          <p className="section-subtitle">
            Interactive real-time floor mapping: Click any table to inspect live orders, dispatch tickets, or compute split bills.
          </p>
        </div>

        {/* Floor Metrics Bar */}
        <div className="floor-metrics-strip">
          <div className="metric-pill">
            <span className="metric-num">{totalTables}</span>
            <span className="metric-text">Total Tables</span>
          </div>
          <div className="metric-pill available">
            <span className="metric-num">{availableCount}</span>
            <span className="metric-text">Available</span>
          </div>
          <div className="metric-pill occupied">
            <span className="metric-num">{occupiedCount}</span>
            <span className="metric-text">Active / Dining</span>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="table-filter-toolbar">
        {/* Zone Filters */}
        <div className="filter-group">
          <span className="filter-label"><FaChair /> Dining Zone:</span>
          {['All', 'Nuclear', 'Family', 'Joint'].map(zone => (
            <button
              key={zone}
              className={`filter-btn ${zoneFilter === zone ? 'active' : ''}`}
              onClick={() => setZoneFilter(zone)}
            >
              {zone === 'All' ? 'All Zones' : `${zone} Tables`}
            </button>
          ))}
        </div>

        {/* Status Filters */}
        <div className="filter-group">
          <span className="filter-label"><FiFilter /> Status:</span>
          {['All', 'Available', 'Ordering', 'Served', 'Billed'].map(st => (
            <button
              key={st}
              className={`filter-btn status-btn ${st.toLowerCase()} ${statusFilter === st ? 'active' : ''}`}
              onClick={() => setStatusFilter(st)}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Dining Zones Guide Note */}
      <div className="floor-guide-note">
        <FiInfo size={16} />
        <span>
          <strong>Floor Guide:</strong> Nuclear Zone (Tables 1–5: 4 Seats max for couples/small groups) • 
          Family Zone (Tables 6–10: 7 Seats max for family groups) • 
          Joint Banquet (Tables 11–12: 10 Seats max for large parties).
        </span>
      </div>

      {/* Grid of Interactive Tables */}
      <div className="tables-visual-grid">
        {filteredTables.map(table => {
          const status = getTableStatus(table.id);
          const isSelected = selectedTable === table.id;
          const isGuestAssigned = activeGuest && Number(activeGuest.tableId) === Number(table.id);
          const billAmount = getTableBillAmount(table.id);
          const itemCount = getTableItemCount(table.id);

          return (
            <div 
              key={table.id}
              className={`table-card-item ${status.toLowerCase()} ${isSelected ? 'selected-table' : ''}`}
              onClick={() => handleSelectTable(table.id)}
            >
              <div className="table-card-top">
                <div className="table-number-box">
                  <span className="table-label">TABLE</span>
                  <span className="table-id-num">#{table.id}</span>
                </div>

                <div className={`table-status-pill ${status.toLowerCase()}`}>
                  <span className="status-dot"></span>
                  {status}
                </div>
              </div>

              <div className="table-details-row">
                <span className="table-type-tag">{table.type} Zone</span>
                <span className="table-capacity-tag">
                  <FaUsers size={12} /> Max {table.capacity} Guests
                </span>
              </div>

              {/* Guest assignment indicator if matches active guest */}
              {isGuestAssigned && (
                <div className="guest-assigned-indicator">
                  <FaCheckCircle size={12} />
                  <span>Assigned to {activeGuest.name}</span>
                </div>
              )}

              {/* Live Order Indicator */}
              <div className="table-live-order-info">
                {itemCount > 0 ? (
                  <div className="occupied-info">
                    <span className="order-summary-text">
                      <FaUtensils size={11} /> {itemCount} dish(es) active
                    </span>
                    <span className="order-subtotal-text">₹{billAmount}</span>
                  </div>
                ) : (
                  <div className="ready-info">
                    <span>Ready for Seating</span>
                  </div>
                )}
              </div>

              <button 
                className="select-table-action-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectTable(table.id);
                }}
              >
                {isSelected ? 'Currently Selected' : 'Select Table & Order →'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

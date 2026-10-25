import React from 'react';
import { FaConciergeBell, FaCheckCircle } from 'react-icons/fa';

/**
 * KitchenView Component (Kitchen Display System - KDS)
 * Displays incoming table orders grouped by course for kitchen staff.
 */
export default function KitchenView({ kitchenTickets = [], onMarkTicketDone }) {
  const safeTickets = Array.isArray(kitchenTickets) ? kitchenTickets : [];
  return (
    <div className="kitchen-view-container">
      <div className="section-title">
        <FaConciergeBell size={28} />
        <div>
          <h2>Kitchen Display System (KDS)</h2>
          <p>Live active table orders grouped by course for kitchen preparation.</p>
        </div>
      </div>

      {safeTickets.length === 0 ? (
        <div className="empty-kitchen">
          <FaConciergeBell size={64} className="empty-icon" />
          <h3>No Pending Kitchen Orders</h3>
          <p>Orders placed from table views will appear here in real-time.</p>
        </div>
      ) : (
        <div className="tickets-grid">
          {safeTickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <div className="ticket-header">
                <div className="ticket-table">Table #{ticket.tableNumber}</div>
                <div className="ticket-id-tag">Ticket #{ticket.id}</div>
              </div>

              {ticket.note && (
                <div className="ticket-note">
                  💡 Note: {ticket.note}
                </div>
              )}

              <div className="ticket-courses">
                {ticket.items.map((item, idx) => (
                  <div key={idx} className="ticket-item-row">
                    <span className="item-qty">{item.quantity}x</span>
                    <span className="item-name">{item.name}</span>
                    <span className="item-cat-badge">{item.category}</span>
                  </div>
                ))}
              </div>

              <button 
                className="complete-ticket-btn"
                onClick={() => onMarkTicketDone(ticket.id)}
              >
                <FaCheckCircle size={16} /> Mark as Served
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

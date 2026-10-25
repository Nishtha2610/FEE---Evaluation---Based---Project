import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCrown, FaUserPlus, FaLock, FaHome, FaUtensils, FaConciergeBell, FaReceipt } from 'react-icons/fa';

/**
 * ProtectedRoute Component
 * Strict Dining Area Gatekeeper:
 * When a guest is signed out (!activeGuest), this component strictly blocks
 * access to working restaurant features (Menu & Order, Floor Plan, Kitchen KDS, Audit)
 * and presents an informative royal access gate with one-click modal login.
 */
export default function ProtectedRoute({ activeGuest, onOpenAuthModal, children }) {
  const navigate = useNavigate();

  if (!activeGuest) {
    return (
      <div className="protected-gate-wrapper">
        <div className="protected-gate-card">
          <div className="gate-icon-halo">
            <FaCrown size={38} className="gate-crown" />
            <div className="gate-lock-badge">
              <FaLock size={13} />
            </div>
          </div>

          <span className="gate-royal-tag">Queen's Kitchen • Hospitality Access Gate</span>
          <h2 className="gate-title">Protected Dining Area</h2>
          <p className="gate-subtitle">
            Guest Identification & Active Table Assignment Required
          </p>

          <p className="gate-description">
            You are currently signed out. To place digital table orders, customize dishes, 
            reserve seating on the floor plan, dispatch tickets to the kitchen, or calculate split bills, 
            please identify yourself or log in with your registered profile.
          </p>

          <div className="gate-features-grid">
            <div className="gate-feature-pill">
              <FaUtensils size={14} className="feature-icon" />
              <span>Digital Table Ordering</span>
            </div>
            <div className="gate-feature-pill">
              <FaConciergeBell size={14} className="feature-icon" />
              <span>Live Kitchen KDS</span>
            </div>
            <div className="gate-feature-pill">
              <FaReceipt size={14} className="feature-icon" />
              <span>5% GST & Split Bills</span>
            </div>
          </div>

          <div className="gate-actions-row">
            <button 
              type="button" 
              className="gate-primary-btn"
              onClick={onOpenAuthModal}
            >
              <FaUserPlus /> Sign Up / Log In to Table
            </button>
            <button 
              type="button" 
              className="gate-secondary-btn"
              onClick={() => navigate('/')}
            >
              <FaHome /> Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
}

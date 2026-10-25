import React, { useState, useEffect } from 'react';
import { FaShoppingBag, FaTrashAlt, FaUsers, FaPaperPlane, FaCheckCircle, FaUtensils, FaReceipt, FaStar, FaConciergeBell } from 'react-icons/fa';
import { toast } from 'react-toastify';
import DiningFeedbackModal from './DiningFeedbackModal';

/**
 * OrderSidebar Component
 * Manages the Table Lifecycle across Ordering, Served, and Billed views.
 * Service Charge of ₹10, 5% GST tax, dynamic cumulative billing,
 * N-way split bill calculation, and dining feedback submission.
 */
export default function OrderSidebar({ 
  cartItems = [], 
  servedItems = [],
  billedHistory = [],
  onAddToCart, 
  onRemoveFromCart, 
  onClearTable,
  selectedTableInfo = { id: 1, type: 'Nuclear', capacity: 4 },
  tableStatus = 'Ordering',
  setTableStatus,
  onSendToKitchen,
  activeGuest
}) {
  const safeCart = Array.isArray(cartItems) ? cartItems : [];
  const safeServed = Array.isArray(servedItems) ? servedItems : [];
  const safeBilled = Array.isArray(billedHistory) ? billedHistory : [];

  const [splitCount, setSplitCount] = useState(1);
  const [orderNote, setOrderNote] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  // Reset split count to 1 when table changes
  useEffect(() => {
    setSplitCount(1);
  }, [selectedTableInfo?.id]);

  // Financial calculations for Ordering Draft
  const draftSubtotal = safeCart.reduce((acc, item) => acc + (Number(item?.price || 0) * Number(item?.quantity || 1)), 0);
  const draftGstTax = Math.round(draftSubtotal * 0.05); // 5% GST
  const draftServiceCharge = draftSubtotal > 0 ? 10 : 0; // ₹10 Service Charge
  const draftGrandTotal = draftSubtotal + draftGstTax + draftServiceCharge;
  const draftPerPersonAmount = splitCount > 0 ? (draftGrandTotal / splitCount).toFixed(2) : draftGrandTotal;

  // Financial calculations for Cumulative Billed History (Items sent to kitchen)
  const billedSubtotal = safeBilled.reduce((acc, item) => acc + (Number(item?.price || 0) * Number(item?.quantity || 1)), 0);
  const billedGstTax = Math.round(billedSubtotal * 0.05); // 5% GST
  const billedServiceCharge = billedSubtotal > 0 ? 10 : 0; // ₹10 Service Charge
  const billedGrandTotal = billedSubtotal + billedGstTax + billedServiceCharge;
  const billedPerPersonAmount = splitCount > 0 ? (billedGrandTotal / splitCount).toFixed(2) : billedGrandTotal;

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;
    onSendToKitchen(cartItems, orderNote);
    setOrderNote('');
    setOrderSuccess(true);
    
    // Aesthetic notification where necessary
    toast.success(`Order sent to Kitchen for Table #${selectedTableInfo.id}!`, {
      icon: '👨‍🍳',
      position: 'top-right',
      autoClose: 3000
    });

    setTimeout(() => setOrderSuccess(false), 3000);
  };

  const handleClearWithToast = () => {
    onClearTable();
    toast.info(`Table #${selectedTableInfo.id} reset & cleared for next guest.`, {
      icon: '🧹',
      position: 'top-right',
      autoClose: 2500
    });
  };

  return (
    <aside id="order-sidebar-section" className="order-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">
          <FaShoppingBag size={18} />
          <h2>Running Order</h2>
        </div>
        <div className="table-badge-group">
          <span className="table-badge">Table #{selectedTableInfo.id}</span>
          <span className="table-zone-badge">{selectedTableInfo.type}</span>
        </div>
      </div>

      {/* Guest Identification Pill if active */}
      {activeGuest && (
        <div className="sidebar-guest-bar">
          <span>Diner: <strong>{activeGuest.name}</strong></span>
          <span className="guest-diet-tag">{activeGuest.dietary}</span>
        </div>
      )}

      {/* Premium Table Lifecycle Status Segmented Stepper */}
      <div className="status-stepper-container">
        <div className="status-stepper-segmented">
          <button 
            type="button"
            className={`stepper-pill-btn ${tableStatus === 'Ordering' ? 'active-ordering' : ''}`}
            onClick={() => setTableStatus('Ordering')}
          >
            <span className="step-num">1</span>
            <FaUtensils className="step-icon" size={12} />
            <span className="step-text">Ordering</span>
          </button>

          <button 
            type="button"
            className={`stepper-pill-btn ${tableStatus === 'Served' ? 'active-served' : ''}`}
            onClick={() => setTableStatus('Served')}
          >
            <span className="step-num">2</span>
            <FaConciergeBell className="step-icon" size={12} />
            <span className="step-text">Served</span>
          </button>

          <button 
            type="button"
            className={`stepper-pill-btn ${tableStatus === 'Billed' ? 'active-billed' : ''}`}
            onClick={() => setTableStatus('Billed')}
          >
            <span className="step-num">3</span>
            <FaReceipt className="step-icon" size={12} />
            <span className="step-text">Billed</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: ORDERING STATUS VIEW */}
      {tableStatus === 'Ordering' && (
        <>
          <div className="cart-items-container">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <FaShoppingBag size={42} className="empty-icon" />
                <p>Your table draft is empty.</p>
                <span>Select dishes from the menu to build your running order.</span>
              </div>
            ) : (
              <div className="cart-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <span className="cart-item-unit">₹{item.price} each</span>
                    </div>

                    <div className="cart-item-controls">
                      <div className="quantity-controls compact">
                        <button className="qty-btn" onClick={() => onRemoveFromCart(item.id)}>-</button>
                        <span className="qty-count">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => onAddToCart(item)}>+</button>
                      </div>
                      <span className="cart-item-subtotal">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Kitchen Notes */}
          {cartItems.length > 0 && (
            <div className="order-notes-section">
              <label>Kitchen Notes:</label>
              <input 
                type="text"
                placeholder="e.g. Extra spicy, no onions..."
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                className="text-input"
              />
            </div>
          )}

          {/* Live Draft Bill Breakdown */}
          {cartItems.length > 0 && (
            <div className="bill-summary">
              <div className="bill-row">
                <span>Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items)</span>
                <span>₹{draftSubtotal}</span>
              </div>
              <div className="bill-row">
                <span>GST (5%)</span>
                <span>+₹{draftGstTax}</span>
              </div>
              <div className="bill-row">
                <span>Service Charge</span>
                <span>+₹{draftServiceCharge}</span>
              </div>
              <div className="bill-divider"></div>
              <div className="bill-row grand-total">
                <span>Estimated Total</span>
                <span>₹{draftGrandTotal}</span>
              </div>

              {/* Split Bill Calculator */}
              <div className="split-bill-box">
                <div className="split-header">
                  <span><FaUsers size={14} /> Split Bill By:</span>
                  <div className="split-counter">
                    <button onClick={() => setSplitCount(prev => Math.max(1, prev - 1))}>-</button>
                    <span>{splitCount} {splitCount === 1 ? 'Guest' : 'Guests'}</span>
                    <button onClick={() => setSplitCount(prev => Math.min(10, prev + 1))}>+</button>
                  </div>
                </div>
                <div className="split-result">
                  ₹{draftPerPersonAmount} <small>/ person</small>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {cartItems.length > 0 && (
            <div className="sidebar-actions">
              <button className="btn-primary place-order-btn" onClick={handlePlaceOrder}>
                <FaPaperPlane size={14} /> Send to Kitchen
              </button>
            </div>
          )}
        </>
      )}

      {/* VIEW 2: SERVED STATUS VIEW */}
      {tableStatus === 'Served' && (
        <div className="served-items-view">
          {servedItems.length === 0 ? (
            <div className="empty-cart">
              <FaUtensils size={42} className="empty-icon" />
              <p>No dishes served yet for Table #{selectedTableInfo.id}.</p>
              <span>Dishes marked as "Served" in Kitchen View will appear here.</span>
            </div>
          ) : (
            <div className="cart-list">
              <div className="status-heading">
                <FaCheckCircle color="#22c55e" size={16} />
                <span>Dishes Prepared & Served</span>
              </div>
              {servedItems.map((item, idx) => (
                <div key={idx} className="cart-item served-item-row">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span className="cart-item-unit">₹{item.price} • Served</span>
                  </div>
                  <div className="served-qty-badge">
                    {item.quantity}x
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* VIEW 3: BILLED STATUS VIEW */}
      {tableStatus === 'Billed' && (
        <div className="billed-summary-view">
          {billedHistory.length === 0 ? (
            <div className="empty-cart">
              <FaReceipt size={42} className="empty-icon" />
              <p>No active bill for Table #{selectedTableInfo.id}.</p>
              <span>Orders sent to kitchen generate active table bills.</span>
            </div>
          ) : (
            <>
              <div className="status-heading">
                <FaReceipt color="#f59e0b" size={16} />
                <span>Active Cumulative Bill</span>
              </div>

              <div className="cart-list">
                {billedHistory.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <span className="cart-item-unit">₹{item.price} × {item.quantity}</span>
                    </div>
                    <span className="cart-item-subtotal">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Billed Summary Box */}
              <div className="bill-summary">
                <div className="bill-row">
                  <span>Subtotal ({billedHistory.reduce((a, c) => a + c.quantity, 0)} items)</span>
                  <span>₹{billedSubtotal}</span>
                </div>
                <div className="bill-row">
                  <span>GST (5%)</span>
                  <span>+₹{billedGstTax}</span>
                </div>
                <div className="bill-row">
                  <span>Service Charge</span>
                  <span>+₹{billedServiceCharge}</span>
                </div>
                <div className="bill-divider"></div>
                <div className="bill-row grand-total">
                  <span>Total Bill Amount</span>
                  <span>₹{billedGrandTotal}</span>
                </div>

                {/* Split Bill Calculator */}
                <div className="split-bill-box">
                  <div className="split-header">
                    <span><FaUsers size={14} /> Split Bill By:</span>
                    <div className="split-counter">
                      <button onClick={() => setSplitCount(prev => Math.max(1, prev - 1))}>-</button>
                      <span>{splitCount} {splitCount === 1 ? 'Guest' : 'Guests'}</span>
                      <button onClick={() => setSplitCount(prev => Math.min(10, prev + 1))}>+</button>
                    </div>
                  </div>
                  <div className="split-result">
                    ₹{billedPerPersonAmount} <small>/ person</small>
                  </div>
                </div>

                {/* Dining Experience Feedback CTA Button */}
                <div className="feedback-cta-container">
                  <button 
                    type="button" 
                    className="feedback-trigger-btn"
                    onClick={() => setIsFeedbackOpen(true)}
                  >
                    <FaStar className="star-gold-icon" /> Rate Experience & Leave Feedback
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Clear Table Action Button (Always available to reset Table) */}
      <div className="sidebar-actions clear-table-footer">
        <button className="btn-secondary clear-btn" onClick={handleClearWithToast}>
          <FaTrashAlt size={14} /> Clear & Reset Table #{selectedTableInfo.id}
        </button>
      </div>

      {orderSuccess && (
        <div className="success-banner">
          <FaCheckCircle size={16} /> Order sent to Kitchen Display!
        </div>
      )}

      {/* Dining Feedback Modal */}
      <DiningFeedbackModal 
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
        tableId={selectedTableInfo.id}
        guestName={activeGuest ? activeGuest.name : null}
      />
    </aside>
  );
}

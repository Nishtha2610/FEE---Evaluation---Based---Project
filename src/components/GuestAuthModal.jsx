import React, { useState, useEffect } from 'react';
import { 
  FaCrown, 
  FaUserPlus, 
  FaSignInAlt, 
  FaTimes, 
  FaUserCheck, 
  FaExclamationCircle, 
  FaTrashAlt, 
  FaInfoCircle
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { TABLES_CONFIG } from '../App';

/**
 * GuestAuthModal Component
 * Implements Guest Authentication & Registration with:
 * - Duplicate Account Detection & Automatic Switch to Quick Log In
 * - Clean input fields without distracting placeholder text
 * - One-click "Clear All Records (Practice Reset)" for fast testing
 * - Strictly "Sign Out" action label
 */
export default function GuestAuthModal({ 
  isOpen, 
  onClose, 
  activeGuest, 
  onLoginSuccess, 
  onLogout,
  onResetAllData
}) {
  const [authMode, setAuthMode] = useState('signup'); // 'signup' (New Guest) | 'login' (Registered Guest)
  
  // Registration form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTable, setPreferredTable] = useState(1);
  const [dietary, setDietary] = useState('All');
  
  // Login form field
  const [loginPhone, setLoginPhone] = useState('');
  const [selectedRegisteredId, setSelectedRegisteredId] = useState('');
  
  // Validation and notification states
  const [error, setError] = useState('');
  const [alreadyRegisteredMsg, setAlreadyRegisteredMsg] = useState('');
  const [registeredGuests, setRegisteredGuests] = useState([]);

  // Load registered guests list from localStorage
  useEffect(() => {
    if (isOpen) {
      try {
        const stored = localStorage.getItem('qk_registered_guests');
        if (stored) {
          const parsed = JSON.parse(stored);
          const safeList = Array.isArray(parsed) ? parsed : [];
          setRegisteredGuests(safeList);
          if (safeList.length > 0 && !selectedRegisteredId) {
            setSelectedRegisteredId(safeList[0].phone);
          }
        } else {
          setRegisteredGuests([]);
        }
      } catch (err) {
        console.error('Failed to parse qk_registered_guests', err);
        setRegisteredGuests([]);
      }
      setError('');
      setAlreadyRegisteredMsg('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle New Guest Registration with Duplicate Prevention
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setError('');
    setAlreadyRegisteredMsg('');

    // Validation
    const trimmedName = name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      setError('Please enter a valid guest name (minimum 2 characters).');
      return;
    }

    const cleanPhone = phone.trim().replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Check if phone or user is already registered (DUPLICATE DETECTION)
    const existing = registeredGuests.find(g => g.phone === cleanPhone);
    if (existing) {
      // Switch directly to login tab, pre-select this user, and notify
      setAuthMode('login');
      setSelectedRegisteredId(existing.phone);
      setLoginPhone(existing.phone);
      setAlreadyRegisteredMsg(`Guest already registered as "${existing.name}" (Table #${existing.tableId}). Switched to Quick Log In to prevent duplicate accounts.`);
      
      toast.info(`Already registered as "${existing.name}". Redirected to Quick Log In!`, {
        icon: '👑',
        position: 'top-right',
        autoClose: 3500
      });
      return;
    }

    // New unique guest registration
    const guestData = {
      id: 'GST-' + Date.now().toString().slice(-4),
      name: trimmedName,
      phone: cleanPhone,
      tableId: Number(preferredTable),
      dietary: dietary,
      registeredAt: new Date().toLocaleDateString()
    };

    const updatedList = [...registeredGuests, guestData];
    localStorage.setItem('qk_registered_guests', JSON.stringify(updatedList));
    setRegisteredGuests(updatedList);

    // Call success handler
    onLoginSuccess(guestData);
    onClose();
  };

  // Handle Registered Guest Quick Login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (registeredGuests.length === 0) {
      setError('No registered guests found on this device. Please select "New Guest" to register.');
      return;
    }

    // Match by selected ID / phone or input
    const targetPhone = (loginPhone.trim() || selectedRegisteredId).replace(/\D/g, '');
    const matchedGuest = registeredGuests.find(g => g.phone === targetPhone);

    if (!matchedGuest) {
      setError('Guest not found with that phone number. Please check or sign up as a New Guest.');
      return;
    }

    onLoginSuccess(matchedGuest);
    onClose();
  };

  // Clear only registered guest profiles
  const handleClearSavedProfiles = () => {
    localStorage.removeItem('qk_registered_guests');
    setRegisteredGuests([]);
    setSelectedRegisteredId('');
    setLoginPhone('');
    setAlreadyRegisteredMsg('');
    toast.info('Saved guest profiles cleared from browser storage.', {
      icon: '🧹',
      position: 'top-right',
      autoClose: 2500
    });
  };

  // Full Practice Reset: Clears all profiles, tables, carts, tickets, and feedbacks
  const handleFullPracticeReset = () => {
    if (onResetAllData) {
      onResetAllData();
      setRegisteredGuests([]);
      setSelectedRegisteredId('');
      setLoginPhone('');
      setName('');
      setPhone('');
      setAlreadyRegisteredMsg('');
      setError('');
    } else {
      localStorage.clear();
      setRegisteredGuests([]);
      toast.success('All restaurant records cleared for fresh practice!', {
        icon: '🧹',
        position: 'top-right',
        autoClose: 3000
      });
      window.location.reload();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Close Button (Cross Icon) */}
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          title="Close window"
          aria-label="Close"
        >
          <FaTimes size={18} />
        </button>

        {/* Modal Brand Header */}
        <div className="auth-modal-header">
          <div className="crown-avatar">
            <FaCrown size={28} />
          </div>
          <h2>Queen's Kitchen Guest Access</h2>
          <p className="auth-subtitle">
            {activeGuest 
              ? `Currently active: ${activeGuest.name} (Table #${activeGuest.tableId})` 
              : 'Please register or log in to access the dining area & manage table orders'}
          </p>
        </div>

        {/* Mode Selector: Radio Buttons */}
        <div className="auth-mode-selector">
          <label className={`radio-label ${authMode === 'signup' ? 'active' : ''}`}>
            <input 
              type="radio" 
              name="authMode" 
              value="signup" 
              checked={authMode === 'signup'} 
              onChange={() => { 
                setAuthMode('signup'); 
                setError(''); 
                setAlreadyRegisteredMsg('');
              }} 
            />
            <FaUserPlus className="radio-icon" />
            <span>New Guest (Sign Up)</span>
          </label>

          <label className={`radio-label ${authMode === 'login' ? 'active' : ''}`}>
            <input 
              type="radio" 
              name="authMode" 
              value="login" 
              checked={authMode === 'login'} 
              onChange={() => { 
                setAuthMode('login'); 
                setError(''); 
              }} 
            />
            <FaSignInAlt className="radio-icon" />
            <span>Registered Guest (Log In)</span>
          </label>
        </div>

        {/* Already Registered Info Banner (Duplicate Prevention Alert) */}
        {alreadyRegisteredMsg && authMode === 'login' && (
          <div className="already-registered-alert">
            <FaInfoCircle size={18} className="alert-icon" />
            <div className="alert-text">
              <strong>Account Already Exists</strong>
              <p>{alreadyRegisteredMsg}</p>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="auth-error-box">
            <FaExclamationCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Forms Container */}
        {authMode === 'signup' ? (
          /* New Guest Registration Form */
          <form className="auth-form" onSubmit={handleSignUpSubmit}>
            <div className="form-group">
              <label>Guest Full Name *</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile Number (10 Digits) *</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Dining Table</label>
                <select 
                  value={preferredTable} 
                  onChange={(e) => setPreferredTable(e.target.value)}
                >
                  {TABLES_CONFIG.map(t => (
                    <option key={t.id} value={t.id}>
                      Table #{t.id} ({t.type} • {t.capacity} Seats)
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group half">
                <label>Dietary Preference</label>
                <select 
                  value={dietary} 
                  onChange={(e) => setDietary(e.target.value)}
                >
                  <option value="All">All Cuisines</option>
                  <option value="Veg">Vegetarian</option>
                  <option value="Non-Veg">Non-Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                </select>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn primary">
              <FaUserCheck /> Register & Enter Dining Area
            </button>
          </form>
        ) : (
          /* Registered Guest Quick Log In */
          <form className="auth-form" onSubmit={handleLoginSubmit}>
            {registeredGuests.length > 0 ? (
              <div className="form-group">
                <div className="label-with-action">
                  <label>Select Saved Profile</label>
                  <button 
                    type="button" 
                    className="clear-profiles-link-btn"
                    onClick={handleClearSavedProfiles}
                    title="Remove saved guest profiles"
                  >
                    <FaTrashAlt size={11} /> Clear Profiles
                  </button>
                </div>
                <select 
                  value={selectedRegisteredId} 
                  onChange={(e) => setSelectedRegisteredId(e.target.value)}
                >
                  {registeredGuests.map(g => (
                    <option key={g.phone} value={g.phone}>
                      {g.name} — Table #{g.tableId} ({g.phone})
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="empty-guests-notice">
                <p>No previous guests registered on this browser yet.</p>
                <button 
                  type="button" 
                  className="switch-link-btn"
                  onClick={() => setAuthMode('signup')}
                >
                  Click here to register as a New Guest
                </button>
              </div>
            )}

            <div className="form-group">
              <label>Or Enter Registered 10-Digit Phone</label>
              <input 
                type="tel" 
                value={loginPhone}
                onChange={(e) => setLoginPhone(e.target.value)}
                maxLength={10}
              />
            </div>

            <button type="submit" className="auth-submit-btn gold">
              <FaSignInAlt /> Quick Log In to Table
            </button>
          </form>
        )}

        {/* Modal Footer Controls */}
        <div className="auth-modal-bottom-actions">
          {/* Active Guest Info / Sign Out Action */}
          {activeGuest && (
            <div className="modal-footer-active">
              <span>Signed in as <strong>{activeGuest.name}</strong> (Table #{activeGuest.tableId})</span>
              <button type="button" className="logout-link-btn" onClick={onLogout}>
                Sign Out
              </button>
            </div>
          )}


        </div>
      </div>
    </div>
  );
}

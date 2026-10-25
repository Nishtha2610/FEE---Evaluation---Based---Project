import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaCrown, 
  FaUtensils, 
  FaConciergeBell, 
  FaChartLine, 
  FaFire, 
  FaStar, 
  FaChevronRight, 
  FaAward, 
  FaCheckCircle, 
  FaMapMarkerAlt,
  FaShoppingBag,
  FaTag
} from 'react-icons/fa';
import './HomePage.css';

/**
 * HomePage Component
 * Modern candid, vibrant royal restaurant homepage featuring:
 * - Dine-in table service indicator
 * - "NEW DROP" Eye-catching promotional hero banner
 * - Royal Quote ("WHERE ROYAL FLAVORS MEET MODERN HOSPITALITY")
 * - Centerpiece Animated Royal Crown tour & info
 * - Interactive categories with quick navigation
 * - 10 Hot Sellers & People's Choice dishes (showcase-only with hover animations, no order redirect)
 * - Crown Rewards & Table Club balance banner
 * - Tour & Info on Digital Table Ordering, KDS & Re-Render Audit
 */
export default function HomePage({ onOpenAuthModal, activeGuest, onSelectCategory }) {
  const navigate = useNavigate();

  const handleStartOrder = (category = 'All') => {
    if (onSelectCategory) {
      if (category === 'All') {
        onSelectCategory('All', 'All');
      } else {
        onSelectCategory('Meal', category);
      }
    }
    navigate('/Home');
    if (!activeGuest) {
      onOpenAuthModal();
    }
  };

  const handleViewFloorPlan = () => {
    navigate('/tables');
    if (!activeGuest) {
      onOpenAuthModal();
    }
  };

  const hotSellers = [
    {
      id: 1,
      name: 'Cheesy Fries & Hot Sauce',
      category: 'Starters',
      price: '₹150',
      rating: 4.8,
      badge: "👑 #1 Bestseller",
      badgeType: 'bestseller',
      image: '/images/cheesy_fries.png',
      desc: 'Loaded golden fries drenched in gourmet melted cheese and spicy chili dip.'
    },
    {
      id: 2,
      name: 'Dal Makhani',
      category: 'Main Course',
      price: '₹180',
      rating: 4.9,
      badge: '🔥 Chef Special',
      badgeType: 'chef',
      image: '/images/dal_makhani.png',
      desc: 'Slow-cooked black lentils simmered overnight in pure butter and cream.'
    },
    {
      id: 3,
      name: 'Garlic Butter Naan',
      category: 'Main Course',
      price: '₹60',
      rating: 4.8,
      badge: '⭐ Most Popular',
      badgeType: 'popular',
      image: '/images/garlic_naan.png',
      desc: 'Clay tandoor blistered artisanal flatbread brushed with garlic butter.'
    },
    {
      id: 4,
      name: 'Gulab Jamun with Ice Cream',
      category: 'Desserts',
      price: '₹120',
      rating: 4.9,
      badge: "💖 People's Choice",
      badgeType: 'peoples',
      image: '/images/gulab_jamun_icecream.png',
      desc: 'Warm golden jamuns served alongside a chilled scoop of vanilla ice cream.'
    },
    {
      id: 5,
      name: 'Samosa with Mint Chutney',
      category: 'Starters',
      price: '₹60',
      rating: 4.7,
      badge: '⚡ Quick Bite',
      badgeType: 'quick',
      image: '/images/samosa_chutney.png',
      desc: 'Flaky crust stuffed with spiced potatoes and cashews, served with mint dip.'
    },
    {
      id: 6,
      name: 'Paneer Butter Masala',
      category: 'Main Course',
      price: '₹270',
      rating: 4.8,
      badge: '👑 Royal Classic',
      badgeType: 'royal',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80',
      desc: 'Tender cottage cheese simmered in a luscious silk tomato and cashew gravy.'
    },
    {
      id: 7,
      name: 'Blue Curacao Virgin Mojito',
      category: 'Beverages',
      price: '₹130',
      rating: 4.9,
      badge: '❄️ Zero-Degree Chiller',
      badgeType: 'cooler',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80',
      desc: 'Crushed garden mint, zesty lime juice and sparkling soda infused with blue curacao citrus.'
    },
    {
      id: 8,
      name: 'Royal Mango Mastani Shake',
      category: 'Beverages',
      price: '₹140',
      rating: 4.9,
      badge: '🥭 Summer Legend',
      badgeType: 'mango',
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop&q=80',
      desc: 'Velvety Alphonso mango purée blended with chilled milk, vanilla scoop & crunchy pistachios.'
    },
    {
      id: 9,
      name: 'Chilled Hazelnut Cold Coffee',
      category: 'Beverages',
      price: '₹150',
      rating: 4.8,
      badge: '☕ Cafe Bestseller',
      badgeType: 'coffee',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80',
      desc: 'Slow-brewed dark espresso whipped with fresh chilled milk, roasted hazelnut & chocolate swirl.'
    },
    {
      id: 10,
      name: 'Oreo Nutella Freakshake',
      category: 'Beverages',
      price: '₹160',
      rating: 4.9,
      badge: '🍫 Viral Sensation',
      badgeType: 'viral',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80',
      desc: 'Loaded thick chocolate shake crowned with crunchy Oreo cookies, whipped cream & warm Nutella.'
    }
  ];

  return (
    <div className="bk-homepage-container">
      {/* 1. TOP DINE-IN SERVICE STRIP */}
      <div className="top-service-strip">
        <div className="strip-left">
          <div className="dine-switch">
            <span className="dine-switch-pill active">DINE-IN ORDERING</span>
            <span className="dine-switch-pill">TABLE SERVICE</span>
          </div>
        </div>

        <div className="strip-center">
          <div className="location-chip">
            <FaMapMarkerAlt className="loc-icon" />
            <span><strong>Dine-In At:</strong> Queen's Kitchen Chitkara University Campus</span>
          </div>
        </div>

        <div className="strip-right">
          <button type="button" className="auth-chip-btn" onClick={onOpenAuthModal}>
            <FaCrown className="auth-chip-icon" />
            <span>{activeGuest ? `Welcome, ${activeGuest.name}` : 'Guest Sign Up / Log In'}</span>
          </button>
        </div>
      </div>

      {/* 2. PROMOTIONAL HERO BANNER ("NEW DROP" ROYAL AESTHETIC) */}
      <section className="bk-hero-banner">
        <div className="hero-banner-inner">
          <div className="banner-left-content">
            <div className="new-drop-tag">
              <span className="drop-badge">NEW ROYAL DROP</span>
              <span className="drop-sub">LIMITED TIME FEAST</span>
            </div>

            <h1 className="banner-headline">
              MORE <span className="highlight-crunch">CRUNCH</span><br />
              MORE <span className="highlight-flavor">FLAVOUR</span>
            </h1>

            <p className="banner-description">
              Step into Queen's Kitchen. Experience live digital table ordering, instant kitchen dispatch, and our legendary handcrafted recipes.
            </p>

            <div className="hero-cta-row">
              <button type="button" className="bk-primary-btn" onClick={() => handleStartOrder('All')}>
                <FaUtensils /> Explore Digital Menu
              </button>
              <button type="button" className="bk-secondary-btn" onClick={handleViewFloorPlan}>
                Reserve Table Floor Plan <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="banner-right-visual">
            <div className="promo-callout-burst">
              <div className="burst-title">CHEF'S PICK</div>
              <div className="burst-subtitle">Dal Makhani & Naan Combo</div>
              <div className="burst-price">Just ₹240</div>
            </div>

            <div className="floating-dish-showcase">
              <img 
                src="/images/dal_makhani.png" 
                alt="Dal Makhani Royal Bowl" 
                className="showcase-dish-img main-dish" 
              />
              <img 
                src="/images/garlic_naan.png" 
                alt="Garlic Naan" 
                className="showcase-dish-img side-dish" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ROYAL QUOTE BANNER */}
      <div className="royal-motto-ribbon">
        <span className="ribbon-sparkle">✦</span>
        <span className="ribbon-quote">WHERE ROYAL FLAVORS MEET MODERN HOSPITALITY</span>
        <span className="ribbon-sparkle">✦</span>
      </div>

      {/* 3. CENTERPIECE INTERACTIVE CROWN EXPERIENCE TOUR */}
      <section className="crown-tour-section">
        <div className="crown-interactive-box" onClick={onOpenAuthModal}>
          <div className="crown-glow-pulse">
            <div className="crown-pulse-wave"></div>
            <div className="crown-pulse-ring"></div>
            <FaCrown className="big-royal-crown-icon animated-crown-icon" />
          </div>
          <div className="crown-tour-content">
            <span className="tour-badge">👑 ROYAL GUEST ACCESS GATE</span>
            <h2>Click the Crown to Sign Up or Log In</h2>
            <p>
              Take a tour of Queen's Kitchen! Assign your dining table (Nuclear, Family, or Joint), 
              unlock live digital ordering across 200 authentic dishes, and dispatch tickets directly to the kitchen.
            </p>
            <div className="crown-tour-btn-row">
              <button type="button" className="crown-open-auth-btn" onClick={(e) => { e.stopPropagation(); onOpenAuthModal(); }}>
                👑 Open Guest Sign Up / Login Window
              </button>
              <span className="crown-hint-pill">✨ Instant Table Seating</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "OUR MENU" QUICK CATEGORIES */}
      <section className="bk-categories-section">
        <div className="section-title-wrap">
          <div>
            <h2 className="bk-section-heading">Our Menu Categories</h2>
            <span className="bk-section-tag">Explore 200 Handcrafted Dishes</span>
          </div>
          <button type="button" className="view-all-link-btn" onClick={() => handleStartOrder('All')}>
            Open Menu & Order →
          </button>
        </div>

        <div className="categories-icon-grid">
          {[
            { name: 'Starters', icon: '🍟', count: '50 Dishes', desc: 'Crispy Fries, Tikka & Kebabs' },
            { name: 'Main Course', icon: '🍛', count: '75 Dishes', desc: 'Dal Makhani, Biryani & Pastas' },
            { name: 'Desserts', icon: '🍨', count: '40 Dishes', desc: 'Gulab Jamun, Sizzlers & Waffles' },
            { name: 'Beverages', icon: '🍹', count: '35 Dishes', desc: 'Mojitos, Cold Coffee & Shakes' }
          ].map(cat => (
            <div 
              key={cat.name} 
              className="category-icon-card"
              onClick={() => handleStartOrder(cat.name)}
              title={`View ${cat.name} in Digital Menu`}
            >
              <div className="cat-emoji-circle">{cat.icon}</div>
              <h3 className="cat-title">{cat.name}</h3>
              <span className="cat-count-badge">{cat.count}</span>
              <p className="cat-desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOT SELLERS & PEOPLE'S CHOICE (10 COMPLETE DISHES - SHOWCASE ONLY) */}
      <section className="bk-hotsellers-section">
        <div className="section-title-wrap">
          <div>
            <h2 className="bk-section-heading">Hot Sellers & People's Choice</h2>
            <p className="bk-section-sub">Diners' all-time favorite culinary creations, coolers & beverages</p>
          </div>
          <button type="button" className="view-all-link-btn" onClick={() => handleStartOrder('All')}>
            View Full 200 Menu →
          </button>
        </div>

        <div className="bk-dishes-grid">
          {hotSellers.map(dish => (
            <div key={dish.id} className="bk-dish-card showcase-only">
              <div className={`dish-card-badge badge-${dish.badgeType}`}>
                {dish.badge}
              </div>

              <div className="dish-img-wrap">
                <img src={dish.image} alt={dish.name} className="bk-dish-img" loading="lazy" />
                <div className="dish-img-gradient-overlay"></div>
              </div>

              <div className="dish-card-content">
                <div className="dish-meta-row">
                  <span className="dish-cat-tag">{dish.category}</span>
                  <span className="dish-rating-tag"><FaStar /> {dish.rating}</span>
                </div>

                <h4 className="dish-name">{dish.name}</h4>
                <p className="dish-desc">{dish.desc}</p>

                <div className="dish-bottom-row">
                  <div className="dish-price-wrap">
                    <span className="price-curr">₹</span>
                    <span className="dish-price-val">{dish.price.replace('₹', '')}</span>
                  </div>
                  <span className="dish-serving-tag">Chef Crafted</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CROWN REWARDS & TABLE CLUB BANNER */}
      <section className="crown-rewards-banner">
        <div className="rewards-banner-inner">
          <div className="rewards-left">
            <div className="crown-coin-avatar">
              <FaCrown size={28} />
            </div>
            <div>
              <h3>Crown Loyalty Club • 500 Welcome Crowns</h3>
              <p>Every table order earns Crown Points redeemable for complimentary desserts & coolers.</p>
            </div>
          </div>
          <div className="rewards-right">
            <button type="button" className="rewards-claim-btn" onClick={onOpenAuthModal}>
              👑 Show Crown Balance
            </button>
          </div>
        </div>
      </section>

      {/* 7. THREE SYSTEM HIGHLIGHTS TOUR */}
      <section className="system-tour-section">
        <div className="tour-grid">
          <div className="tour-card" onClick={handleViewFloorPlan}>
            <div className="tour-icon-wrap gold">
              <FaUtensils />
            </div>
            <h3>1. Interactive Floor Plan</h3>
            <p>Nuclear (1–5), Family (6–10), and Joint (11–12) table seating with live status tracking.</p>
          </div>

          <div className="tour-card" onClick={() => navigate('/Kitchen')}>
            <div className="tour-icon-wrap emerald">
              <FaConciergeBell />
            </div>
            <h3>2. Kitchen Display (KDS)</h3>
            <p>Paperless order slips dispatched directly to chef queue with instant 'Mark as Served' feedback.</p>
          </div>

          <div className="tour-card" onClick={() => navigate('/Audit')}>
            <div className="tour-icon-wrap purple">
              <FaChartLine />
            </div>
            <h3>3. Re-Render Audit Engine</h3>
            <p>Virtual DOM profiling proving re-render isolation across 200 dishes with React.memo & useCallback.</p>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bk-footer">
        <div className="bk-footer-inner">
          <div className="footer-brand-box">
            <div className="footer-logo">
              <FaCrown className="footer-crown" /> Queen's Kitchen
            </div>
            <p>Department of Computer Science & Engineering • Chitkara University Institute of Engineering & Technology</p>
            <span className="footer-group-tag">Group G14 • Project ID: G14-PID-11 (Project 21)</span>
          </div>

          <div className="footer-links-box">
            <h4>Quick Access</h4>
            <ul>
              <li onClick={() => handleStartOrder('All')}>• Digital Menu & Ordering</li>
              <li onClick={handleViewFloorPlan}>• Table Reservation Floor Plan</li>
              <li onClick={() => navigate('/Kitchen')}>• Kitchen Display (KDS)</li>
              <li onClick={() => navigate('/Audit')}>• Re-render Audit Profiler</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

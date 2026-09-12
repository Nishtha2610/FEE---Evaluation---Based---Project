import React, { useRef, useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaStar, FaLeaf, FaFire } from 'react-icons/fa';

/**
 * MenuCard Component
 * Displays a single restaurant item card with serving quantity, price, and visual render badge.
 */
export default function MenuCard({ item, quantityInCart, onAddToCart, onRemoveFromCart, renderMode }) {
  // Track render counts for this individual card instance using useRef
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  // Flash state for visual re-render audit indication
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    setIsFlashing(true);
    const timer = setTimeout(() => setIsFlashing(false), 400);
    return () => clearTimeout(timer);
  }, [renderCountRef.current]);

  const isVeg = item.dietary === 'Veg' || item.dietary === 'Vegan';

  return (
    <div className={`menu-card ${isFlashing ? 'render-flash' : ''}`}>
      {/* Visual Re-render Audit Badge */}
      <div className="render-badge" title="Number of times this component instance rendered">
        ⚡ Rendered: <strong>{renderCountRef.current}x</strong>
      </div>

      <div className="card-image-container">
        <img src={item.image} alt={item.name} className="card-image" loading="lazy" />
        <span className={`dietary-badge ${isVeg ? 'veg' : 'non-veg'}`}>
          {isVeg ? <FaLeaf size={12} /> : <FaFire size={12} />}
          {item.dietary}
        </span>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3 className="item-name">{item.name}</h3>
          <div className="price-container">
            <span className="item-price">₹{item.price}</span>
            {item.servingQty && <span className="item-serving-qty">• {item.servingQty}</span>}
          </div>
        </div>

        <div className="card-meta">
          <span className="item-rating">
            <FaStar size={14} color="#eab308" /> {item.rating}
          </span>
          <span className="item-category-tag">{item.category}</span>
        </div>

        <div className="card-actions">
          {quantityInCart === 0 ? (
            <button 
              className="add-cart-btn" 
              onClick={() => onAddToCart(item)}
            >
              <FaPlus size={14} /> Add to Table Order
            </button>
          ) : (
            <div className="quantity-controls">
              <button 
                className="qty-btn" 
                onClick={() => onRemoveFromCart(item.id)}
              >
                <FaMinus size={12} />
              </button>
              <span className="qty-count">{quantityInCart}</span>
              <button 
                className="qty-btn" 
                onClick={() => onAddToCart(item)}
              >
                <FaPlus size={12} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaStar, FaLeaf, FaFire, FaHeart, FaRegHeart } from 'react-icons/fa';

/**
 * MenuCard Component
 * Displays a single restaurant item card with serving quantity, price, favorite toggle, and visual render badge.
 * Optimized with React.memo to demonstrate re-render isolation between Naive and Optimized mode.
 */
function MenuCard({ 
  item, 
  quantityInCart, 
  onAddToCart, 
  onRemoveFromCart, 
  renderMode,
  isFavorite = false,
  onToggleFavorite
}) {
  // Track render counts for this individual card instance using useRef
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  // Flash state for visual re-render audit indication
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    setIsFlashing(true);
    const timer = setTimeout(() => setIsFlashing(false), 350);
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

        {/* Heart Favorite Toggle Button */}
        {onToggleFavorite && (
          <button 
            type="button"
            className={`card-heart-btn ${isFavorite ? 'active-favorited' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(item);
            }}
            title={isFavorite ? `Remove ${item.name} from Favourites` : `Add ${item.name} to Favourites`}
            aria-label="Toggle favourite"
          >
            {isFavorite ? (
              <FaHeart className="heart-icon-filled" size={17} />
            ) : (
              <FaRegHeart className="heart-icon-outline" size={17} />
            )}
          </button>
        )}

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
                title="Decrease quantity"
              >
                <FaMinus size={12} />
              </button>
              <span className="qty-count">{quantityInCart}</span>
              <button 
                className="qty-btn" 
                onClick={() => onAddToCart(item)}
                title="Increase quantity"
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

// React.memo with custom comparison for Re-render Audit
export default React.memo(MenuCard, (prevProps, nextProps) => {
  // In Naive Mode: Always re-render to demonstrate the unoptimized baseline
  if (nextProps.renderMode === 'naive') {
    return false;
  }

  // In Optimized Mode: Only re-render if the item's cart quantity, favorite status, or render mode changed
  return (
    prevProps.quantityInCart === nextProps.quantityInCart &&
    prevProps.isFavorite === nextProps.isFavorite &&
    prevProps.renderMode === nextProps.renderMode &&
    prevProps.item.id === nextProps.item.id &&
    prevProps.onAddToCart === nextProps.onAddToCart &&
    prevProps.onRemoveFromCart === nextProps.onRemoveFromCart &&
    prevProps.onToggleFavorite === nextProps.onToggleFavorite
  );
});

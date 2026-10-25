import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaStar, FaTimes, FaHeart, FaCommentDots, FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

/**
 * DiningFeedbackModal Component
 * Teleported directly to document.body via createPortal to guarantee
 * zero overlapping or transparency bleed from background menu cards.
 */
export default function DiningFeedbackModal({ 
  isOpen, 
  onClose, 
  tableId, 
  guestName, 
  onFeedbackSubmitted 
}) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState(['Food Quality', 'Quick Service']);
  const [comments, setComments] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const experienceTags = [
    'Food Quality',
    'Quick Service',
    'Royal Ambience',
    'Staff Courteousness',
    'Value for Money',
    'Portion Size'
  ];

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackEntry = {
      id: 'FB-' + Date.now().toString().slice(-4),
      tableId,
      guestName: guestName || `Guest at Table #${tableId}`,
      rating,
      tags: selectedTags,
      comments: comments.trim(),
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Save to localStorage
    try {
      const stored = localStorage.getItem('qk_dining_feedbacks');
      const list = stored ? JSON.parse(stored) : [];
      list.push(feedbackEntry);
      localStorage.setItem('qk_dining_feedbacks', JSON.stringify(list));
    } catch (err) {
      console.error('Failed to save feedback to localStorage', err);
    }

    // Trigger toast notification with the exact phrase requested
    toast.success("We value your opinions!", {
      icon: '⭐',
      position: 'top-right',
      autoClose: 3500
    });

    setIsSubmitted(true);
    if (onFeedbackSubmitted) onFeedbackSubmitted(feedbackEntry);

    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 1500);
  };

  const modalContent = (
    <div className="modal-overlay feedback-modal-overlay" onClick={onClose}>
      <div className="feedback-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <FaTimes size={18} />
        </button>

        {isSubmitted ? (
          <div className="feedback-success-state">
            <FaCheckCircle size={48} className="feedback-success-icon" />
            <h3>Feedback Received!</h3>
            <p>Thank you for helping us elevate Queen's Kitchen.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="feedback-header">
              <div className="feedback-icon-badge">
                <FaHeart size={22} />
              </div>
              <h3>Share Your Dining Experience</h3>
              <p className="feedback-subtitle">
                Table #{tableId} • {guestName || 'Valued Guest'}
              </p>
            </div>

            {/* Star Rating Selector */}
            <div className="rating-star-selector">
              <span className="rating-label">Overall Dining Satisfaction:</span>
              <div className="stars-row">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`star-btn ${star <= (hoverRating || rating) ? 'filled' : ''}`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    <FaStar size={26} />
                  </button>
                ))}
              </div>
              <span className="rating-feedback-text">
                {rating === 5 && 'Outstanding • Royal Experience!'}
                {rating === 4 && 'Great • Really enjoyed the food'}
                {rating === 3 && 'Good • Decent experience'}
                {rating === 2 && 'Fair • Needs improvement'}
                {rating === 1 && 'Poor • Not satisfied'}
              </span>
            </div>

            {/* Quick Experience Tags */}
            <div className="experience-tags-section">
              <label>What stood out the most?</label>
              <div className="tags-chips-wrap">
                {experienceTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`experience-chip ${selectedTags.includes(tag) ? 'active' : ''}`}
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Comments Textarea */}
            <div className="form-group">
              <label><FaCommentDots /> Additional Thoughts or Chef Suggestions</label>
              <textarea 
                rows="3"
                placeholder="Tell us what you loved about our dishes or how we can improve..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                maxLength={300}
              />
            </div>

            <button type="submit" className="auth-submit-btn gold feedback-submit-btn">
              ⭐ Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

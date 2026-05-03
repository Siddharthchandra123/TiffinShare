import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RatingModal({ isOpen, onClose, onSubmit, targetMeal }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (rating === 0) return;
    setIsSubmitting(true);
    await onSubmit(rating, reviewText, targetMeal._id);
    setIsSubmitting(false);
    setRating(0);
    setReviewText("");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="glass-card w-full max-w-sm p-6 relative overflow-hidden"
        >
          <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-orange-500/20 blur-3xl rounded-full pointer-events-none"></div>

          <h3 className="text-2xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            Rate & Review
          </h3>
          <p className="text-center text-muted-foreground text-sm mb-6">
            How was the {targetMeal?.dish || "food"}?
          </p>

          <div className="flex justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
                className="text-4xl focus:outline-none"
              >
                <span className={`transition-colors duration-200 ${star <= (hoveredRating || rating) ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" : "text-muted"}`}>
                  ★
                </span>
              </motion.button>
            ))}
          </div>

          <textarea
            placeholder="Write a review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full px-4 py-2 mb-6 rounded-lg glass-input min-h-[80px] text-sm"
          />

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors text-muted-foreground"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={rating === 0 || isSubmitting}
              className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                rating === 0 
                  ? "bg-secondary text-muted-foreground cursor-not-allowed" 
                  : "bg-primary hover:opacity-90 text-primary-foreground shadow-lg shadow-primary/25"
              }`}
            >
              {isSubmitting ? "Saving..." : "Submit"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

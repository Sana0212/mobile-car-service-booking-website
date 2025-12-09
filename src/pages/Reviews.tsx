import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Reviews: React.FC = () => {
  const reviews = useStore(state => state.reviews);
  const addReview = useStore(state => state.addReview);
  
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addReview({
      userId: 'u1',
      userName,
      rating,
      comment,
      serviceId: '1'
    });

    setShowForm(false);
    setRating(5);
    setComment('');
    setUserName('');
  };

  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="section-padding bg-neutral-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">Customer Reviews</h1>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-8 w-8 ${
                    i < Math.round(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-neutral-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold">{averageRating.toFixed(1)}/5</span>
          </div>
          <p className="text-neutral-600">Based on {reviews.length} reviews</p>
        </div>

        {!showForm && (
          <div className="mb-8 text-center">
            <button
              onClick={() => setShowForm(true)}
              className="btn-primary"
            >
              Write a Review
            </button>
          </div>
        )}

        {showForm && (
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6">Write Your Review</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  className="input-field"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="touch-manipulation"
                    >
                      <Star
                        className={`h-10 w-10 transition-colors ${
                          star <= rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-neutral-300 hover:text-yellow-400'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with our service..."
                  rows={4}
                  className="input-field resize-none"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-ghost"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{review.userName}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-neutral-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { create } from 'zustand';
import { Booking, Review, VehicleInfo } from '../types';
import { bookings as initialBookings, reviews as initialReviews } from '../data/mockData';

interface StoreState {
  bookings: Booking[];
  reviews: Review[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt'>) => void;
  addReview: (review: Omit<Review, 'id' | 'createdAt'>) => void;
  cancelBooking: (bookingId: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  bookings: initialBookings,
  reviews: initialReviews,
  
  addBooking: (booking) => set((state) => ({
    bookings: [
      ...state.bookings,
      {
        ...booking,
        id: `b${Date.now()}`,
        createdAt: new Date().toISOString()
      }
    ]
  })),
  
  addReview: (review) => set((state) => ({
    reviews: [
      {
        ...review,
        id: `r${Date.now()}`,
        createdAt: new Date().toISOString()
      },
      ...state.reviews
    ]
  })),
  
  cancelBooking: (bookingId) => set((state) => ({
    bookings: state.bookings.map(b => 
      b.id === bookingId ? { ...b, status: 'cancelled' as const } : b
    )
  }))
}));

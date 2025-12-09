import { Service, Booking, Review } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Oil Change',
    description: 'Complete oil and filter change with multi-point inspection',
    price: 49.99,
    duration: '30 min',
    category: 'maintenance',
    icon: 'Droplet'
  },
  {
    id: '2',
    name: 'Brake Service',
    description: 'Brake pad replacement and rotor resurfacing',
    price: 299.99,
    duration: '2 hours',
    category: 'repair',
    icon: 'Disc'
  },
  {
    id: '3',
    name: 'Tire Rotation',
    description: 'Rotate all four tires and check alignment',
    price: 39.99,
    duration: '45 min',
    category: 'maintenance',
    icon: 'Circle'
  },
  {
    id: '4',
    name: 'Battery Check',
    description: 'Complete battery test and replacement if needed',
    price: 129.99,
    duration: '1 hour',
    category: 'inspection',
    icon: 'Zap'
  },
  {
    id: '5',
    name: 'Full Detail',
    description: 'Interior and exterior deep cleaning and waxing',
    price: 199.99,
    duration: '3 hours',
    category: 'detailing',
    icon: 'Sparkles'
  },
  {
    id: '6',
    name: 'AC Service',
    description: 'Air conditioning system check and recharge',
    price: 149.99,
    duration: '1.5 hours',
    category: 'repair',
    icon: 'Wind'
  },
  {
    id: '7',
    name: 'Engine Diagnostic',
    description: 'Complete engine diagnostic scan',
    price: 89.99,
    duration: '1 hour',
    category: 'inspection',
    icon: 'Search'
  },
  {
    id: '8',
    name: 'Transmission Service',
    description: 'Transmission fluid change and inspection',
    price: 179.99,
    duration: '2 hours',
    category: 'maintenance',
    icon: 'Settings'
  }
];

export const bookings: Booking[] = [
  {
    id: 'b1',
    userId: 'u1',
    serviceId: '1',
    vehicleInfo: {
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      licensePlate: 'ABC123',
      mileage: 45000
    },
    date: '2024-01-15',
    time: '10:00 AM',
    status: 'completed',
    totalCost: 49.99,
    createdAt: '2024-01-10T10:00:00Z'
  },
  {
    id: 'b2',
    userId: 'u1',
    serviceId: '2',
    vehicleInfo: {
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      licensePlate: 'ABC123',
      mileage: 46500
    },
    date: '2024-02-20',
    time: '2:00 PM',
    status: 'completed',
    totalCost: 299.99,
    createdAt: '2024-02-15T14:00:00Z'
  },
  {
    id: 'b3',
    userId: 'u1',
    serviceId: '5',
    vehicleInfo: {
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      licensePlate: 'ABC123',
      mileage: 48000
    },
    date: '2024-03-10',
    time: '9:00 AM',
    status: 'confirmed',
    totalCost: 199.99,
    createdAt: '2024-03-05T09:00:00Z'
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    userId: 'u2',
    userName: 'Sarah Johnson',
    rating: 5,
    comment: 'Excellent service! The team was professional and my car runs like new. Highly recommend!',
    serviceId: '1',
    createdAt: '2024-01-20T10:00:00Z'
  },
  {
    id: 'r2',
    userId: 'u3',
    userName: 'Michael Chen',
    rating: 5,
    comment: 'Best car service experience I\'ve had. Fair pricing and transparent about what needed to be done.',
    serviceId: '2',
    createdAt: '2024-02-05T14:30:00Z'
  },
  {
    id: 'r3',
    userId: 'u4',
    userName: 'Emily Rodriguez',
    rating: 4,
    comment: 'Great service and friendly staff. Only minor wait time but overall very satisfied.',
    serviceId: '5',
    createdAt: '2024-02-15T11:00:00Z'
  },
  {
    id: 'r4',
    userId: 'u5',
    userName: 'David Thompson',
    rating: 5,
    comment: 'Quick turnaround and quality work. Will definitely be coming back for all my car needs.',
    serviceId: '3',
    createdAt: '2024-02-28T16:00:00Z'
  },
  {
    id: 'r5',
    userId: 'u6',
    userName: 'Lisa Martinez',
    rating: 5,
    comment: 'Professional team that really cares about customer satisfaction. My car looks amazing!',
    serviceId: '5',
    createdAt: '2024-03-01T13:00:00Z'
  }
];

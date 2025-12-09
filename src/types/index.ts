export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: 'maintenance' | 'repair' | 'inspection' | 'detailing';
  icon: string;
}

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  vehicleInfo: VehicleInfo;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalCost: number;
  createdAt: string;
}

export interface VehicleInfo {
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  mileage: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  serviceId: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

import React from 'react';
import { Calendar, Download, RotateCcw, CheckCircle, Clock, XCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { services } from '../data/mockData';

export const History: React.FC = () => {
  const bookings = useStore(state => state.bookings);
  const userBookings = bookings.filter(b => b.userId === 'u1').sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'confirmed':
        return <Clock className="h-5 w-5 text-primary-600" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-neutral-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'confirmed':
        return 'bg-primary-100 text-primary-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  return (
    <div className="section-padding bg-neutral-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-8">Service History</h1>

        {userBookings.length === 0 ? (
          <div className="card text-center py-12">
            <Calendar className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No Service History</h2>
            <p className="text-neutral-600 mb-6">You haven't booked any services yet.</p>
            <button
              onClick={() => window.location.href = '/booking'}
              className="btn-primary"
            >
              Book Your First Service
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {userBookings.map((booking) => {
              const service = services.find(s => s.id === booking.serviceId);
              if (!service) return null;

              return (
                <div key={booking.id} className="card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{service.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-neutral-600 mb-3">{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-neutral-600">
                          <Calendar className="h-4 w-4" />
                          <span>{booking.date} at {booking.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600">
                          {getStatusIcon(booking.status)}
                          <span>{booking.vehicleInfo.make} {booking.vehicleInfo.model} ({booking.vehicleInfo.year})</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        ${booking.totalCost}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-neutral-200 pt-4 flex flex-col sm:flex-row gap-3">
                    <button className="btn-ghost flex items-center justify-center gap-2 flex-1">
                      <Download className="h-4 w-4" />
                      Download Receipt
                    </button>
                    {booking.status === 'completed' && (
                      <button
                        onClick={() => window.location.href = '/booking'}
                        className="btn-primary flex items-center justify-center gap-2 flex-1"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Book Again
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

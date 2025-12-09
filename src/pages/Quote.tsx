import React, { useState } from 'react';
import { Calculator, Car, CheckCircle } from 'lucide-react';
import { services } from '../data/mockData';
import { VehicleInfo } from '../types';

export const Quote: React.FC = () => {
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    licensePlate: '',
    mileage: 0
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showQuote, setShowQuote] = useState(false);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    return services
      .filter(s => selectedServices.includes(s.id))
      .reduce((sum, s) => sum + s.price, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowQuote(true);
  };

  if (showQuote) {
    const total = calculateTotal();
    const selectedServicesList = services.filter(s => selectedServices.includes(s.id));

    return (
      <div className="section-padding bg-neutral-50 min-h-[calc(100vh-4rem)]">
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4">
                <CheckCircle className="h-12 w-12 text-primary-600" />
              </div>
              <h1 className="text-3xl font-display font-bold mb-2">Your Service Quote</h1>
              <p className="text-neutral-600">Based on your vehicle and selected services</p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6 mb-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <Car className="h-5 w-5" />
                Vehicle Information
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-neutral-600">Make:</span>
                  <p className="font-medium">{vehicleInfo.make}</p>
                </div>
                <div>
                  <span className="text-neutral-600">Model:</span>
                  <p className="font-medium">{vehicleInfo.model}</p>
                </div>
                <div>
                  <span className="text-neutral-600">Year:</span>
                  <p className="font-medium">{vehicleInfo.year}</p>
                </div>
                <div>
                  <span className="text-neutral-600">Mileage:</span>
                  <p className="font-medium">{vehicleInfo.mileage.toLocaleString()} miles</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold mb-4">Selected Services</h2>
              <div className="space-y-3">
                {selectedServicesList.map(service => (
                  <div key={service.id} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-neutral-600">{service.duration}</p>
                    </div>
                    <span className="text-lg font-semibold text-primary-600">${service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-semibold">Estimated Total</span>
                <span className="text-3xl font-bold text-primary-600">${total.toFixed(2)}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowQuote(false)}
                  className="btn-ghost"
                >
                  Modify Quote
                </button>
                <button
                  onClick={() => window.location.href = '/booking'}
                  className="btn-primary flex-1"
                >
                  Schedule Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-neutral-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">Get Your Service Quote</h1>
          <p className="text-lg text-neutral-600">
            Select the services you need and get an instant estimate
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Car className="h-6 w-6" />
            Vehicle Information
          </h2>

          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Make</label>
                <input
                  type="text"
                  value={vehicleInfo.make}
                  onChange={(e) => setVehicleInfo({...vehicleInfo, make: e.target.value})}
                  placeholder="e.g., Toyota"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Model</label>
                <input
                  type="text"
                  value={vehicleInfo.model}
                  onChange={(e) => setVehicleInfo({...vehicleInfo, model: e.target.value})}
                  placeholder="e.g., Camry"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <input
                  type="number"
                  value={vehicleInfo.year}
                  onChange={(e) => setVehicleInfo({...vehicleInfo, year: parseInt(e.target.value)})}
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Current Mileage</label>
                <input
                  type="number"
                  value={vehicleInfo.mileage}
                  onChange={(e) => setVehicleInfo({...vehicleInfo, mileage: parseInt(e.target.value)})}
                  placeholder="50000"
                  className="input-field"
                  required
                />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            Select Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleService(service.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedServices.includes(service.id)
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-neutral-200 hover:border-primary-300'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{service.name}</h3>
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    selectedServices.includes(service.id)
                      ? 'border-primary-600 bg-primary-600'
                      : 'border-neutral-300'
                  }`}>
                    {selectedServices.includes(service.id) && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mb-2">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-600">${service.price}</span>
                  <span className="text-sm text-neutral-500">{service.duration}</span>
                </div>
              </button>
            ))}
          </div>

          {selectedServices.length > 0 && (
            <div className="bg-primary-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Estimated Total</span>
                <span className="text-2xl font-bold text-primary-600">${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={selectedServices.length === 0}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Get Quote
          </button>
        </form>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Calendar, Clock, Car, CheckCircle } from 'lucide-react';
import { services } from '../data/mockData';
import { useStore } from '../store/useStore';
import { VehicleInfo } from '../types';

export const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    licensePlate: '',
    mileage: 0
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const addBooking = useStore(state => state.addBooking);

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const service = services.find(s => s.id === selectedService);
    if (!service) return;

    addBooking({
      userId: 'u1',
      serviceId: selectedService,
      vehicleInfo,
      date: selectedDate,
      time: selectedTime,
      status: 'pending',
      totalCost: service.price
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="section-padding bg-neutral-50 min-h-[calc(100vh-4rem)]">
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-display font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-lg text-neutral-600 mb-6">
              Your service appointment has been scheduled for {selectedDate} at {selectedTime}.
            </p>
            <p className="text-neutral-600 mb-8">
              We've sent a confirmation email with all the details. See you soon!
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                setSelectedService('');
                setSelectedDate('');
                setSelectedTime('');
              }}
              className="btn-primary"
            >
              Book Another Service
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-neutral-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-8 text-center">Book Your Service</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                  step >= s ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-500'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-12 h-1 ${step > s ? 'bg-primary-600' : 'bg-neutral-200'}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Select Service</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedService === service.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-neutral-200 hover:border-primary-300'
                    }`}
                  >
                    <h3 className="font-semibold mb-1">{service.name}</h3>
                    <p className="text-sm text-neutral-600 mb-2">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary-600">${service.price}</span>
                      <span className="text-sm text-neutral-500">{service.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!selectedService}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Select Date & Time</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="input-field"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Select Time
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border-2 font-medium transition-all ${
                        selectedTime === time
                          ? 'border-primary-600 bg-primary-50 text-primary-700'
                          : 'border-neutral-200 hover:border-primary-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-ghost"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Vehicle Information */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Vehicle Information</h2>
              
              <div className="space-y-4">
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
                    <label className="block text-sm font-medium mb-2">License Plate</label>
                    <input
                      type="text"
                      value={vehicleInfo.licensePlate}
                      onChange={(e) => setVehicleInfo({...vehicleInfo, licensePlate: e.target.value})}
                      placeholder="ABC123"
                      className="input-field"
                      required
                    />
                  </div>
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

              <div className="mt-8 p-4 bg-neutral-100 rounded-lg">
                <h3 className="font-semibold mb-2">Booking Summary</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-neutral-600">Service:</span> {services.find(s => s.id === selectedService)?.name}</p>
                  <p><span className="text-neutral-600">Date:</span> {selectedDate}</p>
                  <p><span className="text-neutral-600">Time:</span> {selectedTime}</p>
                  <p className="text-lg font-bold text-primary-600 mt-2">
                    Total: ${services.find(s => s.id === selectedService)?.price}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-ghost"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

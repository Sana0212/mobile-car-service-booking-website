import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, DollarSign, Star, Clock, Shield, Award, ArrowRight } from 'lucide-react';
import { services } from '../data/mockData';

export const Home: React.FC = () => {
  const featuredServices = services.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=600&fit=crop" 
            alt="Car service background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto section-padding">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Professional Car Service You Can Trust
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-primary-100">
              Expert maintenance and repair services with transparent pricing and convenient online booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="btn-primary text-center">
                Book Service Now
              </Link>
              <Link to="/quote" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 text-center">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-neutral-600">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Experts</h3>
              <p className="text-neutral-600">Certified technicians with years of experience</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-neutral-600">100% satisfaction guarantee on all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Featured Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From routine maintenance to complex repairs, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="card hover:shadow-soft transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">${service.price}</span>
                  <span className="text-sm text-neutral-500">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/booking" className="btn-primary inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            Book your service online in minutes or get a free quote for your vehicle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100 inline-flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              Book Service
            </Link>
            <Link to="/quote" className="btn-secondary border-white text-white hover:bg-white/10 inline-flex items-center justify-center gap-2">
              <DollarSign className="h-5 w-5" />
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5</span>
            </div>
            <p className="text-neutral-600">Based on 500+ reviews</p>
          </div>

          <div className="text-center">
            <Link to="/reviews" className="btn-primary inline-flex items-center gap-2">
              Read All Reviews
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

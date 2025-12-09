import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'Master Technician',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      role: 'Service Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Mechanic',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Service',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest quality workmanship.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Your satisfaction is our top priority.'
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'We believe in honest, transparent service with fair pricing and no hidden fees.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in the care we put into every vehicle we service.'
    }
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1632823469850-1b4942f4d2b5?w=1200&h=600&fit=crop"
            alt="Auto service shop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto section-padding text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">About AutoCare Pro</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Providing exceptional automotive service and care since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  AutoCare Pro was founded in 2010 with a simple mission: to provide honest, reliable, and professional automotive service to our community. What started as a small two-bay shop has grown into a full-service automotive center, but our commitment to quality and customer satisfaction has never changed.
                </p>
                <p>
                  Over the years, we've built a reputation for excellence by investing in the latest diagnostic equipment, ongoing technician training, and most importantly, by treating every customer like family. We understand that your vehicle is more than just transportation—it's an essential part of your daily life.
                </p>
                <p>
                  Today, we're proud to serve thousands of satisfied customers and continue to be the trusted choice for automotive service in our area. Our team of certified technicians brings decades of combined experience and a genuine passion for automotive care.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
                alt="Auto service facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We're driven by core values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Certified professionals dedicated to keeping your vehicle running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 rounded-xl overflow-hidden shadow-card">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">14+</div>
              <div className="text-primary-100">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">50K+</div>
              <div className="text-primary-100">Vehicles Serviced</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">25+</div>
              <div className="text-primary-100">Certified Technicians</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

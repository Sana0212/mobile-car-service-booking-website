import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const faqs = [
    {
      question: 'How do I book a service?',
      answer: 'You can book a service online through our booking page or call us directly at (555) 123-4567.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and cash payments.'
    },
    {
      question: 'Do you offer warranties on your services?',
      answer: 'Yes, all our services come with a 90-day warranty on parts and labor.'
    },
    {
      question: 'Can I wait while my car is being serviced?',
      answer: 'Absolutely! We have a comfortable waiting area with complimentary Wi-Fi and refreshments.'
    },
    {
      question: 'Do you provide pickup and drop-off services?',
      answer: 'Yes, we offer free pickup and drop-off within a 10-mile radius for services over $100.'
    }
  ];

  return (
    <div className="section-padding bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center">Contact & Support</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <a href="tel:5551234567" className="flex items-start gap-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-neutral-600">(555) 123-4567</p>
                    <p className="text-sm text-neutral-500">Mon-Sat: 8AM-6PM</p>
                  </div>
                </a>

                <a href="mailto:info@autocarepro.com" className="flex items-start gap-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-neutral-600">info@autocarepro.com</p>
                    <p className="text-sm text-neutral-500">We'll respond within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-neutral-600">123 Auto Service Lane</p>
                    <p className="text-neutral-600">Springfield, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-neutral-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-neutral-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-neutral-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full mt-6 flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Start Live Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-neutral-600">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="(555) 123-4567"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help you?"
                    rows={4}
                    className="input-field resize-none"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="card mb-12">
          <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
          <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
              alt="Location map"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex gap-4">
            <button className="btn-primary flex-1">Get Directions</button>
            <button className="btn-secondary flex-1">Call Now</button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="card">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group">
                <summary className="flex items-center justify-between cursor-pointer p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                  <span className="font-semibold">{faq.question}</span>
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-neutral-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

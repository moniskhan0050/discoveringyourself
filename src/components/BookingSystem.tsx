import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, MapPin, Briefcase, GraduationCap, Users, MessageCircle, Contact } from 'lucide-react';

const BookingSystem = () => {
  const [formData, setFormData] = useState({
    name: '', gender: '', age: '', profession: '', city: '', state: '', contact: ''
  });

  return (
    <section id="registration" className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-purple/20 blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Secure Your Spot</h2>
          <p className="text-brand-accent/60 max-w-xl mx-auto">Fill in your details and complete the payment to start your journey.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 md:p-12"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-lavender">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-lavender/40" size={18} />
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand-lavender/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-lavender">Gender</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-lavender/40" size={18} />
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand-lavender/50 transition-colors appearance-none">
                    <option value="" className="bg-brand-dark">Select Gender</option>
                    <option value="male" className="bg-brand-dark">Male</option>
                    <option value="female" className="bg-brand-dark">Female</option>
                    <option value="other" className="bg-brand-dark">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-lavender">Age</label>
                <div className="relative">
                  <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-lavender/40" size={18} />
                  <input 
                    type="number" 
                    placeholder="Your age"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand-lavender/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-lavender">Profession</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-lavender/40" size={18} />
                  <input 
                    type="text" 
                    placeholder="Your profession"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand-lavender/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-lavender">City</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-lavender/40" size={18} />
                  <input 
                    type="text" 
                    placeholder="Enter city"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand-lavender/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-lavender">State</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-lavender/40" size={18} />
                  <input 
                    type="text" 
                    placeholder="Enter state"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand-lavender/50 transition-colors"
                  />
                </div>
              </div>

              <div className="md:col-span-2 pt-4">
                <button type="submit" className="btn-primary w-full py-5 text-xl">
                  Book Workshop
                </button>
              </div>
            </form>
          </motion.div>

          {/* Payment Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-10 border-brand-lavender/20 border-2 bg-brand-lavender/5 text-center">
              <h3 className="text-2xl font-serif font-bold mb-6">Payment Details</h3>
              <div className="bg-white p-6 rounded-2xl inline-block mb-6 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=owaisahmadytl-1@okicici&pn=Owais Ahmad Khan&am=900" 
                  alt="Payment QR"
                  className="w-48 h-48 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                />
              </div>
              <div className="space-y-2 mb-8">
                <p className="text-4xl font-bold tracking-tight">₹900</p>
                <p className="text-brand-lavender font-mono text-sm tracking-widest uppercase">owaisahmadytl-1@okicici</p>
              </div>
              
              <div className="bg-brand-lavender/10 border border-brand-lavender/20 rounded-xl p-6 flex flex-col items-center gap-4 group hover:bg-brand-lavender/20 transition-all">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                  <MessageCircle size={24} />
                </div>
                <p className="font-medium text-brand-accent leading-relaxed">
                  Send your payment receipt on WhatsApp number <br />
                  <span className="text-brand-lavender font-bold text-xl">9511712871</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;

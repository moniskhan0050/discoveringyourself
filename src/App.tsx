import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopHighlight from './components/WorkshopHighlight';
import About from './components/About';
import Trainer from './components/Trainer';
import BookingSystem from './components/BookingSystem';
import Assessment from './components/Assessment';
import Testimonials from './components/Testimonials';
import VideoGrid from './components/VideoGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-lavender selection:text-brand-dark">
      <Navbar />
      
      <main>
        <Hero />
        <WorkshopHighlight />
        
        <div className="space-y-0">
          <About />
          <Trainer />
          <BookingSystem />
          <Assessment />
          <Testimonials />
          <VideoGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

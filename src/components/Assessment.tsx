import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck } from 'lucide-react';

const Assessment = () => {
  const [activeTab, setActiveTab] = useState('A');
  const tabs = ['A', 'B', 'C', 'D'];

  const columnData = {
    A: ["Outgoing", "Social", "Extrovert", "Positive about things and future", "Enjoy people", "Talkative", "Idea giving", "Make friends easily", "Know others feelings", "Popular in group", "Idea giving", "Impatient", "Enjoy group activity", "Full of energy", "Creative", "Lives in a personal moment", "Skip details", "Curious", "Visionary", "Need fun and enjoyment"],
    B: ["Social", "Talker", "Take initiative", "Logical", "Take charge like a leader", "React quickly", "Boss", "Fearless", "Bold", "Always right", "Take opportunity", "Need acknowledgement", "Take revenge", "Love to debate", "Enjoy people", "Do argument", "Easily provoked", "Competitive", "Motivator", "Want quick results"],
    C: ["Thinker", "Prefer staying alone", "Quiet person", "Private person", "React slowly", "Dislike group activity", "Reserved", "Deep", "Thoughtful", "Logical", "Serious", "Perfection", "Critical", "Few selected friends", "Goal oriented", "Moody", "Easily hurt", "Too much sensitive", "Pessimistic", "Idealism"],
    D: ["Peaceful", "Calm", "Hate conflicts", "Stay quiet", "Calm under pressure", "Follow routine", "Limited selected friends", "Patient", "Need motivation", "Polite", "Tolerant", "Sensitive to others", "Not easily provoked", "Perform duty task well", "Respectful", "Shy", "Enjoy peace", "Like quiet places", "Consistent", "Supportive"]
  };

  return (
    <section id="assessment" className="section-padding bg-brand-dark overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Temperament Assessment</h2>
          <p className="text-brand-accent/60 max-w-2xl mx-auto">Discover which of the four fundamental temperaments defines your personality.</p>
        </div>

        <div className="glass-card p-4 md:p-8">
          <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeTab === tab 
                  ? 'bg-brand-lavender text-brand-dark scale-105 shadow-[0_0_15px_rgba(167,139,250,0.4)]' 
                  : 'bg-white/5 text-brand-accent hover:bg-white/10'
                }`}
              >
                Tab {tab}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {columnData[activeTab as keyof typeof columnData].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-transparent text-brand-lavender focus:ring-brand-lavender" />
                <span className="text-sm font-light text-brand-accent/90">{idx + 1}. {item}</span>
              </div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <div className="inline-block p-1 rounded-full bg-white/10 mb-8">
              <button disabled className="btn btn-primary px-12 py-4 text-xl opacity-50 cursor-not-allowed">
                <ClipboardCheck className="inline-block mr-2" size={24} />
                Take Assessment (Coming Soon)
              </button>
            </div>
            <p className="text-brand-lavender/40 text-xs uppercase tracking-widest">Assessment button temporarily disabled</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessment;

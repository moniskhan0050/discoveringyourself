import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoGrid = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Workshop Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video glass-card overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-brand-purple/40 group-hover:bg-brand-purple/20 transition-all z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 bg-brand-lavender text-brand-dark rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(167,139,250,0.4)] group-hover:scale-110 transition-transform">
                  <Play className="fill-brand-dark" size={24} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-lavender">Session Clip 0{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;

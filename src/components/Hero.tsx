import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-lavender/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-purple/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-lavender uppercase tracking-[0.4em] text-sm mb-6 block font-medium">
            A Transformative Self-Discovery Experience
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 heading-glow leading-tight">
            Journey <span className="italic font-light opacity-80">of</span> <br />
            Discovering Yourself
          </h1>
          <p className="text-xl md:text-2xl text-brand-accent max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Discover the hidden treasures within yourself and unlock your true potential by understanding your God-given personality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#registration" className="btn-primary py-4 px-10 text-lg shadow-xl">
              Book Workshop
            </a>
            <a href="#registration" className="btn-secondary py-4 px-10 text-lg">
              Register Now
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 md:mt-20 flex justify-center"
          >
            <img
              src={trainerImage}
              alt="Journey of Self-Discovery"
              className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-auto rounded-2xl shadow-2xl object-cover hover:shadow-brand-purple/50 hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subtle Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Explore</span>
        <div className="w-px h-12 bg-white" />
      </motion.div>
    </section>
  );
};

export default Hero;

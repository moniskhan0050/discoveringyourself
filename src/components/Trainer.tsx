import { motion } from 'framer-motion';
import { MessageCircle, Camera, Phone } from 'lucide-react';

const Trainer = () => {
  return (
    <section id="trainer" className="section-padding bg-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-lavender/30 rounded-full blur-[60px]" />
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-brand-lavender/20 p-2 relative z-10 bg-brand-dark shadow-2xl">
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-brand-lavender uppercase tracking-widest text-xs font-bold mb-4 block">The Mentor</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Owais Ahmad Khan</h2>
            <p className="text-brand-lavender text-xl font-medium mb-8">Trainer & Course Instructor</p>
            <p className="text-lg text-brand-accent/80 font-light leading-relaxed mb-10 max-w-2xl">
              A dedicated course instructor specializing in the science of temperaments. Owais Ahmad Khan has guided thousands of individuals on their path to self-discovery, helping them align their natural strengths with their life goals for a more fulfilling existence.
            </p>
            
            <div className="flex gap-6">
              {[
                { icon: <MessageCircle />, href: "#" },
                { icon: <Camera />, href: "#" },
                { icon: <Phone />, href: "tel:9511712871" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-brand-lavender hover:text-brand-dark transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trainer;

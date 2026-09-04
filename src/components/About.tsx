import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const gains = [
    "Deepen your understanding of yourself and others",
    "Improve your communication and social interactions",
    "Identify your natural strengths and weaknesses",
    "Learn how to unlock your inborn potential",
    "Gain control over your moods and emotions",
    "Build more satisfying relationships and a happier life",
    "Discover what truly motivates you and clarify your goals"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <span className="text-brand-lavender text-xs uppercase tracking-widest font-bold">The Science of Temperaments</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">A Journey Inward</h2>
          <p className="text-lg text-brand-accent/80 font-light leading-relaxed">
            Journey of Discovering Yourself by <strong>Owais Ahmad Khan</strong> is a transformative self-development workshop designed to help participants recognize their uniqueness, natural strengths, weaknesses, and hidden potential.
          </p>
          <p className="text-lg text-brand-accent/80 font-light leading-relaxed">
            Discover your God-given personality through understanding your inborn nature. This workshop helps you reflect, understand, and discover your true nature, allowing you to understand yourself and others better.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-12 relative"
        >
          <h3 className="text-2xl font-serif font-bold mb-8 text-brand-lavender">What you will gain:</h3>
          <ul className="space-y-4">
            {gains.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 text-brand-accent/90"
              >
                <CheckCircle2 className="text-brand-lavender shrink-0" size={20} />
                <span className="font-light">{item}</span>
              </motion.li>
            ))}
          </ul>
          <p className="mt-12 text-brand-lavender font-serif italic text-xl">
            "Begin your journey to becoming the best version of yourself."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

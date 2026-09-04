import { MessageCircle, Camera, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10 glass">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-serif font-bold tracking-widest text-brand-lavender mb-6">JOURNEY OF SELF</h3>
          <p className="text-brand-accent/60 font-light leading-relaxed">
            Begin your journey to becoming the best version of yourself through our transformative personality workshops.
          </p>
        </div>
        
        <div className="flex justify-center gap-8">
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

        <div className="text-center md:text-right">
          <p className="text-brand-accent/40 text-sm">
            © 2024 Owais Ahmad Khan. <br /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: "Al Hamdulillah! Journey of Self Discovery workshop by Owais Ahmad Khan was truly amazing. The uniqueness of this workshop was, it not only helped us know our strengths and weaknesses but also opened a pathway for self reflection and positive change from within.",
    name: "Dr Syed Shaheen",
    loc: "Beed, Maharashtra"
  },
  {
    text: "جزاک اللہ خیرا کثیرا آج پہلی بار اپنے آپ کو جان کر اپنی ذات کے لئے کچھ کرنے کا موقع ملا ہے۔ واقعی آج خود سے خودی تک پہنچے ہیں۔ جزاک اللہ خیرا کثیرا سر. May Allah bless you and grant you success in both worlds. Aameen.",
    name: "Workshop Student",
    loc: "Urdu Feedback",
    isUrdu: true
  },
  {
    text: "The self discovery workshop was detailed and well prepared. New insights and much more was explained in the Journey of Discovering Yourself workshop by course instructor Owais Ahmad Khan Sir.",
    name: "Mohammad Ali",
    loc: "Professional"
  },
  {
    text: "Alhumdulillah. Aaj hum ne apni shaksiyat ko pehchana aur humko apni khoobiyon aur kamiyon ko pehchanne me madad mili. Allah Taala aapko jazay khair ataa kare.",
    name: "Student Feedback",
    loc: "Personal Growth"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding overflow-hidden bg-brand-purple/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Voice of Experience</h2>
          <p className="text-brand-accent/60">What participants say about their transformation journey.</p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className={`glass-card p-8 h-full flex flex-col min-h-[350px] group hover:border-brand-lavender/40 transition-all duration-500`}>
                <div className="mb-6 flex justify-between items-center">
                  <Quote className="text-brand-lavender/20 group-hover:text-brand-lavender/40 transition-colors" size={48} />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-brand-lavender text-brand-lavender" />)}
                  </div>
                </div>
                
                <p className={`text-brand-accent/80 font-light italic mb-8 flex-1 leading-relaxed ${item.isUrdu ? 'urdu-text text-xl' : 'text-base'}`}>
                  "{item.text}"
                </p>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-bold text-white text-lg">{item.name}</h4>
                  <p className="text-brand-lavender text-xs uppercase tracking-widest font-medium">{item.loc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

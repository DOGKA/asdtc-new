import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sun, Zap, Shield, Factory, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { title: 'Solar Jeneratörler', desc: 'Mobil enerji sistemleri', Icon: Sun },
    { title: 'Yüksek Voltaj', desc: 'Güvenlik ekipmanları', Icon: Zap },
    { title: 'İş Güvenliği', desc: 'Endüstriyel çözümler', Icon: Shield },
    { title: 'Güç Yönetimi', desc: 'Özel üretim sistemleri', Icon: Factory },
    { title: 'Otomasyon', desc: 'Dijitalleşme çözümleri', Icon: Cpu },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" ref={ref} className="min-h-[80vh] md:min-h-screen bg-dark relative overflow-hidden flex flex-col">
      {/* Video Background - Blockchain Chain Visual */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://cdn.midjourney.com/video/f17abd48-a22e-4667-be8c-fa9c621893f7/0.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.85 }}
        />
        {/* Subtle Gradient Overlays - Less blocking */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/30 via-transparent to-dark/30" />
      </div>

      {/* Additional Glow Effects */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/10 rounded-full blur-[150px] z-[1]" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/8 rounded-full blur-[100px] z-[1]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col h-full"
        >
          {/* Header - At Top */}
          <motion.div variants={itemVariants} className="text-center pt-12 md:pt-16">
            <span className="text-accent text-xs uppercase tracking-[0.15em] font-medium mb-3 block">ÇÖZÜMLERİMİZ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-4">
              Ne <span className="heading-italic text-accent">Yapıyoruz?</span>
            </h2>
            <p className="text-light-400 text-sm md:text-base max-w-2xl mx-auto">
              Profesyonel saha koşullarının gerektirdiği hassasiyet ve dayanıklılığı merkez alan ileri teknoloji çözümleri geliştiriyoruz.
            </p>
          </motion.div>

          {/* Spacer - Let video breathe */}
          <div className="flex-1 min-h-[150px] md:min-h-[200px]" />

          {/* Services Grid - At Bottom, Smaller */}
          <div className="pb-8 md:pb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl group hover:border-accent/30 transition-all duration-300 backdrop-blur-md flex items-center gap-2"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <service.Icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-light font-medium text-xs md:text-sm">{service.title}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="text-center">
              <Link 
                to="/hakkimizda"
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 font-semibold text-sm text-light bg-accent/10 border border-accent/30 rounded-full hover:bg-accent/20 hover:border-accent/50 transition-all group backdrop-blur-sm"
              >
                <span>Daha Fazla Bilgi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

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
    <section id="about" ref={ref} className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Video Background - Blockchain Chain Visual */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://cdn.midjourney.com/video/f17abd48-a22e-4667-be8c-fa9c621893f7/0.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-transparent to-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
      </div>

      {/* Additional Glow Effects */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/10 rounded-full blur-[150px] z-[1]" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/8 rounded-full blur-[100px] z-[1]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <span className="text-accent text-xs uppercase tracking-[0.15em] font-medium mb-3 block">ÇÖZÜMLERİMİZ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-6">
              Ne <span className="heading-italic text-accent">Yapıyoruz?</span>
            </h2>
            <p className="text-light-400 text-base md:text-lg max-w-3xl mx-auto">
              Profesyonel saha koşullarının gerektirdiği hassasiyet ve dayanıklılığı merkez alan ileri teknoloji çözümleri geliştiriyoruz.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-10 md:mb-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-5 md:p-6 rounded-xl md:rounded-2xl group hover:border-accent/30 transition-all duration-300 text-center backdrop-blur-md"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
                  <service.Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <h4 className="text-light font-semibold text-sm md:text-base mb-1">{service.title}</h4>
                <p className="text-light-500 text-xs md:text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.div variants={itemVariants} className="glass-card p-6 md:p-8 rounded-2xl backdrop-blur-md max-w-4xl mx-auto mb-8">
            <p className="text-light-300 text-sm md:text-base text-center leading-relaxed">
              Müşterilerimizin performanslarını artırmalarına, operasyonel risklerini azaltmalarına ve sürdürülebilirlik 
              hedeflerine ulaşmalarına yardımcı olacak <span className="text-accent font-semibold">akıllı, otomatik ve veri odaklı</span> çözümler üretiriz.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link 
              to="/hakkimizda"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 font-semibold text-light bg-accent/10 border border-accent/30 rounded-full hover:bg-accent/20 hover:border-accent/50 transition-all group backdrop-blur-sm"
            >
              <span>Daha Fazla Bilgi</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

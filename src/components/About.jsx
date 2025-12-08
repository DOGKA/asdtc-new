import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sun, Zap, Shield, Factory, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    { 
      title: 'Solar Jeneratörler', 
      desc: 'Mobil enerji sistemleri ve taşınabilir güç çözümleri.',
      features: ['Taşınabilir Sistemler', 'Yüksek Verimlilik', 'Uzun Ömür'],
      Icon: Sun 
    },
    { 
      title: 'Yüksek Voltaj', 
      desc: 'Endüstriyel güvenlik ekipmanları ve yüksek gerilim sistemleri.',
      features: ['Test Ekipmanları', 'Koruma Sistemleri', 'İzolasyon Çözümleri'],
      Icon: Zap 
    },
    { 
      title: 'İş Güvenliği', 
      desc: 'Endüstriyel iş güvenliği ürünleri ve kişisel koruyucu ekipmanlar.',
      features: ['Kişisel Koruyucu', 'Güvenlik Sistemleri', 'Eğitim Hizmetleri'],
      Icon: Shield 
    },
    { 
      title: 'Güç Yönetimi', 
      desc: 'Özel üretim güç yönetim sistemleri ve enerji optimizasyonu.',
      features: ['Enerji İzleme', 'Akıllı Şebekeler', 'Yük Dengeleme'],
      Icon: Factory 
    },
    { 
      title: 'Otomasyon', 
      desc: 'Dijitalleşme çözümleri ve endüstriyel otomasyon sistemleri.',
      features: ['PLC Sistemleri', 'SCADA Çözümleri', 'IoT Entegrasyonu'],
      Icon: Cpu 
    },
  ];

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services];

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

  // Service Card Component
  const ServiceCard = ({ service, idx }) => (
    <div
      className="glass-card p-4 rounded-xl group hover:border-accent/30 transition-all duration-300 backdrop-blur-md w-[180px] flex-shrink-0"
    >
      {/* Icon & Title */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
          <service.Icon className="w-4 h-4 text-accent" />
        </div>
        <h4 className="text-light font-semibold text-xs">{service.title}</h4>
      </div>
      
      {/* Description */}
      <p className="text-light-500 text-[10px] mb-2 leading-relaxed line-clamp-2">{service.desc}</p>
      
      {/* Features */}
      <ul className="space-y-1">
        {service.features.map((feature, fIdx) => (
          <li key={fIdx} className="flex items-center gap-1.5 text-light-400 text-[10px]">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="about" ref={ref} className="min-h-screen bg-dark relative overflow-hidden flex flex-col">
      {/* CSS for auto-scroll animation */}
      <style>{`
        @keyframes scroll-services {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .auto-scroll-services {
          animation: scroll-services 20s linear infinite;
        }
        .auto-scroll-services.paused {
          animation-play-state: paused;
        }
      `}</style>

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
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/30 via-transparent to-dark/30" />
      </div>

      {/* Additional Glow Effects */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/10 rounded-full blur-[150px] z-[1]" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/8 rounded-full blur-[100px] z-[1]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col flex-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col flex-1"
        >
          {/* Header - At Top */}
          <motion.div variants={itemVariants} className="text-center pt-16 md:pt-20">
            <span className="text-accent text-xs uppercase tracking-[0.15em] font-medium mb-3 block">ÇÖZÜMLERİMİZ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-4">
              Ne <span className="heading-italic text-accent">Yapıyoruz?</span>
            </h2>
            <p className="text-light-400 text-sm md:text-base max-w-2xl mx-auto">
              Profesyonel saha koşullarının gerektirdiği hassasiyet ve dayanıklılığı merkez alan ileri teknoloji çözümleri geliştiriyoruz.
            </p>
          </motion.div>

          {/* Spacer - Push cards to bottom */}
          <div className="flex-1" />

          {/* Services Grid - At Bottom */}
          <div className="pb-8 md:pb-12">
            {/* CTA Button - Above cards */}
            <motion.div variants={itemVariants} className="text-center mb-6 md:mb-8">
              <Link 
                to="/hakkimizda"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5 font-semibold text-sm md:text-base text-light bg-accent/10 border border-accent/30 rounded-full hover:bg-accent/20 hover:border-accent/50 transition-all group backdrop-blur-sm"
              >
                <span>Daha Fazla Bilgi</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Mobile: Auto-scroll with touch pause */}
            <div 
              className="md:hidden overflow-hidden pb-2"
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
            >
              <div className={`flex gap-3 auto-scroll-services ${isPaused ? 'paused' : ''}`}>
                {duplicatedServices.map((service, idx) => (
                  <ServiceCard key={idx} service={service} idx={idx} />
                ))}
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden md:grid md:grid-cols-5 gap-4">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card p-5 rounded-xl group hover:border-accent/30 transition-all duration-300 backdrop-blur-md"
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  {/* Icon & Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                      <service.Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-light font-semibold text-sm">{service.title}</h4>
                  </div>
                  
                  {/* Description */}
                  <p className="text-light-500 text-xs mb-2 leading-relaxed line-clamp-2">{service.desc}</p>
                  
                  {/* Features */}
                  <ul className="space-y-1">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5 text-light-400 text-xs">
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

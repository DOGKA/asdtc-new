import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Target, DollarSign, Wrench, FlaskConical, UserCheck } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { title: 'Zamanında Teslimat', Icon: Zap },
    { title: 'Özel Çözümler', Icon: Target },
    { title: 'Rekabetçi Fiyat', Icon: DollarSign },
    { title: 'İnovatif Ürünler', Icon: Wrench },
    { title: 'AR-GE Kültürü', Icon: FlaskConical },
    { title: 'Uzman Kadro', Icon: UserCheck },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="about" ref={ref} className="py-16 md:py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/5 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-accent/3 rounded-full blur-[80px] md:blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span variants={itemVariants} className="text-accent text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-3 md:mb-4 block">
              HAKKIMIZDA
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-light mb-6 md:mb-8">
              <span className="heading-italic text-accent">Neden</span>{' '}
              <span>Biz?</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-light-300 text-base md:text-lg">
              <p>
                Müşterilerimize yakın olmayı seviyoruz. Müşterilerimizin ihtiyaçlarını analiz ederek 
                birlikte sürekli olarak yeni sektör standartları belirliyoruz.
              </p>
              <p className="hidden md:block">
                Mühendislik alanında sektörün öncüsü 200'den fazla firmayla yaptığı iş ortaklıkları 
                ve binlerce ürün gamıyla statükoya meydan okuyoruz.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 md:mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 font-semibold text-light border border-white/10 rounded-full hover:bg-white/5 hover:border-accent/50 transition-all">
                <span>Daha Fazla</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 md:gap-4"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-4 md:p-6 rounded-xl md:rounded-2xl group hover:border-accent/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h3 className="text-light font-semibold text-sm md:text-lg">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

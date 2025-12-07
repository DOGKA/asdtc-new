import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Target, DollarSign, Wrench, FlaskConical, UserCheck } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { title: 'Zamanında ve Güvenli Teslimat', Icon: Zap },
    { title: 'Müşteriye Özel Çözümler', Icon: Target },
    { title: 'Rekabetçi Fiyatlandırma', Icon: DollarSign },
    { title: 'İnovatif Yedek Parça', Icon: Wrench },
    { title: 'AR-GE Kültürü', Icon: FlaskConical },
    { title: 'Derin Konu Uzmanları', Icon: UserCheck },
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
    <section id="about" ref={ref} className="section-padding bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span variants={itemVariants} className="section-subtitle">
              HAKKIMIZDA
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="section-title text-light mb-8">
              <span className="heading-italic text-accent">Neden</span>{' '}
              <span>Biz?</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-light-300 text-lg">
              <p>
                Müşterilerimize yakın olmayı seviyoruz. Müşterilerimizin ihtiyaçlarını analiz ederek 
                birlikte sürekli olarak yeni sektör standartları belirliyoruz.
              </p>
              <p>
                Mühendislik alanında sektörün öncüsü 200'den fazla firmayla yaptığı iş ortaklıkları 
                ve binlerce ürün gamıyla statükoya meydan okuyoruz.
              </p>
              <p>
                Yüksek etik standartlarımızla yönlenen sürdürülebilir teknolojiye olan saygımız 
                çerçevesinde yürüttüğümüz çalışmalarımız, hizmetlerimiz ve yenilikçi ürünlerimiz 
                sayesinde firmaların büyüme hızlarına katkıda bulunmak için çalışıyoruz.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <a href="#contact" className="btn-outline">
                <span className="flex items-center gap-2">
                  Daha Fazla
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-light font-semibold text-lg">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: '200+', label: 'Çözüm Ortağı' },
            { value: '13', label: 'ISO Sertifikası' },
            { value: '35+', label: 'Ülke' },
            { value: '10+', label: 'Yıllık Deneyim' },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-light-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

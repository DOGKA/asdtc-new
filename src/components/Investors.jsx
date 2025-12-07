import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Lightbulb, Rocket } from 'lucide-react';

const Investors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      Icon: TrendingUp,
      title: 'Sürdürülebilir Büyüme',
      description: 'Yıldan yıla istikrarlı büyüme oranları ile güvenilir yatırım fırsatları.'
    },
    {
      Icon: Users,
      title: 'Güçlü Ekip',
      description: 'Alanında uzman mühendisler ve yöneticilerden oluşan profesyonel kadro.'
    },
    {
      Icon: Lightbulb,
      title: 'İnovasyon Odaklı',
      description: 'AR-GE yatırımlarıyla sürekli gelişen ürün ve hizmet portföyü.'
    },
    {
      Icon: Rocket,
      title: 'Global Erişim',
      description: '35+ ülkede faaliyet gösteren geniş çözüm ortakları ağı.'
    },
  ];

  return (
    <section id="investors" ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-50 to-dark z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20 z-0" />

      {/* Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] z-0" />

      <div className="container-custom relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">YATIRIMCILAR İÇİN</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-6 leading-tight">
              <span className="heading-italic text-accent">Hemen Katılın,</span>
              <br />
              <span>Fikirlerinize Birlikte</span>
              <br />
              <span className="gradient-text">Hayat Verelim</span>
            </h2>
            <p className="text-light-300 text-lg mb-8 max-w-lg">
              ASDTC Mühendislik ile yatırım fırsatlarını keşfedin. Teknoloji odaklı projelerimize 
              ortak olun ve geleceği birlikte inşa edelim.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                <span className="relative z-10 flex items-center gap-2">
                  Yatırımcı Ol
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </a>
              <a href="/uploads/files/asdtc-presentation.pdf" target="_blank" className="btn-outline">
                <span className="flex items-center gap-2">
                  Sunum İndir
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right - Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="glass-card p-6 rounded-2xl group hover:border-accent/30 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-light font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-light-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent z-10" />
    </section>
  );
};

export default Investors;

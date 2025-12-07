import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Main Content */}
      <main className="container mx-auto lg:px-12 lg:pt-0 min-h-screen flex flex-col lg:flex-row z-10 pt-0 px-6 relative items-center">
        
        {/* Left Column: Copy */}
        <div className="lg:w-1/2 flex flex-col lg:py-0 lg:mt-0 w-full mt-24 pt-12 pb-20 justify-center">
          
          {/* Status Badge */}
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase mb-8 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
            </span>
            System Operational
          </motion.h4>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:text-7xl leading-[1.1] text-5xl tracking-tight mb-6"
          >
            <span className="text-[#38BDF8] italic font-serif" style={{ textShadow: '0 0 60px rgba(56, 189, 248, 0.3)' }}>
              Hassasiyetle Yönetilen
            </span>
            <br />
            <span className="text-white font-bold opacity-90">Güç Çözümleri.</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-xl lg:text-2xl font-light text-white/70 leading-relaxed tracking-tight max-w-xl mb-12"
          >
            Zorlu operasyon koşullarında görev yapan profesyoneller için geliştirilmiş ileri teknoloji çözümleri.
            Solar jeneratörlerden yüksek voltaj sistemlerine, iş güvenliği ekipmanlarından endüstriyel güç yönetimine 
            uzanan geniş, güvenilir ve mühendislik odaklı bir ürün portföyü.
          </motion.p>
        </div>

        {/* Right Column: Empty - Unicorn Studio shows through */}
        <div className="lg:w-1/2 lg:h-[800px] flex w-full h-[500px] relative items-center justify-center">
          {/* Floating Labels */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute top-[20%] lg:top-[25%] left-[10%] lg:left-[15%] flex flex-col items-end"
          >
            <span className="text-xs font-mono text-[#38BDF8] tracking-widest mb-1 opacity-80">ZERO LATENCY</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-[#38BDF8] to-transparent"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="absolute bottom-[20%] lg:bottom-[25%] right-[10%] lg:right-[15%] flex flex-col items-start"
          >
            <span className="text-xs font-mono text-[#38BDF8] tracking-widest mb-1 opacity-80">ISO CERTIFIED</span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-[#38BDF8] to-transparent"></div>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Hero;

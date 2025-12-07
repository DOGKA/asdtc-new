import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    let scene = null;
    
    const initScene = async () => {
      if (!containerRef.current || !window.UnicornStudio) return;
      
      try {
        scene = await window.UnicornStudio.addScene({
          elementId: 'hero-unicorn-bg',
          projectId: 'fjbBSA4l2Yhmm3dAj8ff',
          scale: 1,
          dpi: 1.5,
          fps: 60,
          lazyLoad: false,
          production: true,
        });
        setSceneReady(true);
      } catch (err) {
        console.error('Hero Unicorn init error:', err);
      }
    };

    const checkAndInit = () => {
      if (window.UnicornStudio && typeof window.UnicornStudio.addScene === 'function') {
        initScene();
      } else {
        setTimeout(checkAndInit, 500);
      }
    };

    checkAndInit();

    return () => {
      if (scene && scene.destroy) {
        scene.destroy();
      }
    };
  }, []);

  const partnerLogos = [
    { name: 'IEETek', logo: '/images/hero-logos/ieetek-logo-white.png', invert: false, size: 'h-8 sm:h-10 md:h-12' },
    { name: 'RGP Balls', logo: '/images/hero-logos/rgp-logo-white.svg', invert: false, size: 'h-10 sm:h-12 md:h-14' },
    { name: 'Telescopics', logo: '/images/hero-logos/telescopics-white.png', invert: false, size: 'h-10 sm:h-12 md:h-14' },
    { name: 'Traffi Gloves', logo: '/images/hero-logos/traffi-black.png', invert: true, size: 'h-12 sm:h-14 md:h-16' },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#030508]">
      {/* Unicorn Studio Background */}
      <div 
        id="hero-unicorn-bg"
        ref={containerRef}
        className="absolute inset-0 z-0"
        style={{ 
          width: '100%', 
          height: '115%',
          top: '-5%',
          clipPath: 'inset(0 0 12% 0)'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/30 md:from-dark/70 md:via-dark/30 md:to-transparent z-5 pointer-events-none" />
      
      {/* Bottom Partner Logos Overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{
          background: 'linear-gradient(to top, #030508 0%, #030508 60%, transparent 100%)'
        }}
      >
        <div className="w-full px-4 pb-6 md:pb-10">
          {/* Mobile: Scrollable, Desktop: Centered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-8 md:gap-12 lg:gap-16 overflow-x-auto md:overflow-visible md:justify-center scrollbar-hide pb-2"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {partnerLogos.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                className="flex-shrink-0"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className={`${partner.size} w-auto max-w-[180px] md:max-w-[200px] object-contain opacity-90 hover:opacity-100 transition-all duration-300`}
                  style={{ filter: partner.invert ? 'invert(1) brightness(1.1)' : 'brightness(1.1)' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 lg:px-12 min-h-screen flex flex-col justify-center z-10 relative pt-20 md:pt-0">
        
        <div className="w-full max-w-3xl lg:max-w-none lg:w-3/5 flex flex-col justify-center relative z-20">
          
          {/* Status Badge */}
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[10px] md:text-xs font-mono tracking-[0.15em] md:tracking-[0.2em] text-white/40 uppercase mb-4 md:mb-6 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005aaf] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005aaf]"></span>
            </span>
            SİSTEM AKTİF
          </motion.h4>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] tracking-tight mb-6 md:mb-8"
          >
            <span className="text-[#005aaf] italic font-serif" style={{ textShadow: '0 0 60px rgba(0, 90, 175, 0.3)' }}>
              İleri Ar-Ge Tabanlı
            </span>
            <br />
            <span className="text-white font-bold opacity-90">Güç Sistemleri.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-light-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl"
          >
            Güneş enerjisinden yüksek voltaj teknolojilerine, güç elektroniğinden endüstriyel otomasyona 
            uzanan geniş bir alanda çok disiplinli Ar-Ge çalışmalarıyla geliştirilen yüksek hassasiyetli enerji çözümleri sunulur.
          </motion.p>
        </div>
      </main>
    </section>
  );
};

export default Hero;

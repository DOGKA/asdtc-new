import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Cog, TrendingUp } from 'lucide-react';

const TechShowcase = () => {
  const containerRef = useRef(null);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    let scene = null;
    
    const initScene = async () => {
      if (!containerRef.current || !window.UnicornStudio) return;
      
      try {
        scene = await window.UnicornStudio.addScene({
          elementId: 'unicorn-tech-container',
          projectId: 'AjzBMDUsF9UTzH7uPVBc',
          scale: 1,
          dpi: 1.5,
          fps: 60,
          lazyLoad: true,
          production: true,
        });
        setSceneReady(true);
      } catch (err) {
        console.error('Tech Showcase init error:', err);
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

  const techFeatures = [
    { icon: FlaskConical, text: 'AR-GE Odaklı' },
    { icon: Cog, text: 'Mühendislik' },
    { icon: TrendingUp, text: 'Sürekli Gelişim' },
  ];

  return (
    <section 
      id="tech" 
      className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-[#030508]"
    >
      {/* Unicorn Studio Container */}
      <div 
        id="unicorn-tech-container"
        ref={containerRef}
        className="absolute inset-0 z-0"
        style={{ 
          width: '100%', 
          height: '120%',
          top: '-10%',
          clipPath: 'inset(0 0 18% 0)'
        }}
      />

      {/* Styled Bottom Overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          background: 'linear-gradient(to top, #030508 0%, #030508 60%, transparent 100%)'
        }}
      >
        <div className="container mx-auto px-4 pb-8 md:pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            {/* Styled Text */}
            <div className="glass-card px-6 py-4 md:px-10 md:py-6 rounded-2xl md:rounded-3xl border border-accent/10 mb-6 max-w-3xl">
              <p className="text-light-300 text-sm md:text-base lg:text-lg leading-relaxed">
                <span className="text-accent font-medium">En son teknolojileri</span> kullanarak sektörde fark yaratıyoruz. 
                <span className="hidden md:inline"> AR-GE odaklı yaklaşımımız ve yenilikçi çözümlerimizle </span>
                <span className="md:hidden"> </span>
                <span className="text-light-100 font-medium">geleceği bugünden inşa ediyoruz.</span>
              </p>
            </div>

            {/* Decorative line */}
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-5" />
            
            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {techFeatures.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 glass-card rounded-full hover:border-accent/40 transition-all cursor-default"
                >
                  <item.icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-xs md:text-sm text-light-200 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Top gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-16 md:h-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #030508 0%, transparent 100%)'
        }}
      />
    </section>
  );
};

export default TechShowcase;

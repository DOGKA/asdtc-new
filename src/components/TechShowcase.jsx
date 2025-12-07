import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const TechShowcase = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
        });
        setSceneReady(true);
      } catch (err) {
        console.error('Tech Showcase init error:', err);
      }
    };

    // Wait for UnicornStudio to be available
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

  return (
    <section 
      id="tech" 
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#030508]"
    >
      {/* Unicorn Studio - TEKNOLOJI 3D Container */}
      <div 
        id="unicorn-tech-container"
        ref={containerRef}
        className="absolute inset-0 z-0"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/80 z-5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-transparent to-dark/50 z-5 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 container-custom text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="section-subtitle">MÜHENDİSLİK GÜCÜ</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-6 leading-tight">
            <span>Teknoloji ile</span>
            <br />
            <span className="gradient-text">Dönüşüm</span>
          </h2>
          <p className="text-light-300 text-lg md:text-xl max-w-2xl mx-auto">
            En son teknolojileri kullanarak sektörde fark yaratıyoruz. 
            AR-GE odaklı yaklaşımımız ve yenilikçi çözümlerimizle geleceği bugünden inşa ediyoruz.
          </p>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent z-10" />
    </section>
  );
};

export default TechShowcase;

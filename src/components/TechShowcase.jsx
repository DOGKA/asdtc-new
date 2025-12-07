import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <section 
      id="tech" 
      className="relative h-[70vh] overflow-hidden bg-[#030508]"
    >
      {/* Unicorn Studio Container - clipped at bottom to hide watermark */}
      <div 
        id="unicorn-tech-container"
        ref={containerRef}
        className="absolute inset-0 z-0"
        style={{ 
          width: '100%', 
          height: '120%',
          top: '-10%',
          clipPath: 'inset(0 0 15% 0)'
        }}
      />

      {/* Bottom gradient with text overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none flex items-end justify-center pb-8"
        style={{
          background: 'linear-gradient(to top, #030508 0%, #030508 40%, transparent 100%)'
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-light-300 text-center text-lg md:text-xl max-w-3xl px-6 leading-relaxed"
        >
          En son teknolojileri kullanarak sektörde fark yaratıyoruz. AR-GE odaklı 
          yaklaşımımız ve yenilikçi çözümlerimizle geleceği bugünden inşa ediyoruz.
        </motion.p>
      </div>

      {/* Top gradient for smooth transition */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #030508 0%, transparent 100%)'
        }}
      />
    </section>
  );
};

export default TechShowcase;

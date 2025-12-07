import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Rocket } from 'lucide-react';

const UnicornShowcase = () => {
  const containerRef = useRef(null);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    let scene = null;
    
    const initScene = async () => {
      if (!containerRef.current || !window.UnicornStudio) return;
      
      try {
        scene = await window.UnicornStudio.addScene({
          elementId: 'unicorn-showcase-container',
          projectId: 'tBMAIn8s6qF567Lm8aoO',
          scale: 1,
          dpi: 1.5,
          fps: 60,
          lazyLoad: false,
          production: true,
        });
        setSceneReady(true);
      } catch (err) {
        console.error('Unicorn Showcase init error:', err);
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

  const highlights = [
    { icon: Sparkles, text: 'İleri Teknoloji' },
    { icon: Lightbulb, text: 'İnovasyon' },
    { icon: Rocket, text: 'Mükemmellik' },
  ];

  return (
    <section 
      id="showcase" 
      className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-[#030508]"
    >
      {/* Unicorn Studio Container */}
      <div 
        id="unicorn-showcase-container"
        ref={containerRef}
        className="absolute inset-0 z-0"
        style={{ 
          width: '100%', 
          height: '120%',
          top: '-10%',
          clipPath: 'inset(0 0 18% 0)'
        }}
      />

      {/* Styled Bottom Overlay - Only covers watermark area */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 h-32 md:h-40"
        style={{
          background: 'linear-gradient(to top, #030508 0%, #030508 70%, transparent 100%)'
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-end pb-4 md:pb-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center w-full gap-3 md:gap-6"
          >
            {/* Styled Text - Compact */}
            <div className="glass-card px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl border border-accent/10 max-w-2xl">
              <p className="text-light-300 text-xs md:text-sm leading-relaxed text-center">
                <span className="text-accent font-medium">İleri teknoloji çözümlerimizle</span> sektörde fark yaratıyoruz. 
                <span className="text-light-100 font-medium"> Geleceğin standartlarını belirliyoruz.</span>
              </p>
            </div>
            
            {/* Feature pills - Horizontal */}
            <div className="flex gap-2">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-1.5 px-3 py-1.5 glass-card rounded-full hover:border-accent/40 transition-all cursor-default"
                >
                  <item.icon className="w-3 h-3 text-accent" />
                  <span className="text-[10px] md:text-xs text-light-200 font-medium">{item.text}</span>
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

export default UnicornShowcase;

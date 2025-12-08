import React, { useRef, useEffect, useState } from 'react';

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
          projectId: 'tWPCjHsYJkGOedx4qdIV',
          scale: 1,
          dpi: 1.5,
          fps: 60,
          lazyLoad: false,
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
          clipPath: 'inset(0 0 15% 0)'
        }}
      />

      {/* Bottom gradient to hide watermark */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #030508 0%, transparent 100%)'
        }}
      />

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

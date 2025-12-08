import React, { useRef, useEffect, useState } from 'react';

const TechShowcase = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Intersection Observer to only load when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInitialized) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isInitialized]);

  useEffect(() => {
    if (!isVisible || isInitialized) return;
    
    let isMounted = true;
    
    const initScene = async () => {
      if (!containerRef.current || !window.UnicornStudio || sceneRef.current) return;
      
      try {
        // Add delay to prevent simultaneous WebGL context creation
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        if (!isMounted) return;
        
        sceneRef.current = await window.UnicornStudio.addScene({
          elementId: 'unicorn-tech-container',
          projectId: 'mJasaGICihynRVRAQ840',
          scale: 1,
          dpi: 1,
          fps: 30,
          lazyLoad: true,
          production: true,
        });
        
        setIsInitialized(true);
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
      isMounted = false;
      if (sceneRef.current && sceneRef.current.destroy) {
        try {
          sceneRef.current.destroy();
        } catch (e) {}
        sceneRef.current = null;
      }
    };
  }, [isVisible, isInitialized]);

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

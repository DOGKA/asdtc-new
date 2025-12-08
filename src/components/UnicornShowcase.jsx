import React, { useRef, useEffect, useState } from 'react';

const UnicornShowcase = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer - trigger when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize scene when visible
  useEffect(() => {
    if (!isVisible) return;
    if (sceneRef.current) return;
    
    let isMounted = true;
    
    const initScene = async () => {
      if (!containerRef.current || !window.UnicornStudio) return;
      
      try {
        // Small delay to stagger loading
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (!isMounted || sceneRef.current) return;
        
        sceneRef.current = await window.UnicornStudio.addScene({
          elementId: 'unicorn-showcase-container',
          projectId: '3b09XPiXLTs7EPcMRGOg',
          scale: 1,
          dpi: 1,
          fps: 30,
          lazyLoad: false,
          production: true,
        });
        
        // Hide watermark
        setTimeout(() => {
          const watermarks = document.querySelectorAll('#unicorn-showcase-container a[href*="unicorn.studio"]');
          watermarks.forEach(el => el.style.display = 'none');
        }, 2000);
      } catch (err) {
        console.error('Unicorn Showcase init error:', err);
      }
    };

    const checkAndInit = () => {
      if (window.UnicornStudio && typeof window.UnicornStudio.addScene === 'function') {
        initScene();
      } else {
        setTimeout(checkAndInit, 300);
      }
    };

    checkAndInit();

    return () => {
      isMounted = false;
    };
  }, [isVisible]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (sceneRef.current && sceneRef.current.destroy) {
        try {
          sceneRef.current.destroy();
        } catch (e) {}
        sceneRef.current = null;
      }
    };
  }, []);

  return (
    <section 
      id="showcase" 
      className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-[#030508]"
    >
      {/* CSS to hide watermark */}
      <style>{`
        #unicorn-showcase-container a[href*="unicorn.studio"],
        #unicorn-showcase-container a[target="_blank"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `}</style>

      {/* Unicorn Studio Container */}
      <div 
        id="unicorn-showcase-container"
        ref={containerRef}
        className="absolute inset-0 z-0"
        style={{ 
          width: '100%', 
          height: '130%',
          top: '-15%',
          clipPath: 'inset(0 0 20% 0)'
        }}
      />

      {/* Bottom gradient to hide watermark */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 h-32 md:h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #030508 0%, #030508 30%, transparent 100%)'
        }}
      />

      {/* Top gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 md:h-24 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #030508 0%, transparent 100%)'
        }}
      />

      {/* Side gradients for mobile */}
      <div 
        className="absolute top-0 bottom-0 left-0 w-8 md:w-16 z-10 pointer-events-none md:hidden"
        style={{
          background: 'linear-gradient(to right, #030508 0%, transparent 100%)'
        }}
      />
      <div 
        className="absolute top-0 bottom-0 right-0 w-8 md:w-16 z-10 pointer-events-none md:hidden"
        style={{
          background: 'linear-gradient(to left, #030508 0%, transparent 100%)'
        }}
      />
    </section>
  );
};

export default UnicornShowcase;

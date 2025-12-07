import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Direct imports for Unicorn Studio components (faster loading)
import UnicornShowcase from './components/UnicornShowcase';
import TechShowcase from './components/TechShowcase';

// Lazy load other components for performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const SocialResponsibility = lazy(() => import('./components/SocialResponsibility'));
const Certifications = lazy(() => import('./components/Certifications'));
const Partners = lazy(() => import('./components/Partners'));
const Investors = lazy(() => import('./components/Investors'));
const Career = lazy(() => import('./components/Career'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
    <div className="relative">
      <div className="w-16 h-16 border-2 border-accent/20 rounded-full" />
      <div className="absolute inset-0 w-16 h-16 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  </div>
);

function App() {
  const bgContainerRef = useRef(null);
  const sceneRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll polyfill
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize global Unicorn Studio background
    const initGlobalBg = async () => {
      if (!bgContainerRef.current || !window.UnicornStudio) return;
      if (sceneRef.current) return; // Already initialized
      
      try {
        sceneRef.current = await window.UnicornStudio.addScene({
          elementId: 'global-unicorn-bg',
          projectId: '57giSjADENHL0lLmNR1A',
          scale: 1,
          dpi: 1,
          fps: 60,
          lazyLoad: false,
          fixed: true,
        });
      } catch (err) {
        console.error('Global Unicorn init error:', err);
      }
    };

    // Wait for UnicornStudio to be available
    const checkAndInit = () => {
      if (window.UnicornStudio && typeof window.UnicornStudio.addScene === 'function') {
        initGlobalBg();
      } else {
        setTimeout(checkAndInit, 300);
      }
    };

    // Start checking quickly
    const timer = setTimeout(checkAndInit, 200);

    return () => {
      clearTimeout(timer);
      if (sceneRef.current && sceneRef.current.destroy) {
        sceneRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark overflow-x-hidden">
      {/* Unicorn Studio Global Background - BEHIND EVERYTHING */}
      <div 
        id="global-unicorn-bg"
        ref={bgContainerRef}
        className="fixed inset-0 w-full h-screen pointer-events-none"
        style={{ 
          zIndex: -1,
          maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'
        }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-light to-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <main>
          <Hero />
          <About />
          <SocialResponsibility />
          <Certifications />
          <Partners />
          <UnicornShowcase />
          <Investors />
          <TechShowcase />
          <Career />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

import React, { Suspense, lazy, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Lazy load components for performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const SocialResponsibility = lazy(() => import('./components/SocialResponsibility'));
const Certifications = lazy(() => import('./components/Certifications'));
const Partners = lazy(() => import('./components/Partners'));
const UnicornShowcase = lazy(() => import('./components/UnicornShowcase'));
const Investors = lazy(() => import('./components/Investors'));
const TechShowcase = lazy(() => import('./components/TechShowcase'));
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll polyfill
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-dark overflow-x-hidden">
      {/* Unicorn Studio Global Background - BEHIND HEADER */}
      <div 
        className="fixed inset-0 w-full h-screen -z-10"
        style={{ 
          maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'
        }}
      >
        <div 
          data-us-project="57giSjADENHL0lLmNR1A" 
          className="absolute inset-0 w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-light to-cyan-300 origin-left z-[100]"
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

import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// Pages
const InternshipForm = lazy(() => import('./pages/InternshipForm'));
const SheqPolicy = lazy(() => import('./pages/SheqPolicy'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Glossary = lazy(() => import('./pages/Glossary'));

// Loading component
const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
    <div className="relative">
      <div className="w-16 h-16 border-2 border-accent/20 rounded-full" />
      <div className="absolute inset-0 w-16 h-16 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  </div>
);

// Homepage component
const HomePage = ({ bgContainerRef, sceneRef }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const initGlobalBg = async () => {
      if (!bgContainerRef.current || !window.UnicornStudio) return;
      if (sceneRef.current) return;
      
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

    const checkAndInit = () => {
      if (window.UnicornStudio && typeof window.UnicornStudio.addScene === 'function') {
        initGlobalBg();
      } else {
        setTimeout(checkAndInit, 300);
      }
    };

    const timer = setTimeout(checkAndInit, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [bgContainerRef, sceneRef]);

  return (
    <>
      {/* Unicorn Studio Global Background */}
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
    </>
  );
};

function App() {
  const bgContainerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    return () => {
      if (sceneRef.current && sceneRef.current.destroy) {
        sceneRef.current.destroy();
      }
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-dark overflow-x-hidden">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage bgContainerRef={bgContainerRef} sceneRef={sceneRef} />} />
            <Route path="/staj-basvurusu" element={
              <>
                <Header />
                <InternshipForm />
                <Footer />
              </>
            } />
            <Route path="/sheq" element={
              <>
                <Header />
                <SheqPolicy />
                <Footer />
              </>
            } />
            {/* Blog Routes */}
            <Route path="/blog" element={
              <>
                <Header />
                <BlogList />
                <Footer />
              </>
            } />
            <Route path="/blog/:slug" element={
              <>
                <Header />
                <BlogPost />
                <Footer />
              </>
            } />
            {/* Glossary / Sözlük */}
            <Route path="/sozluk" element={
              <>
                <Header />
                <Glossary />
                <Footer />
              </>
            } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

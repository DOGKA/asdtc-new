import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu structure (Üretim yok!)
  const menuItems = [
    {
      title: 'KURUMSAL',
      submenu: [
        { name: 'Hakkımızda', href: '#about' },
        { name: 'Neler Yapıyoruz?', href: '#services' },
        { name: 'Sosyal Sorumluluk', href: '#social' },
        { name: 'Belgelerimiz', href: '#certifications' },
      ]
    },
    {
      title: 'ÇÖZÜM ORTAKLARIMIZ',
      submenu: [
        { name: 'Çözüm Ortakları', href: '#partners' },
        { name: 'Yatırımcılar İçin', href: '#investors' },
      ]
    },
    {
      title: 'IK YAKLAŞIMI',
      submenu: [
        { name: 'İş Olanakları', href: '#career' },
        { name: 'Yolculuğa Hazır mısın?', href: '#journey' },
        { name: 'Staj İmkanları', href: '/staj-basvurusu', isPage: true },
      ]
    },
    { title: 'SHEQ', href: '/sheq', isPage: true },
    {
      title: 'BLOG',
      submenu: [
        { name: 'Tüm Yazılar', href: '/blog', isPage: true },
        { name: 'Sözlük', href: '/sozluk', isPage: true },
      ]
    },
    { title: 'İLETİŞİM', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-dark-50/95 backdrop-blur-xl shadow-2xl border-b border-glass-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/asdtc-logo-new.png" 
                alt="ASDTC" 
                className="h-16 w-auto max-w-[220px] object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.isPage ? (
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm font-medium text-light-300 hover:text-accent transition-colors flex items-center gap-1"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <a
                      href={item.href || '#'}
                      className="px-4 py-2 text-sm font-medium text-light-300 hover:text-accent transition-colors flex items-center gap-1"
                    >
                      {item.title}
                      {item.submenu && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </a>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl overflow-hidden shadow-xl"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          subItem.isPage ? (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block px-4 py-3 text-sm text-light-300 hover:text-accent hover:bg-glass-hover transition-all border-b border-glass-border last:border-0"
                            >
                              {subItem.name}
                            </Link>
                          ) : (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-light-300 hover:text-accent hover:bg-glass-hover transition-all border-b border-glass-border last:border-0"
                            >
                              {subItem.name}
                            </a>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button - Glassmorphism */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="#contact" 
                className="relative text-sm py-3 px-6 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 group overflow-hidden"
                style={{
                  background: 'rgba(0, 90, 175, 0.2)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 90, 175, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 90, 175, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#005aaf]/30 to-[#007bff]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Teklif Al</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-12 h-12 glass-card rounded-xl flex items-center justify-center"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-light transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-full h-0.5 bg-light transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-light transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-dark-50 border-l border-glass-border overflow-y-auto">
              <div className="p-6 pt-24">
                {menuItems.map((item, index) => (
                  <div key={index} className="mb-4">
                    {item.isPage ? (
                      <Link
                        to={item.href}
                        className="block py-3 text-lg font-semibold text-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <a
                        href={item.href || '#'}
                        className="block py-3 text-lg font-semibold text-light"
                        onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    )}
                    {item.submenu && (
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          subItem.isPage ? (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block py-2 text-light-400 hover:text-accent transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ) : (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block py-2 text-light-400 hover:text-accent transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a 
                  href="#contact" 
                  className="relative w-full mt-6 text-center py-3 px-6 rounded-full font-medium text-white transition-all duration-300 block"
                  style={{
                    background: 'rgba(0, 90, 175, 0.25)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 90, 175, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 90, 175, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Teklif Al</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;


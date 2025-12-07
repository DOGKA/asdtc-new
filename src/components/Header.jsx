import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        { name: 'Staj İmkanları', href: '#internship' },
      ]
    },
    { title: 'SHEQ', href: '#sheq' },
    { title: 'BLOG', href: '#blog' },
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
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/asdtc-logo.webp" 
                alt="ASDTC" 
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
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
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-light-300 hover:text-accent hover:bg-glass-hover transition-all border-b border-glass-border last:border-0"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#contact" className="btn-primary text-sm py-3 px-6">
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
                    <a
                      href={item.href || '#'}
                      className="block py-3 text-lg font-semibold text-light"
                      onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                    {item.submenu && (
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block py-2 text-light-400 hover:text-accent transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a 
                  href="#contact" 
                  className="btn-primary w-full mt-6 text-center"
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


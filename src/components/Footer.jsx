import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Youtube, Facebook, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    kurumsal: [
      { name: 'Hakkımızda', href: '#about' },
      { name: 'Neler Yapıyoruz?', href: '#services' },
      { name: 'Belgelerimiz', href: '#certifications' },
      { name: 'SHEQ Politikası', href: '#sheq' },
    ],
    cozumler: [
      { name: 'Çözüm Ortakları', href: '#partners' },
      { name: 'Yatırımcılar', href: '#investors' },
      { name: 'E-Kitaplar', href: '/elektronik-kitaplar' },
      { name: 'Dokümanlar', href: '/dokumanlar' },
    ],
    kariyer: [
      { name: 'İş Olanakları', href: '#career' },
      { name: 'Staj İmkanları', href: '#internship' },
      { name: 'Başvur', href: '#contact' },
    ],
  };

  const socialLinks = [
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-dark-50 relative overflow-hidden">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img 
                src="/asdtc-logo-new.png" 
                alt="ASDTC" 
                className="h-14 w-auto max-w-[200px] object-contain"
              />
            </a>
            <p className="text-light-400 mb-6 max-w-sm">
              Mühendislik alanında sektörün öncüsü firmalarla güçlü iş ortaklıkları. 
              Perfection at Every Level.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+903124412117" className="flex items-center gap-3 text-light-400 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+90 (312) 441-2117</span>
              </a>
              <a href="mailto:info@asdtc.com" className="flex items-center gap-3 text-light-400 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@asdtc.com</span>
              </a>
              <a 
                href="https://maps.google.com/?q=Yıldızevler+Cezayir+Cd+6/6+Çankaya+Ankara" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-light-400 hover:text-accent transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Yıldızevler, Cezayir Cd. 6/6,<br />06550 Çankaya/Ankara</span>
              </a>
            </div>
          </div>

          {/* Links - Kurumsal */}
          <div>
            <h4 className="text-light font-semibold mb-5">Kurumsal</h4>
            <ul className="space-y-3">
              {footerLinks.kurumsal.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-light-400 hover:text-accent transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Çözümler */}
          <div>
            <h4 className="text-light font-semibold mb-5">Çözümler</h4>
            <ul className="space-y-3">
              {footerLinks.cozumler.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-light-400 hover:text-accent transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    {link.href.startsWith('/') && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Kariyer */}
          <div>
            <h4 className="text-light font-semibold mb-5">Kariyer</h4>
            <ul className="space-y-3">
              {footerLinks.kariyer.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-light-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-light-500 text-sm">
              ASDTC &copy; {new Date().getFullYear()} - Tüm Hakları Saklıdır
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-light-400 hover:text-accent hover:border-accent/30 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <social.Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="/data-protection-notice" className="text-light-500 hover:text-accent transition-colors">
                Veri Koruma
              </a>
              <a href="#" className="text-light-500 hover:text-accent transition-colors">
                Çerezler
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


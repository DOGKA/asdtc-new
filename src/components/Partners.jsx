import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [pausedRows, setPausedRows] = useState({ row1: false, row2: false, row3: false });

  // Partner companies with logos
  const partners = [
    { name: 'Fastline PCB', logo: '/images/companylogos/fastlinepcb.webp' },
    { name: 'Lixpen', logo: '/images/companylogos/lixpen.jpg' },
    { name: 'Sharebot', logo: '/images/companylogos/sharebots.jpg' },
    { name: 'Cleeve Technology', logo: '/images/companylogos/cleevetech.png' },
    { name: 'Ftech GNSS', logo: '/images/companylogos/ftech.png' },
    { name: 'Mantis Vision', logo: '/images/companylogos/mantisvision.jpg' },
    { name: 'Xsis Electronics', logo: '/images/companylogos/xsis.png' },
    { name: 'Farnell', logo: '/images/companylogos/farnell.png' },
    { name: 'SIT Integration', logo: '/images/companylogos/sitintegration.jpg' },
    { name: 'Pars Komponenty', logo: '/images/companylogos/partscomp.png' },
    { name: 'Loctite', logo: '/images/companylogos/loctite.jpg' },
    { name: 'Epsilor Industries', logo: '/images/companylogos/epsilo.jpg' },
    { name: 'YIC', logo: '/images/companylogos/YIC.png' },
    { name: 'Scarabee', logo: '/images/companylogos/scrarabee.png' },
    { name: 'Glosec', logo: '/images/companylogos/glosec.jpg' },
    { name: 'RS Components', logo: '/images/companylogos/rscompatentn.jpg' },
    { name: 'Tersus GNSS', logo: '/images/companylogos/tersusgnss.jpg' },
    { name: 'Laipac Technology', logo: '/images/companylogos/laipac.jpg' },
    { name: 'Switchcraft Conxall', logo: '/images/companylogos/switchcraft.png' },
    { name: 'Fastact', logo: '/images/companylogos/fastac.png' },
    { name: 'CUAV', logo: '/images/companylogos/cuav-logo.png' },
    { name: 'iniVation', logo: '/images/companylogos/inivation.jpg' },
    { name: 'Traffi Gloves', logo: '/images/companylogos/traffigloves.jpg' },
    { name: '3M Company', logo: '/images/companylogos/3mcompany.png' },
    { name: 'Honeywell', logo: '/images/companylogos/honeywell.png' },
    { name: 'Henkel', logo: '/images/companylogos/henkell.png' },
    { name: 'Tesa Tape', logo: '/images/companylogos/tesa.png' },
    { name: 'Molykote', logo: '/images/companylogos/molykote.png' },
    { name: 'HTC Parking', logo: '/images/companylogos/htcparking.png' },
    { name: 'Amptec Research', logo: '/images/companylogos/amptecresearch.png' },
    { name: 'Dakota Air Parts', logo: '/images/companylogos/dakotaair.png' },
    { name: 'IPS International', logo: '/images/companylogos/ips.jpg' },
    { name: 'IEETek', logo: '/images/companylogos/ieetek-logo.png' },
  ];

  // Logo Card Component
  const LogoCard = ({ logo, name, mobile = false }) => (
    <div className={`flex-shrink-0 ${mobile ? 'w-36 h-24' : 'w-52 h-32'} bg-white rounded-xl flex items-center justify-center ${mobile ? 'p-3' : 'p-5'} border border-white/20 hover:border-accent/30 transition-all duration-300 hover:scale-105 shadow-lg`}>
      <img 
        src={logo} 
        alt={name} 
        className={`${mobile ? 'max-h-14' : 'max-h-20'} max-w-full w-auto object-contain`}
        loading="lazy"
      />
    </div>
  );

  // Marquee Row with auto-scroll for both mobile and desktop
  const MarqueeRow = ({ items, reverse = false, speed = 30, rowKey }) => {
    const isPaused = pausedRows[rowKey];
    
    const handlePause = () => {
      setPausedRows(prev => ({ ...prev, [rowKey]: true }));
      setTimeout(() => {
        setPausedRows(prev => ({ ...prev, [rowKey]: false }));
      }, 3000);
    };
    
    return (
      <>
        {/* Mobile: Auto-scrolling marquee with manual scroll */}
        <div 
          className="md:hidden overflow-x-auto scrollbar-hide py-2 -mx-4"
          onTouchStart={handlePause}
          onScroll={handlePause}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div 
            className="flex items-center gap-3 px-4"
            style={{
              animation: isPaused ? 'none' : `${reverse ? 'scroll-x-reverse' : 'scroll-x'} ${speed}s linear infinite`,
              minWidth: 'max-content',
            }}
          >
            {/* Triple the items for seamless loop on mobile */}
            {[...items, ...items, ...items].map((partner, index) => (
              <LogoCard key={index} logo={partner.logo} name={partner.name} mobile />
            ))}
          </div>
        </div>
        
        {/* Desktop: Auto marquee with drag */}
        <div className="hidden md:block overflow-hidden py-2">
          <motion.div
            className="flex items-center gap-4 cursor-grab active:cursor-grabbing"
            animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: speed,
                ease: 'linear'
              }
            }}
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            dragElastic={0.1}
          >
            {/* Double the items for seamless loop */}
            {[...items, ...items].map((partner, index) => (
              <LogoCard key={index} logo={partner.logo} name={partner.name} />
            ))}
          </motion.div>
        </div>
      </>
    );
  };

  // Split partners into rows
  const row1 = partners.slice(0, 11);
  const row2 = partners.slice(11, 22);
  const row3 = partners.slice(22);

  return (
    <section id="partners" ref={ref} className="section-padding bg-dark relative overflow-hidden">
      {/* CSS Keyframes for mobile auto-scroll */}
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scroll-x-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-50 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="section-subtitle">ÇÖZÜM ORTAKLARIMIZ</span>
          <h2 className="section-title text-light mb-4 md:mb-6">
            <span className="heading-italic text-accent">200+</span>{' '}
            <span>Global Partner</span>
          </h2>
          <p className="text-light-300 text-base md:text-lg">
            Mühendislik alanında sektörün öncüsü firmalarla güçlü iş ortaklıkları.
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <div className="space-y-3 md:space-y-4">
          <MarqueeRow items={row1} speed={35} rowKey="row1" />
          <MarqueeRow items={row2} reverse speed={40} rowKey="row2" />
          <MarqueeRow items={row3} speed={30} rowKey="row3" />
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-10 md:mt-12"
        >
          <a href="#contact" className="btn-outline">
            <span className="flex items-center gap-2">
              Partner Olmak İstiyorum
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;

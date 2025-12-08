import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Shield, FileCheck, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // All 13 certifications
  const certifications = [
    { code: 'ISO 15085-2 CL-1', title: 'Raylı Araçlar Kaynak Sertifikası', category: 'Üretim' },
    { code: 'ISO 3834:2005', title: 'Kaynak Üretim Uygunluğu Kalite Yönetim Sistemi', category: 'Kalite' },
    { code: 'ISO 9001:2015', title: 'Kalite Yönetim Sistemi', category: 'Kalite' },
    { code: 'ISO 10002:2018', title: 'Müşteri Memnuniyeti Yönetim Sistemi', category: 'Kalite' },
    { code: 'ISO 14001:2015', title: 'Çevre Yönetim Sistemi', category: 'Çevre' },
    { code: 'ISO 22301:2012', title: 'İş Devamlılığı Yönetim Sistemi', category: 'Yönetim' },
    { code: 'ISO 27001:2013', title: 'Bilgi Güvenliği Yönetim Sistemi', category: 'Güvenlik' },
    { code: 'ISO 31000:2018', title: 'Risk Yönetim Sistemi', category: 'Yönetim' },
    { code: 'ISO 37001:2016', title: 'Rüşvetle Mücadele Yönetim Sistemi', category: 'Yönetim' },
    { code: 'ISO 45001:2018', title: 'İş Sağlığı ve Güvenliği Yönetim Sistemi', category: 'Güvenlik' },
    { code: 'ISO 50001:2018', title: 'Energy Management System', category: 'Çevre' },
    { code: 'ISO 28000:2022', title: 'Security and Resilience Security Management System', category: 'Güvenlik' },
    { code: 'TAP Üyelik', title: 'TAP Üyelik Belgesi', category: 'Üyelik' },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Kalite': return Award;
      case 'Güvenlik': return Shield;
      case 'Çevre': return FileCheck;
      default: return CheckCircle2;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Kalite': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'Güvenlik': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Çevre': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Üretim': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      default: return 'text-accent bg-accent/10 border-accent/20';
    }
  };

  // Create duplicated array for infinite scroll
  const duplicatedCerts = [...certifications, ...certifications];

  const CertCard = ({ cert }) => {
    const Icon = getCategoryIcon(cert.category);
    const colorClasses = getCategoryColor(cert.category);
    
    return (
      <div className="glass-card p-4 md:p-5 rounded-xl border border-glass-border hover:border-accent/30 transition-all duration-300 min-w-[280px] md:min-w-[320px] flex-shrink-0">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-lg ${colorClasses} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-light font-semibold text-sm mb-1">
              {cert.code}
            </h3>
            <p className="text-light-400 text-xs leading-relaxed line-clamp-2">
              {cert.title}
            </p>
          </div>
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
        </div>
      </div>
    );
  };

  return (
    <section id="certifications" ref={ref} className="py-16 md:py-24 bg-dark-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
      
      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 px-4"
        >
          <span className="text-accent text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-4 block">SERTİFİKALARIMIZ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-6">
            <span className="heading-italic text-accent">13 ISO</span>{' '}
            <span>Sertifikası</span>
          </h2>
          <p className="text-light-300 text-base md:text-lg">
            Uluslararası standartlara uygunluk belgelerimiz ile kalite, güvenlik ve 
            sürdürülebilirlik taahhüdümüzü kanıtlıyoruz.
          </p>
        </motion.div>

        {/* Marquee Row 1 - Left to Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 overflow-hidden"
        >
          <div className="flex gap-4 animate-marquee hover:pause">
            {duplicatedCerts.map((cert, idx) => (
              <CertCard key={`row1-${idx}`} cert={cert} />
            ))}
          </div>
        </motion.div>

        {/* Marquee Row 2 - Right to Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex gap-4 animate-marquee-reverse hover:pause">
            {duplicatedCerts.reverse().map((cert, idx) => (
              <CertCard key={`row2-${idx}`} cert={cert} />
            ))}
          </div>
        </motion.div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-dark-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-dark-50 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Custom CSS for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Certifications;

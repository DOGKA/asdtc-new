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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

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
      case 'Kalite': return 'text-cyan-400 bg-cyan-400/10';
      case 'Güvenlik': return 'text-emerald-400 bg-emerald-400/10';
      case 'Çevre': return 'text-green-400 bg-green-400/10';
      case 'Üretim': return 'text-amber-400 bg-amber-400/10';
      default: return 'text-accent bg-accent/10';
    }
  };

  return (
    <section id="certifications" ref={ref} className="section-padding bg-dark-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-subtitle">SERTİFİKALARIMIZ</span>
          <h2 className="section-title text-light mb-6">
            <span className="heading-italic text-accent">13 ISO</span>{' '}
            <span>Sertifikası</span>
          </h2>
          <p className="text-light-300 text-lg">
            Uluslararası standartlara uygunluk belgelerimiz ile kalite, güvenlik ve 
            sürdürülebilirlik taahhüdümüzü kanıtlıyoruz.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert, idx) => {
            const Icon = getCategoryIcon(cert.category);
            const colorClasses = getCategoryColor(cert.category);
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-6 rounded-xl group hover:border-accent/30 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg ${colorClasses} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-light font-semibold text-sm mb-1 truncate">
                      {cert.code}
                    </h3>
                    <p className="text-light-400 text-xs leading-relaxed">
                      {cert.title}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="/uploads/files/" 
            target="_blank"
            className="btn-outline"
          >
            <span className="flex items-center gap-2">
              Tüm Belgeleri İndir
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;


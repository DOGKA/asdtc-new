import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const UnicornShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="showcase" 
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#030508]"
    >
      {/* Unicorn Studio Background */}
      <div className="absolute inset-0 z-0">
        <div 
          data-us-project="tBMAIn8s6qF567Lm8aoO" 
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container-custom text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="section-subtitle">TEKNOLOJİ & İNOVASYON</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-6 leading-tight">
            <span className="heading-italic text-accent">Geleceği</span>
            <br />
            <span>Birlikte İnşa Ediyoruz</span>
          </h2>
          <p className="text-light-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            İleri teknoloji çözümlerimizle sektörde fark yaratıyoruz. 
            Mühendislik mükemmelliği ve yenilikçi yaklaşımımızla geleceğin standartlarını belirliyoruz.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { value: '200+', label: 'Global Partner' },
              { value: '35+', label: 'Ülke' },
              { value: '15+', label: 'Yıl Deneyim' },
              { value: '13', label: 'ISO Sertifikası' },
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-light-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50 z-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent z-10" />
    </section>
  );
};

export default UnicornShowcase;


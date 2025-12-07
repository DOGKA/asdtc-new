import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, Globe, Leaf } from 'lucide-react';

const SocialResponsibility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const organizations = [
    {
      name: 'HAYTAP',
      description: 'Hayvan Hakları Federasyonu',
      logo: '/images/social/haytap.png',
      link: 'https://www.haytap.org/'
    },
    {
      name: 'TEMA',
      description: 'Türkiye Erozyonla Mücadele Vakfı',
      logo: '/images/social/tema.png',
      link: 'https://www.tema.org.tr/'
    },
    {
      name: 'AÇEV',
      description: 'Anne Çocuk Eğitim Vakfı',
      logo: '/images/social/acev.png',
      link: 'https://www.acev.org/'
    },
    {
      name: 'TSK Elele Vakfı',
      description: 'Türk Silahlı Kuvvetleri Elele Vakfı',
      logo: '/images/social/tskelele.png',
      link: '#'
    },
  ];

  const values = [
    {
      Icon: Heart,
      title: 'İnsan Odaklı',
      description: 'Toplumun refahı için çalışıyoruz.'
    },
    {
      Icon: Leaf,
      title: 'Çevre Bilinci',
      description: 'Sürdürülebilir gelecek için sorumluluk alıyoruz.'
    },
    {
      Icon: Users,
      title: 'Toplumsal Katkı',
      description: 'Sivil toplum kuruluşlarını destekliyoruz.'
    },
    {
      Icon: Globe,
      title: 'Global Vizyon',
      description: 'Dünya çapında fark yaratmayı hedefliyoruz.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  return (
    <section id="social" ref={ref} className="section-padding bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[180px]" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-subtitle">SOSYAL SORUMLULUK</span>
          <h2 className="section-title text-light mb-6">
            <span className="heading-italic text-accent">Topluma</span>{' '}
            <span>Karşı Sorumluluklarımız</span>
          </h2>
          <p className="text-light-300 text-lg">
            Topluma karşı sorumluluklarımızın farkındayız, toplum yararına çalışan 
            sivil toplum kuruluşlarının yanındayız.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 rounded-xl text-center group hover:border-accent/30 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <value.Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-light font-semibold mb-2">{value.title}</h3>
              <p className="text-light-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Organizations We Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-center text-light-300 text-lg font-medium mb-8">
            Desteklediğimiz Kuruluşlar
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {organizations.map((org, idx) => (
              <motion.a
                key={idx}
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="glass-card p-6 rounded-xl flex flex-col items-center justify-center group hover:border-accent/30 transition-all duration-300 bg-white/5 hover:bg-white/10"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-full h-20 flex items-center justify-center mb-4">
                  <img 
                    src={org.logo} 
                    alt={org.name}
                    className="max-h-16 max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                  />
                </div>
                <h4 className="text-light font-semibold text-sm mb-1">{org.name}</h4>
                <p className="text-light-500 text-xs text-center">{org.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialResponsibility;


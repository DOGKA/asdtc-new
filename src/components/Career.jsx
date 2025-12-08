import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Career = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const careerValues = [
    {
      Icon: Heart,
      title: 'Mesleki Tutku',
      points: [
        'Daha iyi bir gelecek için iyileşerek büyüyen bir şirkette çalışma imkânı',
        'Müşteri taleplerinin ve toplum faydasına hizmet veren bir şirketin dinamikleriyle çalışma imkânı'
      ]
    },
    {
      Icon: Users,
      title: 'İnsan Merkezli',
      points: [
        'Ekip çalışması ve bireysel iradeye bağlı olarak sorumluluk alma fırsatı',
        'Davranış ve çalışma ilkelerine bağlı kalarak karar verme şansı',
        'İş arkadaşları arasında ortak bir ekip ruhu'
      ]
    },
    {
      Icon: Briefcase,
      title: 'Girişimciliğin Kurumsal Anahtarı',
      points: [
        'Çalışanlarının girişimci ruhunun gelişmesini destekleyen yönetim anlayışı',
        'Değişim başladığında herkesin bir parçası olma imkânı',
        'İnisiyatif kullanılabilen bir aile ortamı'
      ]
    },
    {
      Icon: GraduationCap,
      title: 'Profesyonel Gelişim',
      points: [
        'Mesleki ve kişisel gelişim alanında özel eğitim fırsatları',
        '200\'den fazla firmanın temsilciliği ile farklı alanlarda iş bulma imkânı'
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="career" ref={ref} className="section-padding bg-dark-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="section-subtitle">IK YAKLAŞIMI</span>
            <h2 className="section-title text-light mb-6">
              <span className="heading-italic text-accent">Yolculuğa</span>
              <br />
              <span>Hazır mısın?</span>
            </h2>
            <p className="text-light-300 text-lg mb-8 max-w-lg">
              Farklı meslek alanlarında mükemmelliği yakalamayı hedefleyen ASDTC Mühendislik, 
              çalışanlarının iş becerilerini, farkındalıklarını, niteliklerini ve mesleki 
              bilgilerini geliştirmek amacıyla sürekli eğitim yatırımları gerçekleştirir.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/staj-basvurusu" className="btn-primary">
                <span className="relative z-10 flex items-center gap-2">
                  Başvur
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link to="/staj-basvurusu" className="btn-outline">
                <span className="flex items-center gap-2">
                  Staj İmkanları
                  <GraduationCap className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right - Values Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {careerValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-8 rounded-2xl group hover:border-accent/30 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <value.Icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-light font-semibold text-xl mb-4">{value.title}</h3>
                    <ul className="space-y-3">
                      {value.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-light-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Career;


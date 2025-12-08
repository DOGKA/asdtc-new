import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Zap, Target, DollarSign, Wrench, FlaskConical, UserCheck,
  Sun, Shield, Factory, Cog, Cpu,
  Clock, Users, Leaf, Eye, Crosshair
} from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { title: 'Solar Jeneratörler', desc: 'Mobil enerji sistemleri', Icon: Sun },
    { title: 'Yüksek Voltaj', desc: 'Güvenlik ekipmanları', Icon: Zap },
    { title: 'İş Güvenliği', desc: 'Endüstriyel çözümler', Icon: Shield },
    { title: 'Güç Yönetimi', desc: 'Özel üretim sistemleri', Icon: Factory },
    { title: 'Otomasyon', desc: 'Dijitalleşme çözümleri', Icon: Cpu },
  ];

  const values = [
    { title: 'Zamanında Teslimat', Icon: Clock },
    { title: 'Özel Mühendislik', Icon: Target },
    { title: 'Rekabetçi Fiyat', Icon: DollarSign },
    { title: 'İnovatif Ürünler', Icon: Wrench },
    { title: 'AR-GE Kültürü', Icon: FlaskConical },
    { title: 'Uzman Kadro', Icon: UserCheck },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
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
    <section id="about" ref={ref} className="py-20 md:py-32 lg:py-40 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-accent/5 rounded-full blur-[150px] md:blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/3 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <motion.span variants={itemVariants} className="text-accent text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-4 block">
            ASDTC MÜHENDİSLİK
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold text-light mb-6 md:mb-8">
            <span className="heading-italic text-accent">Hakkımızda</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-light-300 text-base md:text-lg lg:text-xl leading-relaxed">
            ASDTC Mühendislik, enerji sistemleri, endüstriyel güvenlik çözümleri, yüksek voltaj ekipmanları ve 
            özel mühendislik projeleri alanlarında faaliyet gösteren, <span className="text-accent font-medium">Türkiye'nin lider teknoloji ve mühendislik şirketlerinden</span> biridir.
          </motion.p>

          <motion.p variants={itemVariants} className="text-light-400 text-sm md:text-base lg:text-lg leading-relaxed mt-4 md:mt-6">
            Kurulduğumuz günden bu yana; yüksek teknik standartlara bağlı, güvenilir, verimli ve sürdürülebilir çözümler 
            üretmeyi misyon edindik. Bugün <span className="text-light-200 font-medium">200'ün üzerinde çözüm ortağıyla</span> yürüttüğümüz geniş iş birliği ağı ve 
            binlerce ürünü kapsayan portföyümüzle sektörün dönüşümünde aktif rol oynuyoruz.
          </motion.p>
        </motion.div>

        {/* Ne Yapıyoruz Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20 md:mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-14">
            <span className="text-accent text-xs uppercase tracking-[0.15em] font-medium mb-3 block">ÇÖZÜMLERİMİZ</span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light">
              Ne <span className="heading-italic text-accent">Yapıyoruz?</span>
            </h3>
            <p className="text-light-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
              Profesyonel saha koşullarının gerektirdiği hassasiyet ve dayanıklılığı merkez alan ileri teknoloji çözümleri geliştiriyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-4 md:p-6 rounded-xl md:rounded-2xl group hover:border-accent/30 transition-all duration-300 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
                  <service.Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <h4 className="text-light font-semibold text-sm md:text-base mb-1">{service.title}</h4>
                <p className="text-light-500 text-xs md:text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={itemVariants} className="text-light-400 text-sm md:text-base text-center max-w-3xl mx-auto mt-8 md:mt-12">
            Müşterilerimizin performanslarını artırmalarına, operasyonel risklerini azaltmalarına ve sürdürülebilirlik 
            hedeflerine ulaşmalarına yardımcı olacak <span className="text-accent">akıllı, otomatik ve veri odaklı</span> çözümler üretiriz.
          </motion.p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20 md:mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-14">
            <span className="text-accent text-xs uppercase tracking-[0.15em] font-medium mb-3 block">İLKELERİMİZ</span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light">
              Değerlerimiz ve <span className="heading-italic text-accent">Çalışma İlkelerimiz</span>
            </h3>
            <p className="text-light-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
              Her projede ASDTC imzasını oluşturan temel değerler
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-4 md:p-5 rounded-xl group hover:border-accent/30 transition-all duration-300 text-center"
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto group-hover:bg-accent/20 transition-colors">
                  <value.Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <h4 className="text-light font-medium text-xs md:text-sm">{value.title}</h4>
              </motion.div>
            ))}
          </div>

          <motion.p variants={itemVariants} className="text-light-400 text-sm md:text-base text-center max-w-3xl mx-auto mt-8 md:mt-12">
            Etik standartlarımız ve sürdürülebilir teknoloji vizyonumuz doğrultusunda, hem sektörün gelişimine 
            hem de insanların günlük yaşamına değer katan çözümler üretmeye devam ediyoruz.
          </motion.p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border-accent/10 hover:border-accent/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-light">Vizyonumuz</h3>
            </div>
            <p className="text-light-300 text-sm md:text-base leading-relaxed">
              Enerji, güvenlik ve endüstriyel mühendislik alanlarında <span className="text-accent font-medium">bölgesel bir çözüm lideri</span> olmak; 
              dijitalleşme, otomasyon ve ileri üretim teknolojilerini kullanarak müşterilerimizin geleceğe hazır olmasını sağlamak.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border-accent/10 hover:border-accent/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Crosshair className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-light">Misyonumuz</h3>
            </div>
            <p className="text-light-300 text-sm md:text-base leading-relaxed">
              Teknolojiyi, mühendisliği ve insan güvenliğini bir araya getirerek sektörlere değer katan 
              <span className="text-accent font-medium"> akıllı, dayanıklı ve sürdürülebilir</span> güç sistemleri üretmek.
            </p>
          </motion.div>
        </motion.div>

        {/* Sustainability Note */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 md:mt-24 text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 glass-card px-6 py-4 rounded-full">
            <Leaf className="w-5 h-5 text-green-400" />
            <span className="text-light-300 text-sm md:text-base">
              <span className="text-green-400 font-medium">Sürdürülebilir Teknolojiye Bağlılık:</span> Çevresel etkileri azaltmaya yönelik global standartlara uyumlu çözümler
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

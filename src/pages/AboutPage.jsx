import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Zap, Target, DollarSign, Wrench, FlaskConical, UserCheck,
  Sun, Shield, Factory, Cog, Cpu,
  Clock, Users, Leaf, Eye, Crosshair, ArrowRight, CheckCircle2,
  Globe, Award, Lightbulb, TrendingUp
} from 'lucide-react';

const AboutPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const valuesRef = useRef(null);
  const visionRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });

  const services = [
    { 
      title: 'Solar Jeneratörler', 
      desc: 'Mobil enerji sistemleri ve taşınabilir güç çözümleri. Profesyonel saha operasyonları için kesintisiz enerji.',
      Icon: Sun,
      features: ['Taşınabilir Sistemler', 'Yüksek Verimlilik', 'Uzun Ömür']
    },
    { 
      title: 'Yüksek Voltaj', 
      desc: 'Endüstriyel güvenlik ekipmanları ve yüksek gerilim sistemleri. Güvenli ve güvenilir çözümler.',
      Icon: Zap,
      features: ['Test Ekipmanları', 'Koruma Sistemleri', 'İzolasyon Çözümleri']
    },
    { 
      title: 'İş Güvenliği', 
      desc: 'Endüstriyel iş güvenliği ürünleri ve kişisel koruyucu ekipmanlar. Çalışan güvenliği önceliğimiz.',
      Icon: Shield,
      features: ['Kişisel Koruyucu', 'Güvenlik Sistemleri', 'Eğitim Hizmetleri']
    },
    { 
      title: 'Güç Yönetimi', 
      desc: 'Özel üretim güç yönetim sistemleri ve enerji optimizasyonu. Verimli enerji kullanımı.',
      Icon: Factory,
      features: ['Enerji İzleme', 'Akıllı Şebekeler', 'Yük Dengeleme']
    },
    { 
      title: 'Otomasyon', 
      desc: 'Dijitalleşme çözümleri ve endüstriyel otomasyon sistemleri. Geleceğin fabrikaları için.',
      Icon: Cpu,
      features: ['PLC Sistemleri', 'SCADA Çözümleri', 'IoT Entegrasyonu']
    },
  ];

  const values = [
    { 
      title: 'Zamanında Teslimat', 
      desc: 'Projelerinizi planladığınız zamanda tamamlıyoruz.',
      Icon: Clock 
    },
    { 
      title: 'Özel Mühendislik', 
      desc: 'Her projeye özel tasarlanmış çözümler sunuyoruz.',
      Icon: Target 
    },
    { 
      title: 'Rekabetçi Fiyat', 
      desc: 'Kaliteden ödün vermeden uygun fiyat politikası.',
      Icon: DollarSign 
    },
    { 
      title: 'İnovatif Ürünler', 
      desc: 'Sürekli yenilenen ürün portföyü ile sektöre öncülük.',
      Icon: Lightbulb 
    },
    { 
      title: 'AR-GE Kültürü', 
      desc: 'Araştırma ve geliştirmeye yatırım yapan ekip.',
      Icon: FlaskConical 
    },
    { 
      title: 'Uzman Kadro', 
      desc: 'Alanında deneyimli mühendis ve teknik personel.',
      Icon: UserCheck 
    },
  ];

  const stats = [
    { value: '200+', label: 'Çözüm Ortağı', Icon: Globe },
    { value: '15+', label: 'Yıllık Deneyim', Icon: Award },
    { value: '1000+', label: 'Tamamlanan Proje', Icon: CheckCircle2 },
    { value: '35+', label: 'Ülkede Faaliyet', Icon: TrendingUp },
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
    <div className="min-h-screen bg-dark pt-32">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto"
          >
            <motion.span variants={itemVariants} className="text-accent text-xs md:text-sm uppercase tracking-[0.25em] font-medium mb-6 block text-center">
              ASDTC MÜHENDİSLİK
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-light mb-8 text-center">
              <span className="heading-italic text-accent">Hakkımızda</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="glass-card p-8 md:p-12 rounded-3xl border border-accent/10 mb-12">
              <p className="text-light-200 text-lg md:text-xl lg:text-2xl leading-relaxed text-center mb-8">
                ASDTC Mühendislik, enerji sistemleri, endüstriyel güvenlik çözümleri, yüksek voltaj ekipmanları ve 
                özel mühendislik projeleri alanlarında faaliyet gösteren, <span className="text-accent font-semibold">Türkiye'nin lider teknoloji ve mühendislik şirketlerinden</span> biridir.
              </p>
              
              <p className="text-light-400 text-base md:text-lg leading-relaxed text-center">
                Kurulduğumuz günden bu yana; yüksek teknik standartlara bağlı, güvenilir, verimli ve sürdürülebilir çözümler 
                üretmeyi misyon edindik. Bugün <span className="text-light-200 font-medium">200'ün üzerinde çözüm ortağıyla</span> yürüttüğümüz geniş iş birliği ağı ve 
                binlerce ürünü kapsayan portföyümüzle sektörün dönüşümünde aktif rol oynuyoruz.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl text-center group hover:border-accent/30 transition-all"
                >
                  <stat.Icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-bold text-light mb-1">{stat.value}</div>
                  <div className="text-light-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-grid opacity-5" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4 block">ÇÖZÜMLERİMİZ</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-light mb-6">
                Ne <span className="heading-italic text-accent">Yapıyoruz?</span>
              </h2>
              <p className="text-light-400 text-base md:text-lg max-w-3xl mx-auto">
                Profesyonel saha koşullarının gerektirdiği hassasiyet ve dayanıklılığı merkez alan 
                ileri teknoloji çözümleri geliştiriyoruz.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl group hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.Icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-light mb-3">{service.title}</h3>
                  <p className="text-light-400 text-sm md:text-base mb-6 leading-relaxed">{service.desc}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-light-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p variants={itemVariants} className="text-light-400 text-base md:text-lg text-center max-w-4xl mx-auto mt-12 md:mt-16">
              Müşterilerimizin performanslarını artırmalarına, operasyonel risklerini azaltmalarına ve sürdürülebilirlik 
              hedeflerine ulaşmalarına yardımcı olacak <span className="text-accent font-medium">akıllı, otomatik ve veri odaklı</span> çözümler üretiriz.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 md:py-32 bg-dark-50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4 block">İLKELERİMİZ</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-light mb-6">
                Değerlerimiz ve <span className="heading-italic text-accent">Çalışma İlkelerimiz</span>
              </h2>
              <p className="text-light-400 text-base md:text-lg max-w-2xl mx-auto">
                Her projede ASDTC imzasını oluşturan temel değerler
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 md:p-8 rounded-2xl group hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <value.Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-light mb-2">{value.title}</h3>
                  <p className="text-light-400 text-sm md:text-base">{value.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p variants={itemVariants} className="text-light-400 text-base md:text-lg text-center max-w-4xl mx-auto mt-12 md:mt-16">
              Etik standartlarımız ve sürdürülebilir teknoloji vizyonumuz doğrultusunda, hem sektörün gelişimine 
              hem de insanların günlük yaşamına değer katan çözümler üretmeye devam ediyoruz.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section ref={visionRef} className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 md:p-10 lg:p-12 rounded-3xl border-accent/10 hover:border-accent/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-light">Vizyonumuz</h3>
              </div>
              <p className="text-light-300 text-base md:text-lg leading-relaxed">
                Enerji, güvenlik ve endüstriyel mühendislik alanlarında <span className="text-accent font-medium">bölgesel bir çözüm lideri</span> olmak; 
                dijitalleşme, otomasyon ve ileri üretim teknolojilerini kullanarak müşterilerimizin geleceğe hazır olmasını sağlamak.
              </p>
              
              <div className="mt-8 pt-6 border-t border-glass-border">
                <div className="flex flex-wrap gap-2">
                  {['Liderlik', 'Dijitalleşme', 'İnovasyon'].map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-xs font-medium text-accent bg-accent/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 md:p-10 lg:p-12 rounded-3xl border-accent/10 hover:border-accent/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Crosshair className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-light">Misyonumuz</h3>
              </div>
              <p className="text-light-300 text-base md:text-lg leading-relaxed">
                Teknolojiyi, mühendisliği ve insan güvenliğini bir araya getirerek sektörlere değer katan 
                <span className="text-accent font-medium"> akıllı, dayanıklı ve sürdürülebilir</span> güç sistemleri üretmek.
              </p>
              
              <div className="mt-8 pt-6 border-t border-glass-border">
                <div className="flex flex-wrap gap-2">
                  {['Teknoloji', 'Güvenlik', 'Sürdürülebilirlik'].map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-xs font-medium text-accent bg-accent/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sustainability Badge */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 glass-card px-8 py-5 rounded-2xl">
              <Leaf className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <span className="text-green-400 font-semibold block mb-1">Sürdürülebilir Teknolojiye Bağlılık</span>
                <span className="text-light-400 text-sm">Çevresel etkileri azaltmaya yönelik global standartlara uyumlu çözümler</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-dark-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 lg:p-16 rounded-3xl text-center border-accent/20"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-light mb-6">
              Projeleriniz İçin <span className="text-accent">Hazırız</span>
            </h2>
            <p className="text-light-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Enerji, güvenlik ve mühendislik çözümlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              <span>İletişime Geçin</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;


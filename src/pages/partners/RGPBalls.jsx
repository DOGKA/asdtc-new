import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Circle, Award, Clock, Globe, Package, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RGPBalls = () => {
  const features = [
    { icon: Clock, title: '50+ Yıllık Deneyim', desc: 'Yarım asrı aşkın sektör tecrübesi' },
    { icon: Package, title: '5.000 Ton Stok', desc: 'Geniş ürün yelpazesi ve hızlı teslimat' },
    { icon: Globe, title: '3.000+ Müşteri', desc: 'Dünya çapında güvenilir ortaklıklar' },
    { icon: Award, title: 'ISO Sertifikalı', desc: 'Uluslararası kalite standartları' },
  ];

  const products = [
    'Çelik Bilyalar',
    'Metal Alaşım Bilyaları',
    'Plastik Bilyalar',
    'Seramik Bilyalar',
    'Kauçuk Bilyalar',
    'Cam Bilyalar',
    'Özel Bilyalar',
    'Bilya Transfer Üniteleri',
    'Silindirik Makaralar',
  ];

  const languages = ['İtalyanca', 'Almanca', 'İngilizce', 'Fransızca', 'İspanyolca', 'Ukraynaca', 'Rusça', 'Çince', 'Romence'];

  return (
    <div className="min-h-screen bg-dark pt-28 pb-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-light-400 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Ana Sayfaya Dön</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12"
        >
          <div className="w-32 h-32 bg-white rounded-2xl p-4 flex items-center justify-center">
            <img src="/images/hero-logos/rgp-logo-white.svg" alt="RGP Balls" className="w-full h-full object-contain" style={{ filter: 'invert(1)' }} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-light mb-2">RGP Balls</h1>
            <p className="text-light-400 text-lg">Avrupa'nın Lider Hassas Bilya Üreticisi</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">Türkiye Distribütörü: ASDTC</span>
            </div>
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-6 md:p-8 rounded-2xl mb-8"
        >
          <h2 className="text-2xl font-bold text-light mb-4 flex items-center gap-3">
            <Circle className="w-6 h-6 text-accent" />
            Şirket Hakkında
          </h2>
          <p className="text-light-400 leading-relaxed mb-4">
            50 yılı aşkın süredir RGP Balls, hassas bilyalar, makaralar ve bilya transfer üniteleri üretimi, ticareti ve dağıtımında 
            Avrupa'nın lider şirketleri arasında yer almaktadır.
          </p>
          <p className="text-light-400 leading-relaxed mb-4">
            İtalya, Cinisello Balsamo'daki merkezimizde 70'ten fazla çalışanımız ve 10.000 m²'lik tesisimiz ile 
            yenilikçi çözümler sunmaya devam ediyoruz.
          </p>
          <p className="text-light-400 leading-relaxed">
            <span className="text-accent font-medium">"Dağları hareket ettirmek için detayları mükemmelleştiriyoruz"</span> - 
            Her şey kalite ile ilgili.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card p-5 rounded-xl">
              <feature.icon className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-light font-semibold mb-1">{feature.title}</h3>
              <p className="text-light-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6 md:p-8 rounded-2xl mb-8"
        >
          <h2 className="text-2xl font-bold text-light mb-4 flex items-center gap-3">
            <Package className="w-6 h-6 text-accent" />
            Ürün Kategorileri
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-2 text-light-400">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                {product}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-light mb-3">Uzmanlık</h3>
            <p className="text-light-400 text-sm">50 yılı aşkın çaba, atılım ve uzmanlık. Her gün kendimizi geliştirmeye devam ediyoruz.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-light mb-3">Metot</h3>
            <p className="text-light-400 text-sm">Bilim bizi ileri taşır, danışmanlık ruhu ihtiyaçlarınıza yakın tutar.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-light mb-3">Hız</h3>
            <p className="text-light-400 text-sm">5.000 ton stok ile hızlı teslimat garantisi. Zaman değerlidir.</p>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="glass-card p-6 rounded-xl mb-8"
        >
          <h3 className="text-lg font-bold text-light mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            Global Hizmet
          </h3>
          <p className="text-light-400 text-sm mb-3">Ekibimiz tüm büyük dillerde hizmet vermektedir:</p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, idx) => (
              <span key={idx} className="px-3 py-1 bg-dark-100 rounded-full text-light-500 text-xs">{lang}</span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a 
            href="https://rgpballs.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full hover:bg-blue-500/20 transition-all"
          >
            Resmi Web Sitesini Ziyaret Et
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default RGPBalls;


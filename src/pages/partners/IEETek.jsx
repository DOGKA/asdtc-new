import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sun, Battery, Zap, Globe, Award, Users, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const IEETek = () => {
  const features = [
    { icon: Sun, title: 'Güneş Enerjisi Depolama', desc: 'Ev ve işletmeler için yenilenebilir enerji çözümleri' },
    { icon: Battery, title: 'Taşınabilir Güç İstasyonları', desc: 'Her senaryoya uygun mobil enerji sistemleri' },
    { icon: Zap, title: 'Güç Dönüşüm Sistemleri', desc: 'PCS, BMS ve HEMS teknolojileri' },
    { icon: Factory, title: '10.000m² Akıllı Fabrika', desc: 'Zhuhai, Çin merkezli üretim tesisi' },
  ];

  const products = [
    'Taşınabilir Hepsi Bir Arada ESS',
    'Taşınabilir Güç İstasyonu',
    'Güneş Jeneratörü',
    'Bölünmüş Fazlı Taşınabilir Güç İstasyonu',
    'İstiflenebilir Taşınabilir Güç İstasyonu',
    'Taşınabilir Güneş Paneli',
  ];

  return (
    <div className="min-h-screen bg-dark pt-28 pb-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
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
            <img src="/images/hero-logos/ieetek-logo-white.png" alt="IEETek" className="w-full h-full object-contain" style={{ filter: 'invert(1)' }} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-light mb-2">IEETek</h1>
            <p className="text-light-400 text-lg">Güneş Enerjisi Depolama Çözümlerinin Lideri</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm font-medium">Türkiye Distribütörü: ASDTC</span>
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
            <Globe className="w-6 h-6 text-accent" />
            Şirket Hakkında
          </h2>
          <p className="text-light-400 leading-relaxed mb-4">
            Zhuhai İlk Entropy Energy Co., Ltd. (IEETek), güneş enerjisi depolama çözümlerinin lider sağlayıcısı ve üreticisidir. 
            Dünya çapında evler, işletmeler ve bireysel kullanıcılar için emniyetli, güvenilir ve temiz enerji çözümleri sunmaktadır.
          </p>
          <p className="text-light-400 leading-relaxed mb-4">
            10.000 metrekarelik Ar-Ge merkezi ve akıllı fabrikası ile IEETek, enerji teknolojisi alanında ortalama 15 yılı aşkın 
            deneyime sahip mühendis kadrosuyla sektörde öncü konumdadır.
          </p>
          <p className="text-light-400 leading-relaxed">
            Ürünleri ABD, Japonya, Almanya, Birleşik Krallık, Avustralya, Türkiye ve 20'den fazla ülkeye ihraç edilmektedir.
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
              <feature.icon className="w-8 h-8 text-yellow-400 mb-3" />
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
            <Battery className="w-6 h-6 text-accent" />
            Ürün Kategorileri
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-2 text-light-400">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                {product}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-light mb-3">Misyon</h3>
            <p className="text-light-400">Sürdürülebilir yeşil yaşamı herkes için erişilebilir kılmak.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-light mb-3">Vizyon</h3>
            <p className="text-light-400">Küresel enerji devriminde önemli bir rol oynamak ve değişimin itici gücü olmak.</p>
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
            href="https://ieetek.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full hover:bg-yellow-500/20 transition-all"
          >
            Resmi Web Sitesini Ziyaret Et
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default IEETek;


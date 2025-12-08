import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers, Shield, Award, Zap, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Telesteps = () => {
  const features = [
    { icon: Layers, title: 'Teleskopik Tasarım', desc: 'Taşıması kolay, kullanımı pratik, depolaması zahmetsiz' },
    { icon: Shield, title: 'Güvenlik Göstergesi', desc: 'Kırmızı/Yeşil güvenlik penceresi sistemi' },
    { icon: Zap, title: 'Tek Dokunuş', desc: 'Patentli tek dokunuşla açma/kapama mekanizması' },
    { icon: Award, title: 'Havacılık Alüminyumu', desc: 'Uçak kalitesinde alüminyum malzeme' },
  ];

  const products = [
    'Kevlar Teleskopik Merdivenler',
    'Kombi Merdivenler',
    'Uzatma Merdivenleri',
    'Çatı/Tavan Merdivenleri',
    'STIK Merdivenler',
    'Basamak Tabureleri',
  ];

  const sectors = [
    'İnşaat', 'Güneş Enerjisi', 'Karavan', 'Kolluk Kuvvetleri', 'Askeri', 'Devlet Kurumları',
    'Ev Sahipleri', 'Müfettişler', 'Güvenlik', 'Tarım', 'Bina Bakımı', 'Avcılar', 'Endüstriyel', 'Kurulum'
  ];

  return (
    <div className="min-h-screen bg-dark pt-28 pb-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
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
            <img src="/images/hero-logos/telescopics-white.png" alt="Telesteps" className="w-full h-full object-contain" style={{ filter: 'invert(1)' }} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-light mb-2">Telesteps</h1>
            <p className="text-light-400 text-lg">Teleskopik Merdiven Teknolojisinde Devrim</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium">Türkiye Distribütörü: ASDTC</span>
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
            <Layers className="w-6 h-6 text-accent" />
            Şirket Hakkında
          </h2>
          <p className="text-light-400 leading-relaxed mb-4">
            Telesteps merdivenleri, merdiven tasarımı ve teknolojisinde devrim niteliğinde bir atılımdır. 
            <span className="text-accent font-medium"> TAŞIMASI KOLAY, KULLANIMI KOLAY, DEPOLAMASI KOLAY</span> prensipleriyle 
            üretilen merdivenler, birçok sektörde kullanılmaktadır.
          </p>
          <p className="text-light-400 leading-relaxed">
            Dünyanın ilk ve tek iletken olmayan Kevlar® Teleskopik Merdivenleri ile yüksek voltaj ortamlarında 
            maksimum güvenlik sağlanmaktadır. DuPont™ Kevlar® ile üretilen bu merdivenler, elektrik güvenliği için tasarlanmıştır.
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
              <feature.icon className="w-8 h-8 text-orange-400 mb-3" />
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
            <Layers className="w-6 h-6 text-accent" />
            Ürün Kategorileri
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-2 text-light-400">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                {product}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Safety Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-light mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Güvenlik Gösterge Penceresi
            </h3>
            <p className="text-light-400 text-sm">
              Güvenliğinizi ciddiye alıyoruz. <span className="text-red-400 font-medium">KIRMIZI</span> tırmanmayın, 
              <span className="text-green-400 font-medium"> YEŞİL</span> tırmanmak güvenli demektir.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-light mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Patentli Tek Dokunuş
            </h3>
            <p className="text-light-400 text-sm">
              Merdiven kilitlendiğinde, Tek Dokunuşla Serbest Bırakma Düğmelerini sıkıştırarak basamakları 
              orijinal kompakt boyutuna kolayca indirebilirsiniz.
            </p>
          </div>
        </motion.div>

        {/* Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 rounded-xl mb-8"
        >
          <h3 className="text-lg font-bold text-light mb-3">Kullanım Alanları</h3>
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector, idx) => (
              <span key={idx} className="px-3 py-1 bg-orange-500/10 rounded-full text-orange-300 text-xs">{sector}</span>
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
            href="https://telestepsladders.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full hover:bg-orange-500/20 transition-all"
          >
            Resmi Web Sitesini Ziyaret Et
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Telesteps;


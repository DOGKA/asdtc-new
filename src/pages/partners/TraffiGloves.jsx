import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Hand, Leaf, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TraffiGloves = () => {
  const features = [
    { icon: Hand, title: 'El Koruma Uzmanı', desc: 'Kesime dayanıklı iş eldivenleri konusunda sektör lideri' },
    { icon: Shield, title: 'TraffiSystem', desc: '3 renkli devrim niteliğinde güvenlik eldiven sistemi' },
    { icon: Leaf, title: 'Sürdürülebilirlik', desc: 'SBTi onaylı karbon nötr hedefleri' },
    { icon: Award, title: 'BSIF Üyesi', desc: 'British Safety Industry Federation akreditasyonu' },
  ];

  const products = [
    'Güvenlik Eldivenleri',
    'LXT Eldivenleri',
    'Tek Kullanımlık Eldiven',
    'Kesime Dayanıklı Eldiven',
    'Kimyasal Dayanıklı Eldiven',
    'Isı Dayanıklı Eldiven',
  ];

  const colors = [
    { color: 'Yeşil', level: 'Düşük Risk', desc: 'Hafif kesik riski olan işler için' },
    { color: 'Amber', level: 'Orta Risk', desc: 'Orta düzey kesik riski olan işler için' },
    { color: 'Kırmızı', level: 'Yüksek Risk', desc: 'Yüksek kesik riski olan işler için' },
  ];

  return (
    <div className="min-h-screen bg-dark pt-28 pb-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/3 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px]" />
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
            <img src="/images/hero-logos/traffi-black.png" alt="Traffi" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-light mb-2">Traffi Gloves</h1>
            <p className="text-light-400 text-lg">El Koruma Alanında Sektör Lideri</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm font-medium">Türkiye Distribütörü: ASDTC</span>
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
            <Hand className="w-6 h-6 text-accent" />
            Şirket Hakkında
          </h2>
          <p className="text-light-400 leading-relaxed mb-4">
            Traffi, el koruma uzmanları ve kesime dayanıklı iş eldivenleri konusunda sektör lideri sağlayıcısıdır. 
            Güvenlik ve sürdürülebilirliği ön planda tutan müşteriler için tercih edilen el koruma ortağıdır.
          </p>
          <p className="text-light-400 leading-relaxed mb-4">
            <span className="text-accent font-medium">3 Renkli TraffiSystem'in orijinal mucitleri</span> olarak, 
            müşteri odaklı yaklaşımımız ve Sınıfının En İyisi ürünler sunma kararlılığımızla yolumuza öncülük etmeye devam ediyoruz.
          </p>
          <p className="text-light-400 leading-relaxed">
            Sürdürülebilirlikte öncü olmaya olan tutkumuz, geleceğimizin temelidir. 
            <span className="text-green-400 font-medium"> FOR HANDS. FOR LIFE.</span>
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
              <feature.icon className="w-8 h-8 text-red-400 mb-3" />
              <h3 className="text-light font-semibold mb-1">{feature.title}</h3>
              <p className="text-light-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* TraffiSystem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="glass-card p-6 md:p-8 rounded-2xl mb-8"
        >
          <h2 className="text-2xl font-bold text-light mb-4">TraffiSystem - Renk Kodlu Güvenlik</h2>
          <p className="text-light-400 text-sm mb-6">
            İş kazalarını azaltmak için herkesin doğru KKD giydiğinden emin olmak hayati önem taşır. 
            TraffiSystem, güvenlik farkındalığını artırmak için basit ve mantıklı bir yaklaşım olarak geliştirilmiştir.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {colors.map((item, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${
                item.color === 'Yeşil' ? 'border-green-500/30 bg-green-500/5' :
                item.color === 'Amber' ? 'border-amber-500/30 bg-amber-500/5' :
                'border-red-500/30 bg-red-500/5'
              }`}>
                <div className={`text-lg font-bold mb-1 ${
                  item.color === 'Yeşil' ? 'text-green-400' :
                  item.color === 'Amber' ? 'text-amber-400' :
                  'text-red-400'
                }`}>{item.color}</div>
                <div className="text-light font-medium text-sm">{item.level}</div>
                <p className="text-light-500 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6 md:p-8 rounded-2xl mb-8"
        >
          <h2 className="text-2xl font-bold text-light mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-accent" />
            Ürün Kategorileri
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-2 text-light-400">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                {product}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 rounded-xl mb-8"
        >
          <h3 className="text-lg font-bold text-light mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Akreditasyonlar
          </h3>
          <p className="text-light-400 text-sm">
            British Safety Industry Federation (BSIF) ve Registered Safety Supplier Scheme (RSSS) üyesiyiz. 
            Bu, size sağladığımız tüm ürünlerin ilgili mevzuat ve standartlara tam uyumlu olduğu konusunda 
            tam bir gönül rahatlığı sağlar.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a 
            href="https://traffiglove.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full hover:bg-red-500/20 transition-all"
          >
            Resmi Web Sitesini Ziyaret Et
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TraffiGloves;


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Shield, Settings, BarChart3, Target, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Zorunlu Çerezler',
      description: 'Web sitesinin temel işlevlerini yerine getirmesi için gerekli olan çerezlerdir. Bu çerezler olmadan site düzgün çalışmaz.',
      examples: ['Oturum yönetimi', 'Güvenlik doğrulama', 'Form verileri', 'Tercih kayıtları'],
      canDisable: false
    },
    {
      icon: BarChart3,
      title: 'Analitik Çerezler',
      description: 'Ziyaretçilerin web sitemizi nasıl kullandığını anlamamıza yardımcı olur. Tüm veriler anonim olarak toplanır.',
      examples: ['Sayfa görüntüleme sayısı', 'Ziyaret süresi', 'Trafik kaynakları', 'Kullanıcı davranışları'],
      canDisable: true
    },
    {
      icon: Target,
      title: 'Pazarlama Çerezleri',
      description: 'Reklam kampanyalarının etkinliğini ölçmek ve size ilgi alanlarınıza göre içerik sunmak için kullanılır.',
      examples: ['Reklam tercihleri', 'Sosyal medya paylaşımları', 'Hedefli reklamlar'],
      canDisable: true
    },
    {
      icon: Settings,
      title: 'İşlevsel Çerezler',
      description: 'Web sitesinde gelişmiş işlevsellik ve kişiselleştirme sağlar.',
      examples: ['Dil tercihi', 'Bölge ayarları', 'Görünüm tercihleri', 'Tema seçimi'],
      canDisable: true
    }
  ];

  const sections = [
    {
      title: '1. Çerez Nedir?',
      content: `Çerezler, web sitelerinin bilgisayarınıza veya mobil cihazınıza yerleştirdiği küçük metin dosyalarıdır. Bu dosyalar, web sitesinin sizi hatırlamasına ve tercihlerinizi saklamasına olanak tanır.

Çerezler genellikle şunları içerir:
• Çerezin geldiği sunucunun adı
• Çerezin ömrü
• Genellikle rastgele oluşturulmuş benzersiz bir numara`
    },
    {
      title: '2. Çerezleri Nasıl Kullanıyoruz?',
      content: `ASDTC Mühendislik olarak çerezleri aşağıdaki amaçlarla kullanmaktayız:

• Web sitemizin düzgün çalışmasını sağlamak
• Güvenliğinizi korumak ve sahtecilik girişimlerini önlemek
• Tercihlerinizi hatırlamak (dil, tema vb.)
• Web sitemizin performansını analiz etmek ve iyileştirmek
• Size daha iyi bir kullanıcı deneyimi sunmak`
    },
    {
      title: '3. Üçüncü Taraf Çerezleri',
      content: `Web sitemizde bazı üçüncü taraf hizmetlerinin çerezleri de bulunabilir:

Google Analytics:
Web sitesi trafiğini analiz etmek için kullanılır. Google'ın gizlilik politikası için: policies.google.com/privacy

Sosyal Medya Eklentileri:
LinkedIn, Twitter gibi sosyal medya platformlarının paylaşım butonları kendi çerezlerini kullanabilir.

Unicorn Studio:
3D görsel efektler için kullanılan platform.`
    },
    {
      title: '4. Çerez Tercihlerinizi Yönetme',
      content: `Çerez tercihlerinizi aşağıdaki yöntemlerle yönetebilirsiniz:

Tarayıcı Ayarları:
Tarayıcınızın ayarlar menüsünden çerezleri kabul etmeyi, reddetmeyi veya çerez yerleştirilmeden önce uyarı almayı seçebilirsiniz.

Popüler tarayıcılar için:
• Chrome: Ayarlar > Gizlilik ve güvenlik > Çerezler
• Firefox: Ayarlar > Gizlilik ve Güvenlik
• Safari: Tercihler > Gizlilik
• Edge: Ayarlar > Gizlilik ve hizmetler

Not: Çerezleri devre dışı bırakmak web sitemizin bazı özelliklerinin düzgün çalışmamasına neden olabilir.`
    },
    {
      title: '5. Çerez Saklama Süreleri',
      content: `Çerezler, türlerine göre farklı sürelerde saklanır:

Oturum Çerezleri:
Tarayıcınızı kapattığınızda otomatik olarak silinir.

Kalıcı Çerezler:
Belirli bir süre (genellikle 1 ay ile 2 yıl arası) veya siz silinceye kadar cihazınızda kalır.

Analitik Çerezler:
Genellikle 2 yıl süreyle saklanır.`
    },
    {
      title: '6. Güncellemeler',
      content: `Bu Çerez Politikası zaman zaman güncellenebilir. Önemli değişiklikler olması durumunda web sitemizde bildirim yapılacaktır.

Son güncelleme tarihi: Aralık 2024

Sorularınız için: info@asdtc.com`
    }
  ];

  return (
    <div className="min-h-screen bg-dark pt-32 pb-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 glass-card rounded-full mb-6">
            <Cookie className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium text-sm">ÇEREZ POLİTİKASI</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-6">
            <span className="text-accent italic font-serif">Çerez</span> Politikası
          </h1>
          <p className="text-light-400 text-lg">
            Web sitemizde kullanılan çerezler ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi.
          </p>
          <p className="text-light-500 text-sm mt-4">
            Son Güncelleme: Aralık 2024
          </p>
        </motion.div>

        {/* Cookie Types Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold text-light text-center mb-8">Kullandığımız Çerez Türleri</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((cookie, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <cookie.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-light">{cookie.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${cookie.canDisable ? 'bg-amber-500/10 text-amber-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                        {cookie.canDisable ? 'Devre Dışı Bırakılabilir' : 'Zorunlu'}
                      </span>
                    </div>
                    <p className="text-light-400 text-sm mb-3">{cookie.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cookie.examples.map((example, eIdx) => (
                        <span key={eIdx} className="text-xs px-2 py-1 bg-dark-100 rounded-md text-light-500">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-light pt-1">{section.title}</h2>
              </div>
              <div className="text-light-400 text-sm md:text-base leading-relaxed whitespace-pre-line pl-0 md:pl-14">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;


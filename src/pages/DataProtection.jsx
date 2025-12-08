import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataProtection = () => {
  const sections = [
    {
      icon: Shield,
      title: '1. Veri Sorumlusu',
      content: `ASDTC Mühendislik ("Şirket"), 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işlemektedir.

Şirket Bilgileri:
• Unvan: ASDTC Mühendislik
• Adres: Yıldızevler, Cezayir Cd. 6/6, 06550 Çankaya/Ankara
• E-Posta: info@asdtc.com
• Telefon: +90 850 840 6160`
    },
    {
      icon: Database,
      title: '2. Toplanan Kişisel Veriler',
      content: `İşlenen kişisel veri kategorileri aşağıdaki gibidir:

Kimlik Bilgileri:
• Ad, soyad

İletişim Bilgileri:
• E-posta adresi, telefon numarası, adres

Eğitim Bilgileri (Staj başvuruları için):
• Okul adı, bölüm, transkript

Profesyonel Bilgiler:
• Özgeçmiş, iş deneyimi, yetkinlikler

Dijital Veriler:
• IP adresi, çerez verileri, tarayıcı bilgileri`
    },
    {
      icon: Eye,
      title: '3. Veri İşleme Amaçları',
      content: `Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:

• İletişim taleplerinin yanıtlanması ve müşteri ilişkilerinin yönetimi
• Staj ve iş başvurularının değerlendirilmesi
• Hizmetlerimiz hakkında bilgilendirme yapılması
• Yasal yükümlülüklerin yerine getirilmesi
• Şirket güvenliğinin sağlanması
• İş süreçlerinin iyileştirilmesi ve analiz yapılması
• Sözleşmesel yükümlülüklerin yerine getirilmesi`
    },
    {
      icon: Lock,
      title: '4. Hukuki Dayanak',
      content: `Kişisel verileriniz KVKK'nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:

• Açık rızanızın bulunması
• Sözleşmenin kurulması veya ifası için gerekli olması
• Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi
• Meşru menfaatlerimiz için zorunlu olması
• Bir hakkın tesisi, kullanılması veya korunması için zorunlu olması`
    },
    {
      icon: Globe,
      title: '5. Veri Aktarımı',
      content: `Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda aşağıdaki taraflara aktarılabilir:

Yurtiçi Aktarım:
• İş ortaklarımız ve tedarikçilerimiz
• Yetkili kamu kurum ve kuruluşları
• Hukuki danışmanlarımız

Yurtdışı Aktarım:
• Bulut hizmet sağlayıcıları (Google, Microsoft vb.)
• E-posta hizmet sağlayıcıları

Tüm aktarımlar KVKK'nın 8. ve 9. maddelerine uygun şekilde gerçekleştirilmektedir.`
    },
    {
      icon: UserCheck,
      title: '6. Veri Sahibi Hakları',
      content: `KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• İşlenmişse buna ilişkin bilgi talep etme
• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
• Yurtiçinde veya yurtdışında aktarıldığı üçüncü kişileri bilme
• Eksik veya yanlış işlenmişse düzeltilmesini isteme
• KVKK'nın 7. maddesindeki şartlar çerçevesinde silinmesini isteme
• Düzeltme ve silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme
• İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
• Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme

Başvuru için: info@asdtc.com`
    }
  ];

  return (
    <div className="min-h-screen bg-dark pt-32 pb-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
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
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium text-sm">KVKK AYDINLATMA METNİ</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-6">
            <span className="text-accent italic font-serif">Veri Koruma</span> Bildirimi
          </h1>
          <p className="text-light-400 text-lg">
            6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin 
            işlenmesine ilişkin bilgilendirme.
          </p>
          <p className="text-light-500 text-sm mt-4">
            Son Güncelleme: Aralık 2024
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-light pt-2">{section.title}</h2>
              </div>
              <div className="text-light-400 text-sm md:text-base leading-relaxed whitespace-pre-line pl-0 md:pl-16">
                {section.content}
              </div>
            </motion.div>
          ))}

          {/* Contact for Data Requests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card p-6 md:p-8 rounded-2xl border-accent/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-light">İletişim</h2>
            </div>
            <p className="text-light-400 mb-4">
              Kişisel verilerinizle ilgili taleplerinizi aşağıdaki iletişim kanallarından bize iletebilirsiniz:
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:info@asdtc.com" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg text-accent hover:bg-accent/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@asdtc.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DataProtection;


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Heart, Leaf, Award, Users, Target, BarChart3, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const SheqPolicy = () => {
  const policies = [
    {
      icon: Shield,
      title: 'Güvenli İş Ortamı',
      content: 'Çalışanlarımıza, iş gücümüze ve operasyonlarımızdan etkilenen diğer kişilere güvenli ve sağlıklı bir iş ortamı sunmayı taahhüt ediyoruz. Tüm operasyonlarımızda tehlikeleri bertaraf etmeyi ve iş sağlığı ve güvenliği risklerini azaltmayı taahhüt ediyoruz.'
    },
    {
      icon: Users,
      title: 'Müşteri İlişkileri',
      content: 'Müşterilerimizin beklentilerini sürekli karşılamak ve aşmak amacıyla kendileriyle yakın ilişkiler geliştirmek için çaba harcarız.'
    },
    {
      icon: Leaf,
      title: 'Çevre Koruma',
      content: 'Çevreyi gelecek nesiller için koruyacak teknoloji, ürün ve hizmetleri kullanır ve kaynak verimliliği ile kirliliği azaltmaya ve atıkları önlemeye odaklı bir yaşam döngüsü perspektifi uygularız.'
    },
    {
      icon: Award,
      title: 'Kaliteli Ürün ve Hizmetler',
      content: 'Müşterilerimizin sürdürülebilir verimliliğine tutarlı bir şekilde katkıda bulunacak yüksek kaliteli ürün ve hizmetler teslim ederiz. Ürün ve hizmetlerimiz müşterilerimizin verimliliğini, kalitesini, işlevselliğini, güvenliğini ve çevre gereksinimlerini karşılayacak şekilde geliştirilir.'
    },
    {
      icon: Target,
      title: 'Mükemmellik Hedefi',
      content: 'İyi tanımlanmış, etkin ve verimli süreçlerle mükemmele ulaşmak için çaba harcarız. Ürün, hizmet, süreç ve önemli değişiklikleri, risk ve fırsatlara da odaklanarak, kalite, güvenlik, sağlık ve çevre açılarından değerlendiririz.'
    },
    {
      icon: UserCheck,
      title: 'İş Ortağı Seçimi',
      content: 'İş ortaklarımızı tarafsız bir şekilde, verimlilik, kalite, teslimat, fiyat ve güvenilirlik dahil olmak üzere objektif faktörlere olduğu kadar adanmışlık ve çevre ve sosyal performans gelişmesine dayanarak arar, değerlendirir ve seçeriz. Önemli ortaklarımız ASDTC Mühendislik değerlerinin uygulandığından emin olmak için düzenli olarak denetimden geçerler.'
    },
    {
      icon: Heart,
      title: 'Çalışan Esenliği',
      content: 'Özellikle sağlık, güvenlik ve esenlik konuları ile ilgili karar süreçlerinde, çalışan ve ek işgücü temsilcilerine danışırız. Çalışanlarımızın ruhsal ve fiziksel esenliğini göz önünde bulunduran ve destekleyen ve çalışanlarımızı sağlık ve esenliklerini iyileştirmeye aktif olarak teşvik eden bir işyeri kültürüne sahibiz.'
    },
  ];

  const sections = [
    {
      title: 'Öncelik ve Hedefler',
      icon: Target,
      content: 'Hedefler ve kilit performans göstergeleri, rekabetçi ve yenilikçi kalmamız ve etik açıdan sağlam bir duruş sergilememiz için firmanın önceliklerine dayanır. Önceliklerimiz paydaşlarımızın da devreye girmesiyle geliştirilir ve fırsatları yakalarken işe gelebilecek tehlikeleri azaltmak için Firmanın stratejisine ve üç-yıllık planlama sürecine entegre edilir.'
    },
    {
      title: 'Raporlama ve İyileştirme',
      icon: BarChart3,
      content: 'Firmanın kilit performans göstergelerinin izlenmesi ve takibi, kanıta dayalı bir karar alma sürecini destekleyecek şekilde, şirket, bölüm, iş alanı ve düzeyinde gerçekleştirilir.'
    },
    {
      title: 'Sorumluluk',
      icon: UserCheck,
      content: 'Şirkette her Bölüm Başkanı, Genel Müdür ve Müdürün operasyonel sorumluluğu Güvenlik, Sağlık, Çevre ve Kalite performansını, aynı zamanda da bu politikanın ve ruhunun duyurulmasını ve uygulanmasını da kapsar.'
    }
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
    <div className="min-h-screen bg-dark pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 glass-card rounded-full mb-6">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-medium text-sm">SHEQ POLİTİKASI</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-6">
            <span className="text-accent italic font-serif">Güvenlik, Sağlık,</span>
            <br />
            <span>Çevre ve Kalite</span>
          </h1>
          <p className="text-light-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Sofistike parlak fikirleri heyecan verici bulan ASDTC Mühendislik, enerji verimine, 
            güvenlik ve ergonomiye odaklı ürün ve hizmetleri sürdürülebilir bir gelecek için geliştirmektedir.
          </p>
          <div className="mt-6 inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent text-sm">Bu politika ASDTC Mühendislik'in tüm birimlerinde uygulanır</span>
          </div>
        </motion.div>

        {/* Policy Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16"
        >
          {policies.map((policy, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 rounded-2xl group hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <policy.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-light font-semibold text-lg mb-3">{policy.title}</h3>
                  <p className="text-light-400 text-sm leading-relaxed">{policy.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Corporate Citizenship */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 md:p-10 rounded-2xl max-w-5xl mx-auto mb-16 border-l-4 border-accent"
        >
          <h3 className="text-light font-semibold text-xl mb-4">Kurumsal Vatandaşlık</h3>
          <p className="text-light-400 leading-relaxed mb-4">
            Çalıştığımız ülkelerin kanun ve yönetmeliklerinin ruhuna sadık kalarak ve en azından onları uygulayarak 
            ve diğer paydaşlarımızın gereksinimlerine uyarak iyi ve güvenilir bir kurumsal vatandaş olmayı taahhüt ederiz.
          </p>
          <p className="text-light-400 leading-relaxed">
            Uzun vadeli karlılık ve sürdürülebilir gelişmeye de dikkat ederek süreçlerimizi, ürün ve hizmetlerimizi 
            sürekli iyileştiririz. <span className="text-accent font-medium">Bu bizim bütün çalışanlarımıza karşı kişisel taahhüdümüzdür.</span>
          </p>
        </motion.div>

        {/* Additional Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl text-center group hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <section.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-light font-semibold text-lg mb-3">{section.title}</h3>
              <p className="text-light-400 text-sm leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-card inline-block px-8 py-6 rounded-2xl">
            <p className="text-light-500 text-sm mb-2">Yönetim Kurulu Başkanı</p>
            <p className="text-light font-semibold">ASDTC Mühendislik</p>
            <p className="text-accent text-sm mt-2">Ocak 2023 – Ankara</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SheqPolicy;


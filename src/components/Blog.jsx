import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // All blog posts - yeniden eskiye sıralı
  const blogPosts = [
    {
      title: 'IEETek: Pioneering Energy Storage Innovation in Turkey',
      date: '03-10-2024',
      category: 'Bizden Haberler',
      slug: 'ieetek-pioneering-energy-storage-innovation-in-turkey'
    },
    {
      title: 'IEETek Artık Türkiye\'de Enerji Depolamada Yenilik',
      date: '03-10-2024',
      category: 'Bizden Haberler',
      slug: 'ieetek-artik-turkiye-de-enerji-depolamada-yenilik'
    },
    {
      title: 'GEN21E ile ASDTC Arasında Yeni Bir İşbirliği Başladı!',
      date: '21-02-2024',
      category: 'Bizden Haberler',
      slug: 'gen21e-ile-asdtc-arasinda-yeni-bir-isbirligi-basladi'
    },
    {
      title: 'James Webb Uzay Teleskobu Görüntüleri: Teorilere Meydan Okuyor!',
      date: '28-11-2023',
      category: 'Teknoloji',
      slug: 'james-webb-uzay-teleskobu-goruntuleri-teorilere-meydan-okuyor'
    },
    {
      title: 'Wendelstein 7-X Füzyon Reaktörü ve Yıldızlaştırıcılar: Geleceğin Temiz Enerji Kaynağı Mı?',
      date: '27-11-2023',
      category: 'Bilim',
      slug: 'wendelstein-7-x-fuzyon-reaktoru-ve-yildizlastiricilar'
    },
    {
      title: 'Bilim İnsanları Dinozorların \'Ölüm Pozunun\' ardındaki Sırrı Çözdüklerine İnanıyor',
      date: '27-11-2023',
      category: 'Bilim',
      slug: 'bilim-insanlari-dinozorlarin-olum-pozunun-ardindaki-sirri'
    },
    {
      title: 'Biyolojik Veri Depolama Sistemleri: DNA\'nın Bilgi Depolama Potansiyeli',
      date: '24-11-2023',
      category: 'Bilim',
      slug: 'biyolojik-veri-depolama-sistemleri-dna'
    },
    {
      title: 'Yerçekiminin Şifresini Çözmek: Newton\'dan Einstein\'a ve Ötesine',
      date: '19-11-2023',
      category: 'Bilim',
      slug: 'yercekiminin-sifresini-cozmek-newton-einstein'
    },
    {
      title: 'Kuantum Bilgisayarların Savunma Sanayii Üzerindeki Etkileri: Analiz ve Keşif İçin Potansiyel',
      date: '09-11-2023',
      category: 'Teknoloji',
      slug: 'kuantum-bilgisayarlarin-savunma-sanayii-uzerindeki-etkileri'
    },
    {
      title: 'New Study Discovers How Neurons Die in Alzheimer\'s Disease',
      date: '26-10-2023',
      category: 'Bilim',
      slug: 'new-study-discovers-how-neurons-die-in-alzheimers-disease'
    },
    {
      title: 'DVXplorer Micro: Dünyanın En Küçük DVS Kamerası Yakında Piyasada!',
      date: '26-10-2023',
      category: 'Bizden Haberler',
      slug: 'dvxplorer-micro-dunyanin-en-kucuk-dvs-kamerasi'
    },
    {
      title: 'CUAV, Tibet Platosu\'nda İnsansız Test Uçuşlarını Başarıyla Tamamladı',
      date: '26-10-2023',
      category: 'Bizden Haberler',
      slug: 'cuav-tibet-platosunda-insansiz-test-ucuslarini-tamamladi'
    },
    {
      title: 'İlk Kez Soyu Tükenmiş Bir Hayvanın RNA\'sını Çözüldü',
      date: '25-10-2023',
      category: 'Bilim',
      slug: 'ilk-kez-soyu-tukenmis-bir-hayvanin-rnasini-cozuldu'
    },
    {
      title: 'Yapay Zeka İlaçları Hastalarla Nasıl Eşleştiriyor?',
      date: '24-10-2023',
      category: 'Bilim',
      slug: 'yapay-zeka-ilaclari-hastalarla-nasil-eslestiriyor'
    },
    {
      title: 'Artık Türkiye Pazarında: JAWAYDC!',
      date: '17-10-2023',
      category: 'Bizden Haberler',
      slug: 'artik-turkiye-pazarinda-jawaydc'
    },
    {
      title: 'EUROSATORY 17-21 HAZİRAN 2024',
      date: '2024',
      category: 'Bizden Haberler',
      slug: 'eurosatory-17-21-haziran-2024'
    },
    {
      title: 'TRAFFI GLOVES İŞBİRLİĞİ',
      date: '2023',
      category: 'Bizden Haberler',
      slug: 'traffi-gloves-isbirligi'
    },
    {
      title: 'Katadyn Group | Nerede Olursa Olsun Yaşamın Sürdürülmesi',
      date: '2023',
      category: 'Bizden Haberler',
      slug: 'katadyn-group-nerede-olursa-olsun-yasamin-surdurlmesi'
    },
    {
      title: 'Yasaklı Drone Şehirleri ve ABD Kısıtlamaları',
      date: '2023',
      category: 'Teknoloji',
      slug: 'yasakli-drone-sehirleri-ve-abd-kisitlamalari'
    },
    {
      title: 'Yüksek Hızlı Tren Teknolojilerinin Gelişimi',
      date: '2023',
      category: 'Eğitim',
      slug: 'yuksek-hizli-tren-teknolojilerinin-gelisimi'
    },
    {
      title: 'Einstein ve Oppenheimer\'ın Gerçek İlişkisi Hem Dostane Hem de Karmaşıktı',
      date: '2023',
      category: 'Bizden Haberler',
      slug: 'einstein-ve-oppenheimerin-gercek-iliskisi'
    },
    {
      title: 'Uzay ve Astronomi Alanında Bilimsel Bir Mucize: Doppler Etkisi',
      date: '2023',
      category: 'Eğitim',
      slug: 'uzay-ve-astronomi-alaninda-bilimsel-bir-mucize-doppler-etkisi'
    },
    {
      title: '\'Atom Bombası\' ve \'Nükleer Silah\' arasındaki fark nedir?',
      date: '2023',
      category: 'Eğitim',
      slug: 'atom-bombasi-ve-nukleer-silah-arasindaki-fark-nedir'
    },
    {
      title: 'Meydan Okumaya Hazır Mısınız? NATO, Yarışmaya Davet Ediyor',
      date: '2023',
      category: 'Bizden Haberler',
      slug: 'meydan-okumaya-hazir-misiniz-nato-yarismaya-davet-ediyor'
    },
    {
      title: 'ChatGPT, Ulusal Güvenlik İçin Riskli Mi?',
      date: '2023',
      category: 'Eğitim',
      slug: 'chatgpt-ulusal-guvenlik-icin-riskli-mi'
    },
    {
      title: 'iniVation AG, Türkiye Pazarında!',
      date: '2023',
      category: 'Eğitim',
      slug: 'inivation-ag-turkiye-pazarinda'
    },
    {
      title: 'CUAV Tech Inc Drone İşbirliği',
      date: '2023',
      category: 'Eğitim',
      slug: 'cuav-tech-inc-drone-isbirligi'
    },
    {
      title: 'IDEF\'23',
      date: '2023',
      category: 'Eğitim',
      slug: 'idef-23'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Bizden Haberler': return 'text-cyan-400 bg-cyan-400/10';
      case 'Bilim': return 'text-purple-400 bg-purple-400/10';
      case 'Teknoloji': return 'text-emerald-400 bg-emerald-400/10';
      case 'Eğitim': return 'text-amber-400 bg-amber-400/10';
      default: return 'text-accent bg-accent/10';
    }
  };

  return (
    <section id="blog" ref={ref} className="section-padding bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-subtitle">BLOG</span>
          <h2 className="section-title text-light mb-6">
            <span className="heading-italic text-accent">Son</span>{' '}
            <span>Yazılar ve Haberler</span>
          </h2>
          <p className="text-light-300 text-lg">
            Teknoloji, bilim ve mühendislik dünyasından en güncel haberler.
          </p>
        </motion.div>

        {/* Blog List - Minimal, No Images */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto divide-y divide-glass-border"
        >
          {blogPosts.map((post, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              className="group py-5 first:pt-0 last:pb-0"
            >
              <a 
                href={`/blog/${post.slug}`} 
                className="flex items-start md:items-center justify-between gap-4 md:gap-8"
              >
                <div className="flex-1 min-w-0">
                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-light-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-light font-medium text-base md:text-lg group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
                
                {/* Arrow */}
                <div className="w-9 h-9 rounded-full bg-glass flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-light-400 group-hover:text-accent transition-colors" />
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a href="/blog" className="btn-outline">
            <span className="flex items-center gap-2">
              Tüm Yazılar
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

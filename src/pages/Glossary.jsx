import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, ArrowLeft, BookOpen, Ship, Building2, Truck, FileText, CreditCard, DollarSign, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');

  const glossaryData = [
    {
      id: 'incoterms',
      title: 'INCOTERMS (Teslim Şekilleri – Incoterms 2020)',
      icon: Ship,
      color: 'cyan',
      terms: [
        {
          code: 'EXW',
          name: 'Ex Works (İşyeri Teslim)',
          description: 'Satıcı, malı kendi işyerinde hazır eder; yükleme, ihracat gümrüğü, navlun, sigorta vs. tamamen alıcıya aittir. Satıcı minimum sorumluluk.'
        },
        {
          code: 'FCA',
          name: 'Free Carrier (Taşıyıcıya Teslim)',
          description: 'Satıcı, malı belirtilen yerde (depo, terminal vb.) taşıyıcıya teslim eder ve ihracat gümrüklemesini yapar. Sonrası alıcıya ait.'
        },
        {
          code: 'FAS',
          name: 'Free Alongside Ship (Gemi Yanında Teslim)',
          description: 'Satıcı, malı yükleme limanında gemi rıhtımında hazır eder. Gemiye yükleme ve sonrası risk alıcıya geçer. Daha çok dökme yük için.'
        },
        {
          code: 'FOB',
          name: 'Free On Board (Gemi Bordasında Teslim)',
          description: 'Satıcı, malı gemiye yükleyinceye kadar sorumludur ve ihracat gümrüklemesini yapar. Mal gemi küpeştesini geçince risk alıcıya geçer.'
        },
        {
          code: 'CFR',
          name: 'Cost and Freight (Mal Bedeli + Navlun Dahil)',
          description: 'Satıcı, varış limanına kadar deniz navlununu öder; fakat risk FOB noktasında (yükleme limanında gemiye yükleme ile) alıcıya geçer.'
        },
        {
          code: 'CIF',
          name: 'Cost, Insurance and Freight (Mal + Sigorta + Navlun)',
          description: 'CFR\'a ek olarak satıcı, alıcı lehine asgari yük sigortası yaptırır. Navlun ve sigorta satıcıdan, risk yine yükleme limanında alıcıya geçer.'
        },
        {
          code: 'CPT',
          name: 'Carriage Paid To (Taşıma Ücreti Ödenmiş)',
          description: 'Her türlü taşıma için kullanılır. Satıcı, belirlenen varış noktasına kadar taşıma bedelini öder; risk ilk taşıyıcıya teslimde alıcıya geçer.'
        },
        {
          code: 'CIP',
          name: 'Carriage and Insurance Paid To (Taşıma ve Sigorta Dahil)',
          description: 'CPT\'ye ek olarak satıcı, alıcı lehine yük sigortası yaptırır. Risk yine ilk taşıyıcıya teslimde alıcıya geçer.'
        },
        {
          code: 'DAP',
          name: 'Delivered At Place (Belirlenen Yerde Teslim)',
          description: 'Satıcı, malı ithalat ülkesinde belirlenen adrese kadar taşır ve boşaltmaya hazır şekilde teslim eder. İthalat gümrüğü ve vergiler alıcıya ait.'
        },
        {
          code: 'DPU',
          name: 'Delivered at Place Unloaded (Belirlenen Yerde Boşaltılmış Teslim)',
          description: 'Satıcı hem taşımayı hem de belirlenen yerde boşaltmayı üstlenir. İthalat vergileri ve gümrük alıcıya ait.'
        },
        {
          code: 'DDP',
          name: 'Delivered Duty Paid (Gümrük Vergileri Ödenmiş Teslim)',
          description: 'Satıcının maksimum yükümlülüğü. Mal, ithalat ülkesinde belirlenen adrese tüm vergiler, gümrükleme ve masraflar ödenmiş şekilde teslim edilir.'
        }
      ]
    },
    {
      id: 'customs',
      title: 'GÜMRÜK, VERGİ ve REJİM TERİMLERİ',
      icon: Building2,
      color: 'purple',
      terms: [
        {
          code: 'HS Code / GTİP',
          name: 'Harmonized System Code (Gümrük Tarife İstatistik Pozisyonu)',
          description: 'Her mal türü için kullanılan uluslararası 6\'lı temel sınıflandırma kodu. Türkiye\'de Gümrük Tarife İstatistik Pozisyonu (GTİP) olarak geçer.'
        },
        {
          code: 'Customs Value',
          name: 'Gümrük Kıymeti',
          description: 'Gümrük vergilerinin hesaplandığı temel değer; genellikle CIF veya benzeri bazı kalemlerden oluşur.'
        },
        {
          code: 'Import Duty',
          name: 'İthalat Vergisi / Gümrük Vergisi',
          description: 'İthal edilen mal üzerinden uygulanan temel vergi.'
        },
        {
          code: 'VAT',
          name: 'Value Added Tax (KDV)',
          description: 'İthalatta da uygulanan katma değer vergisi. CIF bedel + gümrük vergisi + diğer fonlar üzerinden hesaplanır.'
        },
        {
          code: 'Excise Duty',
          name: 'ÖTV (Özel Tüketim Vergisi)',
          description: 'Belirli ürün gruplarında (akaryakıt, tütün, lüks ürünler vb.) uygulanan özel tüketim vergisi.'
        },
        {
          code: 'KKDF',
          name: 'Kaynak Kullanımını Destekleme Fonu',
          description: 'Türkiye\'de belirli tür dış krediler ve vadeli ithalat işlemleri üzerinden tahsil edilen fon. Genellikle ithalatçıya ek maliyet yaratır.'
        },
        {
          code: 'Anti-Dumping Duty',
          name: 'Anti-Damping Vergisi',
          description: 'İthal ürünlerin iç piyasaya maliyetinin altında, dampingli fiyatla girmesini önlemek için uygulanan ek vergi.'
        },
        {
          code: 'Safeguard Measures',
          name: 'Korunma Önlemleri',
          description: 'Ani ithalat artışlarına karşı yerli sanayiyi korumak için uygulanan geçici ek vergi/kota vb. önlemler.'
        },
        {
          code: 'DİR',
          name: 'Dahilde İşleme Rejimi (Inward Processing)',
          description: 'İthal girdilerin vergisiz/ertelenmiş vergi ile ülkeye sokulup işlendikten sonra tekrar ihraç edilmesine imkân veren rejim.'
        },
        {
          code: 'Outward Processing',
          name: 'Hariçte İşleme Rejimi',
          description: 'Yurtiçinde üretilen malların geçici olarak işlenmek üzere yurtdışına gönderilip tekrar Türkiye\'ye dönmesi için uygulanan rejim.'
        },
        {
          code: 'Free Circulation',
          name: 'Serbest Dolaşım',
          description: 'Gümrük vergileri ödenmiş ve serbest dolaşıma girmiş malların AB/Türkiye gümrük birliği içinde serbestçe dolaşabilmesi durumu.'
        },
        {
          code: 'Free Zone',
          name: 'Serbest Bölge',
          description: 'Gümrük hattı dışında sayılan, özel teşvik ve kolaylıkların olduğu üretim ve ticaret alanları.'
        },
        {
          code: 'Customs Broker',
          name: 'Gümrük Müşaviri',
          description: 'İthalat ve ihracatçılar adına gümrük işlemlerini yürüten yetkili meslek mensubu.'
        }
      ]
    },
    {
      id: 'warehouse',
      title: 'DEPO, ANTREPO ve DEPOLAMA İŞLEMLERİ',
      icon: Building2,
      color: 'amber',
      terms: [
        {
          code: 'Warehouse',
          name: 'Depo',
          description: 'Malların geçici veya uzun süreli muhafaza edildiği genel depolama alanı.'
        },
        {
          code: 'Bonded Warehouse',
          name: 'Antrepo (Customs Warehouse)',
          description: 'Gümrük vergileri ödenmemiş malların, gümrük gözetiminde depolandığı yer. Mallar antrepoda kaldığı sürece gümrük vergisi ödenmez.'
        },
        {
          code: 'Temporary Storage',
          name: 'Geçici Depolama',
          description: 'Ülkeye girişte veya çıkışta gümrük işlemleri tamamlanana kadar malların bekletildiği depo statüsü.'
        },
        {
          code: 'Free Port',
          name: 'Serbest Liman / Serbest Ticaret Bölgesi',
          description: 'Vergi ve gümrük açısından avantajlı, malların yeniden ihracat/işleme amaçlı tutulduğu, özel statülü alanlar.'
        }
      ]
    },
    {
      id: 'logistics',
      title: 'NAKLİYE VE LOJİSTİK TERİMLERİ',
      icon: Truck,
      color: 'emerald',
      terms: [
        {
          code: 'FCL',
          name: 'Full Container Load (Tam Konteyner Yükü)',
          description: 'Bir konteynerin tek bir gönderici tarafından doldurulması.'
        },
        {
          code: 'LCL',
          name: 'Less than Container Load (Parsiyel Konteyner Yükü)',
          description: 'Aynı konteyneri birden fazla göndericinin yükü paylaşacak şekilde kullanması.'
        },
        {
          code: 'Consolidation',
          name: 'Konsolidasyon',
          description: 'Farklı göndericilerin küçük yüklerinin bir araya getirilip tek taşıma belgesi altında sevk edilmesi.'
        },
        {
          code: 'ETD',
          name: 'Estimated Time of Departure',
          description: 'Tahmini Kalkış Zamanı - Geminin/uçağın limandan/istasyondan kalkması beklenen tarih-saat.'
        },
        {
          code: 'ETA',
          name: 'Estimated Time of Arrival',
          description: 'Tahmini Varış Zamanı - Geminin/uçağın varış limanına ulaşmasının beklendiği tarih-saat.'
        },
        {
          code: 'ATD / ATA',
          name: 'Actual Time of Departure / Arrival',
          description: 'Fiilî kalkış ve fiilî varış zamanları.'
        },
        {
          code: 'Demurrage',
          name: 'Demuraj',
          description: 'Konteynerin terminalde, ücretsiz bekleme süresini aşması durumunda taşıyıcı tarafından günlük kesilen gecikme ücreti.'
        },
        {
          code: 'Detention',
          name: 'Detention (Alıkoyma)',
          description: 'Konteynerin terminal dışındayken, taşıyıcıya zamanında iade edilmemesi sonucu kesilen günlük konteyner kullanım cezası.'
        },
        {
          code: 'Storage',
          name: 'Depolama Ücreti',
          description: 'Limandaki veya depodaki konteyner/eşya için alınan günlük depolama bedeli.'
        },
        {
          code: 'Transit Time',
          name: 'Transit Süresi',
          description: 'Yükün çıkış noktasından varış noktasına ulaşması için geçen toplam süre.'
        },
        {
          code: 'Transshipment',
          name: 'Aktarma / Aktarmalı Taşıma',
          description: 'Yükün bir taşıma aracından diğerine (örneğin feeder gemiden ana gemiye) aktarılması.'
        },
        {
          code: 'Feeder Vessel',
          name: 'Feeder Gemi',
          description: 'Küçük limanlardan ana hub limanlara yük taşıyan daha küçük kapasiteli gemi.'
        },
        {
          code: 'Mother Vessel',
          name: 'Ana Gemi',
          description: 'Uzun mesafeli ana hat seferlerinde kullanılan büyük tonajlı gemi.'
        }
      ]
    },
    {
      id: 'documents',
      title: 'TAŞIMA BELGELERİ ve TARAFLAR',
      icon: FileText,
      color: 'blue',
      terms: [
        {
          code: 'B/L',
          name: 'Bill of Lading (Konşimento)',
          description: 'Denizyolu taşımacılığında kullanılan, malın taşımaya alındığını gösteren, aynı zamanda kıymetli evrak niteliğinde olabilen taşıma belgesi.'
        },
        {
          code: 'Sea Waybill',
          name: 'Deniz Taşıma Senedi',
          description: 'B/L\'ye benzer, ancak çoğunlukla ciro edilmez ve kıymetli evrak niteliği yoktur; teslim için kimlik ve talimat yeterli olabilir.'
        },
        {
          code: 'AWB',
          name: 'Air Waybill (Hava Konşimentosu)',
          description: 'Hava taşımacılığında kullanılan taşıma belgesi. Kıymetli evrak niteliği yoktur.'
        },
        {
          code: 'CMR',
          name: 'Karayolu Taşıma Senedi',
          description: 'Uluslararası karayolu taşımalarında kullanılan standart taşıma belgesi.'
        },
        {
          code: 'Consignee',
          name: 'Alıcı',
          description: 'Taşıma belgesinde malların teslim edilmesi gereken kişi/kurum.'
        },
        {
          code: 'Shipper',
          name: 'Gönderici',
          description: 'Malların taşınması için taşıyıcıyla anlaşan ve yükleyen taraf (çoğu zaman ihracatçı).'
        },
        {
          code: 'Notify Party',
          name: 'Bildirim Tarafı',
          description: 'Yük varış limanına geldiğinde bilgilendirilmesi gereken taraf.'
        },
        {
          code: 'Original B/L',
          name: 'Orijinal Konşimento',
          description: 'Teslim için ibraz edilmesi gereken, imzalı ve ıslak mühürlü konşimento nüshaları.'
        },
        {
          code: 'Telex Release',
          name: 'Teleksle Salım',
          description: 'Orijinal B/L ibrazı gerekmeksizin, taşıyıcının elektronik talimatı ile varış limanında malın alıcıya teslim edilmesini sağlayan serbest bırakma yöntemi.'
        },
        {
          code: 'Surrendered B/L',
          name: 'Teslim Edilmiş Konşimento',
          description: 'Yükleme limanında orijinal konşimentonun taşıyıcıya teslim edilmesi, sisteme "surrendered" işlenmesi ve varış limanında orijinal belge aranmayacağı anlamına gelir.'
        }
      ]
    },
    {
      id: 'commercial',
      title: 'TİCARİ ve RESMÎ BELGELER',
      icon: FileText,
      color: 'indigo',
      terms: [
        {
          code: 'Commercial Invoice',
          name: 'Ticari Fatura',
          description: 'Satıcı tarafından düzenlenen, malın fiyat, miktar, para birimi ve satış şartlarını gösteren temel ticari belge.'
        },
        {
          code: 'Proforma Invoice',
          name: 'Proforma Fatura',
          description: 'Teklif niteliğinde olup, henüz satış kesinleşmeden önce fiyat ve şartların alıcıya sunulduğu belge.'
        },
        {
          code: 'Packing List',
          name: 'Çeki Listesi',
          description: 'Koli, palet vb. bazında, her bir paketteki ürünlerin adet, ağırlık, hacim ve tanımlarını içeren detaylı liste.'
        },
        {
          code: 'Certificate of Origin',
          name: 'Menşe Şahadetnamesi',
          description: 'Malın üretildiği ülkeyi gösteren resmî menşe belgesi.'
        },
        {
          code: 'EUR.1',
          name: 'EUR.1 Dolaşım Belgesi',
          description: 'AB ve belirli ülkelerle yapılan serbest ticaret anlaşmaları kapsamında gümrük vergisi avantajı sağlayan menşe/dolaşım belgesi.'
        },
        {
          code: 'A.TR',
          name: 'A.TR Dolaşım Belgesi',
          description: 'Türkiye–AB Gümrük Birliği kapsamında, sanayi ürünlerinin serbest dolaşım statüsünü ispatlayan belge.'
        },
        {
          code: 'Insurance Policy',
          name: 'Sigorta Poliçesi / Sertifikası',
          description: 'Taşınan malın hangi risklere karşı, hangi teminatla ve hangi bedelle sigortalandığını gösteren belge.'
        },
        {
          code: 'Certificate of Analysis',
          name: 'Analiz Sertifikası',
          description: 'Malın kimyasal/fiziksel analiz sonuçlarını gösteren teknik belge (ilaç, gıda, kimya vb. için).'
        },
        {
          code: 'Phytosanitary Certificate',
          name: 'Bitki Sağlık Sertifikası',
          description: 'Bitkisel ürünlerin hastalık ve zararlılardan arınmış olduğunu gösteren resmî sertifika.'
        },
        {
          code: 'MSDS',
          name: 'Material Safety Data Sheet (Güvenlik Bilgi Formu)',
          description: 'Kimyasal maddelerin tehlikeleri, depolama ve kullanım kurallarını anlatan güvenlik dokümanı.'
        },
        {
          code: 'Inspection Certificate',
          name: 'Muayene/Denetim Sertifikası',
          description: 'Bağımsız bir gözetim/denetim firması tarafından malın kalite, miktar ve durumda sözleşmeye uygun olduğunu gösteren belge.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'ÖDEME ŞEKİLLERİ ve BANKACILIK TERİMLERİ',
      icon: CreditCard,
      color: 'rose',
      terms: [
        {
          code: 'T/T',
          name: 'Telegraphic Transfer (SWIFT Havalesi)',
          description: 'Bankalar arası elektronik para transferi. Günlük hayatımızda "swift" veya "havale" diye geçen dış ödeme yöntemi.'
        },
        {
          code: 'SWIFT',
          name: 'SWIFT Ağı',
          description: 'Dünya çapında bankalar arası mesajlaşma ve para transferi altyapısı. Uluslararası havalelerin çoğu SWIFT üzerinden yapılır.'
        },
        {
          code: 'L/C',
          name: 'Letter of Credit (Akreditif)',
          description: 'Alıcının bankasının, belirli şartlar yerine getirildiğinde satıcıya ödeme yapacağını taahhüt ettiği, belgeye dayalı güvenli ödeme yöntemi.'
        },
        {
          code: 'Sight L/C',
          name: 'Görüldüğünde Ödemeli Akreditif',
          description: 'Uygun belgeler ibraz edildiğinde derhal ödeme yapılan akreditif.'
        },
        {
          code: 'Usance L/C',
          name: 'Vadeli Akreditif',
          description: 'Belgeler uygun olsa bile ödemenin belirli bir vade sonunda yapılacağı akreditif.'
        },
        {
          code: 'Standby L/C',
          name: 'Teminat Amaçlı Akreditif',
          description: 'Ödeme aracı gibi değil, bankanın teminat mektubuna benzer garanti sağlar; alıcı yükümlülüklerini yerine getirmezse devreye girer.'
        },
        {
          code: 'Cash in Advance',
          name: 'Peşin Ödeme',
          description: 'Mal yüklenmeden önce alıcının satıcıya ödeme yapması.'
        },
        {
          code: 'Open Account',
          name: 'Açık Hesap',
          description: 'Malların sevk edilip faturalandırılması, ödemenin daha sonra yapılması; satıcı açısından riskli, alıcı açısından avantajlı yöntem.'
        },
        {
          code: 'D/P',
          name: 'Documents against Payment',
          description: 'Ödeme Karşılığı Vesika - Belgeler, alıcı ödemeyi yapınca teslim edilir.'
        },
        {
          code: 'D/A',
          name: 'Documents against Acceptance',
          description: 'Kabul Karşılığı Vesika - Alıcı poliçeyi kabul eder (vadeli ödeme taahhüdü verir), belgeleri alır; ödeme vadesi sonra gelir.'
        },
        {
          code: 'CAD',
          name: 'Cash Against Documents',
          description: 'Pratikte D/P ile benzer kullanılır: Ödeme yapılmadan belgeler teslim edilmez.'
        },
        {
          code: 'Remittance',
          name: 'Havale',
          description: 'Bankanın bir hesaptan başka bir hesaba para transfer etmesi.'
        },
        {
          code: 'Beneficiary',
          name: 'Lehdar',
          description: 'Ödemeden veya akreditiften yararlanan taraf; genellikle satıcı/ihracatçı.'
        },
        {
          code: 'Applicant',
          name: 'Akreditif Talep Eden (Amir)',
          description: 'Akreditifi açtıran, genellikle alıcı/ithalatçı.'
        }
      ]
    },
    {
      id: 'forex',
      title: 'DÖVİZ ve RİSK YÖNETİMİ',
      icon: DollarSign,
      color: 'yellow',
      terms: [
        {
          code: 'Exchange Rate',
          name: 'Döviz Kuru',
          description: 'Bir para biriminin başka bir para birimi cinsinden fiyatı.'
        },
        {
          code: 'Spot Rate',
          name: 'Spot Kur',
          description: 'Anında teslimli döviz alım-satımında geçerli kur.'
        },
        {
          code: 'Forward Contract',
          name: 'Forward Sözleşme',
          description: 'Belirli bir tarihte, önceden belirlenmiş kurdan döviz alım/satımını garanti altına alan sözleşme.'
        },
        {
          code: 'FX Risk',
          name: 'Kur Riski',
          description: 'İhracat ve ithalatta, sözleşme para birimi ile yerel para birimi arasındaki kur dalgalanmalarından doğan risk.'
        }
      ]
    },
    {
      id: 'insurance',
      title: 'SİGORTA ve RİSK TERİMLERİ',
      icon: Shield,
      color: 'teal',
      terms: [
        {
          code: 'Cargo Insurance',
          name: 'Yük Sigortası',
          description: 'Taşınan malların, taşıma sırasında doğabilecek risklere karşı sigortalanması.'
        },
        {
          code: 'ICC A/B/C',
          name: 'Institute Cargo Clauses A/B/C',
          description: 'Deniz yük sigortasında kullanılan standart kloz setleri. A en geniş, C en sınırlı teminatı sağlar.'
        },
        {
          code: 'General Average',
          name: 'Ortak Avarya',
          description: 'Gemiyi veya yükü kurtarmak için yapılan olağanüstü fedakârlık ve masrafların, gemi ve yük sahiplerince birlikte karşılanması prensibi.'
        },
        {
          code: 'Survey Report',
          name: 'Ekspertiz / Hasar Raporu',
          description: 'Hasar veya uyuşmazlık durumunda, bağımsız ekspertiz tarafından hazırlanan teknik rapor.'
        }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const filteredData = useMemo(() => {
    if (!searchTerm && selectedCategory === 'all') return glossaryData;
    
    return glossaryData.map(category => {
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return { ...category, terms: [] };
      }
      
      const filteredTerms = category.terms.filter(term => {
        const searchLower = searchTerm.toLowerCase();
        return (
          term.code.toLowerCase().includes(searchLower) ||
          term.name.toLowerCase().includes(searchLower) ||
          term.description.toLowerCase().includes(searchLower)
        );
      });
      
      return { ...category, terms: filteredTerms };
    }).filter(category => category.terms.length > 0);
  }, [searchTerm, selectedCategory, glossaryData]);

  const totalTerms = glossaryData.reduce((acc, cat) => acc + cat.terms.length, 0);

  const getCategoryColorClasses = (color) => {
    const colors = {
      cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      teal: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    };
    return colors[color] || 'bg-accent/10 text-accent border-accent/20';
  };

  return (
    <div className="min-h-screen bg-dark pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="text-sm text-light-300">DIŞ TİCARET</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            <span className="text-accent italic font-serif">Dış Ticaret</span> Sözlüğü
          </h1>
          <p className="text-light-400 text-lg">
            Uluslararası ticaret, lojistik, gümrük ve bankacılık terimleri hakkında kapsamlı rehber.
            <span className="text-accent ml-2">{totalTerms} terim</span>
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-500" />
            <input
              type="text"
              placeholder="Terim, kısaltma veya açıklama ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-100 border border-glass-border rounded-xl pl-12 pr-4 py-4 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-light-500 hover:text-light"
              >
                Temizle
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-accent text-dark'
                  : 'glass-card text-light-300 hover:text-accent'
              }`}
            >
              Tümü
            </button>
            {glossaryData.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-accent text-dark'
                    : 'glass-card text-light-300 hover:text-accent'
                }`}
              >
                {category.title.split(' ')[0].replace(',', '')}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Glossary Content */}
        <div className="max-w-5xl mx-auto space-y-6">
          <AnimatePresence>
            {filteredData.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-glass-hover transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getCategoryColorClasses(category.color)}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-light font-semibold text-lg">{category.title}</h2>
                      <p className="text-light-500 text-sm">{category.terms.length} terim</p>
                    </div>
                  </div>
                  {expandedCategories[category.id] ? (
                    <ChevronUp className="w-5 h-5 text-light-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-light-400" />
                  )}
                </button>

                {/* Terms */}
                <AnimatePresence>
                  {(expandedCategories[category.id] || searchTerm) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-glass-border"
                    >
                      <div className="divide-y divide-glass-border">
                        {category.terms.map((term, termIdx) => (
                          <motion.div
                            key={termIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: termIdx * 0.02 }}
                            className="px-6 py-4 hover:bg-glass-hover/50 transition-colors"
                          >
                            <div className="flex flex-col md:flex-row md:items-start gap-3">
                              <div className="flex-shrink-0">
                                <span className={`inline-block px-3 py-1 rounded-lg text-sm font-mono font-semibold border ${getCategoryColorClasses(category.color)}`}>
                                  {term.code}
                                </span>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-light font-medium mb-1">{term.name}</h3>
                                <p className="text-light-400 text-sm leading-relaxed">{term.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* No Results */}
          {filteredData.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-light-500 mx-auto mb-4" />
              <h3 className="text-light text-xl font-semibold mb-2">Sonuç Bulunamadı</h3>
              <p className="text-light-400">"{searchTerm}" ile eşleşen terim bulunamadı.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="mt-4 text-accent hover:underline"
              >
                Filtreleri Temizle
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Glossary;


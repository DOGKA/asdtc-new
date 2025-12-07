import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Send failed');
      
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = [
    {
      Icon: MapPin,
      title: 'Adres',
      content: 'Yıldızevler, Cezayir Cd. 6/6, 06550 Çankaya/Ankara',
      link: 'https://maps.google.com/?q=Yıldızevler+Cezayir+Cd+6/6+Çankaya+Ankara'
    },
    {
      Icon: Phone,
      title: 'Telefon',
      content: '+90 (312) 441-2117',
      link: 'tel:+903124412117'
    },
    {
      Icon: Mail,
      title: 'E-Posta',
      content: 'info@asdtc.com',
      link: 'mailto:info@asdtc.com'
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-dark-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-subtitle">İLETİŞİM</span>
          <h2 className="section-title text-light mb-6">
            <span className="heading-italic text-accent">Bizimle</span>{' '}
            <span>İletişime Geçin</span>
          </h2>
          <p className="text-light-300 text-lg">
            Projeleriniz için destek almak veya işbirliği fırsatlarını değerlendirmek için 
            bizimle iletişime geçin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, idx) => (
              <a 
                key={idx}
                href={item.link}
                target={item.Icon === MapPin ? '_blank' : undefined}
                rel={item.Icon === MapPin ? 'noopener noreferrer' : undefined}
                className="glass-card p-6 rounded-xl flex items-start gap-4 group hover:border-accent/30 transition-all duration-300 block"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-light font-semibold mb-1">{item.title}</h3>
                  <p className="text-light-400 text-sm">{item.content}</p>
                </div>
              </a>
            ))}

            {/* Map Preview */}
            <div className="glass-card rounded-xl overflow-hidden h-48 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center">
                <MapPin className="w-12 h-12 text-accent/50" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <a 
                  href="https://maps.google.com/?q=Yıldızevler+Cezayir+Cd+6/6+Çankaya+Ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-2 w-full justify-center"
                >
                  <span className="flex items-center gap-2">
                    Haritada Görüntüle
                    <MapPin className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-light-300 text-sm font-medium mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-light-300 text-sm font-medium mb-2">
                    E-Posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-light-300 text-sm font-medium mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Mesajınızın konusu"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-light-300 text-sm font-medium mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      Gönder
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </span>
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Mesajınız başarıyla gönderildi!</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Bir hata oluştu. Lütfen tekrar deneyin.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


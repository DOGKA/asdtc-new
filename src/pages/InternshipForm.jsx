import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Upload, FileText, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternshipForm = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    school: '',
    department: '',
    internshipTopic: '',
    supportTopic: '',
    message: '',
    consent: false
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 2 * 1024 * 1024; // 2MB
      
      if (!allowedTypes.includes(file.type)) {
        alert('Yalnızca PDF, DOC ve DOCX dosyaları kabul edilmektedir.');
        return;
      }
      
      if (file.size > maxSize) {
        alert('Dosya boyutu maksimum 2MB olmalıdır.');
        return;
      }
      
      setSelectedFile(file);
    }
  };

  // Convert file to Base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Lütfen veri koruma bildirimini onaylayın.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Get reCAPTCHA token
      const recaptchaToken = await window.grecaptcha.execute(
        '6LcXCSUsAAAAAIDlloVgXvku_3zpVpok5ebjfGdq',
        { action: 'internship_form' }
      );
      
      // Prepare file attachment if exists
      let fileData = null;
      if (selectedFile) {
        const base64 = await fileToBase64(selectedFile);
        fileData = {
          name: selectedFile.name,
          type: selectedFile.type,
          data: base64
        };
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'internship',
          attachment: fileData,
          recaptchaToken
        }),
      });
      
      if (!response.ok) throw new Error('Send failed');
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        school: '',
        department: '',
        internshipTopic: '',
        supportTopic: '',
        message: '',
        consent: false
      });
      setSelectedFile(null);
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="min-h-screen bg-dark pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
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
          <div className="inline-flex items-center gap-3 px-4 py-2 glass-card rounded-full mb-6">
            <GraduationCap className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium text-sm">STAJ PROGRAMI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            <span className="text-accent italic font-serif">Staj</span> Başvurusu
          </h1>
          <p className="text-light-400 text-lg">
            ASDTC Mühendislik'te staj yaparak kariyerinize güçlü bir başlangıç yapın.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-2xl space-y-6">
            {/* Name & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-light-300 text-sm font-medium mb-2">
                  Adınız Soyadınız *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Ad Soyad"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-light-300 text-sm font-medium mb-2">
                  Telefon Numaranız *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-light-300 text-sm font-medium mb-2">
                E-Posta Adresiniz *
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

            {/* School & Department */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="school" className="block text-light-300 text-sm font-medium mb-2">
                  Okuduğunuz Okul *
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Üniversite adı"
                />
              </div>
              <div>
                <label htmlFor="department" className="block text-light-300 text-sm font-medium mb-2">
                  Okuduğunuz Bölüm *
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Bölüm adı"
                />
              </div>
            </div>

            {/* Internship Topic & Support Topic */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="internshipTopic" className="block text-light-300 text-sm font-medium mb-2">
                  Staj Konusu *
                </label>
                <select
                  id="internshipTopic"
                  name="internshipTopic"
                  value={formData.internshipTopic}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light focus:outline-none focus:border-accent/50 transition-colors"
                >
                  <option value="" className="bg-dark">Seçiniz</option>
                  <option value="elektronik" className="bg-dark">Elektronik Mühendisliği</option>
                  <option value="yazilim" className="bg-dark">Yazılım Geliştirme</option>
                  <option value="makine" className="bg-dark">Makine Mühendisliği</option>
                  <option value="enerji" className="bg-dark">Enerji Sistemleri</option>
                  <option value="isletme" className="bg-dark">İşletme / Pazarlama</option>
                  <option value="diger" className="bg-dark">Diğer</option>
                </select>
              </div>
              <div>
                <label htmlFor="supportTopic" className="block text-light-300 text-sm font-medium mb-2">
                  Destek İstenilen Konu
                </label>
                <input
                  type="text"
                  id="supportTopic"
                  name="supportTopic"
                  value={formData.supportTopic}
                  onChange={handleChange}
                  className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Proje, araştırma vb."
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-light-300 text-sm font-medium mb-2">
                İletmek İstedikleriniz
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-dark-100 border border-glass-border rounded-xl px-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                placeholder="Kendinizi tanıtın, motivasyonunuzu paylaşın..."
              />
            </div>

            {/* File Upload - Transcript */}
            <div>
              <label className="block text-light-300 text-sm font-medium mb-2">
                Transkript
              </label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-glass-border rounded-xl p-6 text-center cursor-pointer hover:border-accent/50 transition-colors group"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {selectedFile ? (
                  <div className="flex items-center justify-center gap-3 text-accent">
                    <FileText className="w-6 h-6" />
                    <span>{selectedFile.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-light-500 mx-auto mb-2 group-hover:text-accent transition-colors" />
                    <p className="text-light-400 text-sm">
                      Dosya yüklemek için tıklayın
                    </p>
                    <p className="text-light-500 text-xs mt-1">
                      PDF, DOC, DOCX (Maks. 2MB)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-5 h-5 mt-0.5 rounded border-glass-border bg-dark-100 text-accent focus:ring-accent/50"
              />
              <label htmlFor="consent" className="text-light-400 text-sm leading-relaxed">
                <span className="text-amber-400 font-medium">Uyarı!</span> Kişisel verilerimin işlenmesine ilişkin{' '}
                <Link to="/veri-koruma" className="text-accent hover:underline">Veri Koruma Bildirimi</Link>'ni 
                inceledim ve verilerimin ASDTC Mühendislik tarafından işlenmesine izin veriyorum. *
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting || !formData.consent}
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
                    Başvuruyu Gönder
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
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Başvurunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>Bir hata oluştu. Lütfen tekrar deneyin.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InternshipForm;


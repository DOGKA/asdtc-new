import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts, getAllCategories } from '../data/blogData';

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = getAllCategories();

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Bizden Haberler': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'Bilim': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'Teknoloji': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Eğitim': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      default: return 'text-accent bg-accent/10 border-accent/20';
    }
  };

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
          <span className="section-subtitle">BLOG</span>
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            <span className="text-accent italic font-serif">Tüm</span> Yazılar
          </h1>
          <p className="text-light-400 text-lg">
            Teknoloji, bilim ve mühendislik dünyasından en güncel haberler ve yazılar.
          </p>
        </motion.div>

        {/* Filters */}
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
              placeholder="Yazılarda ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-100 border border-glass-border rounded-xl pl-12 pr-4 py-3 text-light placeholder-light-500 focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-accent text-dark'
                  : 'glass-card text-light-300 hover:text-accent'
              }`}
            >
              Tümü ({blogPosts.length})
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-dark'
                    : 'glass-card text-light-300 hover:text-accent'
                }`}
              >
                {category} ({blogPosts.filter(p => p.category === category).length})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="glass-card rounded-2xl overflow-hidden group hover:border-accent/30 transition-all duration-300"
            >
              <Link to={`/blog/${post.slug}`} className="block p-6">
                {/* Category & Date */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-light-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-light font-semibold text-lg mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Read More */}
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <span>Devamını Oku</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-light-400 text-lg">Aramanızla eşleşen yazı bulunamadı.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogList;


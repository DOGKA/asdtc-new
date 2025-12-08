import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLatestPosts } from '../data/blogData';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Get only latest 6 posts from data
  const blogPosts = getLatestPosts(6);

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

        {/* Blog List - Only last 6 posts */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto divide-y divide-glass-border"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group py-5 first:pt-0 last:pb-0"
            >
              <Link 
                to={`/blog/${post.slug}`} 
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

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-light-400 text-sm mt-2 line-clamp-1 hidden md:block">
                      {post.excerpt}
                    </p>
                  )}
                </div>
                
                {/* Arrow */}
                <div className="w-9 h-9 rounded-full bg-glass flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-light-400 group-hover:text-accent transition-colors" />
                </div>
              </Link>
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
          <Link to="/blog" className="btn-outline">
            <span className="flex items-center gap-2">
              Tüm Yazılar ({28})
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

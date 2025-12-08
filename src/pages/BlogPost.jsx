import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, ArrowRight, Share2 } from 'lucide-react';
import { getPostBySlug, getLatestPosts } from '../data/blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const latestPosts = getLatestPosts(5).filter(p => p.slug !== slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-dark pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-light mb-4">Yazı Bulunamadı</h1>
          <p className="text-light-400 mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Link to="/blog" className="btn-primary">
            <span className="relative z-10">Tüm Yazılara Dön</span>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Bizden Haberler': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'Bilim': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'Teknoloji': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Eğitim': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      default: return 'text-accent bg-accent/10 border-accent/20';
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link kopyalandı!');
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
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-light-400 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Geri Dön</span>
            </button>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {/* Category & Date */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border ${getCategoryColor(post.category)}`}>
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
              <span className="flex items-center gap-2 text-light-500 text-sm">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light leading-tight mb-6">
              {post.title}
            </h1>

            {/* Share Button */}
            <button 
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-light-400 hover:text-accent transition-colors"
            >
              <Share2 className="w-5 h-5" />
              <span>Paylaş</span>
            </button>
          </motion.header>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 md:p-10 mb-12"
          >
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-light prose-headings:font-semibold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-light-300 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-light prose-strong:font-semibold
                prose-ul:text-light-300 prose-ul:my-4
                prose-li:my-1
                prose-blockquote:border-l-accent prose-blockquote:text-light-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-between items-center mb-16"
          >
            <Link to="/blog" className="btn-outline">
              <span className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Tüm Yazılar
              </span>
            </Link>
          </motion.div>

          {/* Related Posts */}
          {latestPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-light mb-6">Diğer Yazılar</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {latestPosts.slice(0, 4).map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="glass-card rounded-xl p-5 group hover:border-accent/30 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(relatedPost.category)}`}>
                        {relatedPost.category}
                      </span>
                      <span className="text-light-500 text-xs">{relatedPost.date}</span>
                    </div>
                    <h3 className="text-light font-medium group-hover:text-accent transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;


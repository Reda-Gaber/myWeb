import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import blogData, { BlogPost } from '../data/blogData';

const BlogPage = () => {
  const [activeTag, setActiveTag] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Extract all unique tags
  const allTags = [
    'الكل',
    'البرمجة',
    'المبتدئين',
    'الأساسيات',
    'الواجهات الأمامية',
    'رياكت',
    'HTML',
    'CSS',
    'الخلفيات',
    'Node.js',
    'واجهات البرمجة',
    'قواعد البيانات',
    'جيت هاب',
    'التحكم بالإصدارات',
    'التعاون',
    'المشاريع',
    'التطوير الكامل',
    'النشر'
  ];
  
  // Filter posts based on active tag and search query
  const filteredPosts = blogData.filter(post => {
    const matchesTag = activeTag === 'الكل' || post.tags.includes(activeTag);
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">المدونة</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          مقالات ودروس حول تطوير البرمجيات، الواجهات الأمامية والخلفية، وإدارة المشاريع.
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-col md:flex-row justify-between gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Search input */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="ابحث في المقالات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        {/* Tags filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeTag === tag 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={`${activeTag}-${searchQuery}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium mb-2">لم يتم العثور على مقالات</h3>
              <p className="text-gray-600 dark:text-gray-400">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex-1 flex justify-center flex-col">
        <div className="mb-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {post.excerpt}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center flex-wrap gap-2 mb-3">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              بقلم <span className="font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
            </p>
            <Link
              to={post.link}
              className="px-4 py-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors rounded-md transition-colors"
            >
              اقرأ المزيد
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogPage;
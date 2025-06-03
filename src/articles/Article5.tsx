import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData';

const Article5: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find(post => post.id === parseInt(id || '5'));

  if (!post) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">المقال غير موجود</h3>
        <p className="text-gray-600 dark:text-gray-400">
          يبدو أن المقال الذي تبحث عنه غير موجود. حاول العودة إلى صفحة المدونة.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* الصورة الرئيسية */}
      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* العنوان والمعلومات */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <p>
            بقلم{' '}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {post.author}
            </span>
          </p>
          <p>{post.date}</p>
        </div>
      </div>

      {/* المحتوى */}
      <div className="prose prose-lg prose-gray dark:prose-invert mb-8">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {post.content}
        </p>
      </div>

      {/* التاجات */}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Article5;
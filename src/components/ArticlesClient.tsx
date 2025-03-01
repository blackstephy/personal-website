'use client';

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { Article } from "@/types/article";

// 模拟数据
const FEATURED_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Art of Minimalism',
    description: 'Exploring the beauty of simplicity in modern design',
    cover: '/article1.jpg',
    readCount: 12500,
    tags: ['Design', 'Minimalism'],
    publishDate: '2024-03-15',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Modern Web Development',
    description: 'The future of web development and design trends',
    cover: '/article2.jpg',
    readCount: 9800,
    tags: ['Development', 'Web'],
    publishDate: '2024-03-14',
    isFeatured: true
  },
];

const ARTICLES: Article[] = [
  {
    id: '5',
    title: 'Design Principles for Modern Web',
    description: 'Essential guidelines for contemporary web design',
    cover: '/article5.jpg',
    readCount: 8300,
    tags: ['Web Design', 'UI/UX'],
    publishDate: '2024-03-10'
  },
  {
    id: '6',
    title: 'The Future of UX Design',
    description: 'Exploring upcoming trends in user experience design',
    cover: '/article6.jpg',
    readCount: 6200,
    tags: ['UX', 'Design Trends'],
    publishDate: '2024-03-08'
  },
];

// 返回按钮组件
const BackButton = () => {
  const router = useRouter();
  return (
    <button 
      onClick={() => router.push('/')}
      className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
      type="button"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-medium">Back</span>
    </button>
  );
};

// 精选文章卡片组件
const FeaturedArticleCard = ({ article }: { article: Article }) => (
  <div className="flex-none w-[300px] group cursor-pointer">
    <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
      <Image
        src={article.cover}
        alt={article.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
      {article.title}
    </h3>
    <p className="text-gray-600 line-clamp-2">
      {article.description}
    </p>
  </div>
);

// 文章列表项组件
const ArticleListItem = ({ article }: { article: Article }) => (
  <div className="flex items-center py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
    <div className="flex-1">
      <h3 className="text-xl font-bold mb-2 hover:text-gray-600 transition-colors">
        {article.title}
      </h3>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <span>👁</span>
          {article.readCount.toLocaleString()} reads
        </span>
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs">
          {new Date(article.publishDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
    </div>
  </div>
);

export function ArticlesClient() {
  const [mounted, setMounted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('featured-container');
    if (container) {
      const scrollAmount = 320; // 卡片宽度 + 间距
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(
            scrollPosition + scrollAmount,
            container.scrollWidth - container.clientWidth
          );
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <BackButton />
        </div>

        {/* 精选文章部分 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="relative">
            <div 
              id="featured-container"
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            >
              {FEATURED_ARTICLES.map(article => (
                <FeaturedArticleCard key={article.id} article={article} />
              ))}
            </div>
            {FEATURED_ARTICLES.length > 3 && (
              <>
                <button
                  onClick={() => handleScroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors"
                  type="button"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors"
                  type="button"
                >
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </>
            )}
          </div>
        </section>

        {/* 文章列表部分 */}
        <section>
          <h2 className="text-3xl font-bold mb-8">All Articles</h2>
          <div className="divide-y divide-gray-200">
            {ARTICLES.map(article => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 
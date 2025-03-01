'use client';

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Navigation } from "./Navigation";

// 返回按钮组件
const BackButton = () => {
  const router = useRouter();
  return (
    <button 
      onClick={() => router.push('/')}
      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-medium">Back to Home</span>
    </button>
  );
};

// 内容组件
const PageContent = () => (
  <div className="max-w-2xl mx-auto text-center px-4">
    <div className="mb-4">
      <BackButton />
    </div>
    <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-8">About Me</h2>
    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
      Hi, I'm Stephy Tang, a minimalist designer based in Arlington Heights. 
      I focus on creating clean, user-friendly designs that communicate effectively. 
      My approach combines simplicity with functionality, ensuring that every element serves a purpose.
      <br /><br />
      With years of experience in digital design, I've worked with various clients 
      to bring their visions to life while maintaining a minimalist aesthetic that speaks volumes.
    </p>
  </div>
);

export function ContentPageClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center">
        <PageContent />
      </main>
      <footer className="py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-8 flex justify-center md:justify-end">
          <p className="text-black">Arlington Heights, IL</p>
        </div>
      </footer>
    </div>
  );
} 
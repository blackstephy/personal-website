'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { MainImageClient } from "@/components/MainImageClient";
import { ArrowLeft } from "lucide-react";

// 返回按钮组件
const BackButton = () => {
  const router = useRouter();
  return (
    <button 
      onClick={() => router.push('/')}
      className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
    >
      <ArrowLeft size={24} />
      <span>Back</span>
    </button>
  );
};

// 详情内容组件
const DetailContent = () => (
  <div className="w-full md:w-1/3 md:pr-8 order-3 md:order-1 text-center md:text-left">
    <div className="mb-4">
      <BackButton />
    </div>
    <div className="mt-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>
      <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-600">
        Hi, I'm Stephy Tang, a minimalist designer based in Arlington Heights.
        I focus on creating clean, user-friendly designs that communicate effectively.
        My approach combines simplicity with functionality, ensuring that every
        element serves a purpose.
      </p>
      <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-600">
        With years of experience in digital design, I've worked with various
        clients to bring their visions to life while maintaining a minimalist
        aesthetic that speaks volumes.
      </p>
    </div>
  </div>
);

// 标语组件保持不变
const Slogan = () => (
  <div className="w-full md:w-1/3 md:pl-8 flex justify-center md:justify-end order-2 md:order-3 mt-6 md:mt-0">
    <h2 className="text-5xl md:text-7xl font-bold text-black leading-tight text-center md:text-right">
      less is<br />more.
    </h2>
  </div>
);

export default function Detail() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      {/* 导航栏 */}
      <nav className="flex justify-between items-center px-6 md:px-8 py-6">
        <div className="text-2xl font-bold tracking-wider">STEPHY TANG</div>
        <div className="hidden md:flex items-center gap-4">
          <InteractiveHoverButton className="border-none">
            RED
          </InteractiveHoverButton>
          <InteractiveHoverButton className="border-none">
            TIKTOK
          </InteractiveHoverButton>
          <InteractiveHoverButton className="border-none">
            WECHAT
          </InteractiveHoverButton>
          <InteractiveHoverButton className="border-none">
            MORE
          </InteractiveHoverButton>
        </div>
      </nav>

      {/* 主要内容区 */}
      <main className="container mx-auto flex flex-col md:flex-row items-center flex-1 px-4 md:px-8 gap-8 md:gap-0">
        <DetailContent />
        {mounted && <MainImageClient />}
        <Slogan />
      </main>

      {/* 位置信息 */}
      <footer className="w-full py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-8 flex justify-center md:justify-end">
          <p className="text-black">Arlington Heights, IL</p>
        </div>
      </footer>
    </div>
  );
} 
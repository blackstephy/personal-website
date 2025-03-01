'use client';

import Link from "next/link";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { useState } from "react";

// 菜单按钮组件
const MenuButton = ({ onClick }: { onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="block md:hidden w-6 h-5 relative flex flex-col justify-between"
    type="button"
  >
    <span className="w-full h-0.5 bg-black rounded-full transition-all duration-300"/>
    <span className="w-full h-0.5 bg-black rounded-full transition-all duration-300"/>
    <span className="w-full h-0.5 bg-black rounded-full transition-all duration-300"/>
  </button>
);

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center px-6 md:px-8 py-6 bg-white">
        <Link 
          href="/"
          className="text-2xl font-bold tracking-wider hover:opacity-70 transition-opacity relative z-50"
        >
          STEPHY TUNG
        </Link>
        
        {/* 桌面端导航 */}
        <div className="hidden md:flex items-center gap-4">
          <InteractiveHoverButton 
            className="border-none"
            onClick={() => window.open('https://www.xiaohongshu.com/user/profile/67507430000000001c018499', '_blank')}
          >
            RED
          </InteractiveHoverButton>
          <InteractiveHoverButton 
            className="border-none"
            onClick={() => window.open('https://www.douyin.com/user/self?from_tab_name=main', '_blank')}
          >
            TIKTOK
          </InteractiveHoverButton>
          <InteractiveHoverButton 
            className="border-none"
            onClick={() => window.open('https://sspai.com/u/b38mvwi7/updates', '_blank')}
          >
            MATRIX
          </InteractiveHoverButton>
          <Link href="/about">
            <InteractiveHoverButton 
              className="border-none"
            >
              MORE
            </InteractiveHoverButton>
          </Link>
        </div>

        {/* 移动端菜单按钮 */}
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden py-4 px-6">
          <div className="flex flex-col gap-4">
            <button 
              className="text-black hover:opacity-70 transition-opacity text-left"
              onClick={() => {
                window.open('https://www.xiaohongshu.com/user/profile/67507430000000001c018499', '_blank');
                setIsMenuOpen(false);
              }}
              type="button"
            >
              RED
            </button>
            <button 
              className="text-black hover:opacity-70 transition-opacity text-left"
              onClick={() => {
                window.open('https://www.douyin.com/user/self?from_tab_name=main', '_blank');
                setIsMenuOpen(false);
              }}
              type="button"
            >
              TIKTOK
            </button>
            <button 
              className="text-black hover:opacity-70 transition-opacity text-left"
              onClick={() => {
                window.open('https://sspai.com/u/b38mvwi7/updates', '_blank');
                setIsMenuOpen(false);
              }}
              type="button"
            >
              MATRIX
            </button>
            <Link 
              href="/about"
              className="text-black hover:opacity-70 transition-opacity text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              MORE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 
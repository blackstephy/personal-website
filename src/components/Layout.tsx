'use client';

import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";

// 静态版本的布局组件，用于初始渲染
export function StaticLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="h-[72px] flex items-center px-6 md:px-8">
        <div className="text-2xl font-bold tracking-wider">STEPHY TANG</div>
      </div>
      {children}
    </div>
  );
}

// 客户端版本的布局组件，用于添加交互功能
export function Layout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <StaticLayout>{children}</StaticLayout>;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      {children}
    </div>
  );
}
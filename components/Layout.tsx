'use client';

import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="h-[72px] flex items-center px-6 md:px-8">
          <div className="text-2xl font-bold tracking-wider">STEPHY TANG</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      {children}
    </div>
  );
} 
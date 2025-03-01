'use client';

import { Layout } from "@/components/Layout";
import { MainImageClient } from "@/components/MainImageClient";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { useRouter } from "next/navigation";

// 分离文本内容组件
const TextContent = () => {
  const router = useRouter();
  
  return (
    <div className="w-full md:w-1/3 md:pr-8 order-3 md:order-1 text-center md:text-left">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
          Hi, this is Stephy Tung<br />Welcome!
        </h2>
      </div>
      <RainbowButton 
        className="mx-auto md:mx-0"
        onClick={() => window.open('https://www.notion.so/Stephy-Tang-s-1a830fb25526806f9d9ce5979538800f?pvs=4', '_blank')}
        style={{
          "--color-1": "340deg 82% 52%",
          "--color-2": "290deg 82% 52%",
          "--color-3": "240deg 82% 52%",
          "--color-4": "190deg 82% 52%",
          "--color-5": "140deg 82% 52%",
        } as React.CSSProperties}
      >
        Read More
      </RainbowButton>
    </div>
  );
};

// 菜单按钮组件
const MenuButton = () => (
  <button className="block md:hidden w-6 h-5 relative flex flex-col justify-between">
    <span className="w-full h-0.5 bg-black rounded-full transition-all duration-300"></span>
    <span className="w-full h-0.5 bg-black rounded-full transition-all duration-300"></span>
    <span className="w-full h-0.5 bg-black rounded-full transition-all duration-300"></span>
  </button>
);

// 标语组件
const Slogan = () => (
  <div className="w-full md:w-1/3 md:pl-8 flex justify-center md:justify-end order-2 md:order-3 mt-6 md:mt-0">
    <h2 className="text-5xl md:text-7xl font-bold text-black leading-tight text-center md:text-right">
      less is<br />more.
    </h2>
  </div>
);

export default function Home() {
  return (
    <Layout>
      <main className="container mx-auto flex flex-col md:flex-row items-center flex-1 px-4 md:px-8 gap-8 md:gap-0 relative">
        <TextContent />
        <MainImageClient />
        <Slogan />
      </main>
    </Layout>
  );
}

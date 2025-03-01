import { Layout } from "@/components/Layout";
import { MainImageClient } from "@/components/MainImageClient";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";

// 分离文本内容组件
const TextContent = () => {
  return (
    <div className="w-full md:w-1/3 md:pr-8 order-3 md:order-1 text-center md:text-left">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
          Hi, this is Stephy Tung<br />Welcome!
        </h2>
      </div>
      <Link href="https://www.notion.so/Stephy-Tang-s-1a830fb25526806f9d9ce5979538800f?pvs=4" target="_blank" rel="noopener noreferrer">
        <RainbowButton 
          className="mx-auto md:mx-0"
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
      </Link>
    </div>
  );
};

// 标语组件
const Slogan = () => (
  <div className="w-full md:w-1/3 md:pl-8 flex justify-center md:justify-end order-2 md:order-3 mt-6 md:mt-0">
    <h2 className="text-5xl md:text-7xl font-bold text-black leading-tight text-center md:text-right">
      less is<br />more.
    </h2>
  </div>
);

// 客户端组件包装器
export const dynamic = 'force-static';

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

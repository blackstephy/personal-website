'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { Ripple } from "@/components/magicui/ripple";

// 静态版本的组件，用于初始渲染
export const MainImageStatic = () => {
  return (
    <div className="w-full md:w-1/3 relative flex items-center justify-center order-1 md:order-2">
      <div className="w-full max-w-md aspect-square relative">
        <div className="absolute w-[120%] h-[120%] bg-[#F7C748] rounded-full"
          style={{
            top: '-10%',
            left: '-10%',
            zIndex: 0
          }}
        />
        {/* 人物图片 */}
        <div 
          className="absolute z-10"
          style={{
            top: '0',
            left: '0',
            right: '0',
            bottom: '-10%',
            height: '110%'
          }}
        >
          <Image
            src="/person.png"
            alt="Profile"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

// 客户端版本的组件，用于添加动画效果
export const MainImageClient = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <MainImageStatic />;
  }

  return (
    <div className="w-full md:w-1/3 relative flex items-center justify-center order-1 md:order-2">
      <div className="w-full max-w-md aspect-square relative">
        {/* 黄色圆形背景 */}
        <div 
          className="absolute w-[120%] h-[120%] bg-[#F7C748] rounded-full"
          style={{
            top: '-10%',
            left: '-10%',
            zIndex: 0
          }}
        >
          <Ripple
            className="opacity-100"
            mainCircleSize={500}        // 增大尺寸以覆盖整个圆形
            mainCircleOpacity={0.8}     // 提高不透明度
            numCircles={4}              // 增加圆圈数量使动画更流畅
            style={{
              "--foreground": "48 100% 50%",  // 黄色
            } as React.CSSProperties}
          />
        </div>
        
        {/* 人物图片 */}
        <div 
          className="absolute z-10"
          style={{
            top: '0',
            left: '0',
            right: '0',
            bottom: '-10%',
            height: '110%'
          }}
        >
          <Image
            src="/person.png"
            alt="Profile"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MainImageClient;
'use client';

import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Ripple = dynamic(() => import("./magicui/ripple").then(mod => mod.Ripple), {
  ssr: false
});

export function MainImage() {
  return (
    <div className="w-full md:w-1/3 relative flex items-center justify-center order-1 md:order-2">
      <div className="w-full max-w-md aspect-square relative">
        <div 
          className="absolute w-[120%] h-[120%] bg-[#F7C748] rounded-full"
          style={{
            top: '-10%',
            left: '-10%',
            zIndex: 0
          }}
        >
          <Suspense fallback={null}>
            <Ripple
              className="opacity-100"
              mainCircleSize={500}
              mainCircleOpacity={0.8}
              numCircles={4}
              style={{
                "--foreground": "48 100% 50%",
              } as React.CSSProperties}
            />
          </Suspense>
        </div>
        
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
}

export default MainImage; 
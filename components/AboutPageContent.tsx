'use client';

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

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

export function AboutPageContent() {
  return (
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
} 
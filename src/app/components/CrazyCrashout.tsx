'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CrashoutImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 20;
      const rotateY = (x - centerX) / 20;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 3D Tilting Container */}
      <div
        ref={containerRef}
        className="w-[90vw] h-[90vh] transition-transform duration-75 ease-linear"
      >
        {/* Insane Background */}
        <div className="absolute w-full h-full bg-gradient-conic from-red-500 via-yellow-500 to-blue-500 blur-2xl opacity-40 animate-spin-slow mix-blend-overlay z-0"></div>

        {/* Striped flashing chaos */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,_#00ffff_0px,_#00ffff_10px,_#000_10px,_#000_20px)] mix-blend-difference opacity-20 animate-flicker"></div>

        {/* Main Image */}
        <Image
          src="/gyatttt.jpg"
          alt="Crashout"
          width={700}
          height={900}
          className="relative z-10 animate-shake-fast rotate-[3deg] scale-[1.3] contrast-[300%] brightness-[200%] saturate-[400%] drop-shadow-[0_0_40px_#00f0ff] hover:scale-[1.5] transition-all duration-300 ease-in-out"
          priority
        />

        {/* 3D Flying Text */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-5xl font-black text-white drop-shadow-[0_0_25px_#ff00ff] z-30`}
            style={{
              top: `${10 + i * 15}%`,
              left: `${Math.random() * 80}%`,
              transform: `translateZ(${i * 100}px) rotateZ(${Math.random() * 30 - 15}deg)`,
              animation: `bounce ${1 + Math.random()}s infinite`,
            }}
          >
            HATE THE JEWS🔊🔥
          </div>
        ))}

        {/* Caption */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-40">
          <h2 className="text-4xl font-extrabold text-green-300 animate-wiggle text-shadow-neon">
            BRO IS IN AGARTHA 🚀🧠
          </h2>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shake-fast {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(5px, -5px); }
          50% { transform: translate(-5px, 5px); }
          75% { transform: translate(5px, 5px); }
        }
        .animate-shake-fast {
          animation: shake-fast 0.1s infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-wiggle {
          animation: wiggle 0.3s infinite;
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(720deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }

        @keyframes flicker {
          0% { opacity: 0.2; }
          50% { opacity: 0.4; }
          100% { opacity: 0.2; }
        }
        .animate-flicker {
          animation: flicker 0.1s infinite;
        }

        .text-shadow-neon {
          text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
        }
      `}</style>
    </div>
  );
}

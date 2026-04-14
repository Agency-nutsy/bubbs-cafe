import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload all hero images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Fast to 65% in ~800ms, then to 100% by 2s
    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(85), 1000);
    const t3 = setTimeout(() => setProgress(100), 1700);
    const t4 = setTimeout(() => onComplete(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b] overflow-hidden"
        // Smooth, modern scale-up exit
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* Subtle, cool-toned ambient glow behind the text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[450px] h-[450px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(0,0,0,0) 65%)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
          {/* Main Title Animation */}
          <motion.h1
            className="font-display text-6xl sm:text-7xl font-bold mb-3 text-center tracking-tight"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span 
              className="text-transparent bg-clip-text"
              style={{ 
                backgroundImage: "linear-gradient(135deg, #a5b4fc, #6366f1)",
                filter: "drop-shadow(0px 0px 12px rgba(99, 102, 241, 0.3))"
              }}
            >
              Bubbs
            </span>
            <span className="text-zinc-100"> Cafe</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="mb-12 text-xs sm:text-sm tracking-[0.3em] text-[#818cf8] font-medium uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            Vibes & Bites • Satya Niketan
          </motion.p>

          {/* Modern Progress Container */}
          <div className="w-full flex flex-col items-center">
            {/* Number Counter positioned right above the bar */}
            <motion.div 
              className="w-64 sm:w-80 flex justify-end mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-zinc-400 text-xs font-mono font-medium tracking-wider">
                {progress}%
              </span>
            </motion.div>

            {/* Sleek Loading Bar */}
            <motion.div
              className="w-64 sm:w-80 h-[3px] rounded-full overflow-hidden bg-zinc-800/50"
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #818cf8, #4f46e5)",
                  boxShadow: "0 0 10px rgba(99, 102, 241, 0.6)"
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
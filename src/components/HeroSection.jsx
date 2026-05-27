import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkle } from 'lucide-react';

function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Animasi mirip iPhone: Memudar dan mengecil saat di-scroll ke bawah
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0f1115] to-[#0f1115]"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 flex flex-col items-center justify-center -rotate-[8deg]"
      >
        {/* Structured, Looping Sparkles */}
        <motion.div
          animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], rotate: [0, 90, 180] }}
          transition={{ duration: 3, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -left-16 text-white"
        >
          <Sparkle fill="white" size={48} />
        </motion.div>

        <motion.div
          animate={{ scale: [0, 1, 0], opacity: [0, 0.8, 0], rotate: [0, -90, -180] }}
          transition={{ duration: 4, delay: 1.1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 -right-8 text-white"
        >
          <Sparkle fill="white" size={32} />
        </motion.div>

        <motion.div
          animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0], rotate: [0, 45, 90] }}
          transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 -left-20 text-white"
        >
          <Sparkle fill="white" size={56} />
        </motion.div>

        <motion.div
          animate={{ scale: [0, 0.8, 0], opacity: [0, 0.6, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 2.5, delay: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 right-10 text-white"
        >
          <Sparkle fill="white" size={24} />
        </motion.div>

        <motion.div
          animate={{ scale: [0, 1.1, 0], opacity: [0, 0.9, 0], rotate: [0, -45, -90] }}
          transition={{ duration: 4.2, delay: 0.9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-24 text-white"
        >
          <Sparkle fill="white" size={40} />
        </motion.div>

        {/* Text elements with motion blur simulation and floating effect */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center font-black italic tracking-tighter text-white leading-none pointer-events-none drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] w-full px-4"
        >
          <div className="flex gap-4">
            <motion.span
              initial={{ opacity: 0, filter: "blur(20px)", x: -150, scale: 1.8 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl lg:text-[10rem] uppercase"
            >
              Welcome
            </motion.span>
          </div>
          <div className="flex gap-4">
            <motion.span
              initial={{ opacity: 0, filter: "blur(20px)", x: -100, scale: 1.8 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl uppercase ml-12"
            >
              To My
            </motion.span>
          </div>
          <div className="flex gap-4">
            <motion.span
              initial={{ opacity: 0, filter: "blur(20px)", x: 150, scale: 1.8 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl lg:text-[10rem] uppercase"
            >
              Landing Page
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 pointer-events-auto"
        >
          <button className="relative overflow-hidden group px-8 py-4 rounded-2xl bg-[#181b21] text-white font-medium text-lg transition-all duration-300 shadow-[var(--shadow-skeuo)] hover:shadow-[var(--shadow-skeuo-inner)] active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
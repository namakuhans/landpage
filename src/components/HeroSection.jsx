import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 mb-6 shadow-[var(--shadow-skeuo)]">
            Motion Graphics & GFX Artist
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6"
        >
          Visualizing<br />The Impossible.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Creating stunning motion graphics and visual effects with a modern touch.
          Every pixel crafted with precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
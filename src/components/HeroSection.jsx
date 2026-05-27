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
        {/* Structured, Looping Sparkles - Bubble Pop Effect */}
        <motion.div
          animate={{
            y: [50, -10, -10, -10, -10],
            scale: [0, 1.2, 1.2, 2.5, 0],
            opacity: [0, 1, 1, 0, 0],
            rotate: [0, 45, 45, 90, 90]
          }}
          transition={{ duration: 3, delay: 0.2, repeat: Infinity, times: [0, 0.3, 0.8, 0.95, 1], ease: "easeInOut" }}
          className="absolute -top-12 -left-16 text-white"
        >
          <Sparkle fill="currentColor" size={48} />
        </motion.div>

        <motion.div
          animate={{
            y: [70, -5, -5, -5, -5],
            scale: [0, 1, 1, 2.2, 0],
            opacity: [0, 0.8, 0.8, 0, 0],
            rotate: [0, -30, -30, -60, -60]
          }}
          transition={{ duration: 4, delay: 1.1, repeat: Infinity, times: [0, 0.4, 0.85, 0.95, 1], ease: "easeInOut" }}
          className="absolute top-8 -right-8 text-white"
        >
          <Sparkle fill="currentColor" size={32} />
        </motion.div>

        <motion.div
          animate={{
            y: [60, -15, -15, -15, -15],
            scale: [0, 1.5, 1.5, 3, 0],
            opacity: [0, 1, 1, 0, 0],
            rotate: [0, 20, 20, 45, 45]
          }}
          transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, times: [0, 0.35, 0.8, 0.95, 1], ease: "easeInOut" }}
          className="absolute bottom-4 -left-20 text-white"
        >
          <Sparkle fill="currentColor" size={56} />
        </motion.div>

        <motion.div
          animate={{
            y: [40, -8, -8, -8, -8],
            scale: [0, 0.8, 0.8, 1.8, 0],
            opacity: [0, 0.6, 0.6, 0, 0],
            rotate: [0, 60, 60, 120, 120]
          }}
          transition={{ duration: 2.5, delay: 1.8, repeat: Infinity, times: [0, 0.3, 0.75, 0.95, 1], ease: "easeInOut" }}
          className="absolute -bottom-10 right-10 text-white"
        >
          <Sparkle fill="currentColor" size={24} />
        </motion.div>

        <motion.div
          animate={{
            y: [80, -12, -12, -12, -12],
            scale: [0, 1.1, 1.1, 2.4, 0],
            opacity: [0, 0.9, 0.9, 0, 0],
            rotate: [0, -45, -45, -90, -90]
          }}
          transition={{ duration: 4.2, delay: 0.9, repeat: Infinity, times: [0, 0.35, 0.85, 0.95, 1], ease: "easeInOut" }}
          className="absolute top-1/2 -right-24 text-white"
        >
          <Sparkle fill="currentColor" size={40} />
        </motion.div>

        {/* Text elements with motion blur simulation and floating effect */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center font-black italic tracking-tighter text-white leading-[0.8] pointer-events-none drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] w-full px-4"
          style={{ fontFamily: "'Tusker Grotesk', 'Anton', sans-serif", letterSpacing: '0.02em' }}
        >
          <div className="flex w-full justify-center">
            <motion.span
              initial={{ opacity: 0, filter: "blur(20px)", x: -150, scale: 1.8 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11.5rem] uppercase whitespace-nowrap text-center"
            >
              Welcome
            </motion.span>
          </div>
          <div className="flex w-full justify-center">
            <motion.span
              initial={{ opacity: 0, filter: "blur(20px)", x: -100, scale: 1.8 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[6.5rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] uppercase whitespace-nowrap text-center -mt-2 lg:-mt-6"
            >
              To My
            </motion.span>
          </div>
          <div className="flex w-full justify-center">
            <motion.span
              initial={{ opacity: 0, filter: "blur(20px)", x: 150, scale: 1.8 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7.2rem] uppercase whitespace-nowrap text-center -mt-1 lg:-mt-4"
            >
              Landing Page
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
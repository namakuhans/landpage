import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkle } from 'lucide-react';

function WelcomeOverlay({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide overlay after animation finishes (approx 2.5s)
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow fade out animation to finish before notifying parent
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Main text container with rotation */}
          <motion.div
            className="relative flex flex-col items-center justify-center -rotate-[8deg]"
          >
            {/* Sparkles */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -left-12 text-white"
            >
              <Sparkle fill="white" size={32} />
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute top-2 right-4 text-white"
            >
              <Sparkle fill="white" size={24} />
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute bottom-2 -left-6 text-white"
            >
              <Sparkle fill="white" size={40} />
            </motion.div>

            {/* Text elements with motion blur simulation */}
            <div className="flex flex-col items-center font-black italic tracking-tighter text-white leading-[0.85]">
              <div className="flex gap-4">
                <motion.span
                  initial={{ opacity: 0, filter: "blur(20px)", x: -100, scale: 1.5 }}
                  animate={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl lg:text-9xl uppercase"
                >
                  Welcome
                </motion.span>
              </div>
              <div className="flex gap-4">
                <motion.span
                  initial={{ opacity: 0, filter: "blur(20px)", x: -50, scale: 1.5 }}
                  animate={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl lg:text-8xl uppercase ml-12"
                >
                  To My
                </motion.span>
              </div>
              <div className="flex gap-4">
                <motion.span
                  initial={{ opacity: 0, filter: "blur(20px)", x: 100, scale: 1.5 }}
                  animate={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl lg:text-9xl uppercase"
                >
                  Landing Page
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeOverlay;
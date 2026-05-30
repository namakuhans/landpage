import { motion } from 'framer-motion';
import { Hammer } from 'lucide-react';

function GallerySection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-20 bg-[#0f1115]">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Selected Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          A collection of my latest motion design and visual effects projects.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full h-[400px] rounded-3xl bg-[#181b21] shadow-[var(--shadow-skeuo-inner)] border border-white/5 flex flex-col items-center justify-center text-center p-8"
      >
        <Hammer className="w-16 h-16 text-gray-500 mb-6 animate-pulse" />
        <h3 className="text-3xl font-bold text-gray-300 mb-2 tracking-widest uppercase" style={{ fontFamily: "'Tusker Grotesk', 'Anton', sans-serif" }}>
          Coming Soon
        </h3>
        <p className="text-gray-500 text-lg max-w-md">
          This section is currently under construction. Please check back later for new updates and projects.
        </p>
      </motion.div>
    </section>
  );
}

export default GallerySection;
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

function EquipmentSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-20 bg-[#0f1115]">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          My Arsenal
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          The hardware and software that brings imagination into reality.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full h-[300px] rounded-3xl bg-[#181b21] shadow-[var(--shadow-skeuo-inner)] border border-white/5 flex flex-col items-center justify-center text-center p-8 mx-auto max-w-4xl"
      >
        <Settings className="w-16 h-16 text-gray-500 mb-6 animate-[spin_4s_linear_infinite]" />
        <h3 className="text-3xl font-bold text-gray-300 mb-2 tracking-widest uppercase" style={{ fontFamily: "'Tusker Grotesk', 'Anton', sans-serif" }}>
          Under Maintenance
        </h3>
        <p className="text-gray-500 text-lg max-w-md">
          This section is currently being updated. My latest setup details will be available soon.
        </p>
      </motion.div>
    </section>
  );
}

export default EquipmentSection;
import { motion } from 'framer-motion';
import { Monitor, Cpu, Scissors, Zap } from 'lucide-react';

const equipments = [
  {
    id: 1,
    name: 'Custom Workstation',
    specs: 'Ryzen 9, 64GB RAM, RTX 4090',
    icon: <Cpu className="w-8 h-8 text-accent" />
  },
  {
    id: 2,
    name: 'Dual Color-Accurate Displays',
    specs: '27" 4K Pro Display 10-bit',
    icon: <Monitor className="w-8 h-8 text-accent" />
  },
  {
    id: 3,
    name: 'Adobe After Effects',
    specs: 'Compositing & Motion',
    icon: <Zap className="w-8 h-8 text-accent" />
  },
  {
    id: 4,
    name: 'Cinema 4D / Blender',
    specs: '3D Modeling & Animation',
    icon: <Scissors className="w-8 h-8 text-accent" />
  }
];

function EquipmentSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-20 bg-bg-base">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-accent mb-4"
        >
          My Arsenal
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto"
        >
          The hardware and software that brings imagination into reality.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {equipments.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            className="group relative p-8 rounded-3xl bg-bg-surface shadow-[var(--shadow-skeuo)] hover:shadow-[var(--shadow-skeuo-inner)] transition-all duration-300 border border-white/5"
          >
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-bg-base shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2)] border border-white/10 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-accent mb-2">{item.name}</h3>
            <p className="text-text-secondary text-sm">{item.specs}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default EquipmentSection;
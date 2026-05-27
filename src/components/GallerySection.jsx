import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Neon Cyberpunk City',
    category: 'Motion Graphics',
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    title: 'Abstract Fluid Simulation',
    category: 'VFX / 3D',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Kinetic Typography',
    category: 'Motion Graphics',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000&auto=format&fit=crop',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    title: 'Product Visualization',
    category: '3D Render',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-1'
  }
];

function GallerySection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-20 bg-bg-base">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-accent mb-4"
        >
          Selected Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-secondary text-lg max-w-2xl"
        >
          A collection of my latest motion design and visual effects projects.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative group rounded-3xl overflow-hidden glass-panel shadow-[var(--shadow-skeuo)] ${project.span}`}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>

            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>
            </div>

            {/* Skeuomorphic inner border highlight */}
            <div className="absolute inset-0 rounded-3xl border border-white/20 z-30 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
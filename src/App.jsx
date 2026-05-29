import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CurvedLoop from './components/CurvedLoop';
import Lanyard from './components/Lanyard';
import GallerySection from './components/GallerySection';
import EquipmentSection from './components/EquipmentSection';
import Footer from './components/Footer';

import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1115] overflow-hidden">
      <HeroSection />

      {/* Call to action text below Hero Section */}
      <section className="relative w-full pt-12 pb-16 flex justify-center bg-[#0f1115] z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-gray-400 tracking-widest uppercase text-sm md:text-base text-center px-4"
          style={{ fontFamily: "'Tusker Grotesk', 'Anton', sans-serif" }}
        >
          LET'S START VISITING THIS PAGE!
        </motion.div>
      </section>

      {/* Spacer between CTA and CurvedLoop */}
      <div className="h-[384px] md:h-[512px] lg:h-[640px] w-full"></div>

      <CurvedLoop
        marqueeText="BRINGING VISUAL TO LIVE ✦ DYNAMIC DESIGNS, SEAMLESS MOTION ✦ ART THAT SPEAKS ✦"
        speed={5}
        curveAmount={-250}
        direction="right"
        interactive
      />

      <AboutSection />

      <section className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#0f1115] overflow-hidden flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-8">
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1 relative z-10">
          <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center" style={{ backgroundImage: "url('/bg-lanyard.png')" }}>
            {/* Top glare effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/20 to-transparent h-1/4 rounded-t-2xl z-20"></div>

            <div className="relative w-full h-full z-10">
              <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left order-2 md:order-2">
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Interactive 3D Asset
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 font-light">
              This interactive lanyard experience is built entirely using <span className="text-[#3b82f6] font-semibold drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Three.js</span> and React Three Fiber.
            </p>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              The card features a custom <span className="text-[#8b5cf6] font-semibold drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">GFX</span> texture, while the physical strap's detailed texture was fully designed and crafted using the <span className="text-[#ec4899] font-semibold drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">Alight Motion</span> application.
            </p>
          </motion.div>
        </div>
      </section>

      <CurvedLoop
        marqueeText="BRINGING VISUAL TO LIVE ✦ DYNAMIC DESIGNS, SEAMLESS MOTION ✦ ART THAT SPEAKS ✦"
        speed={5}
        curveAmount={250}
        direction="left"
        interactive
      />

      {/* Spacer between About and Gallery */}
      <div className="h-[384px] md:h-[512px] lg:h-[640px] w-full"></div>

      <GallerySection />

      {/* Spacer between Gallery and Equipment */}
      <div className="h-[384px] md:h-[512px] lg:h-[640px] w-full"></div>

      <EquipmentSection />
      <Footer />
    </div>
  );
}

export default App;

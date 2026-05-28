import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CurvedLoop from './components/CurvedLoop';
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
          className="text-gray-400 font-sans tracking-widest uppercase text-sm md:text-base text-center px-4"
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
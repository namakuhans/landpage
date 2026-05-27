import { useState } from 'react';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import EquipmentSection from './components/EquipmentSection';
import Footer from './components/Footer';
import WelcomeOverlay from './components/WelcomeOverlay';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className={`min-h-screen bg-[#0f1115] overflow-hidden ${showWelcome ? 'h-screen fixed inset-0' : ''}`}>
      <WelcomeOverlay onComplete={() => setShowWelcome(false)} />
      <HeroSection />
      <GallerySection />
      <EquipmentSection />
      <Footer />
    </div>
  );
}

export default App;
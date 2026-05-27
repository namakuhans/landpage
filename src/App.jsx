import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import EquipmentSection from './components/EquipmentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1115] overflow-hidden">
      <HeroSection />
      <GallerySection />
      <EquipmentSection />
      <Footer />
    </div>
  );
}

export default App;
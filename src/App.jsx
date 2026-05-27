import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import EquipmentSection from './components/EquipmentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-base overflow-hidden">
      <HeroSection />
      <GallerySection />
      <EquipmentSection />
      <Footer />
    </div>
  );
}

export default App;
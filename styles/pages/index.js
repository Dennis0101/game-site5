import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-primary text-white">
      <HeroSection />
      <FeatureSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MediaShowcase from '@/components/MediaShowcase';
import NavigationSection from '@/components/NavigationSection';
import ClubsSection from '@/components/ClubsSection';
import CommunityWall from '@/components/CommunityWall';
import VirtualTour from '@/components/VirtualTour';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <MediaShowcase />
        <NavigationSection />
        <ClubsSection />
        <CommunityWall />
        <VirtualTour />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

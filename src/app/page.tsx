import HeroSection from "@/components/HeroSection";
import SnsLinks from "@/components/SnsLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <HeroSection />
      <SnsLinks />
      <Footer />
    </main>
  );
}

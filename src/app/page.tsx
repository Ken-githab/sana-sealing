import HeroSection from "@/components/HeroSection";
import SnsLinks from "@/components/SnsLinks";
import StampDivider from "@/components/StampDivider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <HeroSection />
      <StampDivider />
      <SnsLinks />
      <Footer />
    </main>
  );
}

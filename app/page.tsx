import ContactSection from "@/components/etusivu/contact";
import ContentSection from "@/components/etusivu/content-7";
import Features from "@/components/etusivu/features-1";
import HeroSection from "@/components/etusivu/hero-section-main";
import Pricing from "@/components/etusivu/pricing";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Features/>
      <ContentSection/>
      <Pricing/>
      <ContactSection/>
    </>
  );
}

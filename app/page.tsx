import ContactSection from "@/components/contact";
import ContentSection from "@/components/content-7";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Features/>
      <ContentSection/>
      <Pricing/>
      <ContactSection/>
      <FooterSection/>
    </>
  );
}

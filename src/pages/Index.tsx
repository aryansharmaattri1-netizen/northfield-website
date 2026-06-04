import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroBannerSection } from "@/components/sections/HeroBannerSection";
import { OutreachSection } from "@/components/sections/OutreachSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TracksBand } from "@/components/sections/TracksBand";

const Index = () => {
 return (
  <div className="bg-brand-black text-brand-white antialiased" id="page-root">
   <div className="bg-brand-gold text-brand-black text-center text-xs font-semibold tracking-widest uppercase py-2 px-4" id="topbar">
    Northfield — Clarity-Led Studio for High-Level Founders
   </div>
   <Navigation />
   <main className="mx-auto max-w-7xl px-6" id="main-content">
    <HeroBannerSection />
   </main>
   <PhilosophySection />
   <div className="mx-auto max-w-7xl px-6">
    <ServicesSection />
   </div>
   <ClientsSection />
   <div className="mx-auto max-w-7xl px-6">
    <TracksBand />
    <PricingSection />
    <OutreachSection />
   </div>
   <ContactSection />
   <Footer />
  </div>
 );
};

export default Index;

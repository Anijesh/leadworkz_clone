import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import About from "@/components/sections/About";
import UseCases from "@/components/sections/UseCases";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Foundation from "@/components/sections/Foundation";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-white">
      {/* 1. Hero Section - Modern + Animated with Services Marquee */}
      <Hero />

      {/* 2. CTA Section - "Sit Back Relax" with Service Tabs */}
      <CTA />

      {/* 3. About/Value Proposition - Stats + Tools Marquee */}
      <About />

      {/* 4. Growth Use Cases Section */}
      <UseCases />

      {/* 5. Process Section - 5-Step Framework */}
      <Process />

      {/* 6. FAQ Section - Accordion Style */}
      <FAQ />

      {/* 7. Services Section - Grid Layout (15 Services) */}
      <ServicesGrid />

      {/* 8. 3D Visual Element - Three.js Globe */}
      <Foundation />
    </div>
  );
}

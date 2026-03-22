import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import ToolsMarquee from "@/components/sections/ToolsMarquee";
import UseCases from "@/components/sections/UseCases";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Foundation from "@/components/sections/Foundation";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-white">
      {/* Hero Section */}
      <Hero />

      {/* "Sit Back Relax" CTA Section */}
      <CTA />

      {/* Tools & Brand Marquee */}
      <ToolsMarquee />

      {/* Growth Use Cases */}
      <UseCases />

      {/* 3D Globe - Global Reach */}
      <Foundation />

      {/* Process/Methodology */}
      <Process />

      {/* FAQ Section */}
      <FAQ />

      {/* Full Services Grid */}
      <ServicesGrid />
    </div>
  );
}

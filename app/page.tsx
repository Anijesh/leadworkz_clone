import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Foundation from "@/components/sections/Foundation";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import UseCases from "@/components/sections/UseCases";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-white">
      {/* 1. Hero Section ("Turn Clicks Into Customers") */}
      <Hero />
      
      {/* 2. Relaxation Section ("Sit Back Relax") */}
      <CTA />
      
      {/* 3. Global Reach Section (3D Globe Background) - Correctly mapped to Slide 3! */}
      <Foundation />

      {/* 4. Everyday's Toolbox & Strategy Transition */}
      <About />

      {/* 5. Full-Spectrum Digital Services (The custom 3D Ferris Wheel with 360 rotating images) */}
      <Services />

      {/* 6. Growth Use Cases (Horizontal Drag Carousel) */}
      <UseCases />

      {/* 7. Our Results-Driven Process (Timeline) */}
      <Process />

      {/* 8. Frequently Asked Questions */}
      <FAQ />

      {/* 9. Pre-Footer Services Technical Grid (SXO, CRO, etc) */}
      <ServicesGrid />
      
      {/* 10. Footer renders inside layout.tsx */}
    </div>
  );
}

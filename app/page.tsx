import Hero from "@/components/sections/Hero";
import Foundation from "@/components/sections/Foundation";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-white">
      <Hero />
      <CTA />
      <Foundation />
      <Services />
      <Process />
    </div>
  );
}

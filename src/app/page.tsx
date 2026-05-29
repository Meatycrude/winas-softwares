// src/app/page.tsx

import HeroSection from "@/components/home/herosection";
import WhatWeBuildSection from "@/components/home/WhatWeBuildSection";
import HowWeDeliverSection from "@/components/home/HowWeDeliverSection";
import SystemsShowcaseSection from "@/components/home/SystemsShowcaseSection";
import TechStackSection from "@/components/home/TechStackSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhatWeBuildSection />
      <SystemsShowcaseSection />
      <HowWeDeliverSection />
      <TechStackSection />
      <TestimonialsSection />
      
    </main>
  );
}

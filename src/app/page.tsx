// src/app/page.tsx

import HeroSection from "@/../src/components/herosection";
import WhatWeBuildSection from "@/../src/components/WhatWeBuildSection";
import HowWeDeliverSection from "@/../src/components/HowWeDeliverSection";
import SystemsShowcaseSection from "@/components/SystemsShowcaseSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhatWeBuildSection />
      <SystemsShowcaseSection />
      <HowWeDeliverSection />
      <TechStackSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

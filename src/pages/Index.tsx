import { Hero } from "@/components/Hero";
import { TheIdea } from "@/components/TheIdea";
import { Pillars } from "@/components/Pillars";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { GetInvolved } from "@/components/GetInvolved";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TheIdea />
      <Pillars />
      <WhatWeBuild />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;

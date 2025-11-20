import type React from "react";
import CTASection from "../../CTASection";
import HeroSection from "../../HeroSection";
import ValuePropositions from "../../ValuePropositions";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ValuePropositions />
      <CTASection />
    </div>
  );
};

export default Home;

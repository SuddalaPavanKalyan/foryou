import type React from "react";
import CTASection from "../../components/home/CTASection";
import HeroSection from "../../components/home/HeroSection";
import ValuePropositions from "../../components/home/ValuePropositions";

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

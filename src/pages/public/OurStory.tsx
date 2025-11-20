import CTASection from "../../components/our-story/CTASection";
import FutureVisionSection from "../../components/our-story/FutureVisionSection";
import HeroSection from "../../components/our-story/HeroSection";
import HowItsGoingSection from "../../components/our-story/HowItsGoingSection";
import HowItStartedSection from "../../components/our-story/HowItStartedSection";
import HowItWentSection from "../../components/our-story/HowItWentSection";

const OurStory = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <HowItStartedSection />
      <HowItWentSection />
      <HowItsGoingSection />
      <FutureVisionSection />
      <CTASection />
    </div>
  );
};

export default OurStory;

import { ArrowRight } from "lucide-react";
import Sparkle from "../Sparkle";
import StatsCluster from "./StatsCluster";

const HeroSection = () => {
  return (
    <section
      className="
        relative flex items-center justify-center overflow-hidden py-10
        px-4 sm:px-6 md:px-10 lg:px-16
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div
            className="
    flex flex-col 
    items-center md:items-start
    justify-center
    text-center md:text-left
    space-y-5
    w-fit
  "
          >
            <Sparkle title="Where Real Connections Happen" />

            <h1
              className="
      text-4xl sm:text-4xl md:text-5xl lg:text-6xl 
      font-bold leading-tight
      text-black dark:text-white
      transition-colors duration-300
    "
            >
              Meaningful conversations with people who genuinely listen.
            </h1>

            <div
              className="
      flex flex-col 
      items-center md:items-start 
      gap-3 
      mt-8
    "
            >
              <button
                className="
        px-6 py-3 md:px-12 md:py-4 rounded-full font-semibold text-sm
        flex items-center justify-center gap-2 text-white
        bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
        hover:from-[#39007D] hover:to-[#8E2BFF]
        active:scale-95 hover:scale-105 transition-all duration-300
        shadow-[0_0_15px_rgba(138,43,226,0.4)]
      "
              >
                Connect Now
                <ArrowRight className="w-6 h-6 transition-transform" />
              </button>

              <button
                className="
        px-6 py-3 rounded-full font-medium text-sm
        transition-all duration-300 active:scale-95
        bg-white text-gray-700 border border-gray-200
        shadow-[0_1px_4px_rgba(0,0,0,0.08)]
        hover:bg-gray-50 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)]
        dark:bg-[#111] dark:text-gray-300 dark:border-gray-700
        dark:hover:bg-[#1A1A1A] dark:hover:border-gray-500
        dark:shadow-[0_0_10px_rgba(255,255,255,0.05)]
        dark:hover:shadow-[0_0_14px_rgba(255,255,255,0.08)]
      "
              >
                Get Started
              </button>
            </div>
          </div>

          <StatsCluster />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

{
  /* bg-gradient-to-br from-[#0A0A0A] via-[#0F0F1A] to-[#1A1A2E] */
}

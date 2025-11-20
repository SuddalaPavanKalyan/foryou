import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center 
        bg-black
        justify-center overflow-hidden py-10 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      {/* bg-gradient-to-br from-[#0A0A0A] via-[#0F0F1A] to-[#1A1A2E] */}
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
          <div className="text-center lg:text-left space-y-10">
            <div
              className="inline-flex items-center gap-2 
                bg-[#1F1F1F] px-4 sm:px-5 py-2 rounded-full 
                border border-[#2A2A2A] shadow-lg shadow-black/20"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
                Where Real Connections Happen
              </span>
            </div>

            <h1
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-bold leading-tight text-white flex flex-col items-start text-left"
            >
              Meaningful conversations with people who genuinely listen.
            </h1>

            <div className="flex flex-col items-start gap-3 mt-8">
              <button
                className="px-6 py-3 md:px-12 md:py-4 rounded-full font-semibold text-sm
                flex items-center justify-center gap-2 text-white
                bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                hover:from-[#39007D] hover:to-[#8E2BFF]
                active:scale-95 transition-all duration-300 hover:scale-105
                shadow-[0_0_15px_rgba(138,43,226,0.4)]"
              >
                Connect Now
                <ArrowRight className="w-6 h-6 transition-transform" />
              </button>

              <button
                className="px-6 py-3 rounded-full font-medium text-sm
                border-2 border-gray-700 text-gray-300 bg-[#111111]
                active:scale-95 transition-all duration-300 hover:scale-105
                hover:border-gray-500 hover:bg-[#1A1A1A]
                shadow-sm shadow-black/40"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

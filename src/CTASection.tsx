import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden
      bg-black
      py-16 px-5 sm:px-8 md:px-12 lg:px-20"
    >
      {/* bg-gradient-to-br from-[#050505] via-[#0C0C18] to-[#1A1A2E] */}
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 bg-[#161616]/90 px-5 py-2 rounded-full 
          border border-[#2A2A2A] shadow-lg shadow-black/40 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-base font-medium text-gray-300 tracking-wide">
            Ready to connect?
          </span>
        </div>

        <div className="flex flex-1 flex-col items-self">
          <h2
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold
          bg-gradient-to-r from-white via-gray-100 to-gray-200 
          bg-clip-text text-transparent leading-tight text-left"
          >
            The best moments begin with real conversations.
          </h2>

          <p className="mt-6 text-sm sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed text-left">
            Start your Heleno journey today. Connect with someone who truly
            understands.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <button
            className="px-10 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 
            text-white bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
            hover:from-[#3C0088] hover:to-[#9A33FF]
            active:scale-95 transition-all duration-300 hover:scale-105
            shadow-[0_0_25px_rgba(138,43,226,0.35)]"
          >
            Connect Now
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <span>Verified Profiles</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <span>Safe & Secure</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <span>10K+ Happy Users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

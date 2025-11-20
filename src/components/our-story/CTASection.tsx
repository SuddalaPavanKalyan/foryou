import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-10 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-white text-4xl font-semibold">
          Be Part of Our Story
        </h2>

        <p className="text-sm text-gray-300">
          Whether you need support or want to become a Lynker, there's a place
          for you in our community.
        </p>

        <div className="flex flex-col items-start gap-3">
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
    </section>
  );
}

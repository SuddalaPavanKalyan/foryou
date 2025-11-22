import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-10 px-6 bg-white dark:bg-black overflow-hidden transition-colors">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-black dark:text-white text-4xl font-semibold transition-colors">
          Be Part of Our Story
        </h2>

        <p className="text-ms text-gray-700 dark:text-gray-300 transition-colors">
          Whether you need support or want to become a Lynker, there's a place
          for you in our community.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          {/* Primary Button */}
          <button
            className="
              px-6 py-3 md:px-12 md:py-4 rounded-full font-semibold text-sm
              flex items-center justify-center gap-2
              text-white
              bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
              hover:from-[#39007D] hover:to-[#8E2BFF]
              active:scale-95 transition-all duration-300 hover:scale-105
              shadow-[0_0_15px_rgba(138,43,226,0.4)]
            "
          >
            Connect Now
            <ArrowRight className="w-6 h-6 transition-transform" />
          </button>

          {/* Secondary Button (Light + Dark) */}
          <button
            className="
              px-6 py-3 rounded-full font-medium text-sm
              border-2 
              border-gray-300 dark:border-gray-700
              text-black dark:text-gray-300
              bg-white dark:bg-[#111111]
              hover:bg-gray-100 dark:hover:bg-[#1A1A1A]
              hover:border-gray-400 dark:hover:border-gray-500
              active:scale-95 transition-all duration-300 hover:scale-105
              shadow-sm shadow-gray-300/50 dark:shadow-black/40
              transition-colors
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden py-10 px-6 transition-colors">
      {/* Chip */}
      <div
        className="inline-flex items-center gap-2 
        bg-gray-200 dark:bg-[#1F1F1F] 
        px-4 sm:px-5 py-2 rounded-full 
        border border-gray-300 dark:border-[#2A2A2A] 
        shadow-lg shadow-black/10 dark:shadow-black/20 
        mb-8 transition-colors"
      >
        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 tracking-wide transition-colors">
          About Heleno
        </span>
      </div>

      {/* Heading + Text */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1
          className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold 
          text-transparent bg-clip-text 
          bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]"
        >
          Making meaningful human connection accessible to all.
        </h1>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
          Heleno is more than a platform—it's a movement to ensure that everyone
          has access to meaningful support, real guidance, and genuine human
          connection when they need it most.
        </p>
      </div>

      {/* Arrow */}
      <div className="mt-10">
        <ArrowRight className="w-6 h-6 rotate-90 text-gray-700 dark:text-white opacity-80 transition-colors" />
      </div>
    </section>
  );
}

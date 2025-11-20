import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-black overflow-hidden py-10 px-6">
      <div
        className="inline-flex items-center gap-2 
        bg-[#1F1F1F] px-4 sm:px-5 py-2 rounded-full 
        border border-[#2A2A2A] shadow-lg shadow-black/20 mb-8"
      >
        <Sparkles className="w-4 h-4 text-purple-400" />
        <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
          About Heleno
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1
          className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold 
          text-transparent bg-clip-text 
          bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]"
        >
          Making meaningful human connection accessible to all.
        </h1>

        <p className="text-sm text-gray-300 max-w-3xl mx-auto">
          Heleno is more than a platform—it's a movement to ensure that everyone
          has access to meaningful support, real guidance, and genuine human
          connection when they need it most.
        </p>
      </div>

      <div className="mt-10 text-white">
        <ArrowRight className="w-6 h-6 rotate-90 opacity-80" />
      </div>
    </section>
  );
}

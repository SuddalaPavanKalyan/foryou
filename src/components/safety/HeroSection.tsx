import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center bg-black overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div>
          <div
            className="inline-flex items-center gap-2 
                bg-[#1F1F1F] px-4 sm:px-5 py-2 rounded-full 
                border border-[#2A2A2A] shadow-lg shadow-black/20 my-10"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
              Your Safety, Our Priority
            </span>
          </div>

          <h1 className="mb-6 text-white font-semibold leading-tight text-4xl md:text-5xl">
            Built on Trust,
            <br />
            Protected by Safety
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            At Heleno, we've implemented comprehensive safety measures to ensure
            every interaction is secure, verified, and protected. Your
            well-being is at the heart of everything we do.
          </p>
        </div>

        <div className="p-3 rounded-full flex items-center justify-center ">
          <ArrowRight className="w-6 h-6 rotate-90 text-white" />
        </div>
      </div>
    </section>
  );
}

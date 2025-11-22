import { ArrowRight } from "lucide-react";
import Sparkle from "../Sparkle";

export default function HeroSection() {
  return (
    <section
      className="
        relative flex items-center justify-center overflow-hidden
        py-20 px-6
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
        <Sparkle title="Your Safety, Our Priority" />

        <h1
          className="
            mb-6 font-semibold leading-tight
            text-4xl md:text-5xl

            text-black dark:text-white
          "
        >
          Built on Trust,
          <br />
          Protected by Safety
        </h1>

        <p
          className="
            text-lg max-w-2xl mx-auto mb-8
            text-gray-600 dark:text-gray-300
            leading-relaxed
          "
        >
          At Heleno, we've implemented comprehensive safety measures to ensure
          every interaction is secure, verified, and protected. Your well-being
          is at the heart of everything we do.
        </p>

        <div
          className="
            p-3 rounded-full mx-auto flex items-center justify-center
            bg-transparent text-gray-800
            dark:bg-[#1A1A1A] dark:text-white
            shadow-sm w-fit
          "
        >
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </div>
    </section>
  );
}

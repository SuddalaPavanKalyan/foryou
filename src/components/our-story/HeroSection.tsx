import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative flex items-center justify-center overflow-hidden
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-28">
        {/* Badge */}
        <div
          className="
            inline-block mb-8 px-6 py-2 rounded-full
            font-medium tracking-wide

            /* Light Mode */
            bg-gray-100 text-gray-800 border border-gray-300
            shadow-[0_1px_4px_rgba(0,0,0,0.08)]

            /* Dark Mode */
            dark:bg-[#1F1F1F] dark:text-gray-200 dark:border-[#2A2A2A]
            dark:shadow-black/20
          "
        >
          Our Story
        </div>

        {/* Heading */}
        <h1
          className="
            mb-6 font-semibold leading-tight
            text-4xl md:text-5xl
            text-black dark:text-white
          "
        >
          Building Connections,
          <br />
          One Conversation at a Time
        </h1>

        {/* Description */}
        <p
          className="
            text-xl max-w-2xl mx-auto mb-10
            text-gray-700 dark:text-gray-300
            leading-relaxed
          "
        >
          Discover the journey of how Heleno evolved from a simple idea into a
          thriving platform that's changing the way people connect and support
          each other.
        </p>

        {/* Down Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div
            className="
              p-3 rounded-full transition-all

              /* Light */
              bg-gray-100 text-[#7A0CF8]
              shadow-sm hover:shadow-md

              /* Dark */
              dark:bg-white/10 dark:text-[#7A0CF8]
              dark:hover:bg-white/20
            "
          >
            <ArrowRight className="w-6 h-6 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center bg-black overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <div>
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] rounded-full">
            <span className="text-white">Our Story</span>
          </div>

          <h1 className="mb-6 text-white font-semibold leading-tight text-4xl md:text-5xl">
            Building Connections,
            <br />
            One Conversation at a Time
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Discover the journey of how Heleno evolved from a simple idea into a
            thriving platform that's changing the way people connect and support
            each other.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="p-3 rounded-full text-[#7A0CF8]">
            <ArrowRight className="w-6 h-6 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}

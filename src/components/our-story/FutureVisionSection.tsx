import { Sparkles } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function FutureVisionSection() {
  return (
    <section className="px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 
                bg-[#1F1F1F] px-4 sm:px-5 py-2 rounded-full 
                border border-[#2A2A2A] shadow-lg shadow-black/20 my-10"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
                Looking Ahead
              </span>
            </div>

            <h2 className="mb-6 text-white">The Future of Heleno</h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're just getting started. Here's what's next on our journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="p-8 bg-white/5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="mb-3 text-white">Global Expansion</h4>
              <p className="text-gray-300">
                Bringing Heleno to more countries and languages, making support
                accessible worldwide
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 bg-white/5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="mb-3 text-white">AI-Enhanced Matching</h4>
              <p className="text-gray-300">
                Using smart technology to connect you with the perfect Lynker
                for your needs
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="p-8 bg-white/5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="mb-3 text-white">Group Sessions</h4>
              <p className="text-gray-300">
                Introducing group support sessions and community circles for
                shared experiences
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] transform -rotate-2"></div>

            <img
              src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?auto=format&fit=crop&w=1080&q=80"
              alt="Innovation and growth"
              className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl flex items-end p-12">
              <div className="text-white">
                <h3 className="mb-4 text-white">Building Tomorrow, Together</h3>
                <p className="text-lg text-white/90 max-w-2xl">
                  Our vision is a world where meaningful human connection is
                  always within reach. Join us as we continue this journey.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

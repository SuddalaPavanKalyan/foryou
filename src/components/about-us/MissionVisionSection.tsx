import { Sparkles } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function MissionVisionSection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1624555130296-e551faf8969b?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-10">
              <div>
                <div
                  className="inline-flex items-center gap-2 
        bg-[#1F1F1F] px-4 sm:px-5 py-2 rounded-full 
        border border-[#2A2A2A] shadow-lg shadow-black/20 mb-8"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
                    Our Vision
                  </span>
                </div>
                <h2 className="mb-4 text-white">Making Support Universal</h2>
                <p className="text-gray-300 leading-relaxed">
                  We believe emotional support shouldn't be a luxury. Our
                  mission is to create a world where everyone can access
                  compassionate listeners, experienced guides, and genuine
                  connections at the click of a button—regardless of their
                  location, schedule, or budget.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 mb-4 text-white/80">
                  <Sparkles className="w-6 h-6 text-white" />
                  <span className="uppercase tracking-wider text-sm">
                    Our Vision
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  A future where no one feels alone in their struggles. Where
                  seeking support is as normal as asking a friend for advice.
                  Where people from all walks of life can share their
                  experiences, earn income by helping others, and build a more
                  connected, empathetic world.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

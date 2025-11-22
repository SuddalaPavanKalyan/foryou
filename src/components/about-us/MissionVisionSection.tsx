import { Sparkles } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function MissionVisionSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* IMAGE SIDE */}
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

          {/* TEXT SIDE */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-10">
              {/* BLOCK 1 */}
              <div>
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
                    Our Vision
                  </span>
                </div>

                <h2 className="mb-4 text-black dark:text-white transition-colors">
                  Making Support Universal
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                  We believe emotional support shouldn't be a luxury. Our
                  mission is to create a world where everyone can access
                  compassionate listeners, experienced guides, and genuine
                  connections at the click of a button—regardless of their
                  location, schedule, or budget.
                </p>
              </div>

              {/* BLOCK 2 */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4 text-gray-800 dark:text-white/80 transition-colors">
                  <Sparkles className="w-6 h-6 text-gray-800 dark:text-white transition-colors" />
                  <span className="uppercase tracking-wider text-sm">
                    Our Vision
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
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

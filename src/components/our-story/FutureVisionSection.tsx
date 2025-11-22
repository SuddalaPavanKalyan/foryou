import { Sparkles } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function FutureVisionSection() {
  return (
    <section
      className="
        px-6 py-20
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center mb-16">
            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2 my-10
                px-4 sm:px-5 py-2 rounded-full border backdrop-blur

                bg-white/80 border-gray-200 text-gray-700 shadow-sm
                dark:bg-[#1F1F1F]/90 dark:border-[#2A2A2A]
                dark:text-gray-300 dark:shadow-black/20
              "
            >
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm sm:text-base font-medium tracking-wide">
                Looking Ahead
              </span>
            </div>

            <h2 className="mb-6 text-3xl sm:text-4xl font-semibold">
              The Future of Heleno
            </h2>

            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
              We're just getting started. Here’s what's next on our journey.
            </p>
          </div>
        </ScrollReveal>

        {/* FUTURE CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0.1}>
            <FutureCard
              title="Global Expansion"
              desc="Bringing Heleno to more countries and languages, making support accessible worldwide."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <FutureCard
              title="AI-Enhanced Matching"
              desc="Smarter recommendations using behaviour, preferences, and emotional tone."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <FutureCard
              title="Group Sessions"
              desc="Introducing group support sessions and community circles for shared experiences."
            />
          </ScrollReveal>
        </div>

        {/* FINAL FEATURED IMAGE */}
        <ScrollReveal delay={0.4}>
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="
                absolute inset-0 rounded-3xl transform -rotate-2
                bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
              "
            />

            <img
              src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?auto=format&fit=crop&w=1080&q=80"
              alt="Innovation and growth"
              className="relative rounded-3xl w-full h-96 object-cover shadow-xl"
            />

            <div
              className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-t 
                from-black/70 via-black/40 to-transparent
                flex items-end p-12
              "
            >
              <div className="text-white max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Building Tomorrow, Together
                </h3>

                <p className="text-lg text-white/90 leading-relaxed">
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

/* ------------------------------------------------------- */
/* FUTURE CARD COMPONENT */
/* ------------------------------------------------------- */

function FutureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="
        p-8 rounded-2xl border transition-all

        bg-gray-100 text-black border-gray-200 shadow-sm
        hover:shadow-md hover:bg-gray-200/70

        dark:bg-white/5 dark:text-white dark:border-gray-800
        dark:hover:bg-white/10 dark:shadow-lg dark:hover:shadow-2xl
      "
    >
      <h4 className="mb-3 text-xl font-semibold">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{desc}</p>
    </div>
  );
}

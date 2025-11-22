import { Globe, Heart, Sparkles, Users, Zap } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function CultureSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <ScrollReveal>
            <div className="space-y-6">
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
                  Our Culture
                </span>
              </div>

              <h2 className="text-black dark:text-white text-3xl font-semibold transition-colors">
                Work That Matters
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                At Heleno, you're not just building features—you're creating
                connections that change lives. Every day, our team members hear
                stories of how the platform has helped someone through a tough
                time, guided a major life decision, or simply made someone feel
                less alone.
              </p>

              {/* VALUES LIST */}
              <div className="space-y-4">
                {/* 1 */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-black dark:text-white mb-1 transition-colors">
                      Purpose-Driven
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-400 transition-colors">
                      Every role contributes directly to helping people connect
                      and feel supported
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-black dark:text-white mb-1 transition-colors">
                      Collaborative
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-400 transition-colors">
                      Cross-functional teams come together to solve complex
                      challenges
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-black dark:text-white mb-1 transition-colors">
                      Growth-Focused
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-400 transition-colors">
                      We offer continuous learning opportunities and personal
                      development
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-black dark:text-white mb-1 transition-colors">
                      Remote-Friendly
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-400 transition-colors">
                      Work from anywhere with flexible hours that fit your life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE IMAGES */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {/* Image 1 */}
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-br 
                  from-[#2D0065] to-[#7A0CF8] rounded-2xl transform rotate-3"
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1661271928535-4d174887e80e?auto=format&fit=crop&w=900&q=80"
                  alt="Office workspace"
                  className="relative rounded-2xl w-full h-64 object-cover shadow-xl"
                />
              </div>

              {/* Image 2 */}
              <div className="relative mt-12">
                <div
                  className="absolute inset-0 bg-gradient-to-br 
                  from-[#7A0CF8] to-[#2D0065] rounded-2xl transform -rotate-3"
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?auto=format&fit=crop&w=900&q=80"
                  alt="Team collaboration"
                  className="relative rounded-2xl w-full h-64 object-cover shadow-xl"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

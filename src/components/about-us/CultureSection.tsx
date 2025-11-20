import { Globe, Heart, Sparkles, Users, Zap } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function CultureSection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 
        bg-[#1F1F1F] px-4 sm:px-5 py-2 rounded-full 
        border border-[#2A2A2A] shadow-lg shadow-black/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
                  Our Culture
                </span>
              </div>

              <h2 className="text-white text-3xl font-semibold">
                Work That Matters
              </h2>

              <p className="text-gray-300 leading-relaxed">
                At Heleno, you're not just building features—you're creating
                connections that change lives. Every day, our team members hear
                stories of how the platform has helped someone through a tough
                time, guided a major life decision, or simply made someone feel
                less alone.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white mb-1">Purpose-Driven</h5>
                    <p className="text-sm text-gray-400">
                      Every role contributes directly to helping people connect
                      and feel supported
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white mb-1">Collaborative</h5>
                    <p className="text-sm text-gray-400">
                      Cross-functional teams come together to solve complex
                      challenges
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white mb-1">Growth-Focused</h5>
                    <p className="text-sm text-gray-400">
                      We offer continuous learning opportunities and personal
                      development
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white mb-1">Remote-Friendly</h5>
                    <p className="text-sm text-gray-400">
                      Work from anywhere with flexible hours that fit your life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
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

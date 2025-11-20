import { Globe, Shield, Sparkles, TrendingUp, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function HowItWentSection() {
  return (
    <section className="py-15 px-6 bg-black">
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
                Chapter 2
              </span>
            </div>
            <h2 className="mb-6 text-white">How It Went</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The journey from concept to reality wasn’t always smooth, but
              every challenge made us stronger.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto mb-24">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]"></div>

          <div className="space-y-16">
            <ScrollReveal delay={0.1}>
              <div className="relative flex items-center">
                <div className="flex-1 text-left">
                  <div className="bg-black px-4">
                    <div className="text-sm text-white/80 mb-2">
                      January 2024
                    </div>
                    <h4 className="mb-2 text-white">Beta Launch</h4>
                    <p className="text-gray-300">
                      Started with 50 carefully vetted Heleno and 200 beta
                      testers. The response was overwhelming.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pl-12"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative flex items-center">
                <div className="flex-1 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pl-12">
                  <div className="bg-black px-4 text-right">
                    <div className="text-sm text-white/80 mb-2">March 2024</div>
                    <h4 className="mb-2 text-white">Safety First Initiative</h4>
                    <p className="text-gray-300">
                      Implemented comprehensive verification, background checks,
                      and real-time safety features.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="relative flex items-center">
                <div className="flex-1 pr-12 text-right">
                  <div className="bg-black px-4 text-left">
                    <div className="text-sm text-white/80 mb-2">June 2024</div>
                    <h4 className="mb-2 text-white">Platform Growth</h4>
                    <p className="text-gray-300">
                      Expanded to 500+ Heleno across multiple categories. First
                      10,000 successful connections.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pl-12"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="relative flex items-center">
                <div className="flex-1 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pl-12">
                  <div className="bg-black px-4 text-right">
                    <div className="text-sm text-white/80 mb-2">
                      September 2024
                    </div>
                    <h4 className="mb-2 text-white">Going Global</h4>
                    <p className="text-gray-300">
                      Launched virtual sessions, enabling connections across
                      borders and time zones.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-white">Learning Through Challenges</h3>

              <p className="text-gray-300 leading-relaxed">
                Building a platform centered on trust and emotional wellbeing
                came with unique challenges. Balancing accessibility with
                safety, scale with quality, and technology with human
                connection.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <h5 className="mb-1 text-white">Building Trust</h5>
                    <p className="text-sm text-gray-300">
                      Developed rigorous verification processes while keeping
                      onboarding smooth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <h5 className="mb-1 text-white">Quality Control</h5>
                    <p className="text-sm text-gray-300">
                      Created comprehensive training and ongoing support for all
                      Heleno.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <h5 className="mb-1 text-white">Scaling Responsibly</h5>
                    <p className="text-sm text-gray-300">
                      Grew the community thoughtfully, ensuring every user felt
                      valued.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] rounded-3xl transform -rotate-2"></div>
                <img
                  src="https://images.unsplash.com/photo-1559117725-6588a8acb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmV5JTIwcGF0aCUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjE4NDE0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Journey path"
                  className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

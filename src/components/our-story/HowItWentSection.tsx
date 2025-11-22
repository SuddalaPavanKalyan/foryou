import { Globe, Shield, TrendingUp, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";
import Sparkle from "../Sparkle";

export default function HowItWentSection() {
  return (
    <section className="px-6 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-10">
            <Sparkle title="Chapter 2" />

            <h2 className="mb-6 text-black dark:text-white transition-colors">
              How It Went
            </h2>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              The journey from concept to reality wasn’t always smooth, but
              every challenge made us stronger.
            </p>
          </div>
        </ScrollReveal>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto mb-24">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]"></div>

          <div className="space-y-16">
            {/* 1 */}
            <ScrollReveal delay={0.1}>
              <div className="relative flex items-center">
                <div className="flex-1 text-left">
                  <div className="bg-white dark:bg-black px-4 transition-colors">
                    <div className="text-sm text-gray-600 dark:text-white/80 mb-2">
                      January 2024
                    </div>
                    <h4 className="mb-2 text-black dark:text-white transition-colors">
                      Beta Launch
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 transition-colors">
                      Started with 50 carefully vetted Heleno and 200 beta
                      testers. The response was overwhelming.
                    </p>
                  </div>
                </div>

                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 
                    bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-full flex items-center justify-center shadow-lg"
                >
                  <Users className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 pl-12"></div>
              </div>
            </ScrollReveal>

            {/* 2 */}
            <ScrollReveal delay={0.2}>
              <div className="relative flex items-center">
                <div className="flex-1 pr-12"></div>

                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 
                    bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-full flex items-center justify-center shadow-lg"
                >
                  <Shield className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 pl-12">
                  <div className="bg-white dark:bg-black px-4 text-right transition-colors">
                    <div className="text-sm text-gray-600 dark:text-white/80 mb-2">
                      March 2024
                    </div>
                    <h4 className="mb-2 text-black dark:text-white transition-colors">
                      Safety First Initiative
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 transition-colors">
                      Implemented comprehensive verification, background checks,
                      and real-time safety features.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 3 */}
            <ScrollReveal delay={0.3}>
              <div className="relative flex items-center">
                <div className="flex-1 pr-12 text-right">
                  <div className="bg-white dark:bg-black px-4 text-left transition-colors">
                    <div className="text-sm text-gray-600 dark:text-white/80 mb-2">
                      June 2024
                    </div>
                    <h4 className="mb-2 text-black dark:text-white transition-colors">
                      Platform Growth
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 transition-colors">
                      Expanded to 500+ Heleno across multiple categories. First
                      10,000 successful connections.
                    </p>
                  </div>
                </div>

                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 
                    bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-full flex items-center justify-center shadow-lg"
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 pl-12"></div>
              </div>
            </ScrollReveal>

            {/* 4 */}
            <ScrollReveal delay={0.4}>
              <div className="relative flex items-center">
                <div className="flex-1 pr-12"></div>

                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 
                    bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                    rounded-full flex items-center justify-center shadow-lg"
                >
                  <Globe className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 pl-12">
                  <div className="bg-white dark:bg-black px-4 text-right transition-colors">
                    <div className="text-sm text-gray-600 dark:text-white/80 mb-2">
                      September 2024
                    </div>
                    <h4 className="mb-2 text-black dark:text-white transition-colors">
                      Going Global
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 transition-colors">
                      Launched virtual sessions, enabling connections across
                      borders and time zones.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-black dark:text-white transition-colors">
                Learning Through Challenges
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                Building a platform centered on trust and emotional wellbeing
                came with unique challenges. Balancing accessibility with
                safety, scale with quality, and technology with human
                connection.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Building Trust",
                    text: "Developed rigorous verification processes while keeping onboarding smooth."
                  },
                  {
                    title: "Quality Control",
                    text: "Created comprehensive training and ongoing support for all Heleno."
                  },
                  {
                    title: "Scaling Responsibly",
                    text: "Grew the community thoughtfully, ensuring every user felt valued."
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4
                      bg-gray-100 dark:bg-white/5
                      rounded-xl border border-gray-300 dark:border-white/10
                      transition-colors"
                  >
                    <div>
                      <h5 className="mb-1 text-black dark:text-white transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
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

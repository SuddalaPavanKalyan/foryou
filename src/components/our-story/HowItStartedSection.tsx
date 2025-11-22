import { Sparkles } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function HowItStartedSection() {
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
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2 my-10
                px-4 sm:px-5 py-2 rounded-full
                border backdrop-blur shadow-md

                bg-white/80 text-gray-700 border-gray-200
                shadow-[0_1px_4px_rgba(0,0,0,0.08)]

                dark:bg-[#1F1F1F]/90 dark:border-[#2A2A2A]
                dark:text-gray-300 dark:shadow-black/20
              "
            >
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm sm:text-base font-medium tracking-wide">
                Chapter 1
              </span>
            </div>

            <h2 className="mb-6 text-3xl sm:text-4xl font-semibold text-black dark:text-white">
              How It Started
            </h2>

            <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
              Every great journey begins with a simple observation and a bold
              idea.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Image Block */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div
                className="
                  absolute inset-0 rounded-3xl transform rotate-2
                  bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                "
              />
              <img
                src="https://images.unsplash.com/photo-1676629650907-d50f2f27db20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwY29ubmVjdGlvbnxlbnwxfHx8fDE3NjE4NDE0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community support"
                className="
                  relative rounded-3xl w-full h-96 object-cover shadow-xl
                "
              />
            </div>
          </ScrollReveal>

          {/* Text Block */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                The Spark of an Idea
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In late 2023, our founder noticed a troubling pattern: despite
                being more "connected" than ever through social media, people
                felt increasingly isolated and alone. Traditional therapy was
                expensive and had long wait times, while informal support
                networks were scattered and unreliable.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The question emerged:{" "}
                <em className="text-gray-900 dark:text-white/90">
                  What if we could create a platform that made meaningful human
                  connection as easy as ordering food?
                </em>{" "}
                A place where anyone could find a compassionate listener exactly
                when they needed one.
              </p>

              {/* Quote Box */}
              <div
                className="
                  p-6 rounded-2xl border

                  bg-gray-100 text-black border-gray-200
                  shadow-[0_2px_10px_rgba(0,0,0,0.05)]

                  dark:bg-white/5 dark:text-white dark:border-gray-800
                  dark:shadow-[0_0_15px_rgba(255,255,255,0.03)]
                "
              >
                <p className="font-mono leading-relaxed">
                  Everyone deserves access to emotional support, not just those
                  who can afford traditional therapy. That’s the belief that
                  started Heleno.
                </p>
                <p className="mt-3 text-sm font-medium opacity-80">
                  — Suddala Pavan Kalyan, Founder & CEO
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { Sparkles } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function HowItStartedSection() {
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
                Chapter 1
              </span>
            </div>

            <h2 className="mb-6 text-white">How It Started</h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every great journey begins with a simple observation and a bold
              idea.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] rounded-3xl transform rotate-2" />
              <img
                src="https://images.unsplash.com/photo-1676629650907-d50f2f27db20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwY29ubmVjdGlvbnxlbnwxfHx8fDE3NjE4NDE0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community support"
                className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-white">The Spark of an Idea</h3>

              <p className="text-gray-300 leading-relaxed">
                In late 2023, our founder noticed a troubling pattern: despite
                being more "connected" than ever through social media, people
                felt increasingly isolated and alone. Traditional therapy was
                expensive and had long wait times, while informal support
                networks were scattered and unreliable.
              </p>

              <p className="text-gray-300 leading-relaxed">
                The question emerged:{" "}
                <em className="text-white/90">
                  What if we could create a platform that made meaningful human
                  connection as easy as ordering food?
                </em>{" "}
                A place where anyone could find a compassionate listener exactly
                when they needed one.
              </p>

              <div className="bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] p-6 rounded-2xl border border-white/10">
                <p className="text-white" style={{ fontFamily: "monospace" }}>
                  Everyone deserves access to emotional support, not just those
                  who can afford traditional therapy. That’s the belief that
                  started Heleno.
                </p>
                <p className="mt-3 text-sm text-white font-medium">
                  — Suddala Pavan Pavan, Founder & CEO
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

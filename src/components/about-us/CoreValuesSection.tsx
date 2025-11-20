import { Sparkles } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function CoreValuesSection() {
  const values = [
    {
      title: "Empathy First",
      text: "We lead with compassion and understanding. Every feature is designed with the human experience at its core."
    },
    {
      title: "Safety & Trust",
      text: "Building a safe space is non-negotiable. We invest heavily in verification, moderation, and protection."
    },
    {
      title: "Inclusivity",
      text: "Everyone deserves support. We're building a platform that welcomes people from all backgrounds and experiences."
    },
    {
      title: "Innovation",
      text: "We constantly evolve and improve. Technology should enhance human connection, not replace it."
    },
    {
      title: "Accessibility",
      text: "Support should be available to anyone, anywhere, at any time. We're breaking down barriers to connection."
    },
    {
      title: "Quality",
      text: "We maintain high standards for our Helenos and platform. Quality support changes lives."
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 
        bg-[#1F1F1F] px-4 sm:px-5 py-2 rounded-full 
        border border-[#2A2A2A] shadow-lg shadow-black/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
                Our Values
              </span>
            </div>

            <h2 className="mb-6 text-white">What Drives Us Every Day</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide every decision we make and every
              feature we build.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div
                className="min-h-[220px] p-8 rounded-2xl border 
                border-[#2A2A2A] bg-[#111] hover:shadow-[0_0_25px_rgba(125,0,255,0.3)]
                transition-all"
              >
                <h4 className="text-lg font-semibold mb-3 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

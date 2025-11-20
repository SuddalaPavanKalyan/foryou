import { Sparkles } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function TrustIndicatorsSection() {
  const indicators = [
    {
      value: "100%",
      label: "Verified Helenos"
    },
    {
      value: "24/7",
      label: "Safety Support"
    },
    {
      value: "50K+",
      label: "Safe Sessions"
    },
    {
      value: "4.9★",
      label: "Safety Rating"
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
                border border-[#2A2A2A] shadow-lg shadow-black/20 my-10"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
                Trust Metrics
              </span>
            </div>

            <h2 className="mb-6 text-white">Built on a Foundation of Trust</h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our safety measures are backed by real numbers and continuous
              monitoring.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8">
          {indicators.map((item, index) => {
            return (
              <ScrollReveal delay={(index + 1) * 0.1} key={index}>
                <div
                  className="text-center p-8 bg-white/5 rounded-2xl 
                    shadow-lg hover:shadow-2xl 
                    transition-all"
                >
                  <div className="text-4xl mb-2 font-bold text-white">
                    {item.value}
                  </div>

                  <div className="text-gray-300">{item.label}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Sparkles } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function TrustIndicatorsSection() {
  const indicators = [
    { value: "100%", label: "Verified Helenos" },
    { value: "24/7", label: "Safety Support" },
    { value: "50K+", label: "Safe Sessions" },
    { value: "4.9★", label: "Safety Rating" }
  ];

  return (
    <section
      className="
        py-24 px-6
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2 my-10 px-4 sm:px-5 py-2 rounded-full
                border backdrop-blur shadow-md

                /* Light */
                bg-white/80 text-gray-700 border-gray-200
                shadow-[0_1px_4px_rgba(0,0,0,0.08)]

                /* Dark */
                dark:bg-[#1F1F1F]/90 dark:border-[#2A2A2A]
                dark:text-gray-300 dark:shadow-black/20
              "
            >
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm sm:text-base font-medium tracking-wide">
                Trust Metrics
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl sm:text-4xl font-semibold text-black dark:text-white">
              Built on a Foundation of Trust
            </h2>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our safety measures are backed by real numbers and continuous
              monitoring.
            </p>
          </div>
        </ScrollReveal>

        {/* Indicators */}
        <div className="grid md:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <ScrollReveal delay={(index + 1) * 0.1} key={index}>
              <div
                className="
                  text-center p-8 rounded-2xl transition-all duration-300

                  /* Light Theme Card */
                  bg-white border border-gray-200  
                  shadow-[0_2px_10px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)]
                  hover:border-gray-300

                  /* Dark Theme Card */
                  dark:bg-[#0F0F0F] dark:border-gray-800
                  dark:shadow-[0_0_15px_rgba(255,255,255,0.03)]
                  dark:hover:shadow-[0_0_22px_rgba(255,255,255,0.06)]
                  dark:hover:bg-[#141414]
                "
              >
                <div className="text-4xl mb-2 font-bold text-gray-900 dark:text-white">
                  {item.value}
                </div>

                <div className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">
                  {item.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

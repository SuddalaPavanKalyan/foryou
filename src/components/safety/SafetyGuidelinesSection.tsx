import { Ban, CheckCircle, Link, Sparkles, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function SafetyGuidelinesSection() {
  const userGuidelines = [
    "Always meet in public, well-lit locations for in-person sessions.",
    "Share your session details with a trusted friend or family member.",
    "Keep the app open for quick access to SOS during sessions.",
    "Trust your instincts — if something feels wrong, end the session.",
    "Report any inappropriate behavior immediately to our team."
  ];

  const helenoGuidelines = [
    "Complete all verification steps and keep your profile updated.",
    "Maintain professional boundaries and respectful communication.",
    "Arrive on time and honor all session commitments.",
    "Never share contact information outside the platform.",
    "Report any concerning user behavior to protect the community."
  ];

  const zeroToleranceItems = [
    "No Harassment",
    "No Inappropriate Content",
    "No Fraudulent Activity"
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
        {/* Header + Badge */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div
              className="
                inline-flex items-center gap-2 my-10 px-4 sm:px-5 py-2 rounded-full 
                border backdrop-blur shadow-md

                bg-white/80 text-gray-700 border-gray-200
                shadow-[0_1px_4px_rgba(0,0,0,0.08)]

                dark:bg-[#1F1F1F]/90 dark:border-[#2A2A2A]
                dark:text-gray-300 dark:shadow-black/20
              "
            >
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm sm:text-base font-medium tracking-wide">
                Safety Guidelines
              </span>
            </div>

            <h2 className="mb-6 text-3xl sm:text-4xl font-semibold">
              Best Practices for Safe Sessions
            </h2>

            <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
              Follow these guidelines to ensure the safest experience on Heleno.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Column Guidelines */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* User Guidelines */}
          <ScrollReveal delay={0.1}>
            <div
              className="
                p-8 rounded-2xl transition-all

                bg-white border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.06)]
                hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)]

                dark:bg-[#0F0F0F] dark:border-gray-800
                dark:shadow-[0_0_15px_rgba(255,255,255,0.03)]
                dark:hover:shadow-[0_0_22px_rgba(255,255,255,0.06)]
              "
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="
                    w-12 h-12 rounded-xl flex items-center justify-center
                    bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                  "
                >
                  <Users className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  For Users
                </h4>
              </div>

              <ul className="space-y-4">
                {userGuidelines.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 dark:text-white mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Heleno Guidelines */}
          <ScrollReveal delay={0.2}>
            <div
              className="
                p-8 rounded-2xl transition-all

                bg-white border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.06)]
                hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)]

                dark:bg-[#0F0F0F] dark:border-gray-800
                dark:shadow-[0_0_15px_rgba(255,255,255,0.03)]
                dark:hover:shadow-[0_0_22px_rgba(255,255,255,0.06)]
              "
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="
                    w-12 h-12 rounded-xl flex items-center justify-center
                    bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                  "
                >
                  <Link className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  For Helenos
                </h4>
              </div>

              <ul className="space-y-4">
                {helenoGuidelines.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 dark:text-white mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Zero Tolerance Box */}
        <ScrollReveal delay={0.3}>
          <div
            className="
              mt-12 p-10 rounded-3xl text-center transition-all

              /* Light */
              bg-gray-50 border border-gray-200 shadow-sm
              hover:shadow-md

              /* Dark */
              dark:bg-white/5 dark:border-gray-800
              dark:shadow-lg
            "
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Zero Tolerance Policy
            </h3>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
              We have a strict zero-tolerance policy for harassment,
              inappropriate behavior, or any guideline violations. Offenders
              face immediate removal and potential legal action.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {zeroToleranceItems.map((text, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-2 px-4 py-2 rounded-full

                    bg-gray-200 text-gray-800
                    dark:bg-black/40 dark:text-gray-200
                  "
                >
                  <Ban className="w-5 h-5" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

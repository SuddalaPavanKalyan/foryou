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
                Safety Guidelines
              </span>
            </div>

            <h2 className="mb-6 text-white">
              Best Practices for Safe Sessions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow these guidelines to ensure the safest experience on Heleno.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="p-8 bg-white/5 rounded-2xl ">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] 
                    rounded-xl flex items-center justify-center"
                >
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white">For Users</h4>
              </div>

              <ul className="space-y-3">
                {userGuidelines.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 bg-white/5 rounded-2xl ">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] 
                    rounded-xl flex items-center justify-center"
                >
                  <Link className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white">For Helenos</h4>
              </div>

              <ul className="space-y-3">
                {helenoGuidelines.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 p-8 bg-white/5  rounded-3xl text-center">
            <h3 className="mb-4 text-2xl text-white">Zero Tolerance Policy</h3>

            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              We have a strict zero-tolerance policy for harassment,
              inappropriate behavior, or any guideline violations. Offenders
              face immediate removal and potential legal action.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {zeroToleranceItems.map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-black/40 
                     rounded-full"
                >
                  <Ban className="w-5 h-5 text-white" />
                  <span className="text-sm text-gray-200">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

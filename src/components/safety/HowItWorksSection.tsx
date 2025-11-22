import {
  ArrowDown,
  CheckCircle,
  FileCheck,
  Lock,
  Shield,
  Sparkles,
  Users
} from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: FileCheck,
      title: "Verified Registration",
      description:
        "Both users and Helenos complete secure registration with phone and email verification."
    },
    {
      icon: Users,
      title: "Smart Matching",
      description:
        "Our AI recommends verified Helenos based on ratings, reviews, and compatibility scores."
    },
    {
      icon: Lock,
      title: "Secure Booking",
      description:
        "Encrypted payment processing and confirmed session details before any meeting occurs."
    },
    {
      icon: Shield,
      title: "Active Protection",
      description:
        "Real-time tracking, SOS access, and support team monitoring during your session."
    },
    {
      icon: CheckCircle,
      title: "Post-Session Review",
      description:
        "Rating and feedback system ensures quality and safety across the platform."
    }
  ];

  return (
    <section
      className="
        py-10 px-6
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <ScrollReveal>
            <div>
              {/* BADGE */}
              <div
                className="
                  inline-flex items-center gap-2 my-10
                  px-4 sm:px-5 py-2 rounded-full backdrop-blur shadow-md
                  
                  bg-white/80 text-gray-700 border border-gray-200
                  shadow-[0_1px_4px_rgba(0,0,0,0.08)]
                  
                  dark:bg-[#1F1F1F]/90 dark:border-[#2A2A2A]
                  dark:text-gray-300 dark:shadow-black/20
                "
              >
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm sm:text-base font-medium tracking-wide">
                  Our Process
                </span>
              </div>

              <h2
                className="
                  mb-6 text-3xl sm:text-4xl font-semibold
                  text-black dark:text-white
                "
              >
                How Safety Works at Every Step
              </h2>

              <p
                className="
                  text-gray-700 dark:text-gray-300
                  leading-relaxed mb-8
                "
              >
                From the moment you sign up to the completion of your session,
                safety measures are integrated at every touchpoint. Here's how
                we protect you throughout your journey.
              </p>

              {/* STEPS */}
              <div className="space-y-10">
                {steps.map(({ icon: Icon, title, description }, index) => (
                  <div key={index} className="space-y-6">
                    <ScrollReveal delay={0.1 * (index + 1)}>
                      <div
                        className="
                          p-8 rounded-2xl h-full transition-all duration-300

                          /* Light Theme Card */
                          bg-white border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.06)]
                          hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)]
                          hover:border-gray-300

                          /* Dark Theme Card */
                          dark:bg-[#0F0F0F] dark:border-gray-800
                          dark:shadow-[0_0_15px_rgba(255,255,255,0.03)]
                          dark:hover:shadow-[0_0_22px_rgba(255,255,255,0.06)]
                          dark:hover:bg-[#141414]
                        "
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-6 h-6 text-gray-800 dark:text-white" />
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
                          </h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </ScrollReveal>

                    {/* ARROW BETWEEN STEPS */}
                    {index < steps.length - 1 && (
                      <ScrollReveal delay={0.3}>
                        <div className="flex justify-center">
                          <div className="w-16 h-16 flex items-center justify-center">
                            <ArrowDown className="w-8 h-8 text-gray-500 dark:text-white" />
                          </div>
                        </div>
                      </ScrollReveal>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT IMAGE */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div
                className="
                  absolute inset-0 rounded-3xl transform rotate-2
                  bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                "
              ></div>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1080&q=80"
                alt="Security technology"
                className="
                  relative rounded-3xl w-full h-[600px] object-cover shadow-2xl
                "
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

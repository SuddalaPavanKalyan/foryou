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
    <section className="py-10 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <div
                className="inline-flex items-center gap-2 
                bg-[#1F1F1F] px-4 sm:px-5 py-2 rounded-full 
                border border-[#2A2A2A] shadow-lg shadow-black/20 my-10"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
                  Our Process
                </span>
              </div>

              <h2 className="mb-6 text-white">
                How Safety Works at Every Step
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                From the moment you sign up to the completion of your session,
                safety measures are integrated at every touchpoint. Here's how
                we protect you throughout your journey.
              </p>

              <div className="space-y-10">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={index} className="space-y-6">
                      <ScrollReveal delay={0.1 * (index + 1)}>
                        <div className="flex gap-6 items-start p-8 bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Icon className="w-6 h-6 text-white" />
                              <h4 className="mb-0 text-white">{step.title}</h4>
                            </div>
                            <p className="text-gray-300">{step.description}</p>
                          </div>
                        </div>
                      </ScrollReveal>

                      {index < steps.length - 1 && (
                        <ScrollReveal delay={0.3}>
                          <div className="flex-shrink-0 flex justify-center">
                            <div className="w-16 h-16 flex items-center justify-center">
                              <ArrowDown className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </ScrollReveal>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] rounded-3xl transform rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1080&q=80"
                alt="Security technology"
                className="relative rounded-3xl w-full h-[600px] object-cover shadow-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

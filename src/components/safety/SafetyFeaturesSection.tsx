import { Camera, FileCheck, Lock, MapPin, Phone, Users } from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";
import Sparkle from "../Sparkle";

export default function SafetyFeaturesSection() {
  const features = [
    {
      icon: FileCheck,
      title: "KYC Verification",
      desc: "Every Lynker undergoes mandatory government ID verification, background checks, and authentication before joining the platform."
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      desc: "GPS-based live location sharing during active sessions ensures transparency and accountability for both users and Lynkers."
    },
    {
      icon: Phone,
      title: "SOS Emergency Button",
      desc: "Instant panic button connects you to our 24/7 safety team and local authorities within seconds."
    },
    {
      icon: Lock,
      title: "Secure Payments",
      desc: "End-to-end encrypted payment gateways protect your financial information at all times."
    },
    {
      icon: Users,
      title: "Profile Verification",
      desc: "Multi-step verification including photo checks, credentials, and reference verification for all Lynkers."
    },
    {
      icon: Camera,
      title: "Session Monitoring",
      desc: "AI-based moderation and optional check-ins ensure healthy and appropriate interactions."
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
        {/* Badge + Heading */}
        <ScrollReveal>
          <div className="text-center mb-16 space-y-3">
            {/* Badge */}
            <Sparkle title="Safety Features" />

            <h2 className="mb-6 text-3xl sm:text-4xl font-semibold text-black dark:text-white">
              How We Keep You Safe
            </h2>

            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300">
              Multiple layers of protection working together to create a secure
              environment for every session.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div
                className="
    p-8 rounded-2xl h-full transition-all duration-300
    
    /* Light Mode */
    bg-white border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.06)]
    hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)]
    hover:border-gray-300
    
    /* Dark Mode */
    dark:bg-[#0F0F0F] dark:border-gray-800
    dark:shadow-[0_0_15px_rgba(255,255,255,0.03)]
    dark:hover:shadow-[0_0_22px_rgba(255,255,255,0.06)]
    dark:hover:bg-[#141414]
  "
              >
                <div className="flex flex-row items-center gap-3 mb-5">
                  <Icon className="w-8 h-8 text-gray-800 dark:text-white" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h4>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

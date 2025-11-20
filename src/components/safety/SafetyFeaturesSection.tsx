import {
  Camera,
  FileCheck,
  Lock,
  MapPin,
  Phone,
  Sparkles,
  Users
} from "lucide-react";
import ScrollReveal from "../../utils/ScrollReveal";

export default function SafetyFeaturesSection() {
  return (
    <section className="py-10 px-6 bg-black">
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
                Safety features
              </span>
            </div>

            <h2 className="mb-6 text-white">How We Keep You Safe</h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple layers of protection working together to create a secure
              environment for every session.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="p-8 bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full">
              <div className="flex flex-row items-center gap-3 mb-5">
                <FileCheck className="w-8 h-8 text-white" />
                <h4 className="text-white">KYC Verification</h4>
              </div>
              <p className="text-gray-300">
                Every Lynker undergoes mandatory government ID verification,
                background checks, and authentication before joining the
                platform.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full">
              <div className="flex flex-row items-center gap-3 mb-5">
                <MapPin className="w-8 h-8 text-white" />
                <h4 className="text-white">Real-Time Tracking</h4>
              </div>

              <p className="text-gray-300">
                GPS-based live location sharing during active sessions ensures
                transparency and accountability for both users and Lynkers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="p-8 bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full">
              <div className="flex flex-row items-center gap-3 mb-5">
                <Phone className="w-8 h-8 text-white" />
                <h4 className="text-white">SOS Emergency Button</h4>
              </div>

              <p className="text-gray-300">
                Instant panic button connects you to our 24/7 safety team and
                local authorities within seconds.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="p-8 bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full">
              <div className="flex flex-row items-center gap-3 mb-5">
                <Lock className="w-8 h-8 text-white" />
                <h4 className="text-white">Secure Payments</h4>
              </div>

              <p className="text-gray-300">
                End-to-end encrypted payment gateways protect your financial
                information at all times.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="p-8 bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full">
              <div className="flex flex-row items-center gap-3 mb-5">
                <Users className="w-8 h-8 text-white" />
                <h4 className="text-white">Profile Verification</h4>
              </div>
              <p className="text-gray-300">
                Multi-step verification including photo checks, credentials, and
                reference verification for all Lynkers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="p-8 bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full">
              <div className="flex flex-row items-center gap-3 mb-5">
                <div className="flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="text-white">Session Monitoring</div>
              </div>
              <p className="text-gray-300">
                AI-based moderation and optional check-ins ensure healthy and
                appropriate interactions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { Heart, Shield, Sparkles, Users } from "lucide-react";
import AnimatedCounter from "../../utils/AnimatedCounter";
import ScrollReveal from "../../utils/ScrollReveal";

export default function HowItsGoingSection() {
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
                Chapter 3
              </span>
            </div>

            <h2 className="mb-6 text-white">How It's Going</h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Today, MyLynk is a thriving community making real impact in
              people's lives every single day.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8 mb-24">
          <ScrollReveal delay={0.1}>
            <div className="text-center p-8 bg-white/5 rounded-2xl shadow-lg ">
              <div className="text-5xl mb-4 text-white">
                <AnimatedCounter end={2500} suffix="+" />
              </div>
              <div className="text-gray-300">Active Lynkers</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center p-8 bg-white/5 rounded-2xl shadow-lg ">
              <div className="text-5xl mb-4 text-white">
                <AnimatedCounter end={50000} suffix="+" />
              </div>
              <div className="text-gray-300">Connections Made</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center p-8 bg-white/5 rounded-2xl shadow-lg ">
              <div className="text-5xl mb-4 text-white">
                <AnimatedCounter end={4.9} />
              </div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-center p-8 bg-white/5 rounded-2xl shadow-lg ">
              <div className="text-5xl mb-4 text-white">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-gray-300">User Satisfaction</div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D0065] to-[#7A0CF8] rounded-3xl transform rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1590650423710-ffa6e7f63440?auto=format&fit=crop&w=1080&q=80"
                alt="Team success"
                className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-white">Making Real Impact</h3>

              <p className="text-gray-300 leading-relaxed">
                What started as an idea has blossomed into a movement. Every
                day, thousands of meaningful conversations happen—from career
                guidance sessions to emotional support moments.
              </p>

              <div className="space-y-4">
                <div className="bg-white/5 p-6 rounded-2xl ">
                  <p className="text-white mb-2">
                    "I was going through a tough breakup and didn’t want to
                    burden my friends. My Lynker provided exactly what I
                    needed—a compassionate listener."
                  </p>
                  <p className="text-sm text-gray-300">— Emma, 28</p>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl ">
                  <p className="text-white mb-2">
                    "As a Lynker, I've helped over 200 people navigate career
                    transitions. It’s rewarding to turn my experience into
                    impact and income."
                  </p>
                  <p className="text-sm text-gray-300">
                    — Marcus, Career Coach
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="bg-white/5 rounded-3xl p-12 ">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-center mb-8 text-white">
                What We’ve Learned
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="mb-2 text-white">Connection is Universal</h5>
                  <p className="text-sm text-gray-300">
                    Everyone needs support, regardless of background.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="mb-2 text-white">Safety Enables Trust</h5>
                  <p className="text-sm text-gray-300">
                    Robust safety features allow genuine connections to grow.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="mb-2 text-white">Community is Everything</h5>
                  <p className="text-sm text-gray-300">
                    Our Lynkers and users remain the heart of our mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

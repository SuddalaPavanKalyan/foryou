import { Heart, Shield, Users } from "lucide-react";
import AnimatedCounter from "../../utils/AnimatedCounter";
import ScrollReveal from "../../utils/ScrollReveal";
import Sparkle from "../Sparkle";

export default function HowItsGoingSection() {
  return (
    <section className="py-15 px-6 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-10">
            <Sparkle title="Chapter 3" />

            <h2 className="mb-6 text-black dark:text-white transition-colors">
              How It's Going
            </h2>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Today, MyLynk is a thriving community making real impact in
              people's lives every single day.
            </p>
          </div>
        </ScrollReveal>

        {/* STATS GRID */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {[
            { end: 2500, label: "Active Helenos" },
            { end: 50000, label: "Connections Made" },
            { end: 4.9, label: "Average Rating" },
            { end: 95, suffix: "%", label: "User Satisfaction" }
          ].map((item, i) => (
            <ScrollReveal delay={(i + 1) * 0.1} key={i}>
              <div className="text-center p-8 bg-gray-100 dark:bg-white/5 rounded-2xl shadow-lg transition-colors">
                <div className="text-5xl mb-4 text-black dark:text-white">
                  <AnimatedCounter end={item.end} suffix={item.suffix} />
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  {item.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-purple-500 rounded-3xl transform rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1590650423710-ffa6e7f63440?auto=format&fit=crop&w=1080&q=80"
                alt="Team success"
                className="relative rounded-3xl w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-black dark:text-white transition-colors">
                Making Real Impact
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                What started as an idea has blossomed into a movement. Every
                day, thousands of meaningful conversations happen—from career
                guidance sessions to emotional support moments.
              </p>

              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-2xl transition-colors">
                  <p className="text-black dark:text-white mb-2">
                    "I was going through a tough breakup and didn’t want to
                    burden my friends. My Heleno provided exactly what I
                    needed—a compassionate listener."
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    — Emma, 28
                  </p>
                </div>

                <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-2xl transition-colors">
                  <p className="text-black dark:text-white mb-2">
                    "As a Heleno, I've helped over 200 people navigate career
                    transitions. It’s rewarding to turn my experience into
                    impact and income."
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    — Marcus, Career Coach
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* WHAT WE LEARNED */}
        <ScrollReveal>
          <div className="bg-gray-100 dark:bg-white/5 rounded-3xl p-12 transition-colors">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-center mb-8 text-black dark:text-white transition-colors">
                What We’ve Learned
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Heart,
                    title: "Connection is Universal",
                    text: "Everyone needs support, regardless of background."
                  },
                  {
                    icon: Shield,
                    title: "Safety Enables Trust",
                    text: "Robust safety features allow genuine connections to grow."
                  },
                  {
                    icon: Users,
                    title: "Community is Everything",
                    text: "Our Helenos and users remain the heart of our mission."
                  }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg bg-transparent dark:bg-[#1F1F1F] transition-colors">
                      <item.icon className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h5 className="mb-2 text-black dark:text-white transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

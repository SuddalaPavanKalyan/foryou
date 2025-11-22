import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import PavanImg from "../../assets/new.jpg";
import SujayImg from "../../assets/SujayImg.png";
import ScrollReveal from "../../utils/ScrollReveal";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Godugu Sujay",
      role: "Founder",
      bio: "Former therapist turned tech entrepreneur...",
      image: SujayImg,
      linkedin: "#",
      email: "sarah@mylynk.com"
    },
    {
      name: "Pavan Kalyan",
      role: "Founder & CEO",
      bio: "Tech entrepreneur with experience building scalable platforms...",
      image: PavanImg,
      linkedin: "https://www.linkedin.com/in/suddalapavankalyan/",
      email: "suddalapavankalyan.sp@gmail.com"
    },
    {
      name: "Aditya Sai",
      role: "Head of Community & Designer",
      bio: "Community builder who's grown online communities...",
      image: "AdityaImg",
      linkedin: "#",
      email: "david@mylynk.com"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 
              bg-gray-200 dark:bg-[#1F1F1F]
              px-4 sm:px-5 py-2 rounded-full 
              border border-gray-300 dark:border-[#2A2A2A]
              shadow-lg shadow-black/10 dark:shadow-black/20 
              mb-8 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 tracking-wide transition-colors">
                Meet the team
              </span>
            </div>

            <h2 className="mb-6 text-black dark:text-white transition-colors">
              The Humans Behind Heleno
            </h2>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              We're a diverse team of builders, dreamers, and empaths united by
              a shared goal: making the world a more connected place.
            </p>
          </div>
        </ScrollReveal>

        {/* TEAM CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA BOX */}
        <ScrollReveal delay={0.3}>
          <div
            className="
            rounded-3xl p-12 text-center 
            bg-gray-100 dark:bg-[#111]
            border border-gray-300 dark:border-[#2A2A2A] 
            hover:shadow-[0_0_30px_rgba(125,0,255,0.25)] 
            transition-all"
          >
            <h3 className="mb-4 text-black dark:text-white text-2xl font-semibold transition-colors">
              Join Our Team
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors">
              We're always looking for passionate individuals who want to make a
              difference. If you're excited about building meaningful
              technology, we'd love to hear from you.
            </p>

            <motion.button
              className="cursor-pointer bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
                hover:opacity-90 text-white text-lg px-8 py-4 rounded-full font-medium 
                inline-flex items-center gap-2 shadow-md transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

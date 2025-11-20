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
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 
        bg-[#1F1F1F] px-4 sm:px-5 py-2 rounded-full 
        border border-[#2A2A2A] shadow-lg shadow-black/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
                Meet the team
              </span>
            </div>

            <h2 className="mb-6 text-white">The Humans Behind Heleno</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a diverse team of builders, dreamers, and empaths united by
              a shared goal: making the world a more connected place.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              delay={index * 0.1}
            />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div
            className="rounded-3xl p-12 text-center 
            bg-[#111] border border-[#2A2A2A] 
            hover:shadow-[0_0_30px_rgba(125,0,255,0.25)] transition-all"
          >
            <h3 className="mb-4 text-white text-2xl font-semibold">
              Join Our Team
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
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

import { Linkedin, Mail, Twitter } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: any;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export default function TeamMemberCard({
  member,
  delay = 0
}: {
  member: TeamMember;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div
        className="
          min-h-[550px] rounded-2xl overflow-hidden 
          bg-[#0A0A0A] border border-white/10 
          shadow-[0_0_20px_rgba(0,0,0,0.6)] 
          hover:shadow-[0_0_35px_rgba(125,0,255,0.35)]
          transition-all duration-300
        "
      >
        <div className="relative overflow-hidden h-80">
          <motion.div
            className="
              absolute inset-0 
              bg-gradient-to-br from-[#2D0065]/40 to-[#7A0CF8]/40
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 z-10
            "
          />
          <img
            src={member.image}
            alt={member.name}
            className="
              w-full h-full object-cover 
              transform group-hover:scale-110 
              transition-transform duration-500
            "
          />
        </div>

        <div className="p-6">
          <h4 className="mb-1 text-white font-semibold">{member.name}</h4>

          <div
            className="
              text-transparent bg-clip-text 
              bg-gradient-to-r from-[#7A0CF8] to-[#D594FF] 
              mb-3 font-medium
            "
          >
            {member.role}
          </div>

          <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

          <div className="flex gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                className="
                  w-9 h-9 rounded-full 
                  bg-white/10 border border-white/10
                  hover:bg-gradient-to-r hover:from-[#2D0065] hover:to-[#7A0CF8]
                  flex items-center justify-center
                  transition-all group/icon
                "
              >
                <Linkedin className="w-4 h-4 text-gray-300 group-hover/icon:text-white" />
              </a>
            )}

            {member.twitter && (
              <a
                href={member.twitter}
                className="
                  w-9 h-9 rounded-full 
                  bg-white/10 border border-white/10
                  hover:bg-gradient-to-r hover:from-[#2D0065] hover:to-[#7A0CF8]
                  flex items-center justify-center
                  transition-all group/icon
                "
              >
                <Twitter className="w-4 h-4 text-gray-300 group-hover/icon:text-white" />
              </a>
            )}

            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="
                  w-9 h-9 rounded-full 
                  bg-white/10 border border-white/10
                  hover:bg-gradient-to-r hover:from-[#2D0065] hover:to-[#7A0CF8]
                  flex items-center justify-center
                  transition-all group/icon
                "
              >
                <Mail className="w-4 h-4 text-gray-300 group-hover/icon:text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

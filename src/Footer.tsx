import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-white text-2xl font-bold mb-3 uppercase">
            Heleno
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Connecting people through meaningful conversations and real
            experiences.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["About Us", "How It Works", "Careers", "FAQs"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="hover:text-pink-600 transition">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">For Users</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Find a Heleno",
              "Become a Heleno",
              "Safety Guidelines",
              "Community"
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="hover:text-pink-600 transition">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Terms of Service",
              "Privacy Policy",
              "Cookie Policy",
              "Contact"
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="hover:text-pink-600 transition">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500">
          © 2025 Heleno. All rights reserved.
        </p>

        <div className="flex space-x-5 text-gray-400 text-xl">
          {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-pink-600 transition">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

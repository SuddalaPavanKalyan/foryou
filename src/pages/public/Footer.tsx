import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const sections = {
    "Quick Links": ["About Us", "How It Works", "Careers", "FAQs"],
    "For Users": [
      "Find a Heleno",
      "Become a Heleno",
      "Safety Guidelines",
      "Community"
    ],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Contact"]
  };

  const icons = [Instagram, Twitter, Linkedin, Mail];

  return (
    <footer
      className="
        py-12 px-6 md:px-16 overflow-hidden
        bg-white text-gray-700
        dark:bg-black dark:text-gray-300
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-3 uppercase text-black dark:text-white">
            Heleno
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Connecting people through meaningful conversations and real
            experiences.
          </p>
        </div>

        {Object.entries(sections).map(([title, items]) => (
          <div key={title}>
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              {title}
            </h3>

            <ul className="space-y-2 text-sm">
              {items.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="
                      hover:text-purple-600 dark:hover:text-purple-400
                      transition-colors
                    "
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <div
        className="
          max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center
          gap-6 text-gray-600 dark:text-gray-400
        "
      >
        <p className="text-sm">© 2025 Heleno. All rights reserved.</p>

        <div className="flex space-x-5 text-lg">
          {icons.map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="
                hover:text-purple-600 dark:hover:text-purple-400
                transition-colors
              "
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

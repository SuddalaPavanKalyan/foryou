import { Minus, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import ScrollReveal from "../../utils/ScrollReveal";

function FAQItem({
  question,
  answer,
  isOpen,
  onClick
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
      initial={false}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left 
        hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1">
          <h5 className="text-white">{question}</h5>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <Minus className="w-6 h-6 text-white" />
          ) : (
            <Plus className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-2 md:pl-20 text-gray-300">{answer}</div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Heleno ensure the safety of all users?",
      answer:
        "We implement multiple layers of security including mandatory KYC, background checks, GPS tracking, 24/7 safety team, and AI monitoring."
    },
    {
      question: "What should I do if I feel unsafe during a session?",
      answer:
        "Use the in-app SOS button immediately. It alerts our 24/7 safety team and can notify local authorities within seconds."
    },
    {
      question: "Are my personal details and payments secure?",
      answer:
        "Yes. We use end-to-end encryption and bank-grade payment security. Your data is never shared with Lynkers."
    },
    {
      question: "How are Helenos verified?",
      answer:
        "Every Helono completes ID verification, background checks, credential validation, training, and interviews."
    },
    {
      question: "Can I report inappropriate behavior?",
      answer:
        "Absolutely. Reports are reviewed instantly and we enforce strict zero-tolerance policies."
    },
    {
      question: "What happens to my location data?",
      answer:
        "Location is only used during active sessions, encrypted, stored briefly, and never shared."
    },
    {
      question: "Is my session activity monitored?",
      answer:
        "AI analyzes chat for safety risks but we do not record physical sessions. Random check-ins may occur."
    },
    {
      question: "What is the refund policy for safety issues?",
      answer:
        "Immediate full refunds are issued for any safety-related incident with swift action against offenders."
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="mb-6 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Find answers to common safety-related questions about using
              Heleno.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

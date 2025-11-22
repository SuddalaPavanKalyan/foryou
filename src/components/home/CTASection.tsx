import { ArrowRight } from "lucide-react";
import Sparkle from "../Sparkle";

const CTASection = () => {
  const stats = [
    { label: "Verified Profiles", color: "green" },
    { label: "Safe & Secure", color: "blue" },
    { label: "10K+ Happy Users", color: "purple" }
  ];
  return (
    <section
      className="
        relative flex items-center justify-center overflow-hidden
        py-16 px-5 sm:px-8 md:px-12 lg:px-20
        transition-colors duration-300

        bg-white text-black
        dark:bg-black dark:text-white
      "
    >
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <Sparkle title="Ready to connect?" />

        <div className="flex flex-col items-self">
          <h2
            className="
              mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-center
              bg-gradient-to-r from-black via-gray-700 to-gray-900
              dark:from-white dark:via-gray-100 dark:to-gray-200
              bg-clip-text text-transparent
            "
          >
            The best moments begin with real conversations.
          </h2>

          <p
            className="
              mt-6 text-md font-medium max-w-2xl mx-auto leading-relaxed text-left
              text-gray-600 dark:text-gray-200
            "
          >
            Start your Heleno journey today. Connect with someone who truly
            understands.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <button
            className="
              px-10 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 
              text-white 
              
              bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
              hover:from-[#3C0088] hover:to-[#9A33FF]
              
              hover:scale-105 active:scale-95 
              transition-all duration-300
              
              shadow-[0_0_25px_rgba(138,43,226,0.25)]
              dark:shadow-[0_0_25px_rgba(138,43,226,0.35)]
            "
          >
            Connect Now
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div
          className="
                mt-14 flex flex-wrap items-center justify-center gap-10 
                text-sm font-medium
                text-gray-700 dark:text-gray-200
                transition-colors duration-300
            "
        >
          {stats.map(({ label, color }) => (
            <div key={label} className="flex items-center gap-3">
              <div
                className={`
                    w-6 h-6 rounded-full flex items-center justify-center
                    bg-${color}-500/15 border border-${color}-500/30
                    dark:bg-${color}-500/20 dark:border-${color}-500/30
                `}
              >
                <div className={`w-2.5 h-2.5 rounded-full bg-${color}-500`} />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;

{
  /* bg-gradient-to-br from-[#050505] via-[#0C0C18] to-[#1A1A2E] */
}

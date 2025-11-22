import ScrollReveal from "../../utils/ScrollReveal";

const CTASection = ({
  title,
  desc,
  a1Text,
  a1Link,
  a2Text,
  a2Link
}: {
  title: string;
  desc: string;
  a1Text: string;
  a1Link: string;
  a2Text: string;
  a2Link: string;
}) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white dark:bg-black transition-colors">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="mb-6 text-3xl font-semibold text-black dark:text-white transition-colors">
            {title}
          </h2>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 transition-colors">
            {desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <a
              href={a1Link}
              className="px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-lg 
              flex items-center justify-center gap-2 text-white 
              bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
              active:scale-95 transition-all duration-300 shadow-md 
              hover:opacity-90 hover:scale-105 w-full sm:w-auto"
            >
              {a1Text}
            </a>

            {/* Secondary Button */}
            <a
              href={a2Link}
              className="px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-lg 
              flex items-center justify-center gap-2 
              border border-gray-400 dark:border-white/20
              text-black dark:text-white 
              bg-gray-100 dark:bg-transparent
              active:scale-95 transition-all duration-300 shadow-md 
              hover:bg-gray-200 dark:hover:bg-white/10 
              hover:scale-105 w-full sm:w-auto transition-colors"
            >
              {a2Text}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;

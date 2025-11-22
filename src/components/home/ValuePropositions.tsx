import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useCardService } from "../../utils/CardService";
import Sparkle from "../Sparkle";

const Card1 = () => (
  <div className="p-8 text-black dark:text-white">
    <h2 className="text-2xl font-bold mb-3">Card 1</h2>
    <p className="text-gray-600 dark:text-gray-300">
      This is a sample description for card one.
    </p>
  </div>
);

const Card2 = () => (
  <div className="p-8 text-black dark:text-white">
    <h2 className="text-2xl font-bold mb-3">Card 2</h2>
    <p className="text-gray-600 dark:text-gray-300">
      This is a sample description for card two.
    </p>
  </div>
);

const Card3 = () => (
  <div className="p-8 text-black dark:text-white">
    <h2 className="text-2xl font-bold mb-3">Card 3</h2>
    <p className="text-gray-600 dark:text-gray-300">
      This is a sample description for card three.
    </p>
  </div>
);

const ValuePropositions = () => {
  const items = [<Card1 key="1" />, <Card2 key="2" />, <Card3 key="3" />];
  const card = useCardService(items);

  useEffect(() => {
    card.startAutoRotate(2500);
  }, []);

  return (
    <section
      className="
        relative flex items-center justify-center py-20 px-6 md:px-12 lg:px-20 
        bg-white text-black 
        dark:bg-black dark:text-white 
        transition-colors duration-300
        overflow-hidden
      "
    >
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="flex flex-col items-center space-y-6">
            <Sparkle title="Where Real Connections Happen" />

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-center">
              <span className="block">Why Choose</span>
              <span
                className="
                px-1 text-transparent bg-clip-text 
                bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]
              "
              >
                Heleno?
              </span>
            </h1>
          </div>

          {/* Right Section (Cards) */}
          <div className="flex flex-1 flex-col items-center gap-10 mt-16 lg:mt-0">
            <div
              className="
              relative w-full max-w-md h-72 flex items-center justify-center 
              rounded-xl border shadow-xl 
              bg-gray-100 border-gray-300
              dark:bg-[#111] dark:border-gray-800
              transition-colors duration-300
            "
            >
              <div
                key={card.index}
                className="absolute inset-0 flex items-center justify-center animate-fade-in"
              >
                {card.getCurrent()}
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => card.back()}
                className="p-3 active:scale-95 transition"
              >
                <ArrowLeft className="w-6 h-6 text-black dark:text-gray-200" />
              </button>

              <div className="flex items-center gap-3">
                {items.map((_, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "h-2.5 w-2.5 rounded-full transition-all duration-300",
                      card.index === index
                        ? "bg-black dark:bg-white scale-125 shadow-[0_0_10px_rgba(138,43,226,0.6)]"
                        : "bg-gray-400/50 dark:bg-gray-500/40 hover:bg-gray-600/60 dark:hover:bg-gray-400/60"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={() => card.forward()}
                className="p-3 active:scale-95 transition"
              >
                <ArrowRight className="w-6 h-6 text-black dark:text-gray-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;

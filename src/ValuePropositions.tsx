import clsx from "clsx";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useCardService } from "./CardService";

const Card1 = () => {
  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-3">Card 1</h2>
      <p className="text-gray-300">
        This is a sample description for card one.
      </p>
    </div>
  );
};
const Card2 = () => {
  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-3">Card 2</h2>
      <p className="text-gray-300">
        This is a sample description for card two.
      </p>
    </div>
  );
};

const Card3 = () => {
  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-3">Card 3</h2>
      <p className="text-gray-300">
        This is a sample description for card three.
      </p>
    </div>
  );
};

const ValuePropositions = () => {
  const items = [<Card1 key="1" />, <Card2 key="2" />, <Card3 key="3" />];
  const card = useCardService(items);

  useEffect(() => {
    card.startAutoRotate(2000);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-5 px-6 md:px-12 lg:px-20 
      bg-gradient-to-br from-[#0A0A0A] via-[#0F0F1A] to-[#1A1A2E] text-white overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          <div
            className="w-fit inline-flex items-center justify-center gap-2 
                bg-[#1F1F1F] px-4 sm:px-5 py-2 rounded-full 
                border border-[#2A2A2A] shadow-lg shadow-black/20"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">
              Where Real Connections Happen
            </span>
          </div>
          <div className="space-y-1">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="block">Why Choose</span>
              <span className="px-1 text-transparent bg-clip-text bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]">
                Heleno?
              </span>
            </h1>
          </div>

          <div className="relative w-full max-w-md h-64 flex items-center justify-center">
            <div
              key={card.index}
              className="absolute inset-0 flex items-center justify-center animate-fade-in"
            >
              {card.getCurrent()}
            </div>
          </div>

          <div className="space-y-10 flex flex-col items-center">
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => card.back()}
                className="p-3 active:scale-95 transition"
              >
                <ArrowLeft className="w-6 h-6 text-gray-200" />
              </button>

              <div className="flex items-center gap-3">
                {items.map((_, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "h-2 w-2 rounded-full transition-all duration-300",
                      card.index === index
                        ? "bg-white scale-125 shadow-lg shadow-purple-500/40"
                        : "bg-gray-500/50 hover:bg-gray-400/50"
                    )}
                  ></div>
                ))}
              </div>

              <button
                onClick={() => card.forward()}
                className="p-3 active:scale-95 transition"
              >
                <ArrowRight className="w-6 h-6 text-gray-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;

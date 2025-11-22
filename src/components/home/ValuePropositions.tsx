import clsx from "clsx";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useCardService } from "../../utils/CardService";

const Card1 = () => (
  <div className="p-8 text-white">
    <h2 className="text-2xl font-bold mb-3">Card 1</h2>
    <p className="text-gray-300">This is a sample description for card one.</p>
  </div>
);

const Card2 = () => (
  <div className="p-8 text-white">
    <h2 className="text-2xl font-bold mb-3">Card 2</h2>
    <p className="text-gray-300">This is a sample description for card two.</p>
  </div>
);

const Card3 = () => (
  <div className="p-8 text-white">
    <h2 className="text-2xl font-bold mb-3">Card 3</h2>
    <p className="text-gray-300">
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
    <section className="relative flex items-center justify-center py-20 px-6 md:px-12 lg:px-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col items-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#161616] px-5 py-2 rounded-full border border-[#2A2A2A] shadow-lg shadow-black/40 backdrop-blur">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-gray-300 tracking-wide">
                Where Real Connections Happen
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="block">Why Choose</span>
              <span className="px-1 text-transparent bg-clip-text bg-gradient-to-br from-[#2D0065] to-[#7A0CF8]">
                Heleno?
              </span>
            </h1>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="relative w-full max-w-md h-72 flex items-center justify-center rounded-xl border border-gray-800 bg-[#111] shadow-xl">
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
                <ArrowLeft className="w-6 h-6 text-gray-200" />
              </button>

              <div className="flex items-center gap-3">
                {items.map((_, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "h-2.5 w-2.5 rounded-full transition-all duration-300",
                      card.index === index
                        ? "bg-white scale-125 shadow-[0_0_10px_rgba(138,43,226,0.6)]"
                        : "bg-gray-500/40 hover:bg-gray-400/50"
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

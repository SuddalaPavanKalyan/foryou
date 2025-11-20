import { ArrowRight, Sparkles } from "lucide-react";

const SectionOne = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-5 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 sm:px-5 py-2 rounded-full border border-pink-200 transition-all">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span className="text-sm sm:text-base font-medium text-gray-700 tracking-wide">
                Where Real Connections Happen
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-col text-gray-800">
              <span>Share Time.</span>
              <span>Feel Heard.</span>
              <span>Connect with People Who Care.</span>
            </h1>

            <div className="px-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mt-8">
              <button className="px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 text-white bg-black active:scale-95 transition-all duration-300hover:scale-105 w-full sm:w-auto">
                Connect Now
                <ArrowRight className="w-5 h-5 transition-transform" />
              </button>

              <button className="px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-800 bg-white active:scale-95 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                Become a Helon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;

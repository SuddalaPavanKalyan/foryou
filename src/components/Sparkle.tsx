import { Sparkles } from "lucide-react";

type Props = {
  title: string;
};

const Sparkle: React.FC<Props> = ({ title }) => {
  return (
    <div
      className="
                    inline-flex items-center gap-2
                    px-4 sm:px-5 py-2 rounded-full
                    border shadow-sm backdrop-blur
                    
                    bg-white/80 text-gray-700 border-gray-200 
                    shadow-[0_1px_4px_rgba(0,0,0,0.08)]
                    
                    dark:bg-[#1A1A1A]/80 dark:text-gray-300 dark:border-[#2A2A2A]
                    dark:shadow-[0_0_10px_rgba(255,255,255,0.05)]
                    
                    transition-all duration-300
                "
    >
      <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
      <span className="text-sm sm:text-base font-medium tracking-wide">
        {title}
      </span>
    </div>
  );
};

export default Sparkle;

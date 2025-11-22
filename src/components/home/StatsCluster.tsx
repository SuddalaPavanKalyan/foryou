import { motion } from "motion/react";

export default function StatsCluster() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-rows-3 gap-10 w-full max-w-md mx-auto lg:mx-0"
      >
        {/* ================= ROW 0 ================= */}
        <div className="grid grid-cols-3 gap-5 md:gap-30">
          {/* (0,0) SOS BLOCK */}
          <div
            className="
            w-25 h-25 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-40 xl:h-40
            rounded-3xl 
            bg-white/70 dark:bg-neutral-900/80 
            border border-neutral-200 dark:border-neutral-700 
            backdrop-blur-xl 
            shadow-[0_4px_18px_rgba(0,0,0,0.08)]
            dark:shadow-[0_0_35px_rgba(147,112,255,0.45)]
            flex items-center justify-center
            transition-all duration-300
            hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            dark:hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            hover:border-indigo-300/50 dark:hover:border-fuchsia-500/40
          "
          >
            <motion.div
              whileHover={{ scale: 1.18 }}
              className="
                w-12 h-12 
                bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500
                dark:from-indigo-400 dark:via-violet-500 dark:to-pink-500
                text-white rounded-xl text-2xl font-extrabold
                flex items-center justify-center
                shadow-[0_0_15px_rgba(147,112,255,0.55)]
              "
            >
              +
            </motion.div>
          </div>

          {/* (0,1) H */}
          <div
            className="
            w-25 h-25 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-40 xl:h-40
            rounded-3xl 
            bg-gradient-to-br from-white/90 to-white/60 
            dark:from-neutral-900/80 dark:to-neutral-900/60
            border border-neutral-300 dark:border-neutral-700 
            backdrop-blur-xl
            shadow-[0_4px_14px_rgba(0,0,0,0.07)]
            dark:shadow-[0_0_28px_rgba(139,92,246,0.28)]
            flex items-center justify-center
            hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            dark:hover:shadow-[0_0_42px_rgba(168,85,247,0.45)]
            transition-all duration-300
          "
          >
            <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 tracking-tight drop-shadow-sm">
              H
            </div>
          </div>

          {/* (0,2) E */}
          <div
            className="
            w-25 h-25 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-40 xl:h-40
            rounded-3xl 
            bg-gradient-to-br from-white/85 to-white/55
            dark:from-neutral-900/70 dark:to-neutral-900/50  
            border border-neutral-300 dark:border-neutral-700 
            backdrop-blur-xl
            shadow-[0_4px_14px_rgba(0,0,0,0.07)]
            dark:shadow-[0_0_28px_rgba(139,92,246,0.25)]
            flex items-center justify-center
            transition-all duration-300
            hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
          "
          >
            <div className="w-12 h-12 rounded-full border-4 border-indigo-400/40 dark:border-indigo-500/40 flex items-center justify-center bg-white/40 dark:bg-neutral-800/40 backdrop-blur-md">
              <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-300">
                E
              </div>
            </div>
          </div>
        </div>

        {/* ================= ROW 1 ================= */}
        <div className="grid grid-cols-3 gap-5 md:gap-30">
          {/* (1,0) L */}
          <div
            className="
            w-25 h-25 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-40 xl:h-40
            rounded-3xl 
            bg-gradient-to-br from-white/85 to-white/60
            dark:from-neutral-900/70 dark:to-neutral-900/60
            border border-neutral-200 dark:border-neutral-700 
            backdrop-blur-xl
            shadow-[0_4px_14px_rgba(0,0,0,0.07)]
            dark:shadow-[0_0_26px_rgba(147,112,255,0.3)]
            flex items-center justify-center
            transition-all duration-300
            hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            dark:hover:shadow-[0_0_38px_rgba(168,85,247,0.5)]
          "
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 border-2 border-indigo-400/40 dark:border-indigo-500/40 rounded-full flex items-center justify-center shadow-inner shadow-indigo-300/20"
            >
              <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-300">
                L
              </div>
            </motion.div>
          </div>

          {/* (1,1) SOS */}
          <div
            className="
            w-25 h-25 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-40 xl:h-40
            rounded-3xl 
            bg-white/75 dark:bg-neutral-900/80 
            border border-neutral-300 dark:border-neutral-700 
            backdrop-blur-xl
            shadow-[0_4px_22px_rgba(0,0,0,0.10)]
            dark:shadow-[0_0_34px_rgba(147,112,255,0.35)]
            flex items-center justify-center
            transition-all duration-300
            hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            dark:hover:shadow-[0_0_48px_rgba(168,85,247,0.55)]
          "
          >
            <motion.div
              animate={{ rotate: [0, 45, -45, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="
                w-12 h-12 
                bg-gradient-to-br from-indigo-600 to-fuchsia-500 
                dark:from-indigo-400 dark:to-fuchsia-600
                text-white rounded-xl text-2xl font-extrabold
                flex items-center justify-center
                shadow-[0_0_16px_rgba(147,112,255,0.55)]
              "
            >
              +
            </motion.div>
          </div>

          {/* (1,2) E */}
          <div
            className="
            w-25 h-25 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-40 xl:h-40
            rounded-3xl 
            bg-gradient-to-br from-white/85 to-white/60  
            dark:from-neutral-900/70 dark:to-neutral-900/55
            border border-neutral-300 dark:border-neutral-700 
            backdrop-blur-xl
            flex items-center justify-center
            shadow-[0_4px_16px_rgba(0,0,0,0.08)]
            hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            dark:shadow-[0_0_32px_rgba(139,92,246,0.28)]
          "
          >
            <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300">
              E
            </div>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className="grid grid-cols-3 gap-5 md:gap-30">
          {/* (2,0) N */}
          <div
            className="
            w-25 h-25 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-40 xl:h-40
            rounded-3xl
            bg-gradient-to-br from-white/85 to-white/55
            dark:from-neutral-900/70 dark:to-neutral-900/50
            border border-neutral-300 dark:border-neutral-700 
            backdrop-blur-xl
            shadow-[0_4px_14px_rgba(0,0,0,0.08)]
            dark:shadow-[0_0_32px_rgba(147,112,255,0.32)]
            relative flex items-center justify-center
            hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            dark:hover:shadow-[0_0_45px_rgba(168,85,247,0.5)]
          "
          >
            <div className="absolute text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 drop-shadow-sm">
              N
            </div>
          </div>

          {/* (2,1) O */}
          <div
            className="
            w-25 h-25 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-40 xl:h-40
            rounded-3xl 
            bg-white/80 dark:bg-neutral-900/70 
            border border-neutral-300 dark:border-neutral-700 
            overflow-hidden flex items-center justify-center 
            backdrop-blur-xl
            shadow-[0_4px_18px_rgba(0,0,0,0.06)]
            dark:shadow-[0_0_30px_rgba(147,112,255,0.3)]
            hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            dark:hover:shadow-[0_0_45px_rgba(168,85,247,0.45)]
            transition-all duration-300
          "
          >
            <motion.div
              className="text-5xl font-extrabold text-indigo-500 dark:text-indigo-300"
              animate={{ x: ["-40%", "40%", "-40%"], rotate: [0, 360, 720] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              O
            </motion.div>
          </div>

          {/* (2,2) SOS */}
          <div
            className="
            w-25 h-25 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-40 xl:h-40
            rounded-3xl 
            bg-white/80 dark:bg-neutral-900/70 
            border border-neutral-300 dark:border-neutral-700 
            backdrop-blur-xl 
            flex items-center justify-center
            shadow-[0_4px_22px_rgba(0,0,0,0.10)]
            dark:shadow-[0_0_38px_rgba(147,112,255,0.35)]
            hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            dark:hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]
            transition-all duration-300
          "
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="
                w-12 h-12 
                bg-gradient-to-br from-indigo-600 to-fuchsia-500 
                dark:from-indigo-400 dark:to-fuchsia-600
                text-white rounded-xl text-2xl font-extrabold
                flex items-center justify-center
                shadow-[0_0_16px_rgba(147,112,255,0.6)]
              "
            >
              +
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

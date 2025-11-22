import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Logo from "../../components/Logo";

const CompleteAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="
        min-h-screen w-full flex flex-col items-center px-8 py-20 relative
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      <button
        className="
          absolute top-4 left-4 p-2 rounded-full transition
          
          bg-black/5 text-black hover:bg-black/10
          dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
        "
      >
        <ArrowLeft size={22} />
      </button>

      <div className="mt-20 mb-6">
        <Logo />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">
          Complete your account
        </h1>

        <p className="text-gray-600 dark:text-white/60 text-sm sm:text-base">
          Signing up as{" "}
          <span className="text-black dark:text-white">
            testpavan1@yopmail.com
          </span>
        </p>
      </div>

      <div className="w-full max-w-md space-y-6">
        <div>
          <label className="text-sm font-medium text-black dark:text-white">
            What should we call you?
          </label>
          <input
            type="text"
            placeholder="Name"
            className="
              w-full mt-1 px-5 py-3 rounded-full
    transition-all duration-200

    /* White Theme — Super Clean */
    bg-white text-black placeholder-black/40
    border-2 border-[#7A0CF8]/40
    focus:border-[#7A0CF8]
    focus:ring-2 focus:ring-[#7A0CF8]/40

    /* Dark Theme — Unchanged */
    dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white/40
    dark:focus:border-[#7A0CF8]
    dark:focus:ring-[#7A0CF8]/30
            "
          />
        </div>

        <div>
          <label className="text-sm font-medium text-black dark:text-white">
            Create a password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="
                w-full mt-1 px-5 py-3 rounded-full
    transition-all duration-200

    /* White Theme — Super Clean */
    bg-white text-black placeholder-black/40
    border-2 border-[#7A0CF8]/40
    focus:border-[#7A0CF8]
    focus:ring-2 focus:ring-[#7A0CF8]/40

    /* Dark Theme — Unchanged */
    dark:bg-[#1A1A1A] dark:text-white dark:placeholder-white/40
    dark:focus:border-[#7A0CF8]
    dark:focus:ring-[#7A0CF8]/30
              "
            />

            <button
              className="
                absolute right-3 top-1/2 -translate-y-1/2 
                text-black/50 hover:text-black
                dark:text-white/60 dark:hover:text-white
              "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <p className="text-gray-600 dark:text-white/60 text-xs mt-2">
            Passwords need to have at least 8 characters.
          </p>
        </div>

        <button
          className="
            w-full py-3 rounded-full font-medium transition

            bg-black text-white
            dark:bg-white dark:text-gray-900
          "
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CompleteAccount;

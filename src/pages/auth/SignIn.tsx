import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen w-full flex items-center justify-center px-8 py-20
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      <button
        className="
          absolute top-4 left-4 p-2 rounded-full transition-all
          bg-black/5 hover:bg-black/10 text-black
          dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
          backdrop-blur-sm
        "
      >
        <ArrowLeft size={22} />
      </button>

      <div
        className="
          w-full max-w-md flex flex-col items-center text-center
          bg-white dark:bg-transparent 
          dark:shadow-none
          dark:border-transparent
          transition-all duration-300
        "
      >
        <div className="mb-6 cursor-pointer" onClick={() => navigate("/")}>
          <Logo />
        </div>

        <h1
          className="
            text-2xl sm:text-3xl font-semibold mb-6
            text-black dark:text-white
          "
        >
          Log in or sign up
        </h1>

        <div className="w-full space-y-3">
          <button
            className="
              w-full py-3 rounded-full font-medium flex items-center justify-center gap-2
              transition-all
              
              bg-black text-white border border-black/10
              hover:bg-black/10
              dark:bg-white dark:text-black dark:hover:bg-gray-200
            "
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        <div className="my-6 flex items-center w-full">
          <div className="flex-1 h-px bg-black/20 dark:bg-white/20" />
          <span className="px-3 text-black/50 dark:text-white/50">or</span>
          <div className="flex-1 h-px bg-black/20 dark:bg-white/20" />
        </div>

        <div className="w-full text-left">
          <label className="text-md text-black/80 dark:text-white/80">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
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

        <button
          className="
            w-full mt-5 py-3 rounded-full font-medium transition-all
            bg-black text-white hover:bg-gray-900
            dark:bg-white dark:text-black dark:hover:bg-gray-200
          "
        >
          Continue
        </button>

        <p
          className="
            mt-4 text-sm cursor-pointer
            text-[#7A0CF8] hover:underline
          "
        >
          Need help signing in?
        </p>

        <p
          className="
            text-xs mt-8 w-72 text-black/50 dark:text-white/40
            transition-colors
          "
        >
          By signing up, you agree to our{" "}
          <span className="underline cursor-pointer">Terms</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;

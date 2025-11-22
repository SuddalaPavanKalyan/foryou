import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

const SignUp = () => {
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
      <div className="w-full max-w-md text-center">
        <div
          className="
            absolute top-6 left-6 w-8 h-8 cursor-pointer
            text-black dark:text-white
            hover:opacity-80 transition
          "
          onClick={() => navigate("/")}
        >
          <Logo />
        </div>

        <h1 className="text-3xl font-bold mb-5 text-black dark:text-white">
          Start exploring on Heleno
        </h1>

        <p className="text-black/60 dark:text-white/70 mb-8">
          Place where you meet your type of people.
        </p>

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

        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-black/20 dark:bg-white/20" />
          <span className="px-3 text-black/50 dark:text-white/50">or</span>
          <div className="flex-1 h-px bg-black/20 dark:bg-white/20" />
        </div>

        <div className="text-left">
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

        <p className="mt-4 text-sm text-[#7A0CF8] hover:underline cursor-pointer">
          Need help signing in?
        </p>

        <p className="text-xs mt-8 text-black/60 dark:text-white/50">
          By signing up, you agree to our{" "}
          <span className="underline cursor-pointer">Terms</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>

        <button
          className="
            mt-8 px-5 py-2 rounded-full transition-all

            text-black border border-black hover:bg-black hover:text-white
            dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black
          "
        >
          Not a provider? Join as a user
        </button>
      </div>
    </div>
  );
};

export default SignUp;

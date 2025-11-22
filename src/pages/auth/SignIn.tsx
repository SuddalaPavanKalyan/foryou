import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white px-8 py-20">
      <button className="absolute top-4 left-4 bg-white/10 hover:bg-white/20 p-2 rounded-full">
        <ArrowLeft size={22} className="text-white" />
      </button>
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <div className="mb-6 cursor-pointer" onClick={() => navigate("/")}>
          <Logo />
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
          Log in or sign up
        </h1>

        <div className="w-full space-y-3">
          <button className="w-full bg-white text-black py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-200">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        <div className="my-6 flex items-center w-full">
          <div className="flex-1 h-px bg-white/20" />
          <span className="px-3 text-white/50">or</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="w-full text-left">
          <label className="text-sm text-white/80">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full mt-1 px-5 py-3 rounded-full bg-[#1A1A1A] text-white placeholder-white/40 focus:ring-2 focus:ring-[#7A0CF8]"
          />
        </div>

        <button className="w-full mt-5 bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200">
          Continue
        </button>

        <p className="mt-4 text-sm text-[#7A0CF8] hover:underline cursor-pointer">
          Need help signing in?
        </p>

        <p className="text-xs text-white/40 mt-8 w-72">
          By signing up, you agree to our{" "}
          <span className="underline">Terms</span> and{" "}
          <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;

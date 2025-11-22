import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white px-8 py-20">
      <div className="w-full max-w-md text-center">
        <div
          className="absolute top-6 left-6 w-8 h-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo />
        </div>

        <h1 className="text-3xl font-bold mb-5">Start exploring on Heleno</h1>

        <p className="text-white/70 mb-8">
          Place where you meet your type of people.
        </p>

        <button className="w-full bg-white text-black py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-200 mb-6">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-white/20" />
          <span className="px-3 text-white/50">or</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="text-left">
          <label className="text-sm text-white/80">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 mt-1 rounded-full bg-[#1A1A1A] text-white placeholder-white/40 focus:ring-2 focus:ring-[#7A0CF8]"
          />
        </div>

        <button className="w-full mt-5 bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200">
          Continue
        </button>

        <p className="mt-4 text-sm text-[#7A0CF8] hover:underline cursor-pointer">
          Need help signing in?
        </p>

        <p className="text-xs text-white/50 mt-8">
          By signing up, you agree to our{" "}
          <span className="underline">Terms</span> and{" "}
          <span className="underline">Privacy Policy</span>.
        </p>

        <button className="mt-8 border border-white px-5 py-2 rounded-full text-white hover:bg-white hover:text-black">
          Not a provider? Join as a user
        </button>
      </div>
    </div>
  );
};

export default SignUp;

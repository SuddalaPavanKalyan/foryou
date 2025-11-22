import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full grid grid-cols-1">
      <div className="bg-black text-white flex flex-col items-center justify-center px-6 py-10">
        <div
          className="absolute top-6 left-6 w-8 h-8 rounded-full cursor-pointer"
          role="button"
          onClick={() => {
            navigate("/");
          }}
        >
          <Logo />
        </div>

        <div className="max-w-md w-full text-center">
          <h1 className="text-3xl font-bold mb-5">Start exploring on Heleno</h1>

          <p className="text-white/70 mb-8">
            Place where you meet your type of people.
          </p>

          <div className="space-y-3">
            <button className="w-full bg-white text-black font-medium py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </div>

          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="px-3 text-white/50">or</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          <div className="text-left">
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 mt-1 bg-[#1A1A1A] rounded-full focus:ring-2 focus:ring-[#7A0CF8] outline-none"
            />
          </div>

          <button className="w-full mt-5 bg-white text-gray-900 py-3 rounded-full font-medium cursor-pointer">
            Continue
          </button>

          <p className="mt-4 text-sm text-[#7A0CF8] hover:underline cursor-pointer">
            Need help signing in?
          </p>

          <p className="text-xs text-white/50 mt-8">
            By signing up, you are creating an account and agree to our{" "}
            <span className="underline">Terms</span> and{" "}
            <span className="underline">Privacy Policy</span>.
          </p>

          <button className="mt-8 border border-white px-5 py-2 rounded-full text-white hover:bg-white hover:text-black transition cursor-pointer">
            Not a provider? Join as a user
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

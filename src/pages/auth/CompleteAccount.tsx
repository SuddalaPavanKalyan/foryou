import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Logo from "../../components/Logo";

const CompleteAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black text-white px-8 py-20 relative">
      <button className="absolute top-4 left-4 bg-white/10 hover:bg-white/20 p-2 rounded-full">
        <ArrowLeft size={22} className="text-white" />
      </button>

      <div className="mt-20 mb-6">
        <Logo />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">
          Complete your account
        </h1>
        <p className="text-white/60 text-sm sm:text-base">
          Signing up as{" "}
          <span className="text-white">testpavan1@yopmail.com</span>
        </p>
      </div>

      <div className="w-full max-w-md space-y-6">
        <div>
          <label className="text-sm font-medium">
            What should we call you?
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full mt-2 px-5 py-3 rounded-full bg-[#1A1A1A] text-white placeholder-white/40 focus:ring-2 focus:ring-[#7A0CF8]"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Create a password</label>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-5 py-3 rounded-full bg-[#1A1A1A] text-white placeholder-white/40 focus:ring-2 focus:ring-[#7A0CF8]"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <p className="text-white/60 text-xs mt-2">
            Passwords need to have at least 8 characters.
          </p>
        </div>

        <button className="w-full bg-[#1A1A1A] text-gray-400 py-3 rounded-full font-medium cursor-not-allowed">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CompleteAccount;

import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Logo from "../../components/Logo";

const CompleteAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center px-4 sm:px-6 relative">
      {/* Back Button */}
      <button className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/10 hover:bg-white/20 p-2 rounded-full">
        <ArrowLeft className="text-white" size={22} />
      </button>

      {/* Logo */}
      <div className="mt-20 sm:mt-24 mb-6 flex justify-center">
        <Logo />
      </div>

      {/* Title Section */}
      <div className="text-center mb-8 px-2">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">
          Complete your account
        </h1>
        <p className="text-white/60 text-sm sm:text-base">
          Signing up as{" "}
          <span className="text-white">testpavan1@yopmail.com</span>
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md space-y-6">
        {/* Name Field */}
        <div>
          <label className="text-sm text-white font-medium">
            What should we call you?
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full mt-2 px-5 py-3 rounded-full bg-[#1A1A1A] text-white 
                       placeholder-white/40 
                       
                       focus:outline-none focus:ring-2 focus:ring-[#7A0CF8]"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="text-sm text-white font-medium">
            Create a password
          </label>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-5 py-3 rounded-full bg-[#1A1A1A] text-white 
                         placeholder-white/40 
                         
                         focus:outline-none focus:ring-2 focus:ring-[#7A0CF8]"
            />

            {/* Show/Hide Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <p className="text-white/60 text-xs sm:text-sm mt-2">
            Passwords need to have at least 8 characters.
          </p>
        </div>

        {/* Continue Button */}
        <button className="w-full bg-[#1A1A1A] text-gray-400 py-3 rounded-full font-medium">
          Continue
        </button>
      </div>

      <div className="h-10"></div>
    </div>
  );
};

export default CompleteAccount;

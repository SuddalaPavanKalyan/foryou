import { AlignLeft, X } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Logo from "../Logo";

const PublicLayout = () => {
  const [bar, setBar] = useState<boolean>(false);
  const toggle = () => setBar((p) => !p);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex items-center justify-between px-1 py-4 bg-black text-white">
        <div className="flex items-center gap-3 md:hidden">
          <button
            className="p-3 rounded-full hover:bg-white/5 active:scale-95 transition"
            onClick={toggle}
          >
            <AlignLeft size={26} />
          </button>

          <div className="font-bold text-xl tracking-wide uppercase">
            <Logo size={50} />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between px-10 py-5 bg-black text-white gap-10">
          <div
            className="
      font-extrabold text-2xl uppercase cursor-pointer tracking-[0.25em]
      text-white transition-all duration-300
      hover:text-[#B27CFF] hover:scale-110
      
    "
            role="button"
            onClick={() => navigate("/")}
          >
            HELENO
          </div>

          <nav>
            <ul className="flex items-center gap-10">
              {[
                { label: "Home", link: "/" },
                { label: "Safety", link: "/trust-and-safety" },
                { label: "Our Story", link: "/company/story" },
                { label: "About Us", link: "/company/about" }
              ].map((item) => (
                <li
                  key={item.label}
                  className="text-lg tracking-wide relative group cursor-pointer"
                >
                  <Link
                    to={item.link}
                    reloadDocument
                    className="hover:opacity-80 transition"
                  >
                    {item.label}
                  </Link>

                  <span
                    className="
              absolute left-0 -bottom-1 h-[2px] w-0
              bg-gradient-to-r from-[#2D0065] to-[#7A0CF8]
              transition-all duration-300 group-hover:w-full
            "
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4 mr-3">
          <button className="text-lg font-medium hover:opacity-70 transition">
            Log in
          </button>

          <button className="bg-white text-black rounded-full px-5 py-2.5 text-lg font-semibold active:scale-95 transition">
            Get Started
          </button>
        </div>
      </header>

      <div
        className={`md:hidden fixed top-0 left-0 h-full w-full bg-black text-white flex flex-col transform transition-transform duration-300 z-50 ${
          bar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="w-full flex items-center justify-between px-4 py-3">
          <div className="w-16 p-1 active:scale-95 transition" />
          <div className="text-[14px] font-bold uppercase tracking-wide px-5">
            <p className="w-full px-5">Heleno</p>
          </div>
          <button className="p-1 active:scale-95 transition" onClick={toggle}>
            <X size={50} />
          </button>
        </header>

        <main className="flex-1 flex flex-col px-5 py-4">
          <ul className="space-y-4">
            {[
              { label: "Home", link: "/" },
              { label: "Safety", link: "/trust-and-safety" },
              { label: "Our Story", link: "/company/story" },
              { label: "About Us", link: "/company/about" }
            ].map((item) => (
              <li
                key={item.label}
                className="text-xl tracking-wide hover:opacity-80 transition"
              >
                <Link
                  to={item.link}
                  reloadDocument
                  className="hover:opacity-80 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </main>

        <footer className="px-5 py-6 flex flex-col items-center gap-4">
          <button className="w-full py-5 text-center bg-white text-black text-lg rounded-full font-sm active:scale-95 transition">
            Get Started
          </button>

          <div className="text-center text-[11px] text-white/60">
            © 2025 Heleno • All rights reserved
          </div>
        </footer>
      </div>
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;

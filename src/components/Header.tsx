import { AlignLeft, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Header = () => {
  const [bar, setBar] = useState(false);
  const toggle = () => setBar((p) => !p);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Safety", link: "/trust-and-safety" },
    { label: "Our Story", link: "/company/story" },
    { label: "About Us", link: "/company/about" }
  ];

  return (
    <>
      <header
        className="
          sticky top-0 z-50
          flex items-center justify-between p-2
          bg-white text-black
          dark:bg-black dark:text-white
          transition-colors duration-300
        "
      >
        {/* ================= MOBILE LEFT LOGO + MENU ================= */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            className="
              p-3 rounded-full
              hover:bg-black/10 dark:hover:bg-white/5
              active:scale-95 transition
            "
            onClick={toggle}
          >
            <AlignLeft size={26} />
          </button>

          <div className="font-bold text-xl tracking-wide uppercase">
            <Logo size={50} />
          </div>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center justify-between px-10 py-5 gap-10">
          <div
            className="
              font-extrabold text-2xl uppercase cursor-pointer tracking-[0.25em]
              transition-all duration-300
            "
            onClick={() => navigate("/")}
          >
            HELENO
          </div>

          <nav>
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const active = pathname === item.link;
                return (
                  <li
                    key={item.label}
                    className="
                      text-base font-medium tracking-wide relative group cursor-pointer
                      text-black/80 dark:text-white/80
                    "
                  >
                    <Link to={item.link} reloadDocument className="transition">
                      {item.label}
                    </Link>

                    {/* ACTIVE OR HOVER UNDERLINE */}
                    <span
                      className={`
                        absolute left-0 -bottom-1 h-[2px] rounded-full
                        bg-[#7A0CF8] transition-all duration-300

                        ${active ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* ================= RIGHT BUTTONS ================= */}
        <div className="flex items-center gap-4 mr-3">
          <button
            className="
              text-lg font-medium 
              hover:opacity-70 transition
              text-black dark:text-white
            "
            onClick={() => navigate("/login")}
          >
            Log in
          </button>

          <button
            className="
              rounded-full px-5 py-2.5 text-lg font-semibold active:scale-95 transition
              bg-black text-white
              dark:bg-white dark:text-black
              hover:bg-black/80 dark:hover:bg-gray-200
            "
            onClick={() => navigate("/join")}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* ================= MOBILE NAV ================= */}
      <div
        className={`
          md:hidden fixed top-0 left-0 h-full w-full flex flex-col z-50
          transform transition-transform duration-300
          ${bar ? "translate-x-0" : "-translate-x-full"}
          bg-white text-black
          dark:bg-black dark:text-white
        `}
      >
        <header className="w-full flex items-center justify-between px-4 py-3">
          <div className="w-16 p-1" />

          <p className="text-[14px] font-bold uppercase tracking-wide px-5">
            Heleno
          </p>

          <button className="p-1 active:scale-95 transition" onClick={toggle}>
            <X size={50} />
          </button>
        </header>

        <main className="flex-1 flex flex-col px-5 py-4">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const active = pathname === item.link;
              return (
                <li
                  key={item.label}
                  className={`
                    text-xl font-medium tracking-wide transition
                    ${active ? "text-[#7A0CF8]" : "hover:opacity-80"}
                  `}
                >
                  <Link
                    to={item.link}
                    reloadDocument
                    className="transition"
                    onClick={toggle}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </main>

        <footer className="px-5 py-6 flex flex-col items-center gap-4">
          <button
            className="
              w-full py-5 text-lg rounded-full active:scale-95 transition
              bg-black text-white
              dark:bg-white dark:text-black
            "
            onClick={() => navigate("/join")}
          >
            Get Started
          </button>

          <div className="text-center text-[11px] text-black/60 dark:text-white/60">
            © 2025 Heleno • All rights reserved
          </div>
        </footer>
      </div>
    </>
  );
};

export default Header;

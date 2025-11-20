import { Menu, X } from "lucide-react";
import type React from "react";
import { useState } from "react";

const App: React.FC = () => {
  const [bar, setBar] = useState<boolean>(false);
  const toggle = () => setBar((p) => !p);

  return (
    <div>
      <header className="flex items-center justify-between px-4 py-3 bg-white">
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-full hover:bg-black/5 active:scale-95 transition"
            onClick={toggle}
          >
            <Menu size={20} />
          </button>

          <div className="font-bold text-lg tracking-wide uppercase">H</div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium hover:opacity-70 transition">
            Log in
          </button>

          <button className="bg-black text-white rounded-full px-3 py-2 text-sm font-semibold active:scale-95 transition">
            Get Started
          </button>
        </div>
      </header>

      <div
        className={`md:hidden fixed top-0 left-0 h-full w-full bg-black text-white flex flex-col transform transition-transform duration-300 ${
          bar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="w-full flex items-center justify-between px-4 py-3">
          <div className="w-16 p-1 active:scale-95 transition" />
          <div className="text-[14px] font-semibold uppercase tracking-wide px-5">
            <p className="w-full px-5">Heleno</p>
          </div>
          <button className="p-1 active:scale-95 transition" onClick={toggle}>
            <X size={50} />
          </button>
        </header>

        <main className="flex-1 flex flex-col px-5 py-4">
          <ul className="space-y-4">
            <li className="text-xl tracking-wide hover:opacity-80 transition">
              Home
            </li>
            <li className="text-xl tracking-wide hover:opacity-80 transition">
              About
            </li>
            <li className="text-xl tracking-wide hover:opacity-80 transition">
              Services
            </li>
            <li className="text-xl tracking-wide hover:opacity-80 transition">
              Contact
            </li>
          </ul>
        </main>

        <footer className="px-5 py-6 flex flex-col items-center gap-4">
          <button className="w-full py-4 text-center bg-white text-black text-md rounded-full font-sm active:scale-95 transition">
            Get Started
          </button>

          <div className="text-center text-[11px] text-white/60">
            © 2025 Heleno • All rights reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;

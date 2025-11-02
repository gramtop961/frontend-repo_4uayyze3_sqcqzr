import { Rocket, Bot } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-black text-white flex items-center justify-center">
            <Bot className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">RoboVerse</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#showcase" className="hover:text-black transition-colors">Showcase</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm shadow hover:shadow-md transition-shadow">
          <Rocket className="h-4 w-4" /> Launch
        </button>
      </div>
    </header>
  );
}

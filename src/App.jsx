import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RobotsShowcase from "./components/RobotsShowcase";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f7f9] text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <RobotsShowcase />
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-black/10 bg-white p-8">
              <h3 className="text-2xl font-semibold tracking-tight">Build with us</h3>
              <p className="mt-2 text-black/70 max-w-2xl">
                Have a robotics idea to prototype? We’d love to collaborate. Reach out and we’ll help you bring
                your interactive concepts to life with delightful, modern experiences.
              </p>
              <form className="mt-6 grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30" placeholder="Your name" />
                <input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30" placeholder="Email address" type="email" />
                <textarea className="sm:col-span-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30" placeholder="Tell us about your project" rows={4} />
                <div className="sm:col-span-2">
                  <button type="button" className="rounded-full bg-black text-white px-6 py-3 text-sm shadow hover:shadow-md transition-shadow">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-black/60">
          <p>© {new Date().getFullYear()} RoboVerse. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-black">Features</a>
            <a href="#showcase" className="hover:text-black">Showcase</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

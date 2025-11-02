import { Cpu, Shield, Sparkles, Cog } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Control",
    desc: "Adaptive motion planning and real-time responsiveness tuned for playful interactions.",
  },
  {
    icon: Shield,
    title: "Safety First",
    desc: "Built-in safety layers ensure smooth, secure operation across all environments.",
  },
  {
    icon: Sparkles,
    title: "Crisp Visuals",
    desc: "High-fidelity rendering with a clean black-and-white theme that lets the robot shine.",
  },
  {
    icon: Cog,
    title: "Modular Design",
    desc: "Swap behaviors and capabilities with a flexible, component-based architecture.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Designed for builders and dreamers</h2>
          <p className="mt-3 text-black/70">Everything you need to prototype, test, and deploy expressive robotics experiences.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-black/10 bg-white p-5 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-black text-white flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-black/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

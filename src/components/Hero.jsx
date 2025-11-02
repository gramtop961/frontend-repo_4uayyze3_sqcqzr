import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Interactive 3D • Robotics • Modern UI
          </div>
          <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            Playful Robots. Serious Technology.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black/70 leading-relaxed">
            Explore the next generation of interactive robots. Our responsive 3D hero reacts to your cursor,
            bringing a black-on-white aesthetic to life with motion, precision, and personality.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#showcase" className="rounded-full bg-black text-white px-5 py-3 text-sm shadow hover:shadow-md transition-shadow">Explore Robots</a>
            <a href="#features" className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm hover:border-black/20 transition-colors">See Features</a>
          </div>
        </div>
        <div className="h-[480px] sm:h-[560px] lg:h-[640px] w-full rounded-2xl overflow-hidden border border-black/10 bg-white order-1 lg:order-2">
          <Spline
            scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          {/* soft top gradient for text readability */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/0 via-white/0 to-white/40" />
        </div>
      </div>
    </section>
  );
}

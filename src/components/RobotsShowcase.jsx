export default function RobotsShowcase() {
  const items = [
    {
      title: "Scout",
      desc: "Compact companion with expressive head-tracking and quick maneuvers.",
      img: "https://images.unsplash.com/photo-1579167728798-a1cf3d595960?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Sentinel",
      desc: "Guardian unit with advanced perception and smooth obstacle avoidance.",
      img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Artisan",
      desc: "Delicate manipulator designed for precision tasks and creative play.",
      img: "https://images.unsplash.com/photo-1543946602-a0fce8117699?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="showcase" className="relative w-full py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Robots in the wild</h2>
          <p className="mt-3 text-black/70">A glimpse at concepts and prototypes shaped by our platform.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-black/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

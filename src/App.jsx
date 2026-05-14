import React from "react";
import { Search, Menu, ArrowUpRight } from "lucide-react";

const posts = [
  {
    category: "Architecture",
    title: "Monolithic Limestone Entryways",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Wellness",
    title: "Private Sauna & Cold Plunge Suites",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Technology",
    title: "Invisible Architectural Speakers",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Outdoor",
    title: "Resort-Style Courtyard Pools",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Lighting",
    title: "Integrated Shadow-Line Lighting",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Interiors",
    title: "Warm Minimalist Kitchen Design",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function HausTroveLanding() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <header className="border-b border-white/10 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">
          <div className="text-xl tracking-[0.35em] font-semibold">
            HAUSTROVE
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.24em] text-white/65">
            <a href="#">Architecture</a>
            <a href="#">Interiors</a>
            <a href="#">Wellness</a>
            <a href="#">Technology</a>
            <a href="#">Outdoor</a>
          </nav>

          <div className="flex items-center gap-4 text-white/70">
            <Search className="h-5 w-5" />
            <Menu className="h-5 w-5 md:hidden" />
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-[78vh] min-h-[680px] overflow-hidden border-b border-white/10">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury residence"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto h-full px-5 flex flex-col justify-end pb-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/55 mb-5">
              Curated Luxury Residential Living
            </p>

            <h1 className="max-w-5xl text-6xl md:text-8xl font-semibold leading-[0.92] tracking-[-0.06em]">
              The best things for exceptional homes.
            </h1>

            <div className="mt-10 flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-white/75">
              <button className="border border-white/20 px-6 py-4 hover:bg-white hover:text-black transition">
                Explore
              </button>

              <div className="flex items-center gap-2">
                Latest Finds <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden bg-[#151515] aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105 opacity-90"
                  />
                </div>

                <div className="pt-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/40 mb-3">
                    {post.category}
                  </p>

                  <h2 className="text-2xl leading-tight font-medium tracking-[-0.03em] group-hover:text-white/75 transition">
                    {post.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 mb-5">
              The HausTrove Edit
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.05em] leading-tight">
              Weekly finds for luxury homes.
            </h2>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-[#151515] border border-white/10 px-5 py-4 outline-none text-white"
              />

              <button className="bg-white text-black px-8 py-4 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-white/85 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

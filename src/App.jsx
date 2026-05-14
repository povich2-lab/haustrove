import React, { useMemo, useState } from "react";
import { Menu, Search, X, ArrowUpRight, Mail } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Architecture",
    title: "Rammed Earth Desert House",
    dek: "A low-slung residence wrapped in stone, glass, and warm earth tones with indoor-outdoor living at every edge.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
    tag: "Featured Home",
  },
  {
    id: 2,
    category: "Wellness",
    title: "Cedar Sauna + Cold Plunge Room",
    dek: "A private recovery suite combining sauna, steam, cold plunge, towel storage, and low-glare lighting.",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1600&q=90",
    tag: "Home Spa",
  },
  {
    id: 3,
    category: "Kitchens",
    title: "Invisible Induction Cooktop",
    dek: "A hidden cooking surface mounted beneath porcelain slab counters for an uninterrupted kitchen island.",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=90",
    tag: "Kitchen Tech",
  },
  {
    id: 4,
    category: "Outdoor",
    title: "Stone Outdoor Kitchen Pavilion",
    dek: "A resort-level outdoor room with integrated grill, refrigeration, fireplace, and flush stone detailing.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
    tag: "Outdoor Living",
  },
  {
    id: 5,
    category: "Lighting",
    title: "Trimless Architectural Lighting",
    dek: "Shadow-line channels, concealed coves, and pinhole fixtures designed to light the room without showing off.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",
    tag: "Detail",
  },
  {
    id: 6,
    category: "Interiors",
    title: "Sunken Conversation Lounge",
    dek: "A modern take on the conversation pit with integrated upholstery, stone tables, and a fireplace edge.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
    tag: "Interior Feature",
  },
  {
    id: 7,
    category: "Garages",
    title: "Gallery Garage Display Wall",
    dek: "A collector-grade garage with museum lighting, dark finishes, slatwall storage, and polished concrete floors.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90",
    tag: "Car Space",
  },
  {
    id: 8,
    category: "Technology",
    title: "Disappearing Home Theater",
    dek: "Projection, speakers, shades, and controls hidden inside architecture so the room never feels like a media room.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=90",
    tag: "Smart Home",
  },
  {
    id: 9,
    category: "Materials",
    title: "Bronze-Framed Pivot Door",
    dek: "An oversized entry door with dark bronze hardware, stone threshold, and a massive glass panel.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=90",
    tag: "Entry Detail",
  },
];

const nav = ["Latest", "Architecture", "Kitchens", "Wellness", "Outdoor", "Lighting", "Technology", "Interiors"];

export default function HausTroveLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Latest");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "Latest" || post.category === activeCategory;
      const matchesQuery = `${post.title} ${post.category} ${post.dek} ${post.tag}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const hero = posts[0];
  const secondary = posts.slice(1, 4);

  return (
    <div className="min-h-screen bg-[#111] text-[#f3f0e8] selection:bg-[#f3f0e8] selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-4 md:px-7">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/70 hover:text-white"
          >
            <Menu className="h-5 w-5" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          <button onClick={() => setActiveCategory("Latest")} className="absolute left-1/2 -translate-x-1/2 text-2xl font-black tracking-[0.38em] md:text-3xl">
            HAUSTROVE
          </button>

          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/70 hover:text-white"
          >
            <span className="hidden sm:inline">Search</span>
            <Search className="h-5 w-5" />
          </button>
        </div>

        <nav className="hidden border-t border-white/10 md:block">
          <div className="mx-auto flex max-w-[1500px] items-center justify-center gap-9 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={`${activeCategory === item ? "text-white" : "hover:text-white"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm">
          <aside className="h-full w-full max-w-md border-r border-white/10 bg-[#0b0b0b] p-7 shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <div className="text-xl font-black tracking-[0.32em]">HAUSTROVE</div>
              <button onClick={() => setMenuOpen(false)} className="rounded-full border border-white/15 p-3 hover:bg-white hover:text-black">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-1">
              {nav.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveCategory(item);
                    setMenuOpen(false);
                  }}
                  className="flex w-full items-center justify-between border-b border-white/10 py-5 text-left text-2xl font-semibold tracking-[-0.04em] text-white/90 hover:text-white"
                >
                  {item}
                  <ArrowUpRight className="h-5 w-5 text-white/30" />
                </button>
              ))}
            </div>

            <div className="mt-12 border border-white/10 bg-white/[0.03] p-5">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.26em] text-white/40">Newsletter</p>
              <p className="text-sm leading-6 text-white/70">Weekly luxury home finds, materials, products, spaces, and details.</p>
            </div>
          </aside>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[90] bg-[#080808]/95 p-5 backdrop-blur">
          <div className="mx-auto max-w-4xl pt-10">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/45">Search HausTrove</p>
              <button onClick={() => setSearchOpen(false)} className="rounded-full border border-white/15 p-3 hover:bg-white hover:text-black">
                <X className="h-5 w-5" />
              </button>
            </div>
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search kitchens, saunas, lighting, materials..."
              className="w-full border-b border-white/20 bg-transparent py-6 text-3xl font-semibold tracking-[-0.04em] text-white outline-none placeholder:text-white/20 md:text-5xl"
            />
            <div className="mt-10 grid gap-4">
              {filteredPosts.slice(0, 5).map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center gap-4 border-b border-white/10 pb-4 text-left"
                >
                  <img src={post.image} alt="" className="h-20 w-28 object-cover" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">{post.category}</p>
                    <p className="mt-1 text-xl font-semibold">{post.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main>
        <section className="mx-auto grid max-w-[1500px] gap-px border-b border-white/10 bg-white/10 md:grid-cols-[1.45fr_0.9fr]">
          <article className="group relative min-h-[620px] overflow-hidden bg-black md:min-h-[760px]">
            <img
              src={hero.image}
              alt={hero.title}
              className="absolute inset-0 h-full w-full object-cover object-center opacity-80 transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-4xl p-6 md:p-12">
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/55">{hero.tag}</p>
              <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-8xl">{hero.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-lg">{hero.dek}</p>
              <div className="mt-7 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-[11px] font-black uppercase tracking-[0.24em] text-white/80">
                Read More <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </article>

          <div className="grid gap-px bg-white/10">
            {secondary.map((post) => (
              <article key={post.id} className="group grid min-h-[253px] grid-cols-[0.9fr_1fr] overflow-hidden bg-[#101010]">
                <div className="overflow-hidden bg-black">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover object-center opacity-80 transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-5 md:p-7">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-white/35">{post.category}</p>
                  <h2 className="text-2xl font-black leading-[0.98] tracking-[-0.05em] md:text-3xl">{post.title}</h2>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/55">{post.dek}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-4 py-10 md:px-7 md:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/35">Browsing</p>
              <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">{activeCategory}</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/50">
              A curated feed of exceptional homes, design details, products, amenities, and materials worth saving.
            </p>
          </div>

          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[1.08/1] overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center opacity-90 transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 bg-black/75 px-3 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-white/70 backdrop-blur">
                    {post.tag}
                  </div>
                </div>
                <div className="pt-4">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.26em] text-white/35">{post.category}</p>
                  <h3 className="text-[22px] font-black leading-[0.98] tracking-[-0.045em] group-hover:text-white/70">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/48">{post.dek}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#080808]">
          <div className="mx-auto grid max-w-[1500px] gap-px bg-white/10 md:grid-cols-3">
            {nav.slice(1, 7).map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className="flex min-h-40 items-center justify-between bg-[#0d0d0d] p-7 text-left hover:bg-[#151515]"
              >
                <span className="text-3xl font-black tracking-[-0.06em]">{item}</span>
                <ArrowUpRight className="h-5 w-5 text-white/35" />
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-5 py-20 text-center md:py-28">
          <Mail className="mx-auto mb-6 h-7 w-7 text-white/40" />
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/35">The HausTrove Edit</p>
          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">Luxury home finds every week.</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/55">A tight edit of products, rooms, materials, architecture, and details for exceptional residential projects.</p>
          <div className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="min-h-14 flex-1 border border-white/10 bg-white/[0.04] px-5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/35"
            />
            <button className="min-h-14 bg-[#f3f0e8] px-8 text-[11px] font-black uppercase tracking-[0.22em] text-black hover:bg-white">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 text-[10px] font-black uppercase tracking-[0.26em] text-white/35 md:flex-row">
          <p>© 2026 HausTrove</p>
          <p>Curated Luxury Residential Living</p>
        </div>
      </footer>
    </div>
  );
}

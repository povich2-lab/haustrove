import React, { useMemo, useState } from "react";
import { Search, Menu, X, ShoppingBag, User, ChevronRight } from "lucide-react";

const categories = ["Homes", "Rooms", "Products", "Outdoor", "Wellness", "Tech", "Materials", "Details"];

const posts = [
  {
    section: "Homes",
    type: "Mountain",
    title: "Black Ridge House",
    copy: "Set into a wooded slope, this dark timber residence pairs limestone walls, steel-framed glass, and a quiet interior palette built around the view.",
    price: "$4.8M+ build estimate",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=90",
    source: "View Project",
  },
  {
    section: "Wellness",
    type: "Sauna",
    title: "Cedar Recovery Suite",
    copy: "A private spa room combining sauna, steam, cold plunge, heated floors, towel storage, and indirect lighting in one compact footprint.",
    price: "$85K+ installed",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1500&q=90",
    source: "Read More",
  },
  {
    section: "Products",
    type: "Kitchen",
    title: "Invisible Induction Island",
    copy: "Mounted beneath a porcelain slab, this hidden cooktop keeps the island completely uninterrupted until it is time to cook.",
    price: "$6K+",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1500&q=90",
    source: "Find Source",
  },
  {
    section: "Outdoor",
    type: "Pool",
    title: "Stone Pool Pavilion",
    copy: "Part outdoor kitchen, part cabana, this stone structure anchors a resort-style backyard with shade, storage, and a fireplace wall.",
    price: "$250K+ build estimate",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=90",
    source: "Read More",
  },
  {
    section: "Materials",
    type: "Entry",
    title: "Bronze Pivot Door",
    copy: "Oversized bronze framing, concealed hardware, and a deep stone threshold create a gallery-like entry sequence.",
    price: "$18K+",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1500&q=90",
    source: "Find Source",
  },
  {
    section: "Tech",
    type: "Theater",
    title: "Disappearing Media Room",
    copy: "Projector, screen, shades, speakers, and controls vanish into the architecture so the room never looks like a theater unless it needs to.",
    price: "$75K+ system",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1500&q=90",
    source: "Read More",
  },
  {
    section: "Details",
    type: "HVAC",
    title: "Flush Linear Air Returns",
    copy: "Drywall-integrated vents maintain clean ceiling planes and sharp wall lines without plastic grilles or bulky registers.",
    price: "$40+ / linear ft",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=90",
    source: "Find Source",
  },
  {
    section: "Rooms",
    type: "Bath",
    title: "Bookmatched Stone Shower",
    copy: "Large-format slabs, hidden drains, steam-ready glass, and a bench carved into the wall give this bath a hotel-grade finish.",
    price: "$45K+",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=90",
    source: "Read More",
  },
  {
    section: "Outdoor",
    type: "Fire",
    title: "Sunken Fire Lounge",
    copy: "Built-in seating, limestone paving, and a recessed flame line make the outdoor room feel permanent rather than furnished.",
    price: "$95K+",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=90",
    source: "Read More",
  },
  {
    section: "Homes",
    type: "Waterfront",
    title: "Limestone Lake House",
    copy: "Pale stone, deep roof overhangs, warm wood ceilings, and broad glass openings give this waterfront home a calm resort feel.",
    price: "$6M+ build estimate",
    image: "https://images.unsplash.com/photo-1600566752734-2a0d4f8c1a4f?auto=format&fit=crop&w=1500&q=90",
    source: "View Project",
  },
  {
    section: "Products",
    type: "Doors",
    title: "Motorized Pocket Glass Wall",
    copy: "A full-height glass wall slides into a concealed pocket, turning the great room into an open-air pavilion on command.",
    price: "$60K+",
    image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1500&q=90",
    source: "Find Source",
  },
  {
    section: "Details",
    type: "Lighting",
    title: "Trimless Pinhole Downlights",
    copy: "Tiny apertures, deep regress, and precise beam spreads light the space without cluttering the ceiling plane.",
    price: "$350+ / fixture",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=90",
    source: "Find Source",
  },
];

function PostCard({ post, feature = false }) {
  return (
    <article className="break-inside-avoid border-b border-[#2b2b2b] pb-8 mb-8 group">
      <div className="relative overflow-hidden bg-[#1a1a1a] mb-4">
        <img
          src={post.image}
          alt={post.title}
          className={`w-full object-cover object-center opacity-95 transition duration-500 group-hover:scale-[1.025] ${feature ? "aspect-[1.45/1]" : "aspect-[1.18/1]"}`}
        />
      </div>

      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-black text-[#777] mb-2">
        <span>{post.section}</span>
        <span>/</span>
        <span>{post.type}</span>
      </div>

      <h2 className={`font-black tracking-[-0.055em] text-[#f4f4f4] leading-[0.92] ${feature ? "text-[46px] md:text-[64px]" : "text-[29px]"}`}>
        {post.title}
      </h2>

      <p className="mt-3 text-[15px] leading-[1.65] text-[#a1a1a1]">
        {post.copy} <span className="text-[#d6d6d6]">{post.price}.</span>
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#8a8a8a]">
        <button className="hover:text-white">Read More</button>
        <span className="text-[#444]">or</span>
        <button className="hover:text-white">{post.source}</button>
      </div>
    </article>
  );
}

export default function HausTroveLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = active === "All" || post.section === active;
      const haystack = `${post.section} ${post.type} ${post.title} ${post.copy}`.toLowerCase();
      return matchesCategory && haystack.includes(query.toLowerCase());
    });
  }, [active, query]);

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans">
      <header className="sticky top-0 z-50 bg-[#111] border-b border-[#2c2c2c]">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="h-[78px] grid grid-cols-[1fr_auto_1fr] items-center">
            <button onClick={() => setMenuOpen(true)} className="justify-self-start flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-black text-[#8e8e8e] hover:text-white">
              <Menu size={19} /> Menu
            </button>

            <button onClick={() => { setActive("All"); setQuery(""); }} className="text-[30px] md:text-[38px] font-black tracking-[0.32em] text-white leading-none">
              HAUSTROVE
            </button>

            <div className="justify-self-end flex items-center gap-5 text-[#8e8e8e]">
              <button className="hidden md:block hover:text-white"><User size={18} /></button>
              <button className="hidden md:block hover:text-white"><ShoppingBag size={18} /></button>
              <button onClick={() => setSearchOpen(true)} className="hover:text-white"><Search size={19} /></button>
            </div>
          </div>

          <nav className="hidden md:flex items-center justify-center gap-8 border-t border-[#2c2c2c] h-[42px] text-[11px] uppercase tracking-[0.18em] font-black text-[#858585]">
            <button onClick={() => setActive("All")} className={active === "All" ? "text-white" : "hover:text-white"}>Latest</button>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={active === cat ? "text-white" : "hover:text-white"}>{cat}</button>
            ))}
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80" onClick={() => setMenuOpen(false)}>
          <aside className="w-[360px] max-w-[88vw] h-full bg-[#151515] border-r border-[#303030] p-7" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <div className="text-xl font-black tracking-[0.28em]">HAUSTROVE</div>
              <button onClick={() => setMenuOpen(false)} className="text-[#999] hover:text-white"><X /></button>
            </div>
            <div className="border-t border-[#303030]">
              {["All", ...categories].map((cat) => (
                <button key={cat} onClick={() => { setActive(cat); setMenuOpen(false); }} className="w-full flex items-center justify-between border-b border-[#303030] py-4 text-left text-[13px] uppercase tracking-[0.19em] font-black text-[#a5a5a5] hover:text-white">
                  {cat === "All" ? "Latest" : cat}
                  <ChevronRight size={15} />
                </button>
              ))}
            </div>
            <div className="mt-8 text-[12px] leading-6 text-[#808080]">
              Curated products, materials, spaces, and details for luxury residential living.
            </div>
          </aside>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[110] bg-[#111] px-5 py-8">
          <div className="mx-auto max-w-[900px]">
            <div className="flex justify-between items-center mb-8">
              <div className="text-[11px] uppercase tracking-[0.22em] font-black text-[#777]">Search HausTrove</div>
              <button onClick={() => setSearchOpen(false)} className="text-[#999] hover:text-white"><X /></button>
            </div>
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search homes, sauna, lighting, kitchens..."
              className="w-full bg-transparent border-b border-[#333] py-5 text-[34px] md:text-[52px] font-black tracking-[-0.06em] outline-none placeholder:text-[#3b3b3b]"
            />
            <div className="mt-8 grid gap-4">
              {filtered.slice(0, 6).map((post) => (
                <button key={post.title} onClick={() => setSearchOpen(false)} className="grid grid-cols-[96px_1fr] gap-4 text-left border-b border-[#282828] pb-4">
                  <img src={post.image} alt="" className="h-[78px] w-[96px] object-cover" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-black text-[#777]">{post.section} / {post.type}</div>
                    <div className="mt-1 text-[22px] font-black tracking-[-0.04em] leading-none">{post.title}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-[1180px] px-4">
        <div className="py-4 text-center text-[11px] uppercase tracking-[0.2em] font-black text-[#777] border-b border-[#2c2c2c]">
          Updated Daily / Luxury Residential Finds
        </div>

        <section className="py-8 border-b border-[#2c2c2c]">
          <PostCard post={filtered[0] || posts[0]} feature />
        </section>

        <section className="columns-1 md:columns-2 lg:columns-3 gap-8 py-8">
          {filtered.slice(1).map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </section>

        <section className="border-y border-[#2c2c2c] py-10 mb-10 text-center">
          <div className="text-[11px] uppercase tracking-[0.24em] font-black text-[#777] mb-3">The HausTrove Edit</div>
          <h2 className="text-[34px] md:text-[48px] leading-none tracking-[-0.06em] font-black mb-5">The best home finds, weekly.</h2>
          <div className="mx-auto max-w-[540px] flex flex-col sm:flex-row gap-3">
            <input placeholder="Email address" className="h-12 flex-1 bg-[#181818] border border-[#333] px-4 outline-none text-sm" />
            <button className="h-12 bg-white text-black px-6 text-[11px] uppercase tracking-[0.18em] font-black">Subscribe</button>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#2c2c2c] py-8 text-center text-[10px] uppercase tracking-[0.24em] font-black text-[#666]">
        HAUSTROVE / CURATED LUXURY RESIDENTIAL LIVING
      </footer>
    </div>
  );
}


import React, { useMemo, useState } from "react";
import { Menu, Search, X } from "lucide-react";

const categories = ["All", "Homes", "Architecture", "Kitchens", "Bath", "Outdoor", "Wellness", "Tech", "Materials"];

const items = [
  {
    category: "Homes",
    title: "Black Ridge House",
    text: "A secluded mountain residence defined by charred timber, stone walls, and floor-to-ceiling glass overlooking the valley below.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Wellness",
    title: "Cedar Sauna Room",
    text: "A private wellness suite with cedar walls, a cold plunge, heated stone floors, and integrated low-glare lighting.",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Kitchens",
    title: "Invisible Induction Island",
    text: "This minimalist kitchen hides its cooking surface beneath a porcelain slab for a completely uninterrupted island.",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Outdoor",
    title: "Stone Pool Pavilion",
    text: "Part cabana, part outdoor kitchen, this stone structure anchors a resort-style backyard without feeling overbuilt.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Materials",
    title: "Bronze Pivot Door",
    text: "Oversized, warm, and architectural, this bronze-framed pivot door creates a gallery-like entry sequence.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Tech",
    title: "Hidden Theater System",
    text: "Projection, audio, shades, and controls disappear into the room so the technology never dominates the design.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Architecture",
    title: "Glass Courtyard Hall",
    text: "A narrow glass connector turns circulation into a view corridor between the home’s private wings.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Bath",
    title: "Bookmatched Stone Shower",
    text: "Large-format slabs, hidden drains, and a steam-ready enclosure give this bath a quiet hotel-level finish.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Outdoor",
    title: "Sunken Fire Lounge",
    text: "Built-in seating, limestone pavers, and a recessed fire feature create an outdoor room that feels permanent.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Materials",
    title: "Flush Linear Vents",
    text: "Drywall-integrated HVAC returns keep ceilings and walls clean while preserving the architecture’s sharp lines.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Homes",
    title: "Limestone Lake House",
    text: "A calm waterfront retreat combining pale stone, deep roof overhangs, and warm interior wood ceilings.",
    image: "https://images.unsplash.com/photo-1600566752734-2a0d4f8c1a4f?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "Tech",
    title: "Motorized Pocket Glass Wall",
    text: "A full-height glass wall disappears into a pocket, turning the great room into an open-air pavilion.",
    image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1200&q=90",
  },
];

function Card({ item }) {
  return (
    <article className="group border-b border-[#292929] pb-7">
      <div className="mb-4 aspect-[1.28/1] overflow-hidden bg-[#191919]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8b8b8b]">{item.category}</p>
      <h2 className="mb-2 text-[23px] font-bold leading-[1.02] tracking-[-0.04em] text-[#f2f2f2] group-hover:text-white md:text-[25px]">
        {item.title}
      </h2>
      <p className="text-[14px] leading-6 text-[#9a9a9a]">{item.text}</p>
    </article>
  );
}

export default function HausTroveLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const categoryMatch = active === "All" || item.category === active;
      const queryMatch = `${item.title} ${item.category} ${item.text}`.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [active, query]);

  return (
    <div className="min-h-screen bg-[#111] text-white">
      <header className="sticky top-0 z-50 border-b border-[#262626] bg-[#111]/95 backdrop-blur">
        <div className="mx-auto grid h-[74px] max-w-[1180px] grid-cols-3 items-center px-4">
          <button onClick={() => setMenuOpen(true)} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#aaa] hover:text-white">
            <Menu className="h-5 w-5" /> Menu
          </button>
          <button onClick={() => { setActive("All"); setQuery(""); }} className="justify-self-center text-[28px] font-black tracking-[0.34em] text-white">
            HAUSTROVE
          </button>
          <button onClick={() => setSearchOpen(true)} className="justify-self-end text-[#aaa] hover:text-white">
            <Search className="h-5 w-5" />
          </button>
        </div>
        <div className="hidden border-t border-[#262626] md:block">
          <nav className="mx-auto flex max-w-[1180px] justify-center gap-7 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a8a8a]">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={active === cat ? "text-white" : "hover:text-white"}>
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70" onClick={() => setMenuOpen(false)}>
          <div className="h-full w-[330px] bg-[#171717] p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-8 flex items-center justify-between">
              <div className="text-lg font-black tracking-[0.28em]">HAUSTROVE</div>
              <button onClick={() => setMenuOpen(false)}><X /></button>
            </div>
            <div className="space-y-0 border-t border-[#333]">
              {categories.map((cat) => (
                <button key={cat} onClick={() => { setActive(cat); setMenuOpen(false); }} className="block w-full border-b border-[#333] py-4 text-left text-[13px] font-bold uppercase tracking-[0.2em] text-[#bbb] hover:text-white">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[110] bg-[#111] p-5">
          <div className="mx-auto max-w-[900px] pt-12">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#777]">Search HausTrove</p>
              <button onClick={() => setSearchOpen(false)}><X /></button>
            </div>
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search homes, kitchens, sauna, lighting..."
              className="w-full border-b border-[#333] bg-transparent py-5 text-3xl font-bold outline-none placeholder:text-[#444]"
            />
            <div className="mt-8 grid gap-3">
              {filtered.slice(0, 6).map((item) => (
                <button key={item.title} onClick={() => setSearchOpen(false)} className="flex gap-4 border-b border-[#262626] pb-3 text-left">
                  <img src={item.image} alt="" className="h-20 w-24 object-cover" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#777]">{item.category}</p>
                    <p className="mt-1 text-xl font-bold">{item.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-[1180px] px-4">
        <section className="border-b border-[#2b2b2b] py-7 text-center">
          <p className="mx-auto max-w-[680px] text-[15px] leading-7 text-[#9a9a9a]">
            Curated homes, products, materials, and design details for exceptional residential living.
          </p>
        </section>

        <section className="grid gap-8 py-8 md:grid-cols-[1.45fr_1fr] md:gap-9 md:py-10">
          <article className="group border-b border-[#292929] pb-7 md:border-b-0">
            <div className="mb-5 aspect-[1.38/1] overflow-hidden bg-[#191919]">
              <img src={filtered[0]?.image || items[0].image} alt="" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.035]" />
            </div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8b8b8b]">{filtered[0]?.category || items[0].category}</p>
            <h1 className="mb-3 text-[40px] font-black leading-[0.96] tracking-[-0.06em] text-white md:text-[58px]">
              {filtered[0]?.title || items[0].title}
            </h1>
            <p className="max-w-[700px] text-[15px] leading-7 text-[#a0a0a0]">{filtered[0]?.text || items[0].text}</p>
          </article>

          <div className="grid gap-7">
            {filtered.slice(1, 3).map((item) => <Card key={item.title} item={item} />)}
          </div>
        </section>

        <section className="grid gap-x-8 gap-y-10 border-t border-[#2b2b2b] py-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(3).map((item) => <Card key={item.title} item={item} />)}
        </section>

        <section className="border-t border-[#2b2b2b] py-14 text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#777]">The HausTrove Edit</p>
          <h2 className="mb-5 text-3xl font-black tracking-[-0.05em]">Luxury home finds, weekly.</h2>
          <div className="mx-auto flex max-w-[520px] flex-col gap-3 sm:flex-row">
            <input className="h-12 flex-1 border border-[#333] bg-[#171717] px-4 text-sm outline-none" placeholder="Email address" />
            <button className="h-12 bg-white px-6 text-[11px] font-black uppercase tracking-[0.2em] text-black">Subscribe</button>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#262626] py-8 text-center text-[10px] font-bold uppercase tracking-[0.24em] text-[#666]">
        © 2026 HausTrove
      </footer>
    </div>
  );
}

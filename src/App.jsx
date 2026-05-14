import React from "react";
import { ArrowRight, Mail, Search, Menu, Gem, Home, Waves, Lightbulb, Sofa, Trees, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const featured = [
  {
    title: "Invisible Linear Vents",
    category: "Materials",
    desc: "Flush, architectural HVAC details that disappear into drywall, millwork, and shadow lines.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Private Wellness Suites",
    category: "Wellness",
    desc: "Sauna, steam, cold plunge, and recovery rooms designed like five-star hospitality amenities.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bronze Pivot Entry Doors",
    category: "Architecture",
    desc: "Oversized front doors with monumental scale, warm metal finishes, and gallery-like restraint.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Stone-Clad Outdoor Kitchens",
    category: "Outdoor",
    desc: "Outdoor living setups with natural stone, concealed appliances, and resort-level detailing.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Integrated Architectural Lighting",
    category: "Lighting",
    desc: "Low-glare lighting systems, recessed channels, and layered illumination for quiet luxury homes.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hidden Home Technology",
    category: "Technology",
    desc: "Speakers, controls, shades, and security systems designed to vanish into the architecture.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = [
  { name: "Architecture", icon: Home },
  { name: "Kitchens", icon: Gem },
  { name: "Wellness", icon: Waves },
  { name: "Lighting", icon: Lightbulb },
  { name: "Interiors", icon: Sofa },
  { name: "Outdoor", icon: Trees },
  { name: "Technology", icon: Cpu },
];

export default function HausTroveLanding() {
  return (
    <div className="min-h-screen bg-[#f4f0e8] text-[#171513] antialiased">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f0e8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20">
              <Gem className="h-4 w-4" />
            </div>
            <div className="text-xl font-semibold tracking-[0.28em]">HAUSTROVE</div>
          </div>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.22em] text-black/70 md:flex">
            <a href="#finds" className="hover:text-black">Finds</a>
            <a href="#categories" className="hover:text-black">Categories</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#newsletter" className="hover:text-black">Subscribe</a>
          </nav>
          <div className="flex items-center gap-3">
            <Search className="hidden h-5 w-5 text-black/60 md:block" />
            <Menu className="h-6 w-6 md:hidden" />
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-black/50">
              Curated luxury residential living
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              The best things for exceptional homes.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-black/65">
              HausTrove curates remarkable products, spaces, materials, and ideas for high-end residential design — from hidden details to statement-making amenities.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#finds" className="group inline-flex items-center justify-center rounded-full bg-[#171513] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-black/10 transition hover:scale-[1.01]">
                Explore Finds <ArrowRight className="ml-3 h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#newsletter" className="inline-flex items-center justify-center rounded-full border border-black/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black/80 transition hover:border-black/50">
                Get the Edit
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-black shadow-2xl shadow-black/20"
          >
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85"
              alt="Luxury modern home interior"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white/65">Featured Direction</p>
              <h2 className="max-w-md text-3xl font-semibold tracking-[-0.04em]">Quiet luxury, built into the details.</h2>
            </div>
          </motion.div>
        </section>

        <section id="categories" className="border-y border-black/10 bg-[#ebe5da]">
          <div className="mx-auto max-w-7xl px-5 py-7 md:px-8">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-7">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button key={cat.name} className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/35 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/70 transition hover:border-black/30 hover:bg-white/60">
                    <Icon className="h-4 w-4" />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="finds" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-black/45">The latest edit</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Curated Finds</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-black/55">
              A starter editorial grid built for product discoveries, design details, architecture features, and affiliate-ready recommendations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group overflow-hidden rounded-[1.7rem] border border-black/10 bg-[#fbf8f1] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-black/40">{item.category}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-black/58">{item.desc}</p>
                  <div className="mt-5 inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-black/75">
                    View Detail <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-[#171513] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">About HausTrove</p>
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                An editorial destination for people building, designing, and obsessing over luxury homes.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
                HausTrove is built around sharp curation: fewer things, better taste, stronger point of view. The focus is on products and ideas that elevate the way a home looks, lives, and feels.
              </p>
            </div>
          </div>
        </section>

        <section id="newsletter" className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-24">
          <div className="rounded-[2rem] border border-black/10 bg-[#fbf8f1] p-8 shadow-xl shadow-black/5 md:p-12">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#171513] text-white">
              <Mail className="h-5 w-5" />
            </div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-black/45">The HausTrove Edit</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Get the best home finds weekly.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-black/58">
              A concise newsletter for luxury home products, design details, materials, and architectural ideas worth saving.
            </p>
            <form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="min-h-14 flex-1 rounded-full border border-black/15 bg-white px-6 text-sm outline-none transition placeholder:text-black/35 focus:border-black/45"
              />
              <button type="button" className="min-h-14 rounded-full bg-[#171513] px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:scale-[1.01]">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.22em] text-black/45 md:flex-row">
          <p>© 2026 HausTrove</p>
          <p>Luxury home curation</p>
        </div>
      </footer>
    </div>
  );
}

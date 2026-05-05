'use client';
import { motion } from 'framer-motion';

/* ---------------- DATA ---------------- */

const youtube = [
'/assets/pic01.webp','/assets/pic02.webp','/assets/pic03.webp',
'/assets/pic04.webp','/assets/pic05.webp','/assets/pic06.webp',
'/assets/pic07.webp','/assets/pic08.webp','/assets/pic09.webp'
];

const shorts = [
'/assets/pic10.webp','/assets/pic11.webp','/assets/pic12.webp',
'/assets/pic01.webp','/assets/pic02.webp'
];

const posters = [
'/assets/pic03.webp','/assets/pic04.webp','/assets/pic05.webp',
'/assets/pic06.webp','/assets/pic07.webp'
];

const brands = [
'/assets/pic08.webp','/assets/pic09.webp','/assets/pic10.webp',
'/assets/pic11.webp','/assets/pic12.webp'
];

/* ---------------- CARD ---------------- */

const Card = ({ src, aspect }) => (

  <div className={`w-[280px] ${aspect} shrink-0 overflow-hidden rounded-md`}>
    <img
      src={src}
      className="w-full h-full object-cover"
    />
  </div>
);

/* ---------------- SCROLL ROW ---------------- */

const ScrollRow = ({ items, reverse = false, aspect }) => {
const loop = [...items, ...items]; // seamless loop

return ( <div className="relative overflow-hidden py-4">

  {/* fade edges */}
  <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
  <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

  <div
    className={`flex gap-6 w-max ${
      reverse ? 'marquee-reverse' : 'marquee'
    }`}
  >
    {loop.map((img, i) => (
      <Card key={i} src={img} aspect={aspect} />
    ))}
  </div>
</div>

);
};

/* ---------------- MAIN ---------------- */

export default function Work() {
return ( <section className="bg-black text-white px-4 py-24">

  {/* HEADER */}
  <h2 className="text-4xl font-bold text-center mb-16">
    My Work
  </h2>

  {/* YOUTUBE (GRID ONLY) */}
      <div className="mb-24 text-center">
  <h3 className="text-3xl font-semibold mb-12">
    YouTube Thumbnails
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

{youtube.map((img, i) => (
  <div
    key={i}
    className="w-full aspect-video rounded-lg overflow-hidden"
  >
    <img
      src={img}
      className="w-full h-full object-cover"
    />
  </div>
))}

  </div>
</div>


  {/* SHORTS (RIGHT → LEFT) */}
  <div className="mb-16">
    <h3 className="text-3xl font-semibold text-center mb-10">Shorts / Reels</h3>
    <ScrollRow items={shorts} aspect="aspect-[9/16]" />
  </div>

  {/* POSTERS (RIGHT → LEFT) */}
  <div className="mb-16">
    <h3 className="text-3xl font-semibold text-center mb-10">Posters</h3>
    <ScrollRow items={posters} reverse aspect="aspect-[3/4]" />
  </div>

  {/* BRAND (LEFT → RIGHT) */}
  <div>
    <h3 className="text-3xl font-semibold text-center mb-10">Brand Designs</h3>
    <ScrollRow items={brands}  aspect="aspect-[3/4]" />
  </div>

</section>

);
}

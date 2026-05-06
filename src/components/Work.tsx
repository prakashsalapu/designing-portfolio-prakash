'use client';

import { motion } from 'framer-motion';

/* ---------------- CLOUDINARY ---------------- */

const cloud = (id) =>
  `https://res.cloudinary.com/dozqp1478/image/upload/f_auto,q_auto,w_1200/${id}`;

/* ---------------- DATA ---------------- */

const youtube = [
  cloud('v1778085341/t1_ngek1b.avif'),
  cloud('v1778085335/t2_fffeef.avif'),
  cloud('v1778085336/t3_unwxpn.avif'),
  cloud('v1778085338/t4_ycq3pv.avif'),
  cloud('v1778085338/t5_nrcwml.avif'),
  cloud('v1778085340/t6_mm94kl.avif'),
  cloud('v1778085339/t7_qdwpi1.avif'),
  cloud('v1778085341/t8_lhotrj.avif'),
  cloud('v1778085339/t9_xf9ckd.avif'),
];

const shorts = [
  cloud('v1778085335/s1_mbqcdx.avif'),
  cloud('v1778085338/s2_jwfklx.avif'),
  cloud('v1778085338/s3_qtaqqh.avif'),
  cloud('v1778085337/s4_hojsrd.avif'),
  cloud('v1778085337/s5_x9kttc.avif'),
];

const posters = [
  cloud('v1778085340/p1_twutzc.avif'),
  cloud('v1778085334/p2_iu0whb.avif'),
  cloud('v1778085335/p3_gmrfzx.avif'),
  cloud('v1778085333/p4_x5rgyu.avif'),
  cloud('v1778085341/p5_wflosq.avif'),
  cloud('v1778085340/p7_dihqwm.avif'),
  cloud('v1778085338/p6_srwbiw.avif'),
];

const brands = [
  cloud('v1778085334/b1_wbcahn.avif'),
  cloud('v1778085336/b2_f6dy31.avif'),
  cloud('v1778085336/b3_amlvcp.avif'),
  cloud('v1778085336/b4_rdmhgg.avif'),
  cloud('v1778085335/b5_rde7ks.avif'),
  cloud('v1778085335/b6_vkavz4.avif'),
];

/* ---------------- CARD ---------------- */

const Card = ({ src, aspect }) => (
  <div
    className={`w-[280px] ${aspect} shrink-0 overflow-hidden rounded-2xl bg-neutral-900`}
  >
    <img
      src={src}
      alt="Design Work"
      loading="lazy"
      decoding="async"
      draggable="false"
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
);

/* ---------------- SCROLL ROW ---------------- */

const ScrollRow = ({ items, reverse = false, aspect }) => {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4">

      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

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
  return (
    <section className=" workbg-black text-white px-4 py-24 overflow-hidden" id="work">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          My Work
        </h2>
      </motion.div>

      {/* YOUTUBE */}
      <div className="mb-28 text-center">
        <h3 className="text-3xl font-semibold mb-12">
          <span className="bg-gradient-to-r from-[#4ca4fc] via-[#38bdf8] to-[#a5f3fc] text-transparent bg-clip-text">
             ⭑ YouTube Thumbnails ⭑
            </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {youtube.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900"
            >
              <img
                src={img}
                alt="YouTube Thumbnail"
                loading="lazy"
                decoding="async"
                draggable="false"
                className="w-full h-full object-cover object-[50%_35%] transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* SHORTS */}
      <div className="mb-20">
        <h3 className="text-3xl font-semibold text-center mb-10">
         <span className="bg-gradient-to-r from-[#4ca4fc] via-[#38bdf8] to-[#a5f3fc] text-transparent bg-clip-text">
               ⭑ Shorts / Reels ⭑
            </span>
        </h3>

        <ScrollRow
          items={shorts}
          aspect="aspect-[9/16]"
        />
      </div>

      {/* POSTERS */}
      <div className="mb-20">
        <h3 className="text-3xl font-semibold text-center mb-10">
          <span className="bg-gradient-to-r from-[#4ca4fc] via-[#38bdf8] to-[#a5f3fc] text-transparent bg-clip-text">
            ⭑ Posters ⭑
            </span>
        </h3>

        <ScrollRow
          items={posters}
          reverse
          aspect="aspect-[3/4]"
        />
      </div>

      {/* BRANDS */}
      <div>
        <h3 className="text-3xl font-semibold text-center mb-10">
         <span className="bg-gradient-to-r from-[#4ca4fc] via-[#38bdf8] to-[#a5f3fc] text-transparent bg-clip-text">
              ⭑ Brand Designs ⭑
            </span>
        </h3>

        <ScrollRow
          items={brands}
          aspect="aspect-[3/4]"
        />
      </div>
    </section>
  );
}
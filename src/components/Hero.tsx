'use client';

import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const HeroSection = () => {
  const avatars = [
    'https://res.cloudinary.com/dozqp1478/image/upload/f_auto,q_auto,w_200/v1778087941/umq4uribdghonn8n2e6m_ffnnfn.avif',
    
    'https://res.cloudinary.com/dozqp1478/image/upload/v1778089731/channels4_profile_ozd5t7.avif',

  'https://res.cloudinary.com/dozqp1478/image/upload/f_auto,q_auto,w_200/v1778087947/ryml1fboucv8je8nzvnr_lzmutf.avif',


  'https://res.cloudinary.com/dozqp1478/image/upload/f_auto,q_auto,w_200/v1778087945/rumrsyi0zvhlwphqrlux_ftbqlq.avif',
  
  'https://res.cloudinary.com/dozqp1478/image/upload/v1778089979/MW-logo-white_loyehm.avif',
];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#020202] via-[#06090f] to-[#020202] px-4 py-28 sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.09),transparent_35%),radial-gradient(circle_at_80%_22%,rgba(34,211,238,0.16),transparent_40%),radial-gradient(circle_at_55%_85%,rgba(59,130,246,0.14),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          Available for freelance work
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-8 max-w-5xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
        >
          Designs That Make Your Content{' '}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Impossible to Ignore
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.08, duration: 0.65 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          Helping creators and brands grow with high-converting visuals and cinematic
          design systems that drive clicks and retention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,189,248,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(56,189,248,0.62)]"
          >
            View My Work
          </a>
            <a
        href="https://wa.me/919000157795"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-green-400/30 bg-green-500 px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.45)]"
      >
        Chat on WhatsApp →
      </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            {avatars.map((avatar, index) => (
              <img
                key={avatar}
                src={avatar}
                alt={`Client ${index + 1}`}
                className="h-10 w-10 rounded-full border-2 border-[#0a0a0a] object-cover transition-transform duration-300 hover:-translate-y-1"
              />
            ))}
          </div>
          <div className="flex items-center gap-1 text-amber-300">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-sm font-medium text-slate-300">Trusted by creators &amp; brands</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.6 }}
          className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {['YouTube', 'Instagram', 'LinkedIn'].map((logo) => (
            <span
              key={logo}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/50 transition duration-300 hover:text-slate-200/85"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

'use client';

import { Film, Camera, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Film,
    title: 'YouTube Thumbnail Design',
    description:
      'High-converting cinematic thumbnails crafted to boost clicks and audience retention.',
    accent: 'from-violet-500/40 to-fuchsia-500/10',
    topCard: 'YouTube',
    topInfo: '+CTR',
  },
  {
    icon: Camera,
    title: 'Instagram Reels Cover',
    description:
      'Scroll-stopping reel covers designed to increase profile reach and engagement.',
    accent: 'from-cyan-500/40 to-blue-500/10',
    topCard: 'Reels',
    topInfo: '+Reach',
  },
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description:
      'Premium branding visuals and social creatives for modern creator businesses.',
    accent: 'from-emerald-500/40 to-green-500/10',
    topCard: 'Branding',
    topInfo: '+Identity',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-24 text-white sm:px-8 lg:px-24 scroll-mt-28"
    >

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Explore{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Modern thumbnail systems and branding visuals designed for creators and businesses.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">

          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                }}
                viewport={{ once: true }}
                className="group relative"
              >

                {/* TOP SMALL BOX 1 */}
                <div className="absolute left-1/2 top-[-58px] z-20 w-[170px] -translate-x-1/2 rounded-full border border-white/10 bg-black/90 px-5 py-3 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-white/70" />
                      <span className="text-sm text-white/80">
                        {service.topCard}
                      </span>
                    </div>

                    <span className="text-sm text-white/50">
                      {service.topInfo}
                    </span>
                  </div>

                  {/* GLOW */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accent} opacity-40 blur-xl`}
                  />
                </div>

                {/* TOP SMALL BOX 2 */}
                <div className="absolute left-1/2 top-[-8px] z-10 w-[240px] -translate-x-1/2 rounded-full border border-white/10 bg-black/90 px-6 py-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

                      <span className="text-sm text-white/80">
                        Premium Quality
                      </span>
                    </div>

                    <span className="text-sm text-white/50">
                      24/7
                    </span>
                  </div>

                  {/* GLOW */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accent} opacity-30 blur-xl`}
                  />
                </div>

                {/* MAIN CARD */}
                <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/90 p-[1px] backdrop-blur-xl">

                  {/* OUTER GRADIENT */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-80 blur-2xl`}
                  />

                  {/* INNER CARD */}
                  <div className="relative h-full rounded-[2.2rem] border border-white/10 bg-[#040404]/95 px-7 pb-8 pt-24">

                    {/* BACKGROUND GRADIENT */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${service.accent} opacity-20`}
                    />

                    {/* TOP LIGHT */}
                    <div className="absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

                    {/* CONTENT */}
                    <div className="relative z-10">

                      {/* ICON */}
                      <div className="mb-8 flex justify-center">

                        <div className="relative">
                          <div
                            className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.accent} blur-2xl opacity-60`}
                          />

                          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                        </div>

                      </div>

                      {/* TITLE */}
                      <h3 className="mb-4 text-center text-2xl font-bold text-white">
                        {service.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-center text-sm leading-relaxed text-white/60">
                        {service.description}
                      </p>

                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stat = ({ value, suffix, duration }: { value: number; suffix?: string; duration: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (duration * 150);
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text"
    >
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  );
};

const AboutStats = () => {
  return (
    <section id="about" className="relative py-24 px-5 text-slate-100 sm:px-10 scroll-mt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.08),transparent_36%),radial-gradient(circle_at_85%_75%,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 w-full space-y-6 text-center md:text-left"
        >
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl sm:mb-6">
            Hey, I’m
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Bhanu Prakash Salapu
            </span>
          </h2>

          <p className="mb-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            A digital creator and <strong>Thumbnail Designer</strong> helping
            YouTubers boost <strong>clicks</strong> with eye-catching visuals.
            Turning ideas into scroll-stopping designs that grab attention and <strong>grow</strong> channels.
          </p>

          <div className="mb-4 flex w-full flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#contact"
              className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-center font-semibold text-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_24px_rgba(56,189,248,0.5)] sm:w-auto"
            >
              Let’s Collaborate →
            </a>
            <a
              href="#services"
              className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-2 text-center font-semibold text-slate-100 transition duration-300 ease-in-out hover:scale-105 hover:bg-white/20 sm:w-auto"
            >
              View Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 w-full flex justify-center items-center mt-6 md:mt-4 relative"
        >
        <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.45),0_0_35px_rgba(56,189,248,0.2)] transition-all duration-500 ease-in-out sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px]">
  <img
    src="https://res.cloudinary.com/dozqp1478/image/upload/v1778085341/px-logo_lxyugr.avif"
    alt="Prakash Profile"
    className="absolute inset-0 w-full h-full object-cover rounded-full"
  />
</div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute right-1 top-1 z-10 flex h-[70px] w-[70px] items-center justify-center rounded-full border-[5px] border-cyan-400/70 bg-slate-900/90 shadow-[0_0_24px_rgba(56,189,248,0.3)] sm:right-9 sm:top-[-24px] sm:h-[90px] sm:w-[90px] sm:border-[6px]"
          >
            <div className="text-center leading-tight">
              <p className="text-[8px] text-cyan-300 sm:text-[10px]">Years</p>
              <p className="text-sm font-bold text-cyan-300 sm:text-lg">2+</p>
              <p className="text-[8px] text-cyan-300 sm:text-[10px]">Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 mt-20 px-2 transition-all duration-700 ease-in-out sm:mt-16 sm:px-4"
      >
        
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 p-[1px] shadow-[0_0_40px_rgba(59,130,246,0.18)]">

  {/* INNER BLACK CARD */}
  <div className="rounded-[2rem] bg-black px-6 py-10 sm:px-12">

    {/* OPTIONAL SOFT INNER GLOW */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_55%)] pointer-events-none" />

    <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center text-white sm:grid-cols-3">

      {[
        { value: 200, suffix: 'K+', label: 'Thumbnail Clicks' },
        { value: 500, suffix: '+', label: 'Designs Created' },
        { value: 5, suffix: '+', label: 'Creator Clients' }
      ].map((statItem, idx) => (
        <div
          key={idx}
          className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-6 transition-all duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-white/[0.04]"
        >
          <div>
            {stat({
              value: statItem.value,
              suffix: statItem.suffix,
              duration: 2
            })}
          </div>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            {statItem.label}
          </p>
        </div>
      ))}

    </div>
  </div>
</div>
      </motion.div>
    </section>
  );
};

export default AboutStats;

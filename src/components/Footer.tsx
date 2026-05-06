import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#020202] py-12 text-slate-100">
    <div className="mx-auto w-full max-w-7xl px-4">

      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

        {/* LEFT */}
        <div>
          <h3 className="text-2xl font-bold">
            Let&apos;s work together
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Premium thumbnail design for creators who want results.
          </p>
        </div>

        {/* SOCIALS */}
        <div className="flex items-center gap-4">

          {/* EMAIL */}
          <a
            href="mailto:prakash.salapu@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Prakash%2C%0AI%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20your%20services."
            className="group rounded-full border border-white/15 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
            aria-label="Email"
          >
            <FaEnvelope className="text-[18px]" />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/prakashsalapu"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-white/15 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-[18px]" />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/iamprakashfx?igsh=MW5qeG4zYXVudTVpYw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-white/15 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-pink-400 hover:text-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]"
            aria-label="Instagram"
          >
            <FaInstagram className="text-[18px]" />
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919000157795"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-green-400/20 bg-green-500/10 p-3 text-green-400 transition-all duration-300 hover:scale-110 hover:border-green-400 hover:bg-green-500 hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.45)]"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-[18px]" />
          </a>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-8 border-t border-white/5 pt-6">
        <p className="text-center text-xs tracking-wide text-slate-500">
          &copy; {new Date().getFullYear()} Prakash Salapu.
          All rights reserved.
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;
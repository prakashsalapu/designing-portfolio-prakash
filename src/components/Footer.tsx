import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#020202] py-12 text-slate-100">
    <div className="mx-auto w-full max-w-7xl px-4">
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-2xl font-bold">Let&apos;s work together</h3>
          <p className="mt-2 text-sm text-slate-400">
            Premium thumbnail design for creators who want results.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto: bhanuprakash8305@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Prakash%2C%0AI%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20your%20services."
            className="group rounded-full border border-white/15 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:text-cyan-300"
            aria-label="Email"
          >
            <FaEnvelope className="text-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/iamprakashfx/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-white/15 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:text-cyan-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-[18px]" />
          </a>
          <a
            href="https://www.instagram.com/iamprakashfx?igsh=MW5qeG4zYXVudTVpYw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-white/15 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:text-cyan-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-[18px]" />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Prakash Salapu. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;



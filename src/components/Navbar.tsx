'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
{ label: 'Home', id: 'home' },
{ label: 'About', id: 'about' },
{ label: 'Work', id: 'work' },
{ label: 'Testimonials', id: 'testimonials' },
{ label: 'Contact', id: 'contact' },
];

const Navbar = () => {
const [activeTab, setActiveTab] = useState('home');
const [menuOpen, setMenuOpen] = useState(false);

// Active section on scroll
useEffect(() => {
const onScroll = () => {
const marker = window.scrollY + 120;

  for (const item of navItems) {
    const section = document.getElementById(item.id);
    if (!section) continue;

    if (
      marker >= section.offsetTop &&
      marker < section.offsetTop + section.offsetHeight
    ) {
      setActiveTab(item.id);
      break;
    }
  }
};

onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
return () => window.removeEventListener('scroll', onScroll);

}, []);

// Smooth scroll
const handleClick = (id) => {
const section = document.getElementById(id);
if (!section) return;

const y = section.getBoundingClientRect().top + window.scrollY - 80;

window.scrollTo({ top: y, behavior: 'smooth' });
setActiveTab(id);
setMenuOpen(false);

};

return ( <header className="fixed left-1/2 top-4 z-50 w-[min(92%,780px)] -translate-x-1/2 px-2">

  {/* NAVBAR */}
  <nav className="relative overflow-hidden rounded-full border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]">

    {/* subtle glow */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.12),transparent_50%)]" />

    <div className="relative flex h-14 items-center justify-between px-5">

      {/* LOGO */}
      <button
        onClick={() => handleClick('home')}
        className="inline-flex items-center gap-2 text-sm font-semibold text-white"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
          <img
            src="https://res.cloudinary.com/dozqp1478/image/upload/v1778087247/px-logo_aitivt.svg"
            alt="logo"
            className="h-full w-full rounded-full object-cover"
          />
        </span>
        Prakash
      </button>

        {/* NAV ITEMS */}
    <ul className="hidden items-center gap-10 px-5 md:flex">
      {navItems.map((item) => {
        const active = activeTab === item.id;

        return (
          <li key={item.id} className="relative">
            <button
              onClick={() => handleClick(item.id)}
              className={`relative pb-2 text-sm font-medium transition-all duration-300 ${
                item.id === 'contact'
                  ? active
                    ? 'text-green-400'
                    : 'text-green-500 hover:text-green-400'
                  : active
                  ? 'text-white'
                  : 'text-white/65 hover:text-white'
              }`}
            >
              {item.label}

              {/* ACTIVE UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-[2px] h-[2px] rounded-full bg-gradient-to-r transition-all duration-300 ${
                  item.id === 'contact'
                    ? 'from-green-400 to-green-500'
                    : 'from-cyan-400 to-blue-500'
                } ${
                  active
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0 group-hover:w-full'
                }`}
              />
            </button>
          </li>
        );
      })}
    </ul>
      {/* MOBILE MENU BUTTON */}
      <button
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden rounded-lg bg-white/10 p-2 text-white"
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

    </div>
  </nav>

  {/* MOBILE DROPDOWN */}
  {menuOpen && (
    <div className="mt-2 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:hidden">
      <ul className="space-y-2">
        {navItems.map((item) => {
          const active = activeTab === item.id;

          return (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm transition ${
                  active
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  )}

</header>

);
};

export default Navbar;

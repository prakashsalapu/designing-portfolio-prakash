'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
  name: 'DOKKULO REVIEWS',
  role: 'Movie Reviewer',
  text: 'His thumbnails made my content look more cinematic and highly professional.',
  image: 'https://res.cloudinary.com/dozqp1478/image/upload/v1778087941/umq4uribdghonn8n2e6m_ffnnfn.avif',
},
{
  name: 'BSDVP TECH TELUGU',
  role: 'EdTech YouTuber',
  text: 'Clean and impactful designs that perfectly match my content and audience.',
  image: 'https://res.cloudinary.com/dozqp1478/image/upload/v1778087947/ryml1fboucv8je8nzvnr_lzmutf.avif',
},
{
  name: 'ASK ABHI NOW',
  role: 'EdTech YouTuber',
  text: 'Creative thumbnails that improved engagement and gave my channel a fresh look.',
  image: 'https://res.cloudinary.com/dozqp1478/image/upload/v1778087942/bqxbb7axqclpticn6btn_oovg8c.avif',
},
{
  name: 'RGH CREATIONS',
  role: 'Short Film Maker',
  text: 'Cinematic visuals and strong composition that instantly grab viewer attention.',
  image: 'https://res.cloudinary.com/dozqp1478/image/upload/v1778087940/x31i1j15jjkpftfixlg1_o4zdwk.avif',
},
{
  name: 'MILK WONDERS',
  role: 'Dairy Brand',
  text: 'Professional branding designs that made our products look modern and premium.',
  image: 'https://res.cloudinary.com/dozqp1478/image/upload/v1778089979/MW-logo-white_loyehm.avif',
},
{
  name: 'NITHIN KOLLURU',
  role: 'EdTech YouTuber',
  text: 'Turns simple concepts into eye-catching visuals that feel clean and premium.',
  image: 'https://res.cloudinary.com/dozqp1478/image/upload/v1778087945/rumrsyi0zvhlwphqrlux_ftbqlq.avif',
},
{
  name: 'Tech Jaswanth',
  role: 'Tech Content Creator',
  text: 'Delivered clean, high-converting thumbnails that instantly improved the overall brand feel of my content.',
  image: 'https://res.cloudinary.com/dozqp1478/image/upload/v1778089731/channels4_profile_ozd5t7.avif',
},
];

// 🔁 duplicate EXACTLY twice for perfect loop
const loopData = [...testimonials, ...testimonials];

const Card = ({ t }) => (

  <div className="w-[280px] h-[180px] flex-shrink-0">
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md">


  <div className="flex mb-3 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-current" />
    ))}
  </div>

  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
    “{t.text}”
  </p>

  <div className="flex items-center gap-3">
    <img
      src={t.image}
      alt={t.name}
      className="w-9 h-9 rounded-full object-cover"
      loading="lazy"
    />
    <div>
      <p className="text-sm font-semibold text-white">{t.name}</p>
      <p className="text-xs text-gray-400">{t.role}</p>
    </div>
  </div>
</div>


  </div>
);

const Row = ({ reverse = false }) => {
return ( <div className="relative overflow-hidden">


  {/* Edge fade (prevents harsh cut) */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

  <div
  className={`flex items-stretch gap-4 sm:gap-6 w-max ${
    reverse ? 'marquee-reverse' : 'marquee'
  }`}
>
    {loopData.map((t, i) => (
      <Card key={i} t={t} />
    ))}
  </div>
</div>


);
};

export default function Testimonials() {
return ( <section className="py-20 px-4 bg-black text-white" id="testimonials">


  <div className="max-w-6xl mx-auto text-center mb-10">
    <p className="text-sm text-cyan-400 mb-2">
      Loved by Creators & Editors
    </p>

    <h2 className="text-3xl sm:text-5xl font-bold mb-3">
      What People Say
    </h2>

    <p className="text-gray-400 max-w-md mx-auto text-sm">
      Real feedback from creators who trusted my work
    </p>
  </div>

  <div className="space-y-6">
    <Row />
    <Row reverse />
  </div>

</section>


);
}

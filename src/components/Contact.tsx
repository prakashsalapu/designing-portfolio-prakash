'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const phone = '919000157795'; 
    const text = `Hi Prakash! I'm interested in your design services.

Name: ${name}
Email: ${email}
Number: ${number}
Message: ${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappLink = `https://wa.me/${phone}?text=${encodedText}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="contact" className="px-6 py-24 scroll-mt-28">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="mb-6 text-4xl font-extrabold text-slate-100 sm:text-5xl">
          Let’s{' '}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Work Together
          </span>
        </h2>

        <motion.form
          onSubmit={handleSendWhatsApp}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 rounded-2xl border border-white/10 bg-slate-900/55 p-8 shadow-[0_0_34px_rgba(56,189,248,0.16)] backdrop-blur-md"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="tel"
            placeholder="Your Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            ></textarea>

                  <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-green-400 to-green-500 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.45)]"
      >
        Send Message on WhatsApp
      </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;


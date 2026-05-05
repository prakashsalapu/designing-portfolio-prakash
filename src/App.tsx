import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import SocialMedia from './components/SocialMedia';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-[#020202] via-[#06090f] to-[#020202] font-sans text-slate-50">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <Services />
      <SocialMedia />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

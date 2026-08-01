import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DepthField } from '@/components/motion/DepthField';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="noise" aria-hidden="true" />
      <DepthField />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}

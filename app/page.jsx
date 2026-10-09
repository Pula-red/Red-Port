import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Sidebar />
      <MobileNav />
      <main className="portfolio-main">
        <div className="portfolio-shell">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

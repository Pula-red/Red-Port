import Icon from './Icon';

export default function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="flex min-h-[620px] items-center justify-center py-10 md:py-12">
        <div className="hero-copy w-full max-w-4xl text-left">
          <h1 id="hero-title" className="hero-title mt-5 max-w-4xl text-5xl font-bold leading-none tracking-[-0.055em] text-ink sm:text-7xl lg:text-8xl">
            <span className="hero-title-filled block">John Jared</span>
            <span className="hero-title-outline block">Bueta.</span>
          </h1>
          <p className="hero-role mt-5 text-xl font-bold text-ink sm:text-2xl">Software Developer</p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">I&apos;m a Software developer specializing in front-end and back-end development, building responsive websites and efficient digital systems that solve operational challenges.</p>
          <div className="mt-7 flex flex-wrap items-center justify-start gap-3">
            <a href="#projects" className="focus-ring inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover">View projects <Icon name="arrow" size={16} /></a>
            <a href="#contact" className="focus-ring inline-flex items-center rounded-md border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent">Contact me</a>
            <div className="flex items-center gap-2" aria-label="Social links">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="focus-ring social-link" aria-label="GitHub" title="GitHub"><Icon name="github" size={15} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="focus-ring social-link" aria-label="LinkedIn" title="LinkedIn"><Icon name="linkedin" size={15} /></a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="focus-ring social-link" aria-label="Facebook" title="Facebook"><Icon name="facebook" size={15} /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="focus-ring social-link" aria-label="Instagram" title="Instagram"><Icon name="instagram" size={15} /></a>
              <a href="https://wa.me/639813193447" target="_blank" rel="noreferrer" className="focus-ring social-link" aria-label="WhatsApp" title="WhatsApp"><Icon name="whatsapp" size={15} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

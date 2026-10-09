import Icon from './Icon';

export default function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="grid min-h-[620px] items-center justify-items-center gap-10 py-10 md:grid-cols-2 md:gap-12 md:py-12 lg:gap-20">
        <div className="hero-copy w-full max-w-xl text-center">
          <p className="eyebrow">Portfolio / 2026</p>
          <h1 id="hero-title" className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">John Jared</h1>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted sm:text-lg">Web developer creating clean, practical websites and digital systems that solve real-world problems.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="focus-ring inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover">View projects <Icon name="arrow" size={16} /></a>
            <a href="#contact" className="focus-ring inline-flex items-center rounded-md border border-line bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent">Contact me</a>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="w-full max-w-[380px] rounded-xl border border-line bg-white p-3 shadow-sm">
            <div className="flex aspect-[4/5] items-center justify-center rounded-lg border-2 border-dashed border-line bg-canvas">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-semibold text-white">J</div>
                <p className="mt-4 text-xs font-medium text-ink">Profile photo</p>
                <p className="mt-1 text-[10px] text-muted">Image placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

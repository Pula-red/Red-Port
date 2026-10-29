const experience = [
  { year: '2024 — Present', title: 'Independent Developer', description: 'Building portfolio projects and practical software while developing a stronger full-stack foundation.' },
  { year: 'Learning by building', title: 'Project-based practice', description: 'Exploring web systems, mobile development, hardware prototypes, and the product decisions that connect them.' },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-12 sm:py-14" aria-labelledby="experience-title">
      <p className="eyebrow">04 / Experience</p>
      <h2 id="experience-title" className="section-title">Experience &amp; learning</h2>
      <p className="section-copy">A compact record of what I&apos;ve been working on and where I&apos;m headed next.</p>
      <div className="mt-12">
        <div className="border-l border-line">
          {experience.map((item) => <div key={item.title} className="relative pb-10 pl-8 last:pb-0"><span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-accent" aria-hidden="true" /><p className="font-mono text-xs uppercase tracking-wider text-accent">{item.year}</p><h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3><p className="mt-3 max-w-lg text-base leading-7 text-muted">{item.description}</p></div>)}
        </div>
      </div>
    </section>
  );
}

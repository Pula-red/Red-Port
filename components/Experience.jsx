import Icon from './Icon';

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
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div className="border-l border-line">
          {experience.map((item) => <div key={item.title} className="relative pb-9 pl-7 last:pb-0"><span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-accent" aria-hidden="true" /><p className="font-mono text-[11px] uppercase tracking-wider text-accent">{item.year}</p><h3 className="mt-2 text-base font-semibold text-ink">{item.title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-muted">{item.description}</p></div>)}
        </div>
        <div className="border border-line bg-white p-6"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center bg-blue-50 text-accent"><Icon name="briefcase" size={17} /></span><h3 className="text-base font-semibold text-ink">Currently learning</h3></div><ul className="mt-6 grid grid-cols-2 gap-y-4 text-sm text-muted">{['Next.js', 'TypeScript', 'Docker', 'Android Development'].map((item) => <li key={item} className="flex items-center gap-2"><Icon name="check" size={15} className="text-accent" />{item}</li>)}</ul></div>
      </div>
    </section>
  );
}

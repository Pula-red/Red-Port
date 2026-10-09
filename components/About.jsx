export default function About() {
  const stats = [
    { value: '10+', label: 'Projects' },
    { value: '5+', label: 'Technologies' },
    { value: '3+', label: 'Project types' },
  ];

  return (
    <section id="about" className="about-section border-b border-line py-12 sm:py-14" aria-labelledby="about-title">
      <p className="eyebrow">01 / About</p>
      <h2 id="about-title" className="section-title">A developer who likes making ideas useful.</h2>
      <div className="about-content mt-8 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.8fr)] md:gap-16">
        <div className="space-y-5 text-sm leading-7 text-muted sm:text-base">
          <p>I&apos;m a developer who enjoys turning ideas into functional software. I care about the small details that make a tool feel straightforward to use.</p>
          <p>My work spans management systems, dashboards, mobile applications, and IoT projects. Each project is an opportunity to learn something new and solve a practical problem well.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 self-start border-t border-line pt-5">
          {stats.map((stat) => <div key={stat.label}><p className="font-mono text-2xl font-semibold text-ink">{stat.value}</p><p className="mt-2 text-xs leading-5 text-muted">{stat.label}</p></div>)}
        </div>
      </div>
    </section>
  );
}

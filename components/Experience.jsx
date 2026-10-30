const experience = [
  {
    period: '2025 — Present',
    title: 'Freelance Full-Stack Web Developer',
    meta: 'Independent · Remote',
    description: 'Develop and deploy full-stack web applications tailored to client requirements, covering frontend development, backend development, and system deployment. Deliver functional, user-focused digital solutions from development to production.',
    heading: 'Key Responsibilities',
    details: [
      ['Full-Stack Development', 'Build and maintain web applications.'],
      ['System Deployment', 'Deploy completed projects for practical use.'],
      ['Remote Freelancing', 'Manage development tasks independently.'],
    ],
  },
  {
    period: 'February — June 2026',
    title: 'IT OJT Intern',
    meta: 'The Big Five Training and Assessment Center Inc. / Big Blossom Institute Inc. · San Pablo, Laguna',
    description: 'Developed business systems and provided technical support across software development, server deployment, and IT infrastructure.',
    heading: 'Key Projects',
    details: [
      ['Big Five Payroll and Management System', 'Developed a payroll and management solution.'],
      ['Big Blossom POS', 'Developed a point-of-sale system.'],
      ['Document Tracking System', 'Developed a system for tracking documents.'],
    ],
    secondaryHeading: 'Technical Responsibilities',
    secondaryDetails: [
      ['Windows Server Deployment', 'Deployed web systems to Windows Server.'],
      ['CCTV Systems', 'Installed and configured CCTV equipment.'],
      ['Computer Maintenance', 'Repaired desktop computers and installed and configured operating systems.'],
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-12 sm:py-14" aria-labelledby="experience-title">
      <p className="eyebrow">04 / Experience</p>
      <h2 id="experience-title" className="section-title">Experience &amp; learning</h2>
      <p className="section-copy">A record of my professional development, project delivery, and technical experience.</p>
      <div className="mt-12">
        <div className="border-l border-line">
          {experience.map((item) => (
            <article key={item.title} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-accent" aria-hidden="true" />
              <p className="font-mono text-xs uppercase tracking-wider text-accent">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-muted">{item.meta}</p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{item.description}</p>
              <h4 className="mt-6 text-sm font-semibold text-ink">{item.heading}</h4>
              <ul className="mt-3 max-w-3xl space-y-3">
                {item.details.map(([label, detail]) => (
                  <li key={label} className="flex items-start gap-2 text-sm leading-6 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span><strong className="font-semibold text-ink">{label}</strong> — {detail}</span>
                  </li>
                ))}
              </ul>
              {item.secondaryDetails && (
                <>
                  <h4 className="mt-6 text-sm font-semibold text-ink">{item.secondaryHeading}</h4>
                  <ul className="mt-3 max-w-3xl space-y-3">
                    {item.secondaryDetails.map(([label, detail]) => (
                      <li key={label} className="flex items-start gap-2 text-sm leading-6 text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span><strong className="font-semibold text-ink">{label}</strong> — {detail}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
  { title: 'Backend', skills: ['PHP', 'Laravel', 'Node.js'] },
  { title: 'Database', skills: ['MySQL'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'Docker', 'VS Code'] },
  { title: 'Other', skills: ['Arduino', 'Android Development', 'REST APIs'] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-12 sm:py-14" aria-labelledby="skills-title">
      <p className="eyebrow">03 / Toolkit</p>
      <h2 id="skills-title" className="section-title">Skills</h2>
      <p className="section-copy">The tools I use to turn ideas into maintainable, working products.</p>
      <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => <div key={group.title}><h3 className="text-sm font-semibold text-ink">{group.title}</h3><div className="mt-3 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="border border-line bg-white px-3 py-2 text-sm text-muted">{skill}</span>)}</div></div>)}
      </div>
    </section>
  );
}

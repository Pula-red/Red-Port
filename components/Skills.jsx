import Icon from './Icon';
import TechnologyIcon from './TechnologyIcon';

const skillGroups = [
  { title: 'Programming Languages', icon: 'code', skills: ['TypeScript', 'Python', 'JavaScript', 'PHP', 'C++', 'C#', 'VB.NET', 'Java'] },
  { title: 'Web & Frameworks', icon: 'code', skills: ['HTML5', 'CSS3', 'Next.js', 'React', 'Vue.js', 'Laravel', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Deployment & Cloud', icon: 'server', skills: ['Docker', 'GitHub Actions', 'Vercel', 'Hostinger', 'Firebase'] },
  { title: 'Databases & Tools', icon: 'database', skills: ['SQL', 'MySQL', 'SQLite', 'Redis', 'MySQL Workbench', 'MongoDB', 'PostgreSQL'] },
  { title: 'Development Tools', icon: 'tool', skills: ['Git', 'GitHub', 'npm', 'Visual Studio Code', 'Visual Studio', 'Claude Code', 'OpenAI Codex', 'Laragon', 'Figma'] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-12 sm:py-14" aria-labelledby="skills-title">
      <p className="eyebrow">03 / Toolkit</p>
      <h2 id="skills-title" className="section-title">Technologies &amp; Tools</h2>
      <div className="technology-grid mt-12 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => <div key={group.title} className="technology-card"><div className="technology-card-heading"><span className="technology-icon"><Icon name={group.icon} size={16} /></span><div><h3 className="text-base font-semibold text-ink">{group.title}</h3><p className="mt-1 text-[10px] uppercase tracking-wider text-muted">{group.skills.length} technologies</p></div></div><div className="technology-card-divider" /><div className="mt-4 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="technology-pill"><TechnologyIcon name={skill} />{skill}</span>)}</div></div>)}
      </div>
    </section>
  );
}

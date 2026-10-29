import {
  siBootstrap,
  siCss,
  siDocker,
  siFirebase,
  siFigma,
  siGit,
  siGithub,
  siGithubactions,
  siHostinger,
  siHtml5,
  siJavascript,
  siLaravel,
  siLaragon,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNpm,
  siPostgresql,
  siPhp,
  siPython,
  siRedis,
  siReact,
  siSqlite,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVuedotjs,
  siClaudecode,
} from 'simple-icons';
import devicon from '@iconify-json/devicon/icons.json';

const technologyIcons = {
  HTML5: { type: 'simple', icon: siHtml5 },
  CSS3: { type: 'simple', icon: siCss },
  TypeScript: { type: 'simple', icon: siTypescript },
  Python: { type: 'simple', icon: siPython },
  JavaScript: { type: 'simple', icon: siJavascript },
  PHP: { type: 'simple', icon: siPhp },
  'C++': { type: 'devicon', icon: 'cplusplus' },
  'C#': { type: 'devicon', icon: 'csharp' },
  'VB.NET': { type: 'devicon', icon: 'visualbasic' },
  Java: { type: 'devicon', icon: 'java' },
  'Next.js': { type: 'simple', icon: siNextdotjs },
  React: { type: 'simple', icon: siReact },
  'Vue.js': { type: 'simple', icon: siVuedotjs },
  Laravel: { type: 'simple', icon: siLaravel },
  'Tailwind CSS': { type: 'simple', icon: siTailwindcss },
  Bootstrap: { type: 'simple', icon: siBootstrap },
  Docker: { type: 'simple', icon: siDocker },
  'GitHub Actions': { type: 'simple', icon: siGithubactions },
  Vercel: { type: 'simple', icon: siVercel },
  Hostinger: { type: 'simple', icon: siHostinger },
  Firebase: { type: 'simple', icon: siFirebase },
  SQL: { type: 'devicon', icon: 'sqldeveloper' },
  MySQL: { type: 'simple', icon: siMysql },
  SQLite: { type: 'simple', icon: siSqlite },
  Redis: { type: 'simple', icon: siRedis },
  'MySQL Workbench': { type: 'devicon', icon: 'mysql' },
  MongoDB: { type: 'simple', icon: siMongodb },
  PostgreSQL: { type: 'simple', icon: siPostgresql },
  Git: { type: 'simple', icon: siGit },
  GitHub: { type: 'simple', icon: siGithub },
  npm: { type: 'simple', icon: siNpm },
  'Visual Studio Code': { type: 'devicon', icon: 'vscode' },
  'Visual Studio': { type: 'devicon', icon: 'visualstudio' },
  'Claude Code': { type: 'simple', icon: siClaudecode },
  'OpenAI Codex': { type: 'devicon', icon: 'codex' },
  Laragon: { type: 'simple', icon: siLaragon },
  Figma: { type: 'simple', icon: siFigma },
};

const technologySlugs = {
  'C++': 'cpp',
  'C#': 'csharp',
  'VB.NET': 'vbnet',
  'HTML5': 'html5',
  'CSS3': 'css3',
  'Next.js': 'next-js',
  'Vue.js': 'vue-js',
  'Tailwind CSS': 'tailwind-css',
  'GitHub Actions': 'github-actions',
  'MySQL Workbench': 'mysql-workbench',
  'Visual Studio Code': 'visual-studio-code',
  'OpenAI Codex': 'openai-codex',
  'Claude Code': 'claude-code',
};

export default function TechnologyIcon({ name }) {
  const entry = technologyIcons[name];
  if (!entry) return null;
  const slug = technologySlugs[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const simpleColor = entry.type === 'simple' && (entry.icon.hex === '000000' || entry.icon.hex === '181717')
    ? 'var(--logo-neutral)'
    : `#${entry.icon.hex}`;

  return (
    <span className={`technology-mark technology-mark-${slug} technology-mark-${entry.type}`} role="img" aria-label={`${name} logo`}>
      {entry.type === 'simple' ? (
        <svg viewBox="0 0 24 24" fill={simpleColor} aria-hidden="true"><path d={entry.icon.path} /></svg>
      ) : (
        <svg viewBox="0 0 128 128" aria-hidden="true" dangerouslySetInnerHTML={{ __html: devicon.icons[entry.icon].body }} />
      )}
    </span>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';

const navigation = [
  { label: 'Home', id: 'top', icon: 'home' },
  { label: 'About', id: 'about', icon: 'user' },
  { label: 'Projects', id: 'projects', icon: 'folder' },
  { label: 'Skills', id: 'skills', icon: 'code' },
  { label: 'Experience', id: 'experience', icon: 'briefcase' },
  { label: 'Contact', id: 'contact', icon: 'mail' },
];

export { navigation };

export default function Sidebar() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.15, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar-panel">
      <div className="flex h-full flex-col px-5 py-5">
        <a href="#top" className="focus-ring inline-block" aria-label="Jared home">
          <span className="block text-base font-semibold text-ink">John Jared</span>
          <span className="mt-2 block text-xs text-muted">Web Developer</span>
        </a>

        <nav className="mt-5 border-t border-line pt-5" aria-label="Main navigation">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                    className={`focus-ring relative flex items-center gap-3 px-2 py-2.5 text-sm transition-colors ${active === item.id ? 'font-medium text-accent' : 'text-muted hover:text-ink'}`}
                >
                  {active === item.id && <span className="absolute left-0 h-5 w-0.5 bg-accent" aria-hidden="true" />}
                  <Icon name={item.icon} size={16} strokeWidth={1.7} />{item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-4">
          <div className="space-y-1 text-[10px]">
            <a className="focus-ring flex items-center gap-2 text-muted transition-colors hover:text-ink" href="#contact">◐ Light / Dark</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

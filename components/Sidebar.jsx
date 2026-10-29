'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

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
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      const current = sections.reduce((selected, section) => {
        return section.getBoundingClientRect().top <= marker ? section : selected;
      }, sections[0]);
      if (current) setActive(current.id);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <aside className="sidebar-panel">
      <div className="flex h-full flex-col px-6 py-6">
        <div className="sidebar-avatar">
          <Image src="/images/projects/RED-NO-BG.png" alt="John Jared Bueta profile" fill className="scale-125 object-contain object-bottom" sizes="220px" />
        </div>
        <a href="#top" className="focus-ring inline-block" aria-label="Jared home">
          <span className="mt-6 block text-center text-xl font-semibold text-ink">John Jared Bueta</span>
        </a>

        <div className="mt-5 flex items-center justify-center gap-2">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="focus-ring social-link" aria-label="GitHub" title="GitHub"><Icon name="github" size={15} /></a>
          <a href="viber://chat?number=%2B639813193447" className="focus-ring social-link" aria-label="Viber" title="Viber"><Icon name="viber" size={15} /></a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="focus-ring social-link" aria-label="Facebook" title="Facebook"><Icon name="facebook" size={15} /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="focus-ring social-link" aria-label="Instagram" title="Instagram"><Icon name="instagram" size={15} /></a>
          <a href="https://wa.me/639813193447" target="_blank" rel="noreferrer" className="focus-ring social-link" aria-label="WhatsApp" title="WhatsApp"><Icon name="whatsapp" size={15} /></a>
        </div>

        <nav className="mt-7 border-t border-line pt-6" aria-label="Main navigation">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                    className={`focus-ring relative flex items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition-colors ${active === item.id ? 'border-line bg-surface font-medium text-accent shadow-sm' : 'border-transparent text-muted hover:border-line hover:bg-surface hover:text-ink'}`}
                >
                  <Icon name={item.icon} size={16} strokeWidth={1.7} />{item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-4">
          <div className="text-[10px]">
            <p className="font-medium uppercase tracking-wider text-muted">Theme</p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
}

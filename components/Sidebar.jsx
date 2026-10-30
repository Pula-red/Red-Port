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
  const [active, setActive] = useState('top');

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
          <Image src="/images/projects/RED-NO-BG.png" alt="John Jared Bueta profile" fill className="sidebar-avatar-image scale-125 object-contain object-bottom" sizes="220px" />
        </div>
        <a href="#top" className="focus-ring inline-block" aria-label="Jared home">
          <span className="mt-6 block text-center text-xl font-semibold text-ink">John Jared Bueta</span>
        </a>

        <div className="mt-5 flex items-center justify-center gap-2">
          {[
            ['https://github.com/Pula-red', 'GitHub', 'github'],
            ['viber://chat?number=%2B639813193447', 'Viber', 'viber'],
            ['https://www.facebook.com/profile.php?id=61590779427219', 'Facebook', 'facebook'],
            ['https://www.instagram.com/buetajohnjared/', 'Instagram', 'instagram'],
            ['https://wa.me/639813193447', 'WhatsApp', 'whatsapp'],
          ].map(([href, label, icon]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="focus-ring social-link social-link-with-tooltip" aria-label={label}>
              <Icon name={icon} size={15} />
              <span className="social-tooltip" role="tooltip">{label}</span>
            </a>
          ))}
        </div>

        <nav className="mt-7 border-t border-line pt-6" aria-label="Main navigation">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                    className={`sidebar-nav-link focus-ring relative flex items-center gap-3 rounded-md border px-3 py-2.5 text-sm ${active === item.id ? 'sidebar-nav-link-active border-line bg-surface font-medium text-accent shadow-sm' : 'border-transparent text-muted'}`}
                >
                  <Icon name={item.icon} size={16} strokeWidth={1.7} />
                  <span>{item.label}</span>
                  <span className="sidebar-nav-chevron" aria-hidden="true" />
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

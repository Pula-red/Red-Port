'use client';

import { useEffect, useState } from 'react';
import { navigation } from './Sidebar';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
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
    <div className="lg:hidden">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-5 sm:px-8">
          <a href="#top" className="focus-ring text-sm font-semibold tracking-tight text-ink">John Jared Bueta</a>
          <button className="focus-ring inline-flex h-10 w-10 items-center justify-center text-ink" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}>
            <Icon name={open ? 'close' : 'menu'} size={21} />
          </button>
        </div>
      </header>
      {open && (
        <nav id="mobile-menu" className="mobile-nav-panel fixed left-4 right-4 top-20 z-30 rounded-xl border border-line bg-surface p-4 shadow-lg sm:left-6 sm:right-6 sm:p-5" aria-label="Mobile navigation">
          <div className="space-y-1.5">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className={`mobile-nav-link focus-ring relative flex items-center gap-3 rounded-lg px-3 py-3 text-sm ${active === item.id ? 'mobile-nav-link-active' : 'text-ink'}`}>
                <span className="mobile-nav-icon"><Icon name={item.icon} size={16} strokeWidth={1.7} /></span>
                <span>{item.label}</span>
                <span className="sidebar-nav-chevron" aria-hidden="true" />
              </a>
            ))}
            <div className="mobile-nav-theme border-t border-line pt-4">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted">Theme</p>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

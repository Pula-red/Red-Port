'use client';

import { useState } from 'react';
import { navigation } from './Sidebar';
import Icon from './Icon';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-[#FAF8F6]/95 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-5 sm:px-8">
          <a href="#top" className="focus-ring text-sm font-semibold tracking-tight text-ink">John Jared</a>
          <button className="focus-ring inline-flex h-10 w-10 items-center justify-center text-ink" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}>
            <Icon name={open ? 'close' : 'menu'} size={21} />
          </button>
        </div>
      </header>
      {open && (
        <nav id="mobile-menu" className="fixed inset-x-0 top-16 z-30 border-b border-line bg-[#FAF8F6] px-5 py-4 shadow-sm sm:px-8" aria-label="Mobile navigation">
          <div className="space-y-1">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="focus-ring block border-b border-line py-3 text-sm text-ink last:border-0">{item.label}</a>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

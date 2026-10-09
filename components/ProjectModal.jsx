'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Icon from './Icon';

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-line bg-white shadow-xl" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button ref={closeButtonRef} type="button" onClick={onClose} className="focus-ring absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center bg-white text-muted hover:text-ink" aria-label="Close project details"><Icon name="close" size={18} /></button>
        <div className="relative aspect-[2/1] border-b border-line bg-slate-100"><Image src={project.image} alt={`${project.title} project placeholder`} fill className="object-cover" sizes="(min-width: 672px) 672px, 100vw" /></div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="eyebrow">{project.category} project</p><h2 id="project-modal-title" className="mt-2 text-2xl font-semibold tracking-tight text-ink">{project.title}</h2></div></div>
          <div className="mt-8 grid gap-7 text-sm leading-6 text-muted sm:grid-cols-2">
            <div className="sm:col-span-2"><h3 className="font-semibold text-ink">Overview</h3><p className="mt-2">{project.description}</p></div>
            <div><h3 className="font-semibold text-ink">Features</h3><ul className="mt-2 space-y-1.5">{project.features.map((feature) => <li key={feature} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{feature}</li>)}</ul></div>
            <div><h3 className="font-semibold text-ink">My role</h3><p className="mt-2">{project.role}</p><h3 className="mt-5 font-semibold text-ink">Technologies</h3><p className="mt-2">{project.technologies.join(' · ')}</p></div>
            <div className="sm:col-span-2"><h3 className="font-semibold text-ink">Challenges &amp; things I learned</h3><p className="mt-2">{project.challenges}</p></div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6"><a className="focus-ring inline-flex items-center gap-2 border border-line px-4 py-2.5 text-sm font-medium text-ink hover:bg-gray-50" href={project.github} target="_blank" rel="noreferrer"><Icon name="github" size={16} /> GitHub <Icon name="external" size={14} /></a><a className="focus-ring inline-flex items-center gap-2 bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover" href={project.liveDemo} target="_blank" rel="noreferrer">Live demo <Icon name="external" size={14} /></a></div>
        </div>
      </div>
    </div>
  );
}

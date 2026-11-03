'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';

const certificateImage = '/images/Certificates/certificate-1.png';

export default function Certificates() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <section id="certificates" className="border-b border-line py-12 sm:py-14" aria-labelledby="certificates-title">
      <p className="eyebrow">05 / Certificates</p>
      <h2 id="certificates-title" className="section-title">Certificates</h2>
      <p className="section-copy">A collection of my certifications, highlighting my technical skills, professional development, and continuous learning in the field of technology.</p>
      <div className="certificate-grid mt-12">
        <article className="certificate-card certificate-card-slide">
          <button type="button" className="certificate-preview focus-ring" onClick={() => setIsOpen(true)} aria-label="Open certificate image">
            <Image src={certificateImage} alt="John Jared Bueta certificate" fill sizes="(min-width: 1024px) 70vw, 100vw" />
            <span className="certificate-view-hint">Click to view</span>
          </button>
          <div className="certificate-card-footer">
            <h3>Salesforce Supported Virtual Internship Program 2025</h3>
          </div>
        </article>
      </div>
      {isOpen && (
        <div className="certificate-lightbox" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
          <div className="certificate-lightbox-content" role="dialog" aria-modal="true" aria-label="Certificate preview">
            <button type="button" className="certificate-lightbox-close focus-ring" onClick={() => setIsOpen(false)} aria-label="Close certificate preview"><Icon name="close" size={20} /></button>
            <Image src={certificateImage} alt="John Jared Bueta certificate enlarged" width={1266} height={894} className="certificate-lightbox-image" />
          </div>
        </div>
      )}
    </section>
  );
}

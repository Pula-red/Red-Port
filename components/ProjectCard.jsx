'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';

export default function ProjectCard({ project }) {
  const images = project.images?.length ? project.images : [project.image];
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = (direction) => {
    setImageIndex((current) => (current + direction + images.length) % images.length);
  };

  return (
    <article className="project-card group flex flex-col overflow-hidden rounded-xl border border-line bg-surface">
      <div className="project-card-image">
        <Image key={images[imageIndex]} src={images[imageIndex]} alt={`${project.title} project preview ${imageIndex + 1}`} fill className="project-card-slide object-cover" sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw" />
        {images.length > 1 && (
          <>
            <span className="project-card-count" aria-label={`${project.title} image ${imageIndex + 1} of ${images.length}`}>{imageIndex + 1}/{images.length}</span>
            <div className="project-card-controls">
              <button type="button" className="project-card-arrow focus-ring" onClick={() => changeImage(-1)} aria-label={`Previous ${project.title} image`}><Icon name="chevron-left" size={16} /></button>
              <button type="button" className="project-card-arrow focus-ring" onClick={() => changeImage(1)} aria-label={`Next ${project.title} image`}><Icon name="chevron-right" size={16} /></button>
            </div>
          </>
        )}
      </div>
      <div className="project-card-content flex flex-1 flex-col p-5">
        <span className="project-category">{project.category}</span>
        <h3 className="mt-4 text-xl font-semibold leading-7 text-ink">{project.title}</h3>
        <p className="project-card-description mt-3 text-sm leading-6 text-muted">{project.description}</p>
        <div className="project-card-footer mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          {project.technologies?.length > 0 && (
            <div className="project-tech-stack flex flex-wrap items-center gap-2">
              {project.technologies.map((technology) => <span key={technology} className="project-tech">{technology}</span>)}
            </div>
          )}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="focus-ring project-action project-github-action" aria-label={`View ${project.title} repository on GitHub`}><Icon name="github" size={18} /></a>}
          {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer" className="focus-ring project-action" aria-label={`View live demo of ${project.title}`}>Live demo <Icon name="external" size={13} /></a>}
        </div>
      </div>
    </article>
  );
}

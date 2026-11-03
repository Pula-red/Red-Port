'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';

export default function ProjectCard({ project }) {
  const images = project.images?.length ? project.images : [project.image];
  const [imageIndex, setImageIndex] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const changeImage = (direction) => {
    setImageIndex((current) => (current + direction + images.length) % images.length);
  };
  const descriptionId = `project-description-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const technologyClass = (technology) => `project-tech-${technology.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <article className="project-card group flex flex-col overflow-hidden">
      <div className="project-card-image">
        <Image key={images[imageIndex]} src={images[imageIndex]} alt={`${project.title} project preview ${imageIndex + 1}`} fill className="project-card-slide object-contain" sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw" />
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
      <div className="project-card-content flex flex-1 flex-col">
        <section className="project-card-section">
          <div className="project-card-detail-heading">
            <h3 className="project-card-detail-title">{project.title}</h3>
            <span className="project-card-category">{project.projectType || `${project.category} Project`}</span>
          </div>
          <p id={descriptionId} className={`project-card-description${isDescriptionExpanded ? ' project-card-description-expanded' : ''}`}>{project.description}</p>
          <button type="button" className="project-card-description-toggle focus-ring" onClick={() => setIsDescriptionExpanded((expanded) => !expanded)} aria-expanded={isDescriptionExpanded} aria-controls={descriptionId}>{isDescriptionExpanded ? 'See less' : 'See more'}</button>
        </section>
        <section className="project-card-section">
          <h4 className="project-card-section-title">Key Features</h4>
          <ul className="project-feature-list">{project.features.map((feature) => <li key={feature}><Icon name="check" size={13} />{feature}</li>)}</ul>
        </section>
        {project.technologies?.length > 0 && (
          <section className="project-card-section project-card-technologies">
            <h4 className="project-card-section-title">Technologies Used</h4>
            <div className="project-card-technology-row">
              <div className="project-tech-stack flex flex-wrap items-center gap-2">{project.technologies.map((technology) => <span key={technology} className={`project-tech ${technologyClass(technology)}`}>{technology}</span>)}</div>
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="focus-ring project-action project-github-action" aria-label={`View ${project.title} repository on GitHub`}><Icon name="github" size={18} /></a>}
            </div>
          </section>
        )}
        <div className="project-card-footer flex flex-wrap items-center justify-end gap-3">
          {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer" className="focus-ring project-action" aria-label={`View live demo of ${project.title}`}>Live demo <Icon name="external" size={13} /></a>}
        </div>
      </div>
    </article>
  );
}

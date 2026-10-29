import Image from 'next/image';
import Icon from './Icon';

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow)]">
      <div className="project-card-image">
        <Image src={project.image} alt={`${project.title} project preview`} fill className="object-cover" sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="project-category">{project.category}</span>
            <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">{project.title}</h3>
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => <span key={technology} className="project-tech">{technology}</span>)}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-4">
          <button type="button" onClick={() => onViewDetails(project)} className="focus-ring project-action">Explore project <Icon name="arrow" size={14} /></button>
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="focus-ring project-action" aria-label={`View ${project.title} source on GitHub`}>GitHub <Icon name="external" size={13} /></a>}
          {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer" className="focus-ring project-action" aria-label={`View live demo of ${project.title}`}>Live demo <Icon name="external" size={13} /></a>}
        </div>
      </div>
    </article>
  );
}

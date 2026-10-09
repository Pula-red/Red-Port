import Image from 'next/image';
import Icon from './Icon';

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="group flex flex-col rounded-[9px] border border-line bg-accent-soft p-3 transition-colors hover:border-[#BDBDBD] hover:bg-[#E5E5E5]">
      <div className="relative hidden aspect-[16/9] overflow-hidden rounded-md border-b border-line bg-slate-100">
        <Image src={project.image} alt={`${project.title} project placeholder`} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[13px] font-medium leading-5 text-ink">{project.title}</h3>
          <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-wider text-accent">{project.category}</span>
        </div>
        <p className="mt-2 text-[10px] leading-5 text-muted">{project.description}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((technology) => <span key={technology} className="text-[9px] text-accent">{technology}</span>)}
        </div>
        <button type="button" onClick={() => onViewDetails(project)} className="focus-ring mt-2 inline-flex w-fit items-center gap-1 text-[10px] font-medium text-accent transition-colors hover:text-accent-hover">Explore project <Icon name="arrow" size={11} /></button>
      </div>
    </article>
  );
}

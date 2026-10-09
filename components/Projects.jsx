'use client';

import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const filters = ['All', 'Web', 'Mobile', 'IoT', 'Other'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter]);

  return (
    <section id="projects" className="section-block" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">Selected Projects</h2>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`focus-ring border px-3.5 py-2 text-sm transition-colors ${filter === item ? 'border-accent bg-accent text-white' : 'border-line bg-white text-muted hover:border-gray-300 hover:text-ink'}`}>{item}</button>)}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => <ProjectCard key={project.title} project={project} onViewDetails={setSelectedProject} />)}
      </div>
      {filteredProjects.length === 0 && <p className="border border-dashed border-line bg-white p-8 text-sm text-muted">No projects in this category yet.</p>}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

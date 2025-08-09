import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  );
}

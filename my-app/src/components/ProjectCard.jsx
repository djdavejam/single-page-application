export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-placeholder">X</div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

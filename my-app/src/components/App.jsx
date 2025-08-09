import { useState } from 'react';  // Import React hooks and components
import Header from './Header';
import ProjectForm from './ProjectForm';
import SearchBar from './SearchBar';
import ProjectList from './ProjectList';
import '../App.css';

// Main App component
export default function App() {
  const [projects, setProjects] = useState([]);// State for project list
  const [search, setSearch] = useState('');// State for search input
// Function to add new project
  const addProject = (project) => {
    setProjects([...projects, project]);// Add new project to array
  };
// Filter projects based on search input
  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <ProjectForm onAdd={addProject} />
      <SearchBar search={search} setSearch={setSearch} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

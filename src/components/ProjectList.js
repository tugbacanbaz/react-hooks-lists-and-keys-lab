import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ projects.map( (item) => {
    return (
      <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.about}</p>
          <span className="technologies">{item.technologies.join(', ')}</span>
      </div>
    )
  })}</div>
    </div>
  );
}

export default ProjectList;

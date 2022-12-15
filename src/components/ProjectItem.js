import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div>
    <div className="project-item">
      <h3>{name}</h3>
      <h4>{about}</h4>
      </div>
      <span className="technologies">
        { technologies.map( item => {
    return (
      <span key={item}>{item}</span>
    )
  })}
      </span>
    
    </div>
  );
}

export default ProjectItem;

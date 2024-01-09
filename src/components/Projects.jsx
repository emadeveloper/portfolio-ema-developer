import React from "react";
import { projectsData } from "../data";
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      {/* PROJECT GRID */}
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projectsData.map((project) => (
          <Project item={project} key={project.id} />
        ))}
      </section>
    </div>
  );
};

export default Projects;

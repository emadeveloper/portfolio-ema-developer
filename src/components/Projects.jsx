import React, { useEffect, useState } from "react";
import { projectsData } from "../data";
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  return (
    <div>
      {/* PROJECT GRID */}
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item)=>{
            return <Project item={item} key={item.id} />
        })}
      </section>
    </div>
  );
};

export default Projects;

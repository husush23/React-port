import { useState, useEffect } from "react";

import client from "../client";
import Recent from "./Recent";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      try {
        // Fetch projects with all necessary fields
        const data = await client.fetch(
          `*[_type == "project"]{
            name,
            description,
            "imageUrl": image.asset->url,
            projectUrl,
            slug,
            tags,
            technologies,
            type,
            _createdAt,
            _id,
            _rev,
            _type,
            _updatedAt
          }`,
        );
        setProjects(data);
      } catch (error) {
        console.error("error:", error);
      }
    }
    getProjects();
  }, []);

  return (
    <div className="md:grid md:grid-cols-2 ">
      {projects.map((project, index) => (
        <Recent
          key={project._id}
          img={project.imageUrl}
          title={project.name}
          category={project.type}
          description={project.description}
          left={index % 2 === 1} // Alternate left alignment for even-indexed projects
        />
      ))}
    </div>
  );
}

export default Projects;

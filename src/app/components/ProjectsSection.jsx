"use client";
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Portafolio web con NextJs",
        description: "Portafolio virtual donde puedo mostrar mi cv de forma innovadora",
        image: "/images/projects/proyecto.jpg",
        tag: ["Todos", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Pokedex con React",
        description: "Creación de pokedex demostrando mis habilidades al llamar API's",
        image: "/images/projects/proyecto.jpg",
        tag: ["Todos", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "SAAM",
        description: "Creación proyecto fin de grado y presentado en ACOFI 2020 y 2021",
        image: "/images/projects/proyecto.jpg",
        tag: ["Todos", "Movil"],
        gitUrl: "https://github.com/DiegoHS07/UCC_SAAM",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Gladiadores APP",
        description: "Creación videojuego RPG para Android",
        image: "/images/projects/proyecto.jpg",
        tag: ["Todos", "Movil"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>Mis proyectos</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
            <ProjectTag 
                onClick={handleTagChange} 
                name="Todos" 
                isSelected={tag === "Todos"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Movil" 
                isSelected={tag === "Movil"}
            />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {filteredProjects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
        </div>
    </>
  )
}

export default ProjectsSection
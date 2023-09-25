import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "Portafolio web con NextJs",
        description: "Portafolio virtual donde puedo mostrar mi cv de forma innovadora",
        image: "/images/projects/proyecto.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Pokedex con React",
        description: "Creación de pokedex demostrando mis habilidades al llamar API's",
        image: "/images/projects/proyecto.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "SAAM",
        description: "Creación proyecto fin de grado y presentado en ACOFI 2020 y 2021",
        image: "/images/projects/proyecto.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Gladiadores APP",
        description: "Creación videojuego RPG para Android",
        image: "/images/projects/proyecto.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>Mis proyectos</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
            <button className="rounded-full border-2 border-green-600 px-6 py-3 text-xl cursor-pointer">Todos</button>
            <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">Web</button>
            <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">Movil</button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project) => (
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
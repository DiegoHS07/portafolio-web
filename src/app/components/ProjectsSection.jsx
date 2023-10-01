"use client";
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion, useInView} from "framer-motion";
import { projectsData } from '../data/projectsData.js';

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1}
  };

  return (
    <motion.section 
        id='projects' name="projects" 
        initial={{opacity:0, scale: 0.5}} 
        animate={{opacity:1, scale: 1}} 
        transition={{duration: 0.35}}
    >
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12'>
            Mis proyectos
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-4">
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
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-6">
            {filteredProjects.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{duration: 0.5, delay: index * 0.4}}
                >
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
            ))}
        </ul>
    </motion.section>
  )
}

export default ProjectsSection
"use client";
import React,{ useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { EyeIcon } from "@heroicons/react/24/outline";

const TAB_DATA = [
    {
        title: "Habilidades",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript</li>
                <li>React</li>
                <li>PHP</li>
                <li>.NET ASP</li>
                <li>MySQL</li>
                <li>CELLS</li>
                <li>Flutter</li>
                <li>Kotlin</li>
                <li>AWS</li>
            </ul>
        )
    },
    {
        title: "Certificados",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Diploma Ingeniero de sistemas</li>
                <li>CSS - The Complete Guide 2022</li>
                <li>TypeScript: Guía completa</li>
                <li>Amazon AWS. Curso básico</li>
                <li>Participación ACOFI 2020 y 2021</li>
            </ul>
        )
    },
    {
        title: "Educación",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li className='mb-2'>Universidad Cooperativa de Colombia - Titulación en ingeniería de sistemas</li>
                <li className='mb-2'>Movilidad académica en Universidad Veracruzana de México durante el 2020</li>
                <li className='mb-2'>Movilidad académica en Universidad del País Vasco de España durante el 2022</li>
                <li className='mb-2'>SENA - Titulación en tecnología en desarrollo y análisis de sistemas de información (ADSI)</li>
            </ul>
        )
    },
    {
        title: "Reconocimientos",
        id: "recognitions",
        content: (
            <ul className='list-disc pl-2'>
                <li className='mb-2'>Titulación con promedio superior grado ingeniería</li>
                <li className='mb-2'>Segundo mejor resultado en pruebas SaberPro 2022</li>
                <li className='mb-2'>Reconocimiento por investigador en grupo universitario SEMDRI</li>
                <li className='mb-2'>Trabajo de fin de grado de ingeniería con honores</li>
                <li className='mb-2'>Beneficiario beca Banco Santander movilidad académica internacional 2020</li>
            </ul>
        )
    },

];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending ,startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image className='rounded-xl' src="/images/about-image.png" alt='Imagen sección acerca de mi' width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className="text-4xl font-bold text-white mb-4">
                    Acerca de Mi
                </h2>
                <p className="text-base lg:text-lg">
                    Soy un Ingeniero en Sistemas con tres años de experiencia, especializado en el desarrollo web en roles tanto de desarrollador frontend como fullstack. Aprendo rápidamente, estoy en búsqueda de la ampliación de mis conocimientos y habilidades. Me entusiasma colaborar en equipos y crear aplicaciones excepcionales.
                </p>
                <div className="flex sm:flex-wrap flex-col justify-center mt-8">
                    <TabButton selectTab={() => handleTabChange("education")} active={tab=== "education"} className="mt-10">
                        {" "}
                        Educación {" "} 
                    </TabButton>
                    {/* <TabButton selectTab={() => handleTabChange("skills")} active={tab=== "skills"}>
                        {" "}
                        Habilidades{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab=== "certifications"}>
                        {" "}
                        Certificados{" "}
                    </TabButton> */}
                    <TabButton selectTab={() => handleTabChange("recognitions")} active={tab=== "recognitions"}>
                        {" "}
                        Reconocimientos {" "}
                    </TabButton>
                </div>
                <div className='mt-6'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;
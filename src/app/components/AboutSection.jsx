"use client";
import React,{ useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

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
        title: "Educación",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Universidad Cooperativa de Colombia</li>
                <li>Universidad Veracruzana - México</li>
                <li>Universidad del País Vasco - España</li>
                <li>SENA</li>
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
        title: "Reconocimientos",
        id: "recognitions",
        content: (
            <ul className='list-disc pl-2'>
                <li>Titulación con promedio superior</li>
                <li>Segundo mejor resultado en pruebas SaberPro 2022</li>
                <li>Reconocimiento por investigador en grupo SEMDRI</li>
                <li>Trabajo de fin de grado con honores</li>
                <li>Beneficiario beca Banco Santander movilidad académica internacional 2020</li>
                <li>Movilidad académica  internacional México y España</li>
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
            <Image className='rounded-xl' src="/images/about-image.png" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className="text-4xl font-bold text-white mb-4">
                    Acerca de Mi
                </h2>
                <p className="text-base lg:text-lg">
                    Soy un Ingeniero en Sistemas con tres años de experiencia, especializado en el desarrollo web en roles tanto de desarrollador frontend como fullstack. Aprendo rápidamente, siempre estoy en búsqueda de la ampliación de mis conocimientos y habilidades. Me entusiasma colaborar en equipos y crear aplicaciones excepcionales.
                </p>
                <div className="flex flex-wrap justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("education")} active={tab=== "education"}>
                        {" "}
                        Educación{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab=== "skills"}>
                        {" "}
                        Habilidades{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab=== "certifications"}>
                        {" "}
                        Certificados{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("recognitions")} active={tab=== "recognitions"}>
                        {" "}
                        Reconocimientos{" "}
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
"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id='about' name="about" className='lg:pt-20'>
        <div  className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
                initial={{opacity:0, scale: 0.5}} 
                animate={{opacity:1, scale: 1}} 
                transition={{duration: 0.35}} 
                className="col-span-7 place-self-center text-center sm:text-left"
            >
                <h1 className="text-white md:mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold h-36 md:h-30">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-700 to-primary-700">
                        Hola, Soy {" "}
                    </span>
                    <br />
                    <TypeAnimation
                        omitDeletionAnimation={true}
                        sequence={[
                            'Diego Higuera',
                            3000, 
                            'Desarrollador web',
                            3000,
                            'Desarrollador frontend',
                            3000,
                            'Desarrollador móvil',
                            3000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <br />
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-10 lg:text-xl lg:py-4">
                    Me apasiona el desarrollo web y estoy entusiasmado por formar parte de un equipo proactivo que me permita crecer profesionalmente.
                </p>
                <div>
                    <a href='#contact' className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-700 to-primary-700 bg-white hover:bg-gradient-to-br hover:from-secondary-900 hover:to-primary-900 text-white cursor-pointer">
                        Contáctame
                    </a>
                    <Link href="./CV_Diego_Higuera_2023.pdf" target="blank" download="CV_Diego_Higuera.pdf" className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-700  to-secondary-700 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Descarga mi CV</span>
                    </Link>
                </div>
            </motion.div>
            <motion.div 
                initial={{opacity:0, scale: 0.5}} 
                animate={{opacity:1, scale: 1}} 
                transition={{duration: 0.35}} 
                className="col-span-5 place-self-center mt-8 lg:mt-0"
            >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                    <Image
                        src="/images/Foto-Perfil.jpg"
                        alt="Foto perfil portafolio"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
                initial={{opacity:0, scale: 0.5}} 
                animate={{opacity:1, scale: 1}} 
                transition={{duration: 0.15}} 
                className="col-span-7 place-self-center text-center sm:text-left"
            >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold h-36 md:h-30">
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
                    <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-700 to-primary-700 bg-white hover:bg-slate-200 text-white">
                        Contáctame
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-700  to-secondary-700 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Descarga mi CV</span>
                    </button>
                </div>
            </motion.div>
            <motion.div 
                initial={{opacity:0, scale: 0.5}} 
                animate={{opacity:1, scale: 1}} 
                transition={{duration: 0.15}} 
                className="col-span-5 place-self-center mt-8 lg:mt-0"
            >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/hero-image-1.png"
                        alt="Foto perfil portafolio"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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
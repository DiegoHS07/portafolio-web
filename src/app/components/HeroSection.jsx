"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


export const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-700">
                        Hola, Soy {""}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Diego Higuera',
                            3000, 
                            'Web Developer',
                            3000,
                            'Frontend Developer',
                            3000,
                            'Junior Mobile Developer',
                            3000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Me apasiona el desarrollo web y estoy entusiasmado por formar parte de un equipo proactivo que me permita crecer profesionalmente.
                </p>
                <div>
                    <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 to-green-700 bg-white hover:bg-slate-200 text-white">
                        Contáctame
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-700  to-blue-700 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Descarga mi CV</span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-8 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/hero-image.png"
                        alt="Foto perfil portafolio"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

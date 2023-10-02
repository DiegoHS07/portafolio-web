"use client";
import React, {useRef} from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { aboutData } from '../data/aboutData.js';

const AboutSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <motion.section 
        initial={{opacity:0, scale: 0.5}} 
        animate={{opacity:1, scale: 1}} 
        transition={{duration: 0.35}} 
        className='text-white'
    >
        <div className='md:grid md:grid-cols-2 gap-8 items-center pt-8 pb-3 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image className='rounded-xl' src="/images/about-image.png" alt='Imagen sección acerca de mi' width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className="text-4xl font-bold text-white mb-4">
                    Acerca de Mi
                </h2>
                <p className="text-base lg:text-lg">
                    Soy un Ingeniero en Sistemas con tres años de experiencia, especializado en el desarrollo web en roles tanto de desarrollador frontend como fullstack. Aprendo rápidamente, estoy en búsqueda de la ampliación de mis conocimientos y habilidades. Me entusiasma colaborar en equipos y crear aplicaciones excepcionales.
                </p>
                <div className='mt-1'>
                    <Swiper
                        autoplay={{
                            delay: 60000,
                            disableOnInteraction: false,
                        }}
                        effect={'flip'}
                        grabCursor={true}
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, EffectFlip, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="h-max max-w-max m-1 swiper-about"
                    >
                        {
                            aboutData.map((tab, index) => (
                                <SwiperSlide key={index} className='p-10 justify-left'>                    
                                    <span className="text-left -ml-10 font-semibold text-primary-400 text-2xl" >
                                        {tab.title}
                                    </span>
                                    {tab.content}                
                                </SwiperSlide>
                            ))
                        }
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default AboutSection;
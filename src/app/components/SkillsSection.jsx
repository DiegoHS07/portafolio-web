"use client";
import React from 'react';
import {motion} from "framer-motion";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import Image from 'next/image';
import { skillsData } from '../data/skillsData.js';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const BASE_DIR = "/images/skills/";

const SkillsSection = () => {
  const { width } = useWindowDimensions();

  return (
    <motion.section 
        id="skills" name="skills"
        initial={{opacity:0, scale: 0.5}} 
        animate={{opacity:1, scale: 1}} 
        transition={{duration: 0.35}}
        className='pt-20'>
        <div className='container lg:h-60 h-40 my-20'>
            <h2 className='text-center text-4xl font-bold text-white mb-8 md:mb-12'>
                Mis habilidades
            </h2>
            <Swiper
                slidesPerView={(width < 450) ? 2 : 5}
                loop={true}
                spaceBetween={15}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                modules={[Autoplay]}
                className='w-full h-full left-auto m-auto mb-2 mt-2'    
            >
                {skillsData.map((skill, index)=> ( 
                    <SwiperSlide key={index}  className='rounded-xl  border-2 border-slate-600' >
                        <Image
                            src={BASE_DIR+skill.icon}
                            alt="icono skill"
                            width={160}
                            height={160}
                            className='p-6 xl:p-10 object-contain h-2/3 w-full'
                            priority
                        />
                        <span className='block text-center h-1/3 text-[#ADB7BE] text-xs lg:text-xl'>
                            {skill.name}
                        </span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </motion.section>
  )
}

export default SkillsSection
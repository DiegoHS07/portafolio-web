"use client";
import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <motion.div 
          initial={{opacity:0, scale: 0.5}} 
          animate={{opacity:1, scale: 1}} 
          transition={{duration: 0.15}}
          className='container p-12 flex justify-between'
        >
            <span>DH</span>
            <p className='text-slate-600'>Todos los derechos reservados.</p>
        </motion.div>
    </footer>
  )
}

export default Footer
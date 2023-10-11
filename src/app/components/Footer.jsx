"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="container p-12 flex justify-between gap-5 items-center"
      >
        <div className="flex flex-row items-center">
          <Image
            src="./DH.svg"
            width={50}
            height={50}
            className="text-white"
            alt="Icon DH portafolio"
          />
          DH
        </div>
        <p className="text-slate-600 text-right">Todos los derechos reservados.</p>
      </motion.div>
    </footer>
  );
}

export default Footer
"use client";
import React, {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';
import {Toaster, toast} from 'react-hot-toast';

const EmailSection = () => {
    const [dataSubmitted, setDataSubmitted] = useState('');

    const sendEmailContact = (data) =>{
        return fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        setDataSubmitted(data);
        e.target.reset();
    }

    useEffect(() => {
        if(dataSubmitted != ''){
            const callFunction = sendEmailContact(dataSubmitted);
            toast.promise(callFunction, 
                {
                    loading: "Enviando...",
                    error: "Error al enviar el correo. Inténtalo de nuevo",
                    success: "Correo enviado, pronto estaremos en contacto"
                },
                {
                    duration: 10000,
                }
            );
        }
    }, [dataSubmitted]);

  return <motion.section 
    id='contact' name="contact" 
    initial={{opacity:0, scale: 0.5}} 
    animate={{opacity:1, scale: 1}} 
    transition={{duration: 0.35}}
    className='contact grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
  >
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-950 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'>
    </div>
    <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Vamos a conectar</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {" "}
            Actualmente estoy en busca de nuevas oportunidades, si tienes una pregunta o quieres contactar conmigo envíame un mensaje. Te responderé con mucho gusto.
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link
                target='blank' 
                href="https://github.com/DiegoHS07"
            >
                <Image src={GithubIcon} alt='Icono Github'/>
            </Link>
            <Link target='blank' href="https://www.linkedin.com/in/diego-alejandro-higuera-sierra-dev/">
                <Image src={LinkedInIcon} alt='Icono LinkedIn'/>
            </Link>
        </div>
    </div>
    <div className='z-10'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
                <label 
                    htmlFor="email" 
                    className='text-white block mb-2 text-sm font-medium'
                >
                    Tu correo
                </label>
                <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                    required 
                    placeholder='persona@google.com'
                />
            </div>
            <div className='mb-6'>
                <label 
                    htmlFor="subject"
                    className='text-white block mb-2 text-sm font-medium'
                >
                    Asunto
                </label>
                <input 
                    type="text" 
                    id='subject' 
                    name='subject' 
                    className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                    required 
                    placeholder='Salúdame!'
                />
            </div>
            <div className='mb-6'>
                <label 
                    htmlFor="message"
                    className='text-white block mb-2 text-sm font-medium'
                >
                    Mensaje
                </label>
                <textarea 
                    name="massage" 
                    id="message" 
                    cols="30" rows="5"
                    className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='Iniciemos una conversación...'
                />
            </div>
            <button
                type='submit'
                className='bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-lg w-full'
            >
                Enviar mensaje
            </button>
        </form>
    </div>
    <Toaster position="bottom-center"/>
  </motion.section>
}

export default EmailSection
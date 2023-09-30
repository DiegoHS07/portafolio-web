"use client";
import React, {useState} from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
    };

    const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
    });

    if(response.status === 200){
        console.log("Mensaje enviado");
        e.target.email.value = '';
        e.target.subject.value = '';
        e.target.message.value = '';
        setEmailSubmitted(true);
    }
  }

  return <section className='contact grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
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
                    placeholder='Juan@google.com'
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
            {
                emailSubmitted && (
                    <p className='text-primary-500 text-sm mt-2'>
                        Email enviado correctamente!
                    </p>
                )
            }
        </form>
    </div>
  </section>
}

export default EmailSection
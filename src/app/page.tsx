'use client'
import React, { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { MdGTranslate } from 'react-icons/md'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import Image from 'next/image'
import { Card } from '../components/Card'
import profile from '../../public/profile.svg'
import Code from '../../public/code.png'
import Design from '../../public/design.png'
import Tools from '../../public/tools.png'
import Bug from '../../public/bug.png'
import WebDevelopment from '../../public/web-development.png'
import web1 from '../../public/web-1.png'
import web2 from '../../public/web-2.png'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [translate, setTranslate] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='bg-white dark:bg-gray-900'>
        <main className='px-10 container mx-auto md:px-20 lg:px-40'>
          <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-2xl font-semibold tracking-widest uppercase font-prompt dark:text-white'>
                {translate ?
                  'Hola, amigo' :
                  'Hi, friend'
                }
              </h1>
              <ul className='flex items-center gap-4'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white' /></li>
                <li><MdGTranslate onClick={() => setTranslate(!translate)} className='cursor-pointer text-2xl dark:text-white' /></li>
                <li><a className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md' href='/Edwar-Amaya.pdf' download="Edwar-Amaya.pdf">Resumen</a></li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-4xl py-2 text-blue-500 font-medium md:text-6xl'>Edwar Amaya Diaz</h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
              {translate ? 
                  'Desarrollador web' : 
                  'Web developer'
                }
              </h3>
              <p className='text-base py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300'>
                {translate ? 
                  'Soy un desarrollador web front-end con experiencia en proyectos grandes y pequeños. Me apasiona crear páginas web atractivas y fáciles de usar. Siempre estoy buscando nuevos desafíos y utilizando las últimas tecnologías. Si estás buscando ayuda para tus proyectos web, no dudes en contactarme.' : 
                  'I am a front-end web developer with experience in both large and small projects. I am passionate about creating attractive and user-friendly websites. Always looking for new challenges and using latest technologies. If you\'re looking for help with your web projects, don\'t hesitate to contact me.'
                }
              </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <a href='https://github.com/edwar' rel='noreferrer' target='_blank'>
                <AiFillGithub className='cursor-pointer hover:text-gray-900 hover:dark:text-white' />
              </a>
              <a href='https://github.com/edwar' rel='noreferrer' target='_blank'>
                <AiFillLinkedin className='cursor-pointer hover:text-blue-600 hover:dark:text-white' />
              </a>
              <a href='mailto:edwaramayadiaz@gmail.com' rel='noreferrer' target='_blank'>
                <AiFillMail className='cursor-pointer hover:text-red-400 hover:dark:text-white' />
              </a>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96'>
              <Image src={profile} alt='Profile' width={500} height={500} />
            </div>
          </section>
          <section>
            <div className='text-justify max-w-3xl mx-auto py-10'>
              <h3 className='text-3xl py-1 dark:text-white'>
                {translate ? 
                  'Mi experiencia' : 
                  'My expertise'
                }
              </h3>
              <p className='text-lg py-2 leading-8 text-gray-800 dark:text-gray-300'>
                {translate ? 
                  'Soy ingeniero de sistemas egresado de la Universidad Piloto de Colombia, tengo 6 años de experiencia y mi carrera la he enfocado en el desarrollo front-end' : 
                  'I am a systems engineer graduated from Universidad Piloto de Colombia, I have 6 years of experience and my career has been focused on front-end development.'
                }
              </p>
            </div>
            <div className='flex flex-wrap gap-10 justify-center'>
              <Card
                img={Code}
                title={translate ? 'Código' : 'Code'}
                description={translate ? 'Me gunta trabajar con javascript, sus ultimas versiones son bastante agradables de usar.' : 'I like working with javascript, its latest versions are quite nice to use.'}
                subtitle={translate ? 'Tecnologías' : 'Technologies'}
                items={translate ? ['ReactJs (NextJs)', 'Vue', 'Angular'] : ['ReactJs (NextJs)', 'Vue', 'Angular']}
              />
              <Card
                img={Design}
                title={translate ? 'Diseño' : 'Design'}
                description={translate ? 'El diseño es una parte fundamental para hacer que los clientes se enamoren de lo que hacemos.' : 'Design is a fundamental part of making customers fall in love with what we do.'}
                subtitle={translate ? 'Tecnologías' : 'Technologies'}
                items={translate ? ['SASS', 'Tailwind '] : ['SASS', 'Tailwind ']}
              />
              <Card
                img={Tools}
                title={translate ? 'Herramientas' : 'Tools'}
                description={translate ? 'En la actualidad contamos con muchas herramientas para hacer que nuestro trabajo sea más fácil.' : 'Today we have many tools to make our job easier.'}
                subtitle={translate ? 'Tecnologías' : 'Technologies'}
                items={translate ? ['Git', 'Figma', 'Jira'] : ['Git', 'Figma', 'Jira']}
              />
              <Card
                img={Bug}
                title={translate ? 'Control de errores' : 'Error control'}
                description={translate ? 'Nuestro código siempre está expuesto a errores, por lo tanto, debemos intentar controlarlos para evitar malos momentos.' : 'Our code is always subject to errors, so we must try to control them to avoid bad moments.'}
                subtitle={translate ? 'Tecnologías' : 'Technologies'}
                items={translate ? ['Linter', 'Typescript', 'Storybook', 'Jest'] : ['Linter', 'Typescript', 'Storybook', 'Jest']}
              />
              <Card
                img={WebDevelopment}
                title={translate ? 'Consumo de APIS' : 'Consumption of APIS'}
                description={translate ? 'Existen muchas formas de consumir datos, una de ellas y tal vez la más popular son las APIS, aquí te cuento cuáles son las tecnologías que uso para llevar a cabo esta labor' : 'There are many ways to consume data, one of them and perhaps the most popular are the APIS, here I tell you which are the technologies I use to carry out this task.'}
                subtitle={translate ? 'Tecnologías' : 'Technologies'}
                items={translate ? ['Axios', 'Fetch', 'GraphQL'] : ['Axios', 'Fetch', 'GraphQL']}
              />
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1 dark:text-white'>
                {translate ? 
                  'Portafolio' : 
                  'Portfolio'
                }
              </h3>
              <p className='text-lg py-2 leading-8 text-gray-800 dark:text-gray-300'>
                {translate ? 
                  <>En esta sección encontrarás mis proyectos como <span className='text-blue-500'>desarrollador web</span> front-end. Si tienes preguntas o estás interesado en trabajar juntos, no dudes en <a href='https://wa.me/+573175227672?text=¿Hola%20Edwar,%20cómo%20estás?' rel='noreferrer' target='_blank' className='text-blue-500'>ponerte en contacto conmigo.</a></> : 
                  <>In this section you will find my projects as a front-end <span className='text-blue-500'>web developer</span>. If you have any questions or are interested in working together, don`t hesitate to <a href='https://wa.me/+573175227672?text=Hi%20Edwar,%20how%20are%20you?' rel='noreferrer' target='_blank' className='text-blue-500'>contact me.</a></>
                }
              </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='group relative basis-1/3 flex-1'>
                <Image alt='web 1' src={web1} className='rounded-lg object-cover' />
                <div
                  className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500'>
                  <h1 className='text-2xl text-white'>https://edwar-delivery.vercel.app</h1>
                  <a className='mt-5 px-8 py-3 rounded-full text-white bg-amber-400 hover:bg-amber-500 duration-300' href='https://edwar-delivery.vercel.app' rel='noreferrer' target='_blank'>Ir a la página</a>
                </div>
              </div>
              <div className='group relative basis-1/3 flex-1'>
                <Image alt='web 2' src={web2} className='rounded-lg object-cover' />
                <div
                  className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500'>
                  <h1 className='text-2xl text-white'>https://react-wyno.vercel.app</h1>
                  <a className='mt-5 px-8 py-3 rounded-full text-white bg-amber-400 hover:bg-amber-500 duration-300' href='https://react-wyno.vercel.app' rel='noreferrer' target='_blank'>Ir a la página</a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

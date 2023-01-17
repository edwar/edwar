"use client"
import React, { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
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

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900">
        <main className="px-10 container mx-auto md:px-20 lg:px-40">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-2xl font-semibold tracking-widest uppercase font-prompt dark:text-white">Edwar</h1>
              <ul className="flex items-center">
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" /></li>
                <li><a className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md ml-8" href="#">Resumen</a></li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-4xl py-2 text-blue-500 font-medium md:text-6xl">Edwar Amaya Diaz</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Web developer</h3>
              <p className="text-base py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillGithub className="cursor-pointer hover:text-gray-900 hover:dark:text-white" />
              <AiFillLinkedin className="cursor-pointer hover:text-blue-600 hover:dark:text-white" />
              <AiFillMail className="cursor-pointer hover:text-red-400 hover:dark:text-white" />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
              <Image src={profile} alt="Profile" width={500} height={500} />
            </div>
          </section>
          <section>
            <div className="text-justify max-w-3xl mx-auto">
              <h3 className="text-3xl py-1 dark:text-white">My expertise</h3>
              <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer <span className="text-blue-500">gravida</span> aliquam blandit. Sed maximus viverra sollicitudin. <span className="text-blue-500">Aliquam</span> maximus varius ipsum.
              </p>
            </div>
            <div className="flex flex-wrap gap-10 justify-center">
              <Card
                img={Code}
                title="Beautiful code"
                description="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                subtitle="Framework"
                items={['ReactJs (NextJs)', 'Vue', 'Angular']}
              />
              <Card
                img={Design}
                title="Beautiful code"
                description="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                subtitle="Framework"
                items={['ReactJs (NextJs)', 'Vue', 'Angular']}
              />
              <Card
                img={Tools}
                title="Beautiful code"
                description="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                subtitle="Framework"
                items={['ReactJs (NextJs)', 'Vue', 'Angular']}
              />
              <Card
                img={Bug}
                title="Beautiful code"
                description="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                subtitle="Framework"
                items={['ReactJs (NextJs)', 'Vue', 'Angular']}
              />
              <Card
                img={WebDevelopment}
                title="Beautiful code"
                description="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                subtitle="Framework"
                items={['ReactJs (NextJs)', 'Vue', 'Angular']}
              />
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
              <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer <span className="text-blue-500">gravida</span> aliquam blandit. Sed maximus viverra sollicitudin. <span className="text-blue-500">Aliquam</span> maximus varius ipsum.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image alt="web 1" src={web1} className="rounded-lg object-cover" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image alt="web 1" src={web1} className="rounded-lg object-cover" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image alt="web 1" src={web1} className="rounded-lg object-cover" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image alt="web 1" src={web1} className="rounded-lg object-cover" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image alt="web 1" src={web1} className="rounded-lg object-cover" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image alt="web 1" src={web1} className="rounded-lg object-cover" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

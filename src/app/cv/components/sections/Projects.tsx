import React from 'react'
import { RESUME_DATA } from "@/data/resume-data"
import Section from '../Section'
import Link from 'next/link'

const { projects } = RESUME_DATA

export default function Projects() {
  return (
    <Section title='Proyectos'>
      <ul className='grid grid-cols-project gap-4 -mx-4'>
        {
          projects.map(({ url, description, highlights, name, isActive }) => {
            return (
              <li key={url}>
                <article className='relative flex flex-col gap-4 p-4 rounded-lg border-[0.5px] border-slate-200'>
                  {isActive && <span className="absolute right-2 top-2 flex w-2 h-2 me-2 bg-green-500 rounded-full"></span>}
                  <header className='flex-1'>
                    <Link href={url} title={``}>
                      <h3 className='text-xl font-semibold text-slate-600 hover:underline'>{name}</h3>
                    </Link>
                    <p className='text-[0.75rem] leading-[1.2rem]'>{description}</p>
                  </header>
                  <footer className='flex flex-wrap gap-1 text-xs'>
                      {
                        highlights.map(highlight => {
                          return (
                            <span className='rounded-[6px] bg-[#eee] text-[#444] text-[0.6rem] font-medium px-[0.6rem] py-[0.2rem] mb-1' key={highlight}>{highlight}</span>
                          )
                        })
                      }
                  </footer>
                </article>
              </li>
            )
          })
        }
      </ul>
    </Section>
  )
}

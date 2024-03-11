import React from 'react'
import { RESUME_DATA } from "@/data/resume-data"
import Section from '../Section'

const { work } = RESUME_DATA

export default function Experience() {
  return (
    <Section title='Experiencia laboral'>
      <ul className='flex flex-col gap-8'>
        {
          work.map(
            ({ name, startDate, endDate, position, summary }) => {
              const startYear = new Date(startDate).getFullYear()
              const endYear = endDate !== null ? new Date(endDate).getFullYear() : "Actual"
              const years = `${startYear} - ${endYear}`
              return(
                <li key={name}>
                  <article>
                    <header className='flex justify-between items-start mb-1'>
                      <div>
                        <h3 className='text-xl font-bold'>{name}</h3>
                        <h4 className='text-lg font-semibold'>{position}</h4>
                      </div>
                      <time className='text-md text-slate-500 font-normal'>{years}</time>
                    </header>
                    <footer>
                      <p className='text-balance text-base'>{summary}</p>
                    </footer>
                  </article>
                </li>
              );
            }
          )
        }
      </ul>
    </Section>
  )
}

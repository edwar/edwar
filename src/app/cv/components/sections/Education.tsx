import React from 'react'
import { RESUME_DATA } from "@/data/resume-data"
import Section from '../Section'
import Link from 'next/link';

const { education } = RESUME_DATA

export default function Education() {
  return (
    <Section title='Educación'>
      <ul className='flex flex-col gap-6'>
        {
          education.map(
            ({ institution, startDate, endDate, url, area }) => {
              const startYear = new Date(startDate).getFullYear()
              const endYear = endDate !== null ? new Date(endDate).getFullYear() : "Actual"
              const years = `${startYear} - ${endYear}`
              return(
                <li key={institution}>
                  <article>
                    <header className='flex justify-between items-start mb-1'>
                      <div className='flex flex-col gap-1'>
                        <Link href={url} target='_blank'>
                          <h3 className='text-xl font-bold'>{institution}</h3>
                        </Link>
                        <p className='text-balance text-lg'>{area}</p>
                      </div>
                      <time className='text-md text-slate-500 font-normal text-nowrap'>{years}</time>
                    </header>
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

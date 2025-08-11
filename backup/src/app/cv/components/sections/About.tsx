import React from 'react'
import { RESUME_DATA } from "backup/src/data/resume-data"
import Section from '../Section'

const { basics: { summary } } = RESUME_DATA
export default function About() {
  return (
    <Section title='Acerca de mi'>
      <p className='text-balance text-lg'>{summary}</p>
    </Section>
  )
}

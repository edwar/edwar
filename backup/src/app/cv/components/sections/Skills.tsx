import React from 'react'
import { RESUME_DATA } from "backup/src/data/resume-data"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiJira,
  SiBitbucket,
  SiAstro,
  SiExpress,
  SiVuedotjs
} from "react-icons/si"
import Section from '../Section'

const { skills } = RESUME_DATA

export default function Skills() {
  const SKILLS_ICONS: Record<string, any> = {
    HTML: SiHtml5,
    CSS: SiCss3,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    React: SiReact,
    Node: SiNodedotjs,
    Git: SiGit,
    GitHub: SiGithub,
    Next: SiNextdotjs,
    Tailwind: SiTailwindcss,
    Jira: SiJira,
    Bitbucket: SiBitbucket,
    Astro: SiAstro,
    Express: SiExpress,
    Vue: SiVuedotjs
  }
  return (
    <Section title='Habilidades'>
      <ul className='flex gap-2 flex-wrap'>
        {
          skills.map(({ name }) => {
            const Icon = SKILLS_ICONS[name]
            return (
              <li className='flex justify-between items-center gap-2 rounded-sm bg-slate-200 text-slate-900 text-sm font-medium px-2 py-1' key={name}>
                {Icon && <Icon />} <span>{name}</span>
              </li>
            )
          })
        }
      </ul>
    </Section>
  )
}

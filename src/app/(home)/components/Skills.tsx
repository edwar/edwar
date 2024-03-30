"use client"
import React from 'react'
import Title from './Title'
import { SlFire } from 'react-icons/sl';
import { SiAstro, SiBitbucket, SiExpress, SiGit, SiJavascript, SiJira, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiVuedotjs } from 'react-icons/si';
import { HoverEffect } from '@/components/ui/CardHoverEffect'
import { MotionTransitionFadeIn } from '@/components/MotionTransitionFadeIn';

export default function Skills() {
  const skills = [
    {
      text: "React",
      icon: SiReact
    },
    {
      text: "Next.js",
      icon: SiNextdotjs
    },
    {
      text: "Tailwind",
      icon: SiTailwindcss
    },
    {
      text: "Git",
      icon: SiGit
    },
    {
      text: "Jira",
      icon: SiJira
    },
    {
      text: "Bitbucket",
      icon: SiBitbucket
    },
    {
      text: "Astro",
      icon: SiAstro
    },
    {
      text: "JavaScript",
      icon: SiJavascript
    },
    {
      text: "Typescript",
      icon: SiTypescript
    },
    {
      text: "Node.js",
      icon: SiNodedotjs
    },
    {
      text: "Express",
      icon: SiExpress
    },
    {
      text: "Vue",
      icon: SiVuedotjs
    },
  ]
  return (
    <MotionTransitionFadeIn variant="letf">
      <div className='relative px-8 mt-20'>
        <Title className='flex flex-col items-center justify-center -rotate-6'>Skills <SlFire className='text-red-500' /></Title>
        <HoverEffect items={skills}/>
      </div>
    </MotionTransitionFadeIn>
  )
}

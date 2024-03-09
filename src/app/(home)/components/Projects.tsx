import Grid from '@/components/ui/Grid'
import React from 'react'
import Title from './Title';
import { AiFillCode } from "react-icons/ai";

export default function Projects() {
    const projects = [
        {
            id: 1,
            alt: "Pichincha Miles",
            src: "/web-1.webp",
            url: "https://www.pichinchamiles.com/"
        },
        {
            id: 2,
            alt: "Pichincha Miles",
            src: "/web-2.webp",
            url: "https://bgrvisamiles.com.ec/"
        },
        {
            id: 3,
            alt: "Pichincha Miles",
            src: "/web-3.webp",
            url: "https://clubmiles.com.ec/"
        }
    ];
  return (
    <div className='mt-20 lg:mt-0'>
        <Title className='flex flex-col items-center justify-center -rotate-6'>Projectos <AiFillCode className='text-red-500' /></Title>
        <Grid projects={projects} />
    </div>
  )
}
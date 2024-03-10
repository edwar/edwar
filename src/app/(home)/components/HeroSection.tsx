import { Button } from '@/components/ui/MovingBorder'
import Link from 'next/link'
import React from 'react'
import { SlBriefcase, SlRocket } from 'react-icons/sl'
import Title from './Title'
import Image from 'next/image'
import { WavyBackground } from '@/components/ui/WavyBackground'

export default function HeroSection() {
  return (
    <WavyBackground >
        <div className='min-h-[60vh] flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row items-center justify-between'>
                <div className='space-y-10 text-center lg:text-left'>
                    <h1 className='text-4xl lg:text-7xl font-bold'>
                        Mucho gusto!<br />
                        <span className='underline underline-offset-8 decoration-slate-600'>{'Soy Edwar.'}</span>
                    </h1>
                    <p className='md:w-4/5 text-lg text-slate-300'>
                        {'Me dedico a desarrollar interfaces que sean tan atractivas como fáciles de usar. Tengo experiencia en proyectos de todo tipo, desde pequeñas startups hasta grandes empresas.'}
                    </p>
                    <Link href={"mailto:edwaramayadiaz@gmail.com"} className='inline-block'>
                        <Title isInteractive>
                            Contactame <SlRocket className='text-red-500' />
                        </Title>
                    </Link>
                </div>
                <div className='relative'>
                    <div className='w-72 h-[25rem] space-x-3 relative'>
                        <div className='glow absolute top-[80%] right-1/2 -z-10'></div>
                        <Image loading='lazy' width={288} height={401} src="/profile.webp" alt="Edwar Amaya" />
                    </div>
                    <div className='absolute bottom-5 sm:bottom-8 left-0 sm:left-5'>
                        <Button className='px-5 py-3 font-semibold' borderRadius='0.5rem' duration={3000}>
                            <p className='inline-flex gap-2'><SlBriefcase className='w-5 h-5 text-red-500' /> Listo para trabajar</p>
                        </Button>
                    </div>
                </div>
        </div>
    </WavyBackground>
  )
}

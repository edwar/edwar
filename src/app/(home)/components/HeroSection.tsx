import { Button } from '@/components/ui/MovingBorder'
import Link from 'next/link'
import React from 'react'
import { SlBriefcase, SlRocket } from 'react-icons/sl'
import Title from './Title'
import Image from 'next/image'
import { WavyBackground } from '@/components/ui/WavyBackground'
import { MotionTransitionFadeIn } from '@/components/MotionTransitionFadeIn'

export default function HeroSection() {
  return (
    <WavyBackground backgroundFill='#09090b'>
        <div className='min-h-[60vh] flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row items-center justify-between'>
            <MotionTransitionFadeIn variant="letf">
                <div className='space-y-10 text-center lg:text-left'>
                    <h1 className='text-4xl lg:text-7xl font-bold'>
                        Mucho gusto!<br />
                        <span className='underline underline-offset-8 decoration-slate-600'>{'Soy Edwar.'}</span>
                    </h1>
                    <p className='md:w-4/5 text-lg'>
                        {'Me dedico a desarrollar interfaces que sean tan atractivas como fáciles de usar. Tengo experiencia en proyectos de todo tipo, desde pequeñas startups hasta grandes empresas.'}
                    </p>
                    <Link href={"mailto:edwaramayadiaz@gmail.com"} className='inline-block'>
                        <Title isInteractive>
                            Contactame <SlRocket className='text-red-500' />
                        </Title>
                    </Link>
                </div>
            </MotionTransitionFadeIn>
            <MotionTransitionFadeIn variant="right">
                <div className='relative group'>
                    <div className='w-72 h-[25rem] space-x-3 relative'>
                        <Image priority quality={75} width={288} height={401} src="/profile.webp" alt="Edwar Amaya" className='filter drop-shadow-3xl gradient-mask-b-70 md:group-hover:scale-110 md:group-hover:-translate-y-10 md:transition-all md:duration-1000' />
                    </div>
                    <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2'>
                        <Link href="/cv">
                            <Button className='px-5 py-3 font-semibold' borderRadius='0.5rem' duration={3000}>
                                <p className='inline-flex gap-2 text-nowrap'><SlBriefcase className='w-5 h-5 text-red-500' /> Listo para trabajar</p>
                            </Button>
                        </Link>
                    </div>
                </div>
            </MotionTransitionFadeIn>
        </div>
    </WavyBackground>
  )
}

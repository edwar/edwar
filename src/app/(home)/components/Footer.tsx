"use client"
import { Separator } from '@/components/ui/Separator'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-center items-center flex-col border-t border-t-white/90 gap-5 py-10 px-5'>
      <h3 className='text-4xl font-normal text-center lg:text-left'>Gracias por visitar mi portafolio 🧑🏽‍💻</h3>
      <div className='flex w-full flex-col lg:flex-row h-auto lg:h-12 justify-center items-center gap-10 text-center'>
        <span className='lg:w-1/3 font-light text-lg lg:text-2xl'>Edwar Amaya</span>
        <Separator className='hidden lg:inline-flex' orientation='vertical' />
        <Separator className='inline-flex lg:hidden' />
        <span className='lg:w-1/2 font-light text-lg lg:text-2xl'>Univeridad Piloto de Colombia Girardot</span>
        <Separator className='hidden lg:inline-flex' orientation='vertical' />
        <Separator className='inline-flex lg:hidden' />
        <span className='lg:w-1/3 font-light text-lg lg:text-2xl'>Ingeniero de sistemas</span>
      </div>
    </footer>
  )
}

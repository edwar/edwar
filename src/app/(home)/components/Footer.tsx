"use client"
import Upc from '@/icons/Upc'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
  <footer className="w-full max-w-screen-xl">
    <div className="flex flex-col justify-center md:flex-row items-end md:justify-between">
      <div className="flex order-2 md:order-1 justify-center w-full md:w-1/3">
          <span className="text-lg md:text-xl font-light md:font-medium whitespace-nowrap text-white">Edwar Amaya</span>
      </div>
      <div className="flex order-1 md:order-2 justify-center w-full md:w-1/3">
          <Link href="https://girardot.unipiloto.edu.co/" target='_blank'>
            <Upc />
          </Link>
      </div>
      <div className="flex order-3 justify-center w-full md:w-1/3">
          <span className='text-lg md:text-xl font-light md:font-medium whitespace-nowrap text-white'>Ingeniero de sistemas</span>
      </div>
    </div>
    <hr className="my-3 sm:mx-auto border-slate-800" />
    <span className="block text-sm md:text-lg font-thin md:font-normal text-center text-white">2024</span>
  </footer>
  )
}

"use client"
import Upc from '@/icons/Upc'
import React from 'react'

export default function Footer() {
  return (
  <footer className="w-full max-w-screen-xl">
    <div className="flex items-center justify-between">
      <div className="flex relative">
          <Upc className="absolute bottom-2"/>
          <span className="text-2xl font-semibold whitespace-nowrap text-white">Edwar Amaya</span>
      </div>
      <div className="flex">
          <span className='text-sm lg:text-xl text-white'>Ingeniero de sistemas</span>
      </div>
    </div>
    <hr className="my-3 m:mx-auto border-slate-800 lg:my-5" />
    <span className="block text-lg text-center text-white">2024</span>
  </footer>
  )
}

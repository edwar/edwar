import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'

export default function page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Skills />
    </main>
  )
}

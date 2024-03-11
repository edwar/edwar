import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
import { GridBackground } from '@/components/ui/GridBackground'

export default function page() {
  return (
    <GridBackground>
      <main>
        <Navbar />
        <HeroSection />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </GridBackground>
  )
}

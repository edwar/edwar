import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'

export default function page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}

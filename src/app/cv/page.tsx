import React from 'react'

import About from './components/sections/About'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import KeyboardManager from './components/KeyboardManager'

export default function page() {
  return (
    <div className='bg-white h-full text-slate-700 pt-24'>
      <main className="max-w-5xl mx-auto p-5">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </main>
      <KeyboardManager />
    </div>
  )
}

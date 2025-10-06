import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="app">
      <Hero />
      <main>
        <Projects />
      </main>
      <footer className="footer">© {new Date().getFullYear()} — Built among the stars</footer>
    </div>
  )
}

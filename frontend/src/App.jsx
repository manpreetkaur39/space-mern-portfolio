import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Conquests from './components/Conquests'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Home from './components/Home'

export default function App() {
  const [route, setRoute] = useState(() => window.location.pathname || '/')

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (path) => {
    if (path === route) return
    window.history.pushState({}, '', path)
    setRoute(path)
  }

  return (
    <div className="app">
      <Nav navigate={navigate} current={route} />
      {route === '/' && (
        <>
          <Hero />
          <main>
            <div className="container">
              <Home navigate={navigate} />
            </div>
          </main>
        </>
      )}

      {route === '/projects' && (
        <>
          <Hero />
          <main>
            <Conquests />
            <Projects />
          </main>
        </>
      )}

      {route === '/socials' && (
        <>
          <Hero />
          <main>
            <Socials />
          </main>
        </>
      )}

      <footer className="footer">© {new Date().getFullYear()} — Manpreet Kaur — Interstellar Developer</footer>
    </div>
  )
}

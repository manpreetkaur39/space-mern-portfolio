import React from 'react'

export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <h1>Hi, I'm an Interstellar Developer</h1>
        <p>Crafting cosmic experiences with code — React, Node, and MongoDB.</p>
        <div className="cta">
          <a href="#projects" className="btn">Explore Projects</a>
        </div>
      </div>
      <div className="stars" aria-hidden="true" />
    </header>
  )
}

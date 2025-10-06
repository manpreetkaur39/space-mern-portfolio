import React from 'react'
import CosmicScene from './CosmicScene'

export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <h1>Manpreet Kaur — Interstellar Developer</h1>
        <p>Crafting cosmic experiences with code — React, Node, and MongoDB.</p>
        <div className="cta">
          <a href="#conquests" className="btn">Start Conquest</a>
        </div>
      </div>
      <CosmicScene />
    </header>
  )
}

import React from 'react'

export default function Home({ navigate }){
  return (
    <section className="home-choices">
      <div className="home-grid">
        <button className="big-cta" onClick={() => navigate('/projects')}>Projects</button>
        <button className="big-cta ghost" onClick={() => navigate('/socials')}>Socials</button>
      </div>
    </section>
  )
}

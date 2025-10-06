import React from 'react'

export default function Nav({ navigate, current }){
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">Manpreet Kaur</div>
        <div className="links">
          <a href="/projects" onClick={(e)=>{e.preventDefault(); navigate('/projects')}} className={current === '/projects' ? 'active' : ''}>Projects</a>
          <a href="/" onClick={(e)=>{e.preventDefault(); navigate('/')}} className={current === '/' ? 'active' : ''}>Home</a>
          <a href="/socials" onClick={(e)=>{e.preventDefault(); navigate('/socials')}} className={current === '/socials' ? 'active' : ''}>Socials</a>
        </div>
      </div>
    </nav>
  )
}

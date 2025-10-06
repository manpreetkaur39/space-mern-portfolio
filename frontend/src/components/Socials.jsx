import React from 'react'

export default function Socials(){
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { name: 'Medium', url: 'https://medium.com/' },
    { name: 'Blog', url: 'https://your-blog.example/' },
    { name: 'Instagram', url: 'https://www.instagram.com/' },
    { name: 'X', url: 'https://x.com/' },
  ]

  return (
    <section id="socials" className="socials container">
      <h2>Socials & Writings</h2>
      <p className="muted">Follow Manpreet Kaur and read technical posts.</p>
      <div className="social-list">
        {socials.map(s => (
          <a key={s.name} className="social" href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
        ))}
      </div>
    </section>
  )
}

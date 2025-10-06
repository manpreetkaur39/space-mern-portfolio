import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    axios.get('/api/projects').then((res) => {
      if (mounted) setProjects(res.data)
    }).catch((err) => console.error(err)).finally(() => setLoading(false))
    return () => (mounted = false)
  }, [])

  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      {loading ? <p>Loading...</p> : (
        <div className="grid">
          {projects.length === 0 && <p>No projects yet. Seed the DB to see examples.</p>}
          {projects.map(p => (
            <article key={p._id} className="card">
              <div className="card-image" style={{backgroundImage: `url(${p.image || '/images/planet.png'})`}} />
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tech">{p.tech?.map(t => <span key={t} className="chip">{t}</span>)}</div>
                {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="link">Live</a>}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

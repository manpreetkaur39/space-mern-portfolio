import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Global socials fallback — replace these with Manpreet's real URLs
const GLOBAL_SOCIALS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { name: 'Medium', url: 'https://medium.com/' },
  { name: 'Blog', url: 'https://your-blog.example/' },
  { name: 'Instagram', url: 'https://www.instagram.com/' },
  { name: 'X', url: 'https://x.com/' },
]

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    axios.get('/api/projects').then((res) => {
      if (!mounted) return
      // ensure chronological order: oldest first
      const sorted = (res.data || []).slice().sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      setProjects(sorted)
    }).catch((err) => console.error(err)).finally(() => setLoading(false))
    return () => (mounted = false)
  }, [])

  return (
    <section id="projects" className="projects container">
      <h2>Projects (Chronological)</h2>
      {loading ? <p>Loading...</p> : (
        <div className="grid">
          {projects.length === 0 && <p>No projects yet. Seed the DB to see examples.</p>}
          {projects.map((p, idx) => (
            <article key={p._id} className="card">
              <div className="card-image" style={{backgroundImage: `url(${p.image || '/images/planet.png'})`}} />
              <div className="card-body">
                <h3>{`Project ${idx + 1}: ${p.title}`}</h3>
                <p>{p.description}</p>
                <div className="tech">{p.tech?.map(t => <span key={t} className="chip">{t}</span>)}</div>

                {/* Hierarchical links */}
                <div className="links-tree">
                  <ul className="tree">
                    <li>
                      <strong>{p.title}</strong>
                      <ul>
                        {p.link && (
                          <li><a href={p.link} target="_blank" rel="noreferrer">Live Project</a></li>
                        )}
                        {/* project-specific socials if provided, otherwise global socials */}
                        {(p.socials && p.socials.length > 0 ? p.socials : GLOBAL_SOCIALS).map(s => (
                          <li key={s.name}><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a></li>
                        ))}
                        {/* optional project-specific blog posts array */}
                        {p.posts && p.posts.length > 0 && (
                          <li>
                            Blog Posts
                            <ul>
                              {p.posts.map(pt => (
                                <li key={pt.url}><a href={pt.url} target="_blank" rel="noreferrer">{pt.title || pt.url}</a></li>
                              ))}
                            </ul>
                          </li>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

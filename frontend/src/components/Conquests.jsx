import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Conquests(){
  const [levels, setLevels] = useState([])

  useEffect(()=>{
    let mounted = true
    axios.get('/api/projects').then(res=>{
      if(!mounted) return
      const sorted = (res.data || []).slice().sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
      setLevels(sorted)
    }).catch(()=>{})
    return ()=> mounted = false
  },[])

  return (
    <section id="conquests" className="conquests container">
      <h2>Space Conquest — Star Trek Levels</h2>
      <p className="muted">Navigate the levels to explore projects and external links.</p>
      <div className="levels">
        {levels.length === 0 && <p className="muted">No levels yet — seed the DB to see sample conquests.</p>}
        {levels.map((p, idx) => (
          <div key={p._id} className="level">
            <div className="level-num">Level {idx + 1}</div>
            <h3>{`Project ${idx + 1}: ${p.title}`}</h3>
            <p className="muted">{p.description}</p>
            <div className="level-actions">
              {p.link ? <a href={p.link} target="_blank" rel="noreferrer" className="btn">Launch Mission</a> : <span className="btn disabled">No Live Link</span>}
              <a href={`#projects`} className="btn ghost">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

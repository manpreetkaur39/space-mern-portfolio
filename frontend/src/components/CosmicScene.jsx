import React, { useEffect, useRef, useState } from 'react'

export default function CosmicScene(){
  const sceneRef = useRef(null)
  const [launching, setLaunching] = useState(false)

  useEffect(()=>{
    const el = sceneRef.current
    if(!el) return
    const onMove = (e)=>{
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.setProperty('--mx', (x * 10).toFixed(3) + 'px')
      el.style.setProperty('--my', (y * 10).toFixed(3) + 'px')
    }
    window.addEventListener('mousemove', onMove)
    return ()=> window.removeEventListener('mousemove', onMove)
  },[])

  const handleLaunch = () => {
    if(launching) return
    setLaunching(true)
    // reset after animation
    setTimeout(()=> setLaunching(false), 2500)
  }

  return (
    <div ref={sceneRef} className="cosmic-scene" aria-hidden="true">
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="star-layer stars-small" />
      <div className="star-layer stars-mid" />
      <div className="star-layer stars-big" />

      <div className="orbit orbit-1">
        <div className="planet planet-earth">
          <div className="satellite" />
        </div>
      </div>

      <div className="orbit orbit-2">
        <div className="planet planet-moon" />
      </div>

      <button className={"rocket-btn " + (launching ? 'launch' : '')} onClick={handleLaunch} title="Launch Rocket">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c1.657 0 3 1.343 3 3 0 .55-.163 1.062-.444 1.5l3.944 3.944c.39.39.39 1.024 0 1.414L15.414 13.9c-.39.39-1.024.39-1.414 0L10.056 9.956A2.998 2.998 0 0 0 8.556 10H6a1 1 0 0 0-1 1v2.556c0 .522.201 1.023.556 1.4l3.944 3.944A3 3 0 1 1 12 2z" fill="#fff" />
        </svg>
      </button>
    </div>
  )
}

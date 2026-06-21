import { useState, useEffect, useRef } from 'react'
import type { Experience } from '../data/experience'
import { experiences } from '../data/experience'
import './Timeline.css'

function TimelineEntry({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (dotRef.current) observer.observe(dotRef.current)
    if (cardRef.current) observer.observe(cardRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="timeline-entry">
      <div
        ref={dotRef}
        className={`timeline-dot${exp.isCurrent ? ' current' : ''}`}
        style={{ transitionDelay: `${index * 0.05}s` }}
      />
      <div
        ref={cardRef}
        className="slide-from-right timeline-card"
        style={{ transitionDelay: `${index * 0.05}s` }}
        onClick={() => setOpen(!open)}
      >
        <div className="timeline-card-header">
          <div>
            <div className="timeline-meta">
              <span className="timeline-date">
                {exp.startDate} — {exp.endDate ?? 'Present'}
              </span>
              {exp.isCurrent && <span className="timeline-current-badge">Current</span>}
            </div>
            <div className="timeline-company">
              {exp.website ? (
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </div>
            <div className="timeline-title">{exp.title}</div>
            <div className="timeline-location">📍 {exp.location}</div>
          </div>
          <span className={`timeline-toggle${open ? ' open' : ''}`}>▾</span>
        </div>

        <div className="timeline-keywords">
          {exp.keywords.map((kw) => (
            <span key={kw} className="keyword-chip">{kw}</span>
          ))}
        </div>

        <div className={`timeline-body${open ? ' open' : ''}`}>
          <p className="timeline-description">{exp.description}</p>
          {exp.highlights.length > 0 && (
            <ul className="timeline-highlights">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
          {exp.website && (
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="timeline-website"
              onClick={(e) => e.stopPropagation()}
            >
              🔗 Visit website
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section className="timeline-section" id="experience">
      <div className="container">
        <div className="timeline-header animate-on-scroll">
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <span className="section-icon">🌿</span>
            Work Experience
          </h2>
          <p className="section-subtitle">20 years building software across 3 continents</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true" />
          {experiences.map((exp, i) => (
            <TimelineEntry key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

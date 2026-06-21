import { useState, useEffect, useRef } from 'react'
import type { Experience } from '../data/experience'
import { experiences } from '../data/experience'
import './Timeline.css'

function TimelineEntry({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLElement>(null)

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
      <article
        ref={cardRef}
        className="slide-from-right timeline-card"
        style={{ transitionDelay: `${index * 0.05}s` }}
      >
        <button
          type="button"
          className="timeline-card-header"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={`${open ? 'Collapse' : 'Expand'} details for ${exp.title} at ${exp.company}`}
        >
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
            <div className="timeline-location"><i className="fas fa-map-marker-alt" aria-hidden="true" /> {exp.location}</div>
          </div>
          <i className={`fas fa-chevron-down timeline-toggle${open ? ' open' : ''}`} aria-hidden="true" />
        </button>

        <div className="timeline-keywords">
          {exp.keywords.map((kw) => (
            <span key={kw} className="keyword-chip">{kw}</span>
          ))}
        </div>

        <div className={`timeline-body${open ? ' open' : ''}`}>
          <p className="timeline-description">{exp.description}</p>
          {exp.highlights.length > 0 && (
            <ul className="timeline-highlights">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
          {exp.website && (
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="timeline-website"
            >
              <i className="fas fa-external-link-alt" aria-hidden="true" /> Visit website
            </a>
          )}
        </div>
      </article>
    </div>
  )
}

export default function Timeline() {
  return (
    <section className="timeline-section" id="experience">
      <div className="container">
        <div className="timeline-header animate-on-scroll">
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <i className="fas fa-briefcase section-icon" aria-hidden="true" />
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

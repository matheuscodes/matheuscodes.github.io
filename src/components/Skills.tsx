import { useEffect, useRef } from 'react'
import { skillCategories, languages } from '../data/skills'
import './Skills.css'

const CIRCUMFERENCE = 220

function SkillBar({ name, level, years }: { name: string; level: number; years: string }) {
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = fillRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            el.style.width = `${level}%`
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [level])

  return (
    <div className="skill-item">
      <div className="skill-label">
        <span className="skill-name">{name}</span>
        <div className="skill-meta">
          <span className="skill-years">{years}</span>
          <span className="skill-percent">{level}%</span>
        </div>
      </div>
      <div className="skill-bar-track">
        <div ref={fillRef} className="skill-bar-fill" />
      </div>
    </div>
  )
}

function LanguageRing({ name, level, percentage }: { name: string; level: string; percentage: number }) {
  const ringRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const el = ringRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const offset = CIRCUMFERENCE - (CIRCUMFERENCE * percentage) / 100
            el.style.strokeDashoffset = `${offset}`
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [percentage])

  const initials = name.slice(0, 2).toUpperCase()

  return (
    <div className="language-item animate-on-scroll">
      <div className="language-ring">
        <svg viewBox="0 0 90 90" width="90" height="90">
          <defs>
            <linearGradient id={`langGrad-${name}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2d6a4f" />
              <stop offset="100%" stopColor="#52b788" />
            </linearGradient>
          </defs>
          <circle className="language-ring-bg" cx="45" cy="45" r="35" />
          <circle
            ref={ringRef}
            className="language-ring-fill"
            cx="45"
            cy="45"
            r="35"
            stroke={`url(#langGrad-${name})`}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
            style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
        </svg>
        <div className="language-initials">{initials}</div>
      </div>
      <span className="language-name">{name}</span>
      <span className="language-level">{level}</span>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const animEls = section.querySelectorAll('.animate-on-scroll')
    animEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills-header animate-on-scroll">
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <i className="fas fa-code section-icon" aria-hidden="true" />
            Skills
          </h2>
          <p className="section-subtitle">Technologies and domains I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skills-category animate-on-scroll">
              <h3 className="skills-category-title">
                <i className={`${cat.icon} section-icon`} aria-hidden="true" /> {cat.category}
              </h3>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        <div className="languages-section">
          <h3 className="languages-title">Languages</h3>
          <div className="languages-grid">
            {languages.map((lang) => (
              <LanguageRing key={lang.name} {...lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

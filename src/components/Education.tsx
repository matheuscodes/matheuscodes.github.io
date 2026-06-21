import { useState, useEffect, useRef } from 'react'
import { degrees, courses, achievements } from '../data/education'
import './Education.css'

export default function Education() {
  const [coursesOpen, setCoursesOpen] = useState(false)
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

    section.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="education-section" id="education" ref={sectionRef}>
      <div className="container">
        <div className="education-header animate-on-scroll">
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <span className="section-icon">🎓</span>
            Education
          </h2>
          <p className="section-subtitle">Academic background and professional development</p>
        </div>

        <div className="degrees-grid">
          {degrees.map((deg) => (
            <div key={deg.institution} className="degree-card animate-on-scroll">
              <div className="degree-icon">🏛️</div>
              <div className="degree-name">{deg.degree}</div>
              <div className="degree-field">{deg.field}</div>
              <div className="degree-institution">{deg.institution}</div>
              <div className="degree-meta">
                📍 {deg.location} · {deg.startYear}–{deg.endYear}
              </div>
            </div>
          ))}
        </div>

        <div className="accordion animate-on-scroll">
          <button
            className="accordion-header"
            onClick={() => setCoursesOpen(!coursesOpen)}
            aria-expanded={coursesOpen}
          >
            <span className="accordion-title">📚 Courses & Certificates</span>
            <span className={`accordion-toggle${coursesOpen ? ' open' : ''}`}>▾</span>
          </button>
          <div className={`accordion-body${coursesOpen ? ' open' : ''}`}>
            <ul className="course-list">
              {courses.map((course) => (
                <li key={course.name} className="course-item">
                  <span className="course-name">{course.name}</span>
                  <span className="course-provider">{course.provider}</span>
                  <span className="course-year">{course.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-on-scroll">
          <h3 className="achievements-title">🏆 Notable Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((ach) => (
              <div key={ach.title} className="achievement-item animate-on-scroll">
                <span className="achievement-icon">{ach.icon}</span>
                <div className="achievement-text">
                  <div className="achievement-title-text">{ach.title}</div>
                  <div className="achievement-year">{ach.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

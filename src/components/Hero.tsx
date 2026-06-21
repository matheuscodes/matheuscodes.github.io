import './Hero.css'

const PARTICLES = Array.from({ length: 12 })

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map((_, i) => (
          <div key={i} className={`particle particle-${(i % 3) + 1}`} />
        ))}
      </div>
      <div className="hero-blob" aria-hidden="true" />

      <div className="hero-content container">
        <div className="hero-text">
          <p className="hero-greeting">Senior Software Engineer &amp; Technical Leader</p>
          <h1 className="hero-name">Matheus Borges Teixeira</h1>
          <p className="hero-subtitle">Backend &amp; Platform Engineering · Java · Kotlin · TypeScript · Python · AWS</p>
          <p className="hero-bio">
            Senior Software Engineer and Technical Leader with 15+ years of experience building cloud-native
            platforms, backend systems, developer tooling, and scalable services. Experienced in Java, Kotlin,
            TypeScript, Python, AWS, architecture modernization, technical debt reduction, and engineering coaching.
            Background spans startups, scale-ups, product management, and technical leadership.
          </p>
          <p className="hero-location">
            <i className="fas fa-map-marker-alt" aria-hidden="true" /> Berlin, Germany
          </p>
          <div className="hero-links">
            <a
              href="https://github.com/matheuscodes"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link primary"
            >
              <i className="fab fa-github" aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matheuscodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link outline"
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="mailto:matheus@matheus.software"
              className="hero-link outline"
            >
              <i className="fas fa-envelope" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </div>

      <a href="#experience" className="hero-scroll" aria-label="Scroll to experience">
        <span>Scroll</span>
        <div className="hero-scroll-arrow" />
      </a>
    </section>
  )
}

import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-name">Matheus Borges Teixeira</div>
            <div className="footer-tagline">Senior Software Engineer &amp; Technical Leader</div>
            <div className="footer-location"><i className="fas fa-map-marker-alt" aria-hidden="true" /> Berlin, Germany</div>
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/matheuscodes"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub"
            >
              <i className="fab fa-github" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/matheuscodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
            </a>
            <a href="mailto:matheus@matheus.software" className="footer-link" aria-label="Email">
              <i className="fas fa-envelope" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© {year} Matheus Borges Teixeira</span>
          <i className="fas fa-leaf footer-leaf" aria-hidden="true" />
          <span>matheus.software</span>
        </div>
      </div>
    </footer>
  )
}

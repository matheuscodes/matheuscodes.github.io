import Nav from './components/Nav'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  )
}

export default App

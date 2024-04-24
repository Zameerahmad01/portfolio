import { useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Intro from './components/intro/Intro.jsx'
import Skills from './components/skills/Skills.jsx'
import Works from './components/works/Works.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App

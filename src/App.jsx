import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './components/About'
import Creation from './components/Creation'
import Footer from './components/Footer'
import './index.css'
import Hero from './components/Hero'


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(prev => !prev);

  return (
    <>
      <Header handleClick={handleClick} menuOpen={menuOpen} />

      <Hero />

      <Menu handleClick={handleClick} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <About />

      <Creation />
      
      <Footer />
    </>
  )
}

export default App

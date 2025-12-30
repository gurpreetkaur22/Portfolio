import React, { useState } from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Loader from './components/Loader'
import Testimonials from './sections/Testimonials'

const App = () => {

  const [loading, setLoading] = useState(true);

  return (
    <div className='h-screen'>
      {loading && <Loader setLoading={setLoading} />}

      {/* Ensure main content is hidden or blurred until loading is done */}
      <main className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Testimonials/>
        <TechStack />
        <Contact />
      </main>
    </div>
  )
}

export default App
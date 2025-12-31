import React, { useState, useEffect } from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Loader from './components/Loader'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('App component mounted')
    console.log('Environment:', {
      NODE_ENV: import.meta.env.MODE,
      BASE_URL: import.meta.env.BASE_URL,
      DEV: import.meta.env.DEV,
      PROD: import.meta.env.PROD,
      VITE_BASE_URL: import.meta.env.VITE_BASE_URL
    })
    console.log('Current URL:', window.location.href)
    console.log('Loading state:', loading)
  }, [])

  useEffect(() => {
    console.log('Loading state changed to:', loading)
  }, [loading])

  console.log('App render - loading state:', loading)

  return (
    <ErrorBoundary>
      <div className='h-screen'>
        {loading && <Loader setLoading={setLoading} />}

        {/* Ensure main content is hidden or blurred until loading is done */}
        <main className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
          <ErrorBoundary>
            <Projects />
          </ErrorBoundary>
          <ErrorBoundary>
            <TechStack />
          </ErrorBoundary>
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
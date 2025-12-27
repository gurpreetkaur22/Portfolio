import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark').matches); 
  })

  useEffect(() => {
    if(isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <nav className="z-1000 w-full flex justify-between py-6 px-10 -mb-15 bbh-bogle-regular text-2xl">
      <div className="logo bbh-bogle-light text-4xl font-light tracking-wider">gk portfolio</div>
      <div className="flex items-center gap-8 nunito-bold tracking-wide">
        <HashLink smooth to="#home">Home</HashLink>
        <HashLink smooth to="#about">About</HashLink>
        <HashLink smooth to="#projects">Work</HashLink>
        <HashLink smooth to="#contact">Contact</HashLink>
        <label class="switch">
          <input class="toggle" type="checkbox" checked={isDark} onChange={() => setIsDark(!isDark)} />
          <span class="slider"></span>
          <span class="card-side"></span>
        </label>

      </div>
    </nav>
  )
}

export default Navbar
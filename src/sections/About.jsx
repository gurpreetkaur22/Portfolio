import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useEffect(() => {
    gsap.fromTo(".circle", {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      top: '0%',
      left: '50%',
      x: '-50%',
      y: '0%',
    },
      {
        width: '100vw',
        height: '100vh',
        borderRadius: '0%',
        top: '0%',
        left: '50%',
        x: '-50%',
        y: '0%',
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-end",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      },
    )
    gsap.fromTo(".about-left", {x: -300}, {
            x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    })
        gsap.fromTo(".about-right", { x: 300 }, {
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });
  }, [])

  return (
    <div id="about" className='h-screen flex justify-center relative overflow-hidden'>
      <div className='circle absolute bg-alt -z-50'></div>
      <div className='flex justify-between w-full px-10 pt-10 text-secondary text-8xl bbh-bogle-regular tracking-wide'>
        <h1 className='about-left'>About </h1>
        <h1 className='about-right'>Section</h1>
      </div>
    </div>
  )
}

export default About
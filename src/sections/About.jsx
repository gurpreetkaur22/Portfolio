import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import Button from '../components/Button';
import { HashLink } from 'react-router-hash-link';

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
          scrub: 1.1,
        }
      },
    )
    // animate headings using xPercent so they end exactly at their centered positions
    gsap.fromTo(
      ".about-left",
      { xPercent: -500 },
      {
        xPercent: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 85%",
          end: "top 40%",
          scrub: 0.8,
        },
      }
    );

    gsap.fromTo(
      ".about-right",
      { xPercent: 500 },
      {
        xPercent: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 85%",
          end: "top 40%",
          scrub: 0.8,
        },
      }
    );

    // Words in .para fade in one-by-one as you scroll
    gsap.set('.para-word', { opacity: 0.2 });

    gsap.to('.para-word', {
      opacity: 1,
      ease: 'power1.out',
      stagger: 0.03,
      scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',
        end: 'center center',
        scrub: 0.5,
      }
    });

    gsap.fromTo('.img', {scale: 0},{
      scale: 1,
      ease: "Power1.out",
      scrollTrigger: {
        trigger: "#about",
        start: 'top 75%',
        end: 'center center',
        scrub: 0.5
      }
    })
  }, [])

  return (
    <div id="about" className='about-section sticky z-1 top-0 -pt-10 h-screen flex flex-col justify-center items-center gap-10 overflow-hidden'>
      <div className='circle absolute bg-alt -z-50'></div>
      <div className='flex justify-center gap-6 w-full px-150 text-secondary text-6xl bbh-bogle-regular tracking-wide text-center'>
        <h1 className='about-left text-left'>About</h1>
        <h1 className='about-right text-right'>Section</h1>
      </div>
      <h1 className='para px-70 text-3xl text-accent text-center nunito'>
        {'Hi, I\'m Gurpreet. I don\'t just build websites — I engineer experiences. I\'m a MERN-Stack Web Developer who loves turning ideas into interactive, animated, and performance-driven products. From smooth micro-interactions to real-time applications, I focus on making the web feel alive, intuitive, and human. I work with React, Node.js, MongoDB, and modern animation tools like GSAP & Framer Motion to craft interfaces that aren\'t just functional — they\'re memorable.'.split(' ').map((word, i) => (
          <span key={i} className='para-word inline-block mr-1 line-clamp-3'>{word}</span>
        ))}
      </h1>
      <HashLink smooth to="#projects"><Button/></HashLink>
      <RiTailwindCssFill className='img absolute text-accent w-15 h-15 bottom-10 opacity-50' />
      <FaReact className='img absolute text-accent w-15 h-15 left-30 top-20 opacity-50' />
      <SiMongodb className='img absolute text-accent w-15 h-15 right-30 top-20 opacity-50' />
      <SiExpress className='img absolute text-accent w-15 h-15 right-50 bottom-15 opacity-50' />
      <FaNodeJs className='img absolute text-accent w-15 h-15 left-50 bottom-15 opacity-50' />
    </div>
  )
}

export default About
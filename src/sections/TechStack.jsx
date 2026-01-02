import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import skill icons
import express from "../assets/skills/express.svg"
import react from "../assets/skills/react.svg"
import mongodb from "../assets/skills/mongodb.svg"
import node from "../assets/skills/nodejs.svg"
import tailwind from "../assets/skills/tailwindcss.svg"
import fMotion from "../assets/skills/motion.svg"
import socketio from "../assets/skills/socketio.svg"
import gsapIcon from "../assets/skills/gsapp.png"
import html from "../assets/skills/html.svg"
import css from "../assets/skills/css.svg"
import js from "../assets/skills/javascript.svg"
import scss from "../assets/skills/scss-svgrepo-com.svg"
import mysql from "../assets/skills/mysql.svg"
import restAPI from "../assets/skills/restapi.svg"
import jwt from "../assets/skills/jwt.svg"
import git from "../assets/skills/git.svg"
import github from "../assets/skills/github.svg"
import vsCode from "../assets/skills/vscode.svg"
import postmanIcon from "../assets/skills/postman.svg"
import render from "../assets/skills/render.jpg"
import vercel from "../assets/skills/vercel.svg"

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useEffect(() => {
    // Animate main title and subtitle
    gsap.fromTo('.main-title',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#techstack',
          start: 'top 90%',
          end: 'top 70%',
          scrub: 0.5,
          fastScrollEnd: true,
        }
      }
    );

    gsap.fromTo('.subtitle',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#techstack',
          start: 'top 85%',
          end: 'top 65%',
          scrub: 0.5,
          fastScrollEnd: true,
        }
      }
    );

    // Animate category titles
    gsap.fromTo('.category-title',
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#techstack',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.5,
          fastScrollEnd: true,
        }
      }
    );

    // Animate skill icons
    gsap.fromTo('.skill-item',
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '#techstack',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          fastScrollEnd: true,
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="techstack" className='relative z-2 bg-alt h-screen '>
      <h1 className='bbh-bogle-regular text-center pt-13 text-6xl text-secondary main-title'>Tech stack</h1>
      <p className='text-center nunito pt-5 text-2xl pb-5 subtitle'>Technologies and tools I use to bring ideas to life</p>

      <div className='flex justify-center'>

        <div className='flex flex-col gap-5 items-start pt-5'>
          {/* Frontend */}
          <div className='flex gap-10 items-center justify-center'>
            <h1 className='text-3xl nunito-bold category-title'>{skillCategories[0].title}</h1>
            <div className='flex gap-2 items-center'>
              {skillCategories[0].skills.map((skill, index) => (
                <div key={index} className="flex flex-col relative items-center justify-center gap-2 h-25 w-30 bg-gray-50 rounded-xl hover:bg-gray-100 shadow-lg hover:shadow-[0_0_14px_var(--accent)] transition-colors cursor-pointer group skill-item ">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 w-12 mt-2 group-hover:scale-110 transition-transform"
                  />
                  {/* Tooltip */}
                  <div className="text-secondary px-2 py-1 rounded text-[.8em] nunito-bold">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className='flex gap-10 items-center justify-center'>
            <h1 className='text-3xl nunito-bold category-title'>{skillCategories[1].title}</h1>
            <div className='flex gap-2 items-center'>
              {skillCategories[1].skills.map((skill, index) => (
                <div key={index} className="flex flex-col relative items-center justify-center gap-2 h-25 w-30 bg-gray-50 rounded-xl hover:bg-gray-100 shadow-lg hover:shadow-[0_0_14px_var(--accent)] transition-colors cursor-pointer group skill-item ">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 w-12 mt-2 group-hover:scale-110 transition-transform"
                  />
                  {/* Tooltip */}
                  <div className="text-secondary px-2 py-1 rounded text-[.8em] nunito-bold">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Database */}
          <div className='flex gap-10 items-center justify-center'>
            <h1 className='text-3xl nunito-bold category-title'>{skillCategories[2].title}</h1>
            <div className='flex gap-2 items-center'>
              {skillCategories[2].skills.map((skill, index) => (
                <div key={index} className="flex flex-col relative items-center justify-center gap-2 h-25 w-30 bg-gray-50 rounded-xl hover:bg-gray-100 shadow-lg hover:shadow-[0_0_14px_var(--accent)] transition-colors cursor-pointer group skill-item ">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 w-12 mt-2 group-hover:scale-110 transition-transform"
                  />
                  {/* Tooltip */}
                  <div className="text-secondary px-2 py-1 rounded text-[.8em] nunito-bold">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Auth */}
          <div className='flex gap-10 items-center justify-center'>
            <h1 className='text-3xl nunito-bold category-title'>{skillCategories[3].title}</h1>
            <div className='flex gap-2 items-center'>
              {skillCategories[3].skills.map((skill, index) => (
                <div key={index} className="flex flex-col relative items-center justify-center gap-2 h-25 w-30 bg-gray-50 rounded-xl hover:bg-gray-100 shadow-lg hover:shadow-[0_0_14px_var(--accent)] transition-colors cursor-pointer group skill-item ">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 w-12 mt-2 group-hover:scale-110 transition-transform"
                  />
                  {/* Tooltip */}
                  <div className="text-secondary px-2 py-1 rounded text-[.8em] nunito-bold">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Tools */}
          <div className='flex gap-10 items-center justify-center'>
            <h1 className='text-3xl nunito-bold category-title'>{skillCategories[4].title}</h1>
            <div className='flex gap-2 items-center'>
              {skillCategories[4].skills.map((skill, index) => (
                <div key={index} className="flex flex-col relative items-center justify-center gap-2 h-25 w-30 bg-gray-50 rounded-xl hover:bg-gray-100 shadow-lg hover:shadow-[0_0_14px_var(--accent)] transition-colors cursor-pointer group skill-item ">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 w-12 mt-2 group-hover:scale-110 transition-transform"
                  />
                  {/* Tooltip */}
                  <div className="text-secondary px-2 py-1 rounded text-[.8em] nunito-bold">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default TechStack

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
      { name: "JavaScript", icon: js },
      { name: "SCSS", icon: scss },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "React.js", icon: react },
      { name: "GSAP", icon: gsapIcon },
      { name: "Framer Motion", icon: fMotion },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: node },
      { name: "Express.js", icon: express },
      { name: "Socket.io", icon: socketio },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: mysql },
      { name: "MongoDB", icon: mongodb },
    ]
  },
  {
    title: "APIs and Authentication",
    skills: [
      { name: " RESTful API", icon: restAPI },
      { name: "JWT", icon: jwt },
    ]
  },
  {
    title: "Tools and Platforms",
    skills: [
      { name: "Git", icon: git },
      { name: "Github", icon: github },
      { name: "VS Code", icon: vsCode },
      { name: "Postman", icon: postmanIcon },
      { name: "Vercel", icon: vercel },
      { name: "Render", icon: render },
    ]
  },
]
import { useRef } from "react";
import { FaArrowTrendDown } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

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

import novaImg from "../assets/nova.png";
import liveInPaintsImg from "../assets/liveinpaints.png";
import portfolioResponsive from "../assets/portfolioResponsive.png";
import fylla from "../assets/fylla.png";
import productDesigner from "../assets/productDesigner.png";

import novaai from "../assets/videos/novaai.mp4"
import liveinpaintsV from "../assets/videos/liveinpaints.mp4"
import firstPortfolioV from "../assets/videos/firstPortfolio.mp4"
import fyllaV from "../assets/videos/fylla.mp4"
import productDesignerV from "../assets/videos/productDesigner.mp4"

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start center", "end center"],
  });

  // Horizontal scroll transforms for different screen sizes
  const xMobile = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-300%"]);
  const xTablet = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-200%"]);
  const xDesktop = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-450%"]);

  return (
    <div ref={scrollContainerRef} className="relative h-[700vh] z-2">
      <section
        id="projects"
        className="projects-section sticky top-0 h-screen bg-primary overflow-hidden"
      >
        <div className="flex items-center h-1/6 px-10 absolute">
          <h1 className="text-6xl text-secondary bbh-bogle-regular">
            Projects
          </h1>
          <FaArrowTrendDown className="text-5xl text-secondary ml-4" />
        </div>

        <div className="overflow-hidden w-full h-6/6 pt-7">
          <motion.div
            className="flex items-center h-screen px-10 will-change-transform pl-[20%]"
            style={{
              x: typeof window !== "undefined"
                ? window.innerWidth < 768
                  ? xMobile
                  : window.innerWidth < 1024
                    ? xTablet
                    : xDesktop
                : xDesktop,
            }}
          >
            <div className="flex gap-96 min-w-max relative">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

// Projects data with individual skills arrays
const projects = [
  {
    id: 1,
    url: novaImg,
    video: novaai,
    title: "Nova AI",
    about: "A modern, full-stack AI chat application built with React and Node.js, featuring real-time messaging, user authentication, and an intuitive interface for seamless AI conversations.",
    liveUrl: "https://novaai-1-93pi.onrender.com",
    githubUrl: "https://github.com/gurpreetkaur22/NovaAI",
    skills: [
      { name: "React", icon: react },
      { name: "Node.js", icon: node },
      { name: "Express.js", icon: express },
      { name: "MongoDB", icon: mongodb },
      { name: "SocketIO", icon: socketio },
      { name: "Tailwind CSS", icon: tailwind },
    ]
  },
  {
    id: 2,
    url: liveInPaintsImg,
    video: liveinpaintsV,
    title: "Live In Paints",
    about: "LiveInPaints is a responsive, animation-rich frontend project built during the Sheryians Coding School Hackathon. It secured 5th place among 350+ participants and was featured on Sheryians’ YouTube channel.",
    liveUrl: "https://live-in-paints.vercel.app/",
    githubUrl: "https://github.com/gurpreetkaur22/LiveInPaints",
    skills: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "GSAP", icon: gsapIcon },
      { name: "Framer Motion", icon: fMotion }
    ]
  },
  {
    id: 3,
    url: portfolioResponsive,
    video: firstPortfolioV,
    title: "Responsive Portfolio",
    about: "A clean, responsive personal portfolio built using HTML, CSS, and SCSS to practice layout structuring, typography, and modern UI design principles across devices.",
    liveUrl: "https://gurpreetkaur22.github.io/Responsive-Portfolio/",
    githubUrl: "https://github.com/gurpreetkaur22/Responsive-Portfolio",
    skills: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "SCSS", icon: scss },
    ]
  },
  {
    id: 4,
    url: fylla,
    video: fyllaV,
    title: "Fylla Clone",
    about: "A fully responsive UI clone built using HTML, CSS, and SCSS, focused on layout accuracy, typography, spacing, and modern design responsiveness.",
    liveUrl: "https://gurpreetkaur22.github.io/Fylla/",
    githubUrl: "https://github.com/gurpreetkaur22/Fylla",
    skills: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "SCSS", icon: scss },
    ]
  },
  {
    id: 5,
    url: productDesigner,
    video: productDesignerV,
    title: "Product Designer",
    about: "An interactive website clone built using HTML, CSS, and JavaScript, featuring GSAP animations, a custom cursor-follow effect, hover-based image reveals, and Locomotive Scroll for smooth scrolling.",
    liveUrl: "https://gurpreetkaur22.github.io/Product-Designer/",
    githubUrl: "https://github.com/gurpreetkaur22/Product-Designer",
    skills: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "GSAP", icon: gsapIcon },
    ]
  },
];
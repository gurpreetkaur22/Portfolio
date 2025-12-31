import { useRef } from "react";
import { FaArrowTrendDown } from "react-icons/fa6";
import novaImg from "../assets/nova.png";
import liveInPaintsImg from "../assets/liveinpaints.png";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

// Import skill icons
import express from "../assets/skills/icons8-express-js-100.png"
import react from "../assets/skills/icons8-react-100.png"
import mongodb from "../assets/skills/icons8-mongodb-100.png"
import node from "../assets/skills/icons8-nodejs-100.png"
import tailwind from "../assets/skills/icons8-tailwindcss-100.png"
import fMotion from "../assets/skills/motion.svg"
import socketio from "../assets/skills/socketio.svg"
import gsapIcon from "../assets/skills/gsapp.png"

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

        <div className="overflow-hidden w-full h-5/6 pt-5">
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
    ]
  },
  {
    id: 2,
    url: liveInPaintsImg,
    title: "Live In Paints",
    about: "An interactive painting and art showcase platform where artists can display their work, connect with clients, and manage their portfolio with a beautiful, responsive design.",
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
    url: novaImg,
    title: "E-Commerce Platform",
    about: "A comprehensive e-commerce solution with user authentication, payment integration, inventory management, and admin dashboard for complete online store management.",
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    skills: [
      { name: "React", icon: react },
      { name: "Express.js", icon: express },
      { name: "MongoDB", icon: mongodb },
      { name: "Node.js", icon: node },
      { name: "Tailwind CSS", icon: tailwind }
    ]
  },
  {
    id: 4,
    url: liveInPaintsImg,
    title: "Task Management App",
    about: "A collaborative task management application with real-time updates, team collaboration features, project tracking, and intuitive drag-and-drop functionality.",
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/yourusername/taskmanager",
    skills: [
      { name: "React", icon: react },
      { name: "Framer Motion", icon: fMotion },
      { name: "Express.js", icon: express },
      { name: "MongoDB", icon: mongodb }
    ]
  },
];
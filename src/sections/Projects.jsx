import { useRef } from "react";
import { FaArrowTrendDown } from "react-icons/fa6";
import novaImg from "../assets/nova.png";
import liveInPaintsImg from "../assets/liveinpaints.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const scrollContainerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start center", "end center"],
  });

  // Horizontal scroll transforms for different screen sizes (same as testimonials)
  const xMobile = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-300%"]); // Mobile
  const xTablet = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-200%"]); // Tablet
  const xDesktop = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-450%"]); // Desktop

  return (
    <div ref={scrollContainerRef} className="relative h-[700vh] z-2">
      <section
        id="projects"
        className="projects-section sticky top-0 h-screen bg-primary overflow-hidden"
      >
        <div className="flex items-center h-1/6 px-10">
          <h1 className="text-6xl text-secondary bbh-bogle-regular">
            Projects
          </h1>
          <FaArrowTrendDown className="text-5xl text-secondary ml-4" />
        </div>
        
        <div className="overflow-hidden w-full h-5/6">
          <motion.div 
            className="flex items-center h-full px-10 will-change-transform pl-[25%]"
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
            <div className="flex items gap-96 min-w-max">
              {projects.map((project) => {
                return (
                  <img 
                    key={project.id} 
                    className="h-96 w-auto object-cover rounded-lg" 
                    src={project.url}
                    alt={project.title}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

const projects = [
  {
    url: novaImg,
    bgImg: novaImg,
    title: "Nova Ai",
    id: 1,
  },
  {
    url: liveInPaintsImg,
    bgImg: liveInPaintsImg,
    title: "Live In Paints",
    id: 2,
  },
  {
    url: novaImg,
    bgImg: novaImg,
    title: "Nova Ai",
    id: 3,
  },
  {
    url: liveInPaintsImg,
    bgImg: liveInPaintsImg,
    title: "Live In Paints",
    id: 4,
  },
];

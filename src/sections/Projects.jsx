import React, { useRef } from "react";
import { FaArrowTrendDown } from "react-icons/fa6";
import novaImg from "../assets/nova.png";
import liveInPaintsImg from "../assets/liveinpaints.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div
      ref={targetRef}
      id="projects"
      className="projects-section relative z-2 bg-primary h-screen overflow-hidden"
    >
      <div className="flex items-center h-2/12">
        <h1 className="text-6xl p-10 text-secondary bbh-bogle-regular">
          Projects
        </h1>
        <FaArrowTrendDown className="text-5xl text-secondary" />
      </div>
      <motion.div style={{x}} className="sticky top-0 flex items-center h-10/12 overflow-hidden px-10">
        <div className="flex gap-10">
          {projects.map((project) => {
            return (
              <img key={project.id} className="h-70" src={project.url}></img>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;

const projects = [
  {
    url: novaImg,
    title: "Nova Ai",
    id: 1,
  },
  {
    url: liveInPaintsImg,
    title: "Live In Paints",
    id: 2,
  },
  {
    url: novaImg,
    title: "Nova Ai",
    id: 3,
  },
  {
    url: liveInPaintsImg,
    title: "Live In Paints",
    id: 4,
  },
];

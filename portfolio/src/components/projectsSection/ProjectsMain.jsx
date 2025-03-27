import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const projects = [
  {
    name: "Nova Motion – React & Tailwind UI",
    year: "March 2023",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://67e062eb6b50607c6a402b00--lively-swan-6d2b7a.netlify.app/",
  },
  {
    name: "CRUD App (MERN Stack)",
    year: "Sept 2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://github.com/fahad-saleem9/MERN-stack-App-Crud",
  },
  {
    name: "Task Manager App(MERN STACK)",
    year: "Jan 2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://task-manager-911-ui-seven.vercel.app/",
  },
  {
    name: "Bank of Luck",
    year: "May 2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
         variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
      >

      <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => (
          <SingleProject
            key={index}
            name={item.name}
            year={item.year}
            align={item.align}
            image={item.image}
            link={item.link} // Pass the link here
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;

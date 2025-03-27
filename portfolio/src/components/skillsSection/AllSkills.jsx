import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiPython } from "react-icons/si"; // Import Python icon
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si"; // Import Redux icon
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Python",
    icon: SiPython, // Added Python
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux, // Added Redux
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
             variants={fadeIn("up", `0.${index}`)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0 }}
            >
              
              <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;

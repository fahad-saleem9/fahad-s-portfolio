import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Methologik",
    date: "march 2023 - july 2023",
    responsibilities: [
      "Designing and developing modern web interfaces.",
      "Working with React.js and Tailwind CSS.",
      "Ensuring responsive and user-friendly designs.",
      "Improving UI/UX for better user experience.",
    ],
  },
  {
    job: "Software Engineering Student",
    company: "SSUET Karachi",
    date: "2021 - Present",
    responsibilities: [
      "Learning software engineering concepts and development.",
      "Building projects using MERN Stack.",
      "Gaining hands-on experience in frontend and UI/UX.",
      "Working on Final Year Project (FYP) with modern technologies.",
    ],
  },
  {
    job: "WordPress Developer",
    company: "Freelance",
    date: "2021 - 2023",
    responsibilities: [
      "Developed and customized WordPress websites.",
      "Worked with themes and plugins for functionality.",
      "Optimized websites for performance and SEO.",
      "Integrated third-party APIs and payment gateways.",
    ],
  },
];

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
    
    className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4">
      <p className="font-bold text-cyan text-lg">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white text-sm">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-cyan">{number}</p>
      <p className="font-bold text-xl text-lightGrey uppercase">{text}</p>
    </div>
  );
};

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-4">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
          )}
        </div>
      ))}
    </div>
  );
};

const ExperienceText = () => {
  return (
    <motion.div 
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
    className="text-center mt-16">
      <h2 className="text-4xl md:text-6xl text-cyan font-bold">Experience</h2>
    </motion.div>
  );
};

const ExperienceTopLeft = () => {
  return (
    <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
    className="flex flex-col gap-6 w-full sm:w-[300px] text-center">
      <p className="text-orange font-bold uppercase text-3xl">Since 2022</p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="10" text="Websites" />
      </div>
      <p className="text-white text-justify px-4">
        3+ Years of Academic Experience | Software Engineering Student Gained
        hands-on experience in Frontend Development. React.js, JavaScript,
        Tailwind CSS and built multiple academic projects, applying UI/UX
        design, problem-solving, and modern web technologies.
      </p>
    </motion.div>
  );
};

const ExperienceTopMiddle = () => {
  return (
    <motion.div 
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
    className="lg:w-[35%] md:w-[50%] sm:w-[80%] flex justify-center">
      <img
        src="/images/experience-image.png"
        alt="Experience"
        className="w-full max-w-[400px] rounded-xl"
      />
    </motion.div>
  );
};

const ExperienceTopRight = () => {
  return (
    <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
    className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-6 rounded-xl">
      <p className="text-lg text-lightGrey text-justify">
        Experienced in{" "}
        <span className="font-bold text-white">web development</span> during my
        Software Engineering studies. Proficient in{" "}
        <span className="font-bold text-white">
          HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and MERN Stack
          (MongoDB, Express.js, React.js, Node.js).
        </span>{" "}
        Built responsive websites with a focus on performance and scalability.
        Passionate about problem-solving and continuous learning.
      </p>
    </motion.div>
  );
};

const ExperienceTop = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mt-10">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-6">
      <ExperienceText />
      <ExperienceTop />
      <div className="w-full h-1 mt-6 bg-lightBrown"></div>
      <AllExperiences />
    </div>
  );
};

export default ExperienceMain;

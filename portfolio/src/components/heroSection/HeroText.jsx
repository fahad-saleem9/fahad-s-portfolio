import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Front-End Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        FAHAD SALEEM
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white text-justify"
      >
        A passionate Web Developer with a strong foundation in front-end
        technologies, eager to learn and grow.
      </motion.p>

      {/* Resume Button */}
      <div className="flex sm:justify-center md:justify-start">
        <motion.a
          href="/resume.pdf" // Yahan apni resume file ka path dalain
          download="Fahad_Saleem_Resume.pdf"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="mt-6 px-6 py-3 bg-orange text-white font-semibold rounded-lg hover:bg-white hover:text-orange transition-all duration-300"
        >
          Download Resume
        </motion.a>
      </div>
    </div>
  );
};

export default HeroText;

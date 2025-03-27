import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const AboutMe = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {" "}
      {/* Global overflow fix */}
      <div
        id="about"
        className="flex flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center overflow-hidden"
      >
        {/* About Me Text */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="flex flex-col md:items-start sm:ml-5 md:text-left sm:text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-cyan mb-6 sm:mb-10">
            About Me
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-justify">
            I’m Fahad Saleem, a Front-end Developer and a Software Engineering
            student at Sir Syed University, Karachi. I have two years of
            experience in graphic design, which has helped me develop a strong
            sense of user-friendly and visually appealing interfaces. I have
            expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS.
            Currently, I am learning the MERN stack and mobile app development
            to expand my skill set. I enjoy building interactive web
            applications and ensuring a smooth user experience. My goal is to
            become a full-stack developer and create high-quality solutions that
            make a difference.
          </p>
        </motion.div>

        {/* About Me Image */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="relative w-full max-w-[300px] mx-auto md:mx-0 md:ml-10 lg:ml-16 overflow-hidden"
        >
          <div className="relative w-full aspect-[3/4] rounded-[50px] sm:rounded-[70px] md:rounded-[80px] overflow-hidden">
            <img
              src="/images/about-me.jpg"
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Background Shape FIX */}
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-orange 
                        rounded-bl-[70px] sm:rounded-bl-[90px] md:rounded-bl-[100px]
                        rounded-tr-[70px] sm:rounded-tr-[90px] md:rounded-tr-[100px]
                        rounded-br-[10px] sm:rounded-br-[15px] md:rounded-br-[20px] 
                        rounded-tl-[10px] sm:rounded-tl-[15px] md:rounded-tl-[20px] 
                        -z-10 overflow-hidden"
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;

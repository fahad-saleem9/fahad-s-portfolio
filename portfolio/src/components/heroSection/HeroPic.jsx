import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
    className="h-full flex items-center justify-center">
      <img
        src="../../public/images/fahadpic1.png"
        alt="fahad saleem"
        className="h-[350px] sm:h-[300px] md:h-[550px] lg:h-[500px] 
             w-[350px] sm:w-[450px] md:w-[550px] lg:w-[650px] 
             object-cover"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="h-[70%] sm:h-[60%] md:h-[50%] lg:h-[50%] min-h-[300px] lg:min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;

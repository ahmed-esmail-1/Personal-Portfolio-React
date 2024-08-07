import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

// Helpful site https://docs.pmnd.rs/
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex 
          flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5  rounded-full bg-white" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I design and develop software, <br className="sm:block hidden" />
            including backend, frontend, and web applications
          </p>
        </div>
      </div>
      {/* The image */}
      <ComputersCanvas />

      {/* Phone scroll icon */}
      <div className="absolute xs:hidden bottom-2 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

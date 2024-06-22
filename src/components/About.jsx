import React from "react";
// import tilt from "react-tilt";

// import motion from "framer-motion"; // this won't work
import { motion } from "framer-motion"; // Use named import for 'framer-motion'

// import styles from "../style"; // this won't work
import { styles } from "../style";
// import services from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    // React fragment <> </>
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Experienced Software Engineer and Full-Stack Developer with a proven
        track record of creating robust applications and solutions. Proficient
        in a wide range of programming languages including C#, Java, JavaScript,
        and C++, with expertise in backend and frontend development. Known for
        optimizing performance and enhancing user experience. Strong
        collaborator, effective problem solver, and dedicated to delivering
        high-quality results. Open to new opportunities and challenges in the
        tech industry.
      </motion.p>
    </>
  );
};

export default About;

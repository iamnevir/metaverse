"use client";

import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
} from "@/utils/motion";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="yPaddings sm:pl-16 pl-6">
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.5,
              delayChildren: 0.5,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant({ delay: 1.1 })}
            className="heroHeading"
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant({ delay: 1.2 })}
            className="flex flex-row justify-center items-center"
          >
            <h1 className="heroHeading">Ma</h1>
            <div className="heroDText" />
            <h1 className="heroHeading">Ness</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn({
            direction: "right",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img
            src="/cover.png"
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

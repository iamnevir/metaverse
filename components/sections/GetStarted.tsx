"use client";

import { motion } from "framer-motion";

import { startingFeatures } from "../../constants";
import { staggerContainer, fadeIn, planetVariants } from "../../utils/motion";
import { TitleText, TypingText } from "../CustomTexts";
import StartSteps from "../StartSteps";

const GetStarted = () => (
  <section className={`paddings relative z-10`}>
    <motion.div
      variants={staggerContainer({ staggerChildren: 0.5, delayChildren: 0.5 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants({ direction: "left" })}
        className={`flex-1 flexCenter`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn({
          direction: "left",
          type: "tween",
          delay: 0.2,
          duration: 1,
        })}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;

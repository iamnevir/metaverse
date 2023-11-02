"use client";

import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../CustomTexts";
import { newFeatures } from "@/constants";
import NewFeatures from "../NewFeatures";

const WhatsNew = () => (
  <section className={`paddings relative z-10`}>
    <motion.div
      variants={staggerContainer({ staggerChildren: 0.5, delayChildren: 0.5 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn({
          direction: "right",
          type: "tween",
          delay: 0.2,
          duration: 1,
        })}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What&apos;s new about Metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants({ direction: "right" })}
        className={`flex-1 flexCenter`}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;

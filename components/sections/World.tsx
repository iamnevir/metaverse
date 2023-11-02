"use client";

import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../CustomTexts";
import Image from "next/image";

const World = () => (
  <section className={`paddings relative z-10`}>
    <motion.div
      variants={staggerContainer({ staggerChildren: 0.5, delayChildren: 0.5 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn({
          direction: "up",
          type: "tween",
          delay: 0.3,
          duration: 1,
        })}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image
          fill
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={60}
            height={60}
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={60}
            height={60}
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={60}
            height={60}
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { exploreWorlds } from "../../constants";
import { staggerContainer } from "../../utils/motion";
import { TitleText, TypingText } from "../CustomTexts";
import ExploreCard from "../ExploreCard";

const Explore = () => {
  return (
    <section className="paddings" id="explore">
      <motion.div
        variants={staggerContainer({
          staggerChildren: 0.5,
          delayChildren: 0.5,
        })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard key={world.id} {...world} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

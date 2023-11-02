"use client";

import { motion } from "framer-motion";

const StartSteps = ({ number, text }: { number: string; text: string }) => (
  <div className={`styles.flexCenter flex-row`}>
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white">{number}</p>
    </motion.div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;


import React from "react";
import { motion } from "framer-motion";
import type { StepsSectionProps } from "../../types/Service";

const StepsDescriptions: React.FC<StepsSectionProps> = ({
  stepsData,
  direction = "left",
}) => {
  const xDirection = direction === "left" ? -80 : 80;

  return (
    <div
      className="w-full lg:w-full order-1 lg:order-1"
    >
      {stepsData.map((step, index) => (
        <motion.div
          initial={{ x: xDirection, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}

          key={step.id}
          className={`flex flex-col sm:flex-row items-start md:mx-4 2xl:mx-10 py-6 sm:py-8 ${index !== stepsData.length - 1 ? "border-b border-gray-400" : ""
            }`}
        >
          <div className="w-full  mb-4 ">
            <div className="flex items-center gap-4 mb-2   max-w-[200px] ">
              <span className="font-main font-medium text-[20px]   2xl:text-[24px] leading-[30px]  text-AiCardText">
                {step.title}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-NavLinks font-libresans font-bold">
                Step {step.step}
              </span>
            </div>
          </div>

          <div className="w-full max-w-[280px]">
            <p className="font-main font-medium text-[14px]  2xl:text-[15px] leading-5 tracking-[0%] text-gray-700 opacity-80 text-left">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StepsDescriptions;

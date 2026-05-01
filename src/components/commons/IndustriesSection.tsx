import { motion } from "framer-motion";
import type { ImageTextSectionProps } from "../../types/Service";

export default function IndustriesSection({
  imageSrc,
  heading,
  description,
  reverse = false,
}: ImageTextSectionProps) {
  return (
    <section
      className={`w-[90%] mx-auto overflow-hidden flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center md:gap-16 gap-10`}
    >
      {/* ✅ Image Animation (sirf in animation) */}
      <motion.div
        className="overflow-hidden lg:w-[500px]  w-[310px] mx-auto md:mx-0"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src={imageSrc}
          alt={heading}
          className="object-cover w-full h-full block"
        />
      </motion.div>

      {/* ✅ Text Animation (sirf in animation) */}
      <motion.div
        className="max-w-[460px] text-left flex flex-col gap-2 md:mb-15 2xl:mb-15 mb-0 sm:gap-3"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="font-main font-medium text-[32px] md:text-[42px] xl:text-[44px] 2xl:text-[48px] leading-[32px] md:leading-[50px] tracking-[-0.01em] text-black">
          {heading}
        </h2>

        <p className="font-main font-medium text-[14px] md:text-[20px] xl:text-[22px] 2xl:text-[22px] leading-[22px] md:leading-[30px] tracking-[-0.015em] text-gray-500 max-w-[300px] md:max-w-[450px] text-left">
          {description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group mt-2 md:mt-3 w-fit self-start cursor-pointer font-main font-bold text-[16px] ] lg:text-[18px] leading-[22px] tracking-[-0.018em] text-ReadmoreText hover:text-[#EB8642] transition-all duration-300 flex items-center gap-2"
        >
          Read More
          <img
            className="relative -top-2 right-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125 rotate-[0deg]"
            src="/Images/Services/AI-Development/arrow.png"
            width={25}
            alt="arrow"
          />
        </motion.button>
      </motion.div>
    </section>
  );
}

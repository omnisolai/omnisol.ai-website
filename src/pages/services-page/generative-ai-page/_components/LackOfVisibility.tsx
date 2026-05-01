import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import StepsDecsriptions from "../../../../components/commons/StepsDescriptions";


const LackOfVisibility = () => {
  const stepsData = [
    { id: 1, step: "01", title: "Lack of Visibility", description: "Get a clear strategy for how generative AI fits into your business. From use-case discovery to implementation roadmaps, we guide every step." },
    { id: 2, step: "02", title: "Insecure", description: "Get a clear strategy for how generative AI fits into your business. From use-case discovery to implementation roadmaps, we guide every step." },
    { id: 3, step: "03", title: "Construction", description: "Get a clear strategy for how generative AI fits into your business. From use-case discovery to implementation roadmaps, we guide every step." },
    { id: 4, step: "04", title: "Construction", description: "Get a clear strategy for how generative AI fits into your business. From use-case discovery to implementation roadmaps, we guide every step." },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // 👈 har dafa visible hone par animation chale
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // ✅ sirf IN animation
    }
  }, [inView, controls]);


  // ✅ Image animation (Right se in)
  const imageVariant: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.6, ease: [0.25, 0.1, 0.25, 1], type: "tween" },
    },
  };

  return (
    <div
      ref={ref}
      className="w-[90%] mx-auto min-h-[600px] py-12 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 md:p-6 2xl:p-2"
    >

      <StepsDecsriptions stepsData={stepsData}   />

      {/* ✅ Image Section */}
      <motion.div
        className="relative w-full md:w-[40%] 2xl:w-[40%] h-[400px] lg:h-[800px] flex items-center justify-center order-2 lg:order-2 mt-20 md:mt-0 2xl:mt-0"
        variants={imageVariant}
        initial="hidden"
        animate={controls}
      >
        {/* ✅ Main Logo */}
        <img
          src="/Images/BigLogo.webp"
          alt="Omnisol Logo"
          className="absolute object-contain z-50 left-[50px] md:left-[100px] 2xl:left-[170px] -top-[92px] md:top-[76px] w-[200px] h-[200px] md:w-[220px] md:h-[220px] 2xl:w-[220px] 2xl:h-[220px]"
        />

        {/* ✅ White (Inverted) Logo */}
        <img
          src="/Images/BigLogo.webp"
          alt="Omnisol White"
          className="absolute object-contain z-50 left-[50px] md:left-[100px] 2xl:left-[170px] -top-[92px] md:top-[74px] w-[200px] h-[200px] md:w-[220px] md:h-[220px] 2xl:w-[220px] 2xl:h-[220px]"
          style={{
            filter: "brightness(0) invert(1)",
            clipPath: "inset(50% 0 0 0)",
          }}
        />

        <div className="absolute w-[300px] h-[380px] md:w-[420px] 2xl:w-[420px] md:h-[430px] 2xl:h-[430px] bg-rounedCardBg rounded-bl-[150px] sm:rounded-bl-[180px] md:rounded-bl-[207px] flex items-center justify-center z-40">
          <h2
            className="relative left-24 md:left-40 2xl:left-40 text-white font-main font-medium text-[30px] md:text-[60px] 2xl:text-[60px] leading-[80px] sm:leading-[96px] md:leading-[112px] tracking-[-0.018em]"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(0deg)",
              textAlign: "center",
            }}
          >
            Omnisol AI
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default LackOfVisibility;

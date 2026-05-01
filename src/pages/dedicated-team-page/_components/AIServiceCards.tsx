import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const serviceData = [
  {
    title: "Your Team, Ready to Go in Just 2 Weeks",
    description: "Discover & Define – Understand your project’s scope, goals, and impact.",
    image: "/Images/AICard/GenerativeAI.webp",
  },
  {
    title: "Curate & Select",
    description: "Choose from a handpicked pool of top developers and AI specialists.",
    image: "/Images/AICard/Copilots.webp",
  },
  {
    title: "Fast Onboarding",
    description: "Seamless integration with your tools, culture, and workflow.",
    image: "/Images/AICard/customeModel.webp",
  },
  {
    title: "Collaborative Delivery",
    description: "Transparent, agile development with constant updates.",
    image: "/Images/AICard/Fine-tuning.webp",
  },
  {
    title: "Scalable & Supported",
    description: "Expand or contract the team as your needs change.",
    image: "/Images/AICard/workFlows.webp",
  },
  {
    title: "Quality at Every Step",
    description: "Every milestone tested, verified, and approved.",
    image: "/Images/AICard/KnowledgeBAse.webp",
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "We continuously monitor, update, and improve your system post-launch.",
    image: "/Images/AICard/VirtualAsisstance.jpg",
  },
];


const AiServiceCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  // Calculate total width for smooth loop
  const cardWidth = 300; // width of each card
  const gap = 24; // gap-6 = 24px
  const totalCardsWidth = serviceData.length * (cardWidth + gap);

  // Animation control: only run when section is visible
  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [`0%`, `-${totalCardsWidth}px`],
        transition: {
          duration: 60, // Adjusted duration for smoother loop
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls, totalCardsWidth]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden bg-white py-12 select-none">
      <motion.div
        className="flex gap-6 pointer-events-auto"
        animate={controls}
        style={{ width: "fit-content" }}
      >
        {/* First set of cards */}
        {serviceData.map((service, idx) => (
          <motion.div
            key={`first-${idx}`}
            className="bg-AiCardBg rounded-[20px] border border-gray-200 flex-shrink-0 relative"
            style={{ width: "300px", height: "330px" }}
            whileHover={{
              y: -6,
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex flex-col max-w-60 mt-3">
              <h3 className="font-main font-medium text-[20px] leading-7 text-AiCardText mb-2">
                {service.title}
              </h3>
              <p className="font-main font-normal text-[13px] leading-5 text-AiCardText opacity-80">
                {service.description}
              </p>
            </div>

            <div className="absolute bottom-4 right-6">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 object-contain pointer-events-none"
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                  transition: { duration: 0.3 },
                }}
              />
            </div>
          </motion.div>
        ))}

        {/* Second set of cards for seamless loop */}
        {serviceData.map((service, idx) => (
          <motion.div
            key={`second-${idx}`}
            className="bg-AiCardBg rounded-[20px] border border-gray-200 shrink-0 relative"
            style={{ width: "300px", height: "330px" }}
            whileHover={{
              y: -6,
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex flex-col max-w-60 mt-3">
              <h3 className="font-main font-medium text-[20px] leading-7 text-AiCardText mb-2">
                {service.title}
              </h3>
              <p className="font-main font-normal text-[13px] leading-5 text-AiCardText opacity-80">
                {service.description}
              </p>
            </div>

            <div className="absolute bottom-4 right-6">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 object-contain pointer-events-none"
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                  transition: { duration: 0.3 },
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AiServiceCards;
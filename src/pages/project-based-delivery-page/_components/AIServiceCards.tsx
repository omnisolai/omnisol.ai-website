import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const serviceData = [
  {
    title: "No Recruitment Fee",
    description: "Skip the hiring hassle and instantly access a fully vetted expert team ready to execute.",
    image: "/Images/AICard/GenerativeAI.webp",
  },
  {
    title: "Proposal & Agreement",
    description: "Get crystal-clear deliverables, transparent timelines, and fixed costs before we begin.",
    image: "/Images/AICard/Copilots.webp",
  },
  {
    title: "Proof of Concept & Resource Allocation",
    description: "Validate your idea fast with a working prototype and the right technical resources.",
    image: "/Images/AICard/customeModel.webp",
  },
  {
    title: "Development & Implementation",
    description: "We build, iterate, and scale your solution using agile execution and best practices.",
    image: "/Images/AICard/Fine-tuning.webp",
  },
  {
    title: "Quality Assurance & Testing",
    description: "Every feature is rigorously tested to ensure performance, security, and stability.",
    image: "/Images/AICard/workFlows.webp",
  },
  {
    title: "Launch & Delivery",
    description: "Your product goes live on schedule, fully optimized and market-ready.",
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
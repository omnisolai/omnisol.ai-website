import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const serviceData = [
  {
    title: "No Recruitment Fee",
    description:
      "Skip the hiring hassle; get an expert team instantly.",
    image: "/Images/AICard/GenerativeAI.webp",
  },
  {
    title: "AI Copilots",
    description:
      "Enhance productivity with task-aware copilots that support your teams in real time — intuitive, reliable, and workflow-specific.",
    image: "/Images/AICard/Copilots.webp",
  },
  {
    title: "Custom Model Development",
    description:
      "We build domain-trained generative models tuned to your data, ensuring accuracy, control, and scalability.",
    image: "/Images/AICard/customeModel.webp",
  },
  {
    title: "Fine-Tuning & Prompt Engineering",
    description:
      "Smarter prompts, sharper results. Optimize LLMs for your context to get output that's actually useful.",
    image: "/Images/AICard/Fine-tuning.webp",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate complex, multi-step operations with AI agents that reduce manual effort and errors.",
    image: "/Images/AICard/workFlows.webp",
  },
  {
    title: "Knowledge Base Creation",
    description:
      "Turn scattered data into structured intelligence with dynamic, searchable AI-driven knowledge bases.",
    image: "/Images/AICard/KnowledgeBAse.webp",
  },
  {
    title: "Virtual Assistants",
    description:
      "Deploy intelligent assistants that understand your customers, handle tasks, and personalize every interaction.",
    image: "/Images/AICard/VirtualAsisstance.jpg",
  },
  {
    title: "AI Product Design & Prototyping",
    description:
      "Integrate generative capabilities directly into your product experience — designed for usability and speed.",
    image: "/Images/AICard/AIProduct.webp",
  },
  {
    title: "Model Maintenance & Optimization",
    description:
      "Stay ahead with continuous monitoring, performance tuning, and version updates that keep your models efficient.",
    image: "/Images/AICard/ModelMaintaince.webp",
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
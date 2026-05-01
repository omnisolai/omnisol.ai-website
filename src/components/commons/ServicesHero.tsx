import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import type { HeroSectionProps } from "../../types/Service";
import GradientButton from "../../ui/Button/Button";
import bgImage from "/Images/heroBg.png";
import SocialProof from "./SocialProof";
import ServiceHeroCard from "./ServicesHeroCard";

const ServicesHero = ({
  Heading,
  description,
  ButtonText,
  LeftHeading,
  LeftDescription,
  cardDescOne,
  cardDescTwo,
  cardDescThree,
  ButtonWidth,
  ButtonHeight,
  arrowSize,
  arrowBgSize,
  ButtonTextSize,
  ButtonTextTransalate,
  ButtonarrowTranslate,
}: HeroSectionProps) => {
  const cardData = [cardDescOne, cardDescTwo, cardDescThree];

  const migrationCards = [
    {
      title: "Zero Downtime Migration",
      description: "Move without disrupting your operations.",
    },
    {
      title: "Data Cleansing & Transformation",
      description: "Eliminate duplicates, errors, and outdated records.",
    },
    {
      title: "Security & Compliance First",
      description: "End-to-end encryption and adherence to global data standards.",
    },
  ];

  const card = [
    { id: 1, image: "/Images/bottomline.webp" },
    { id: 2, image: "/Images/Cintas.webp" },
    { id: 3, image: "/Images/bottomline.webp" },
    { id: 4, image: "/Images/Cintas.webp" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [, inView] = useInView({ threshold: 0.3 });

  const isAiPocRoute = pathname === "/services/aipoc";
  const isDataMigrationRoute =
    pathname === "/services/dataMigration" || pathname === "/services/aiConsulting";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      container.classList.add("cursor-grabbing");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseUp = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const desktopLogos = ["Visa", "Spotify", "LinkedIn", "Zoom"];
  const mobileLogos = ["OpenAI", "Gemini", "Dialogflow", "botpress", "n8n"];

  return (
    <section
      className="relative md:-mt-28 w-full min-h-screen overflow-hidden text-white bg-hero"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            window.innerWidth < 768
              ? `linear-gradient(
                  to bottom,
                  rgba(0,0,0,1) 0%,
                  rgba(0,0,0,0.9) 10%,
                  rgba(0,0,0,0.5) 35%,
                  rgba(0,0,0,0.5) 65%,
                  rgba(0,0,0,0.9) 90%,
                  rgba(0,0,0,1) 100%
                )`
              : "radial-gradient(circle, rgba(0,0,0,0.1), rgba(0,0,0,1))",
        }}
      />

      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center gap-4 mt-52 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-main font-medium text-[26px] md:text-[42px] leading-9 md:leading-[52px] max-w-[300px] md:max-w-[800px]"
        >
          {Heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-main text-[14px] md:text-[16px] leading-[22px] md:leading-6 max-w-[300px] md:max-w-[600px]"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GradientButton
            to="/contact"
            text={ButtonText}
            width={ButtonWidth}
            height={ButtonHeight}
            arrowSize={arrowSize}
            arrowBgSize={arrowBgSize}
            fontSize={ButtonTextSize}
            textTranslate={ButtonTextTransalate}
            arrowTranslate={ButtonarrowTranslate}
          />
        </motion.div>
      </div>

      {isAiPocRoute ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 container mx-auto pt-4 pb-8 md:pb-12"
        >
          <p className="text-center font-poppins font-bold mb-6 md:mb-8">
            Trusted By
          </p>

          <div className="w-[90%] flex justify-center mx-auto">
            <div className="flex flex-wrap justify-center gap-6 w-full px-4">
              {card.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="sm:w-[200px] md:w-[230px] h-20 bg-[#D0D0D038] flex justify-center items-center rounded-xl"
                >
                  <img
                    src={card.image}
                    className={`object-contain ${card.image.includes("Cintas") ? "w-[100px]" : "w-[180px]"
                      } invert brightness-0`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-20 container mx-auto md:pt-12 pb-4 lg:px-10 -mt-10"
        >
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="font-poppins font-bold text-[18px] leading-7 mb-4">
                {LeftHeading}
              </h2>
              <p className="font-main text-[15px] md:text-[18px] leading-[26px] md:max-w-[500px] max-w-[300px]">
                {LeftDescription}
              </p>
            </motion.div>

            <ServiceHeroCard
              isMobile={isMobile}
              isDataMigrationRoute={isDataMigrationRoute}
              cardData={cardData}
              migrationCards={migrationCards}
              scrollContainerRef={scrollContainerRef}
            />
          </div>
        </motion.div>
      )}

      <SocialProof
        isMobile={isMobile}
        mobileLogos={mobileLogos}
        desktopLogos={desktopLogos}
      />
    </section>
  );
};

export default ServicesHero;
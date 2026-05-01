import { useState, useRef } from "react";
import { motion } from "framer-motion";
import HeadingSection from "./HeadersAllScreen";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AISolutionWeDeliver = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);


  const cardsData = [
    {
      id: 1,
      title: "Intelligent Automation",
      description:
        "Automate processes end-to-end so your business runs smarter and faster.",
      image: "/Images/Landing/Intelligance automation.webp",
      bgColor: "#DDDDDD",
      textColor: "#000000",
      imageWidth: 280,
    },
    {
      id: 2,
      title: "Smart Product Development",
      description:
        "Turn ideas into intelligent, high-performing digital products with speed.",
      image: "/Images/Landing/Smart Product.webp",
      bgColor: "#E7FFF3",
      textColor: "#000000",
      imageWidth: 240,
    },
    {
      id: 3,
      title: "Digital Transformation & Advisory",
      description:
        "Modernize systems, unlock efficiencies, and shape a future-ready digital strategy.",
      image: "/Images/Landing/Digital Traansformation.webp",
      bgColor: "#E8E7FF",
      textColor: "#000000",
      imageWidth: 180,
    },
    {
      id: 4,
      title: "Experience & Engineering Excellence",
      description:
        "Build seamless experiences and engineered solutions that scale without friction.",
      image: "/Images/Landing/Experience.webp",
      bgColor: "#FFE7F5",
      textColor: "#000000",
      imageWidth: 300,
    },
  ];


  const nextSlide = () => {
    if (currentIndex < cardsData.length - 2) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(cardsData.length - 2);
    }
  };

  return (
    <section className="w-full relative   overflow-hidden  flex flex-col md:block min-h-[auto]">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start w-full relative">

        {/* Left side — Heading + Image */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center md:items-start w-full md:w-1/2 relative"
        >
          {/* Heading Section */}
          <div
            className="
              w-[90%] 
              md:w-[430px] 
              mx-auto 
              md:ml-20 
              h-auto 
              md:h-[200px] 
              mt-4         
              text-center 
              md:text-left
            "
          >
            <HeadingSection
              Heading="All-in-One"
              Title="AI Solutions We Deliver"
              Description="AI-powered solutions that modernize your business, accelerate growth, and turn complex challenges into seamless operations."
              align="left"
            />
          </div>

          {/* Image Section */}
          <div
            className="
              w-full 
              flex 
              items-center 
              justify-center 
              md:justify-start 
              relative 
              mt-[-10px]
            "
          >
            <img
              src="/Images/Landing/Hand.webp"
              className="relative lg:-left-30 lg:w-[1200px] -left-18"
              alt="hand-Image"
            />
            <img
              src="/Images/Landing/Bowl.webp"
              className="absolute lg:left-44 lg:w-[400px] lg:top-42 w-[180px] top-28 left-22"
              alt="Bowl-Image"
            />
            <img
              src="/Images/Landing/Finger.webp"
              className="absolute rotate-6 lg:-left-50 lg:w-[5800px] lg:top-76 w-[300px] top-[180px] -left-9"
              alt="finger-Image"
            />
          </div>
        </motion.div>

        {/* Right side — Card Slider */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-[-20px] md:mt-0 lg:mt-60">
          {/* Arrow Controls */}
          <div className="hidden md:flex justify-center items-center gap-6 mb-8 relative left-50">
            <button
              onClick={prevSlide}
              className="p-3 cursor-pointer rounded-full border border-arrowBorder transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 cursor-pointer rounded-full border border-arrowBorder transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="w-[90%] md:w-[850px] h-[420px] overflow-hidden rounded-[30px] relative cursor-grab active:cursor-grabbing"
          >
            <motion.div
              className="flex gap-4"
              animate={{
                x: -currentIndex * 380,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              drag="x"
              dragConstraints={{
                right: 0,
                left: -((cardsData.length - 1) * 400),
              }}
              dragElastic={0.2}
            >
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className="min-w-[90%] md:min-w-[350px] h-[420px] flex flex-col justify-between items-center p-8 rounded-[30px]"
                  style={{
                    backgroundColor: card.bgColor,
                    color: card.textColor,
                  }}
                >
                  <div className="w-full text-left max-w-[250px] flex flex-col">
                    <h2 className="text-[22px] font-main font-medium text-black">
                      {card.title}
                    </h2>
                    <p className="text-[15px] font-main font-medium mt-2 leading-[20px] text-black">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex justify-center mt-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-contain"
                      style={{ width: `${card.imageWidth}px` }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionWeDeliver;

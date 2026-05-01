import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import AnimatedSection from "../../layouts/AnimatedSection";
import HeadingSection from "./HeadersAllScreen";
import { ArrowUp, ArrowDown } from "lucide-react";

const WhoWeAre: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  // ✅ Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  // ✅ Slider Settings
  const settings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 600,
    speed: 700,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  // ✅ Manual navigation handlers
  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();

  return (
    <section className="w-full px-4 py-16 md:py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row flex-wrap items-center">
          {/* ✅ Left Content */}
          <div className="w-full lg:w-3/5 mb-12 lg:mb-0">
            <AnimatedSection>
              <div className="mt- md:mt-20 w-full lg:w-[65%]">
                <HeadingSection
                  Heading="want to know our results ?"
                  Title="Forget the tech Focus on the results we bring"
                  Description="Since 2023, we've been helping businesses of all sizes design AI-powered software solutions tailored to their unique workflows."
                  align="left"
                />
              </div>
            </AnimatedSection>
            {/* ✅ Cards Animated One by One */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 font-main -mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {[
                {
                  title: "Quick Prototyping & Deployment",
                  desc: "Average project turnaround: 4–6 weeks",
                  shadow: false,
                },
                {
                  title: "Leading AI Software Development Experts",
                  desc: "Delivered 200+ custom AI solutions, achieving an average ROI of 300% within the first 3 months",
                  shadow: false,
                },
                {
                  title: "AI-Powered Software Solutions",
                  desc: "Helping businesses streamline operations and enhance decision-making with AI-driven applications",
                  shadow: true,
                },
                {
                  title: "Trusted by Industry Leaders",
                  desc: "Helping businesses streamline operations and enhance decision-making with AI-driven applications",
                  shadow: false,
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`px-4 md:px-6 py-6 md:py-7 rounded-2xl ${card.shadow
                      ? "shadow-[0_24px_184px_-10px_rgba(0,0,0,0.14)]"
                      : "border-2 border-who-border"
                    }`}
                >
                  <h4 className="font-medium text-xl md:text-2xl mb-3">
                    {card.title}
                  </h4>
                  <p className="font-normal text-base md:text-lg opacity-70 text-black">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ✅ Right Vertical Slider Section */}
          <div className="w-full lg:w-2/5 lg:pl-8 relative">
            {/* 🔹 Top white gradient shadow */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
            {/* 🔹 Bottom white gradient shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

            {/* 🔹 Arrow Buttons */}
            <button
              onClick={prevSlide}
              className="absolute   top-36 left-1/2 -translate-x-1/2 z-30 bg-white/90  backdrop-blur-sm  p-3 rounded-full border border-gray-300 hover:bg-gray-100  cursor-pointer transition-all  "
            >
              <ArrowUp className="w-5 h-5 text-black" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 bg-white/90  backdrop-blur-sm p-2 rounded-full hover:bg-white p-3 rounded-full border border-gray-300 hover:bg-gray-100  cursor-pointer transition-all"
            >
              <ArrowDown className="w-5 h-5 text-black" />
            </button>

            {/* ✅ Slider */}
            <div className="h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden mt-40">
              <Slider ref={sliderRef} {...settings} className="h-full">
                {[1,2,3,4,5].map((num) => (
                  <div key={num} className="px-2 py-4">
                    <div className="flex justify-center">
                      <img
                        src={`/tech_stats${num}.webp`}
                        alt={`Tech Stats ${num}`}
                        className="w-full max-w-[300px] md:max-w-none h-auto"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

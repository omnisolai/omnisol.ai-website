import React from "react";
import type { WhyAgenticProps } from "../../types/Service";
import AnimatedSection from "../../layouts/AnimatedSection";

const WhyAgentic: React.FC<WhyAgenticProps> = ({
  badgeText,
  mainHeading,
  descriptionOne,
  descriptionTwo,
  cards,
}) => {
  return (
    <div className="w-[90%] mx-auto my-10 min-h-screen">
      {/* 🔸 Section Header */}
      <AnimatedSection>

      <div className="flex flex-col items-center justify-center text-center px-4 py-8 gap-2">
        {/* Badge */}
        <div className="px-5 py-2 border border-badgeBorder bg-badgeBg rounded-full">
          <h1 className="font-poppins text-[14px] md:text-[16px] font-normal leading-[100%] text-badgeText">
            {badgeText}
          </h1>
        </div>

        {/* Heading */}
        <h2 className="font-main font-medium text-[26px] md:text-[42px] leading-[110%] md:leading-[46px] tracking-[-0.01em] text-black text-center max-w-[800px]">
          {mainHeading}
        </h2>

        {/* Description */}
        <p className="font-main font-medium text-[16px] md:text-xl tracking-[-0.018em] leading-tight text-gray-500 text-center max-w-[620px]">
          {descriptionOne}
        </p>

        {/* ✅ Conditional Rendering for Description Two */}
        {descriptionTwo && (
          <p className="font-main font-medium text-[16px] md:text-xl -mt-3 tracking-[-0.018em] leading-tight text-gray-600 text-center max-w-[620px]">
            {descriptionTwo}
          </p>
        )}
      </div>
      </AnimatedSection>

      {/* 🔹 Cards Grid */}
      <div className="w-full py-16 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const isEven = (index + 1) % 2 === 0;
            const cardBg = isEven ? "bg-[#2F0304]" : "bg-white";
            const textColor = isEven ? "text-white" : "text-[#191919]";
            const imageBg = isEven ? "bg-white" : "bg-[#2F0304]";

            return (
              <div
                key={index}
                className={`w-[300px] h-[350px] rounded-2xl border border-cardBorder flex flex-col justify-between p-8 transition-all duration-300 ${cardBg} ${textColor}`}
              >
                {/* Image top-left */}
                <div className="w-full flex justify-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 ${imageBg}`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-8 h-8 object-contain "
                    />
                  </div>
                </div>

                {/* Content bottom-left */}
                <div className="flex flex-col items-start">
                  <h3 className="font-main font-medium text-[22px] leading-[24px] tracking-[-1.8%]">
                    {card.title}
                  </h3>
                  <p className="font-main font-medium text-[14px] leading-[20px]  mt-6">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyAgentic;

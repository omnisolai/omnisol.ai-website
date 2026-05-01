import React from "react";
import type { CardProps } from "../../types/Card.types";

const Card: React.FC<CardProps> = ({
  heading,
  text,
  bgColor = "",
  borderColor = "",
  width = "",
  height = "",
  className = "",
}) => {
  return (
    <div
      className={`relative ${bgColor} ${borderColor} border rounded-[25px]
        ${width} ${height}  p-[21px] py-[48px] flex flex-col gap-[10px]
        transition-all duration-300 hover:shadow-lg hover:-translate-y-1
        ${className}`}
    >
      {/* Heading */}
      <h3 className="font-main font-medium text-[28px]  leading-[35px] w-[250px] h-[94px] tracking-[-1.8%] text-[#191919]">
        {heading}
      </h3>

      {/* Text */}
      <p className="font-main font-normal text-[20px] w-[250px] h-[168px] opacity-[70%]  leading-[100%] text-[#191919]">
        {text}
      </p>
    </div>
  );
};

export default Card;

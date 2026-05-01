import React from "react";
import { ArrowRight, Star, Rocket } from "lucide-react";

export default function FeatureCards({ cards }: { cards: any[] }) {
  return (
    <div className="md:flex gap-4 justify-center items-center p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`my-2 border border-gray-300 flex flex-col justify-between  rounded-lg shadow-md cursor-pointer transition-all duration-300  w-auto md:w-60 h-60 p-6
        ${card.highlight ? "bg-[#4C0101] text-white" : "bg-white text-black"} 
        hover:shadow-lg`}
        >
          {/* Icon at the top */}
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full mb-4 ${card.highlight ? "bg-white text-[#4C0101]" : "bg-[#4C0101] text-white"}`}
          >
            {card.icon}
          </div>
          {/* Text at the bottom */}
          <p className="text-md text-center mt-auto">{card.text}</p>
        </div>
      ))}
    </div>
  );
}

import { motion } from "framer-motion";
import React from "react";

interface ServicesHeroCardProps {
    isMobile: boolean;
    isDataMigrationRoute: boolean;
    scrollContainerRef: React.RefObject<HTMLDivElement | null>;
    cardData: any[];
    migrationCards: any[];
}

export default function ServicesHeroCard({
    isMobile,
    isDataMigrationRoute,
    scrollContainerRef,
    cardData,
    migrationCards,
}: ServicesHeroCardProps) {
    return (
        <div
            ref={scrollContainerRef}
            className={`lg:w-1/2 flex ${isMobile
                    ? "flex-row overflow-x-auto space-x-4 scrollbar-hide cursor-grab"
                    : "flex-row gap-2"
                } justify-start items-center lg:justify-end`}
        >
            {(isDataMigrationRoute ? migrationCards : cardData).map(
                (item: any, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.7 + index * 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                            y: -8,
                            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                        }}
                        className={`shrink-0 w-48 h-50 border border-orange/40 shimmer bg-white/10 rounded-md backdrop-blur-md shadow-lg shadow-black/20 p-4 flex ${isDataMigrationRoute
                                ? "flex-col justify-end items-start"
                                : index === 1
                                    ? "items-end justify-end"
                                    : "items-start justify-start"
                            }`}
                    >
                        {isDataMigrationRoute ? (
                            <div>
                                <h3 className="font-poppins font-semibold text-[16px] text-white mb-2 text-left">
                                    {item.title}
                                </h3>
                                <p className="font-main text-[14px] leading-[22px] text-white text-left">
                                    {item.description}
                                </p>
                            </div>
                        ) : (
                            <p className="font-main font-medium text-[14px] leading-[22px] text-white text-center">
                                {item}
                            </p>
                        )}
                    </motion.div>
                )
            )}
        </div>
    );
}
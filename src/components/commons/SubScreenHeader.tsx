import type { HeadingsTypes } from "../../types/Service";

export default function SubScreenHeader({
    Heading,
    Title,
    Description,
    button,
    imageSrc,
    imageWidth,
    imageHeight,
    extraClass = "",
    imageAlt = "Section Image",
}: HeadingsTypes) {
    return (
        <div className={`flex flex-col md:flex-row gap-8 px-4 py-8 md:py-16 items-start ${extraClass}`}>
            {/* Left Content Section */}
            <div className="flex flex-col items-start justify-start flex-1 gap-4 w-full">
                {/* Heading */}
                <div className="px-6 py-2 border border-badgeBorder bg-badgeBg rounded-full flex items-center justify-start">
                    <h1 className="font-poppins text-[14px] font-normal leading-[100%] text-badgeText">
                        {Heading}
                    </h1>
                </div>

                {/* Title */}
                <h2 className="font-main font-medium text-[26px] md:text-[34px] 2xl:text-[34px] leading-[110%] md:leading-[42px] tracking-[-0.01em] text-black max-w-full text-left">
                    {Title}
                </h2>

                {/* Description */}
                <p className="font-main font-medium text-[16px] md:text-[20px] tracking-[-0.018em] text-gray-700 max-w-full text-left">
                    {Description}
                </p>

                {/* Optional Button */}
                {button && <div className="mt-4">{button}</div>}
            </div>

            {/* Optional Image Section */}
            {imageSrc && (
                <div className="flex-shrink-0">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className="object-contain"
                    />
                </div>
            )}
        </div>
    );
}
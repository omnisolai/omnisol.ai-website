import type { HeadingsTypes } from "../../types/Service";
export default function HeadersAllScreen({
  Heading,
  Title,
  Description,
  align = "center",
  button,
  imageSrc,
  imageWidth,
  imageHeight,
  extraClass = "",
  imageAlt = "Section Image",
}: HeadingsTypes) {
  const alignmentClasses =
    align === "left"
      ? "items-start text-left md:flex-row md:justify-between"
      : "items-center text-center md:flex-col";
  return (
    <div
      className={`flex flex-col md:flex-row gap-8 md:gap-8 px-4 py-8 md:py-16 ${alignmentClasses}`}
    >
      {/* Left Content Section */}
      <div
        className={`flex flex-col ${align === "left" ? "items-start text-left" : "items-center text-center"
          } justify-center flex-1 gap-4`}
      >
        {/* :small_blue_diamond: Heading */}
        <div className="px-6 py-2 border border-badgeBorder  bg-badgeBg rounded-full flex items-center justify-center">
          <h1 className="font-poppins text-[14px]   font-normal leading-[100%] text-badgeText">
            {Heading}
          </h1>
        </div>
        {/* :small_orange_diamond: Title */}
        <h2
          className={`font-main     font-medium text-[26px]  md:text-[34px]  2xl:text-[34px]   leading-[110%] md:leading-[42px] tracking-[-0.01em] text-black max-w-[480px]      ${align === "left" ? "text-left" : "text-center"
            }`}
        >
          {Title}
        </h2>
        {/* :small_orange_diamond: Description */}
        <p
          className={`font-main font-medium text-[16px] md:text-[20px] tracking-[-0.018em] text-gray-700 md:max-w-[750px] 2xl:max-w-[750px]   max-w-[300px]     ${align === "left" ? "text-left" : "text-center"
            }`}
        >
          {Description}
        </p>
        {/* :small_orange_diamond: Optional Button */}
        {button && <div className="mt-4">{button}</div>}
      </div>

    </div>
  );
}
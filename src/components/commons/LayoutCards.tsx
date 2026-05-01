import React from "react";
import type {LayoutCardsProps}  from "../../types/Service"

const CpuIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#22C55E"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </svg>
);

const LayoutCards: React.FC<LayoutCardsProps> = ({
  cards,
  mobileHeading,
  mobileIcon,
}) => {
  const Icon = mobileIcon ?? <CpuIcon />;

  return (
    <section className="w-full py-8 sm:py-10 flex flex-col items-center justify-center px-3 sm:px-4">
      <div className="w-full max-w-[1100px] border border-[#DCE4E8] rounded-[26px] p-3 lg:border-0 lg:p-0">
        {/* ✅ Mobile Heading */}
        {mobileHeading && (
          <div className="block lg:hidden mb-5 text-center w-full mt-6">
            {typeof mobileHeading === "string" ? (
              <h2 className="text-[24px] font-main font-medium text-black max-w-[250px] mx-auto">
                {mobileHeading}
              </h2>
            ) : (
              mobileHeading
            )}
          </div>
        )}

        {/* ✅ Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
          {cards.map((card, index) => {
            const mobileStyles = "w-[365px] h-[200px]";
            const desktopStyles = "lg:w-auto lg:h-[230px]";

            // ✅ Check if total 4 cards
            const isFourCards = cards.length === 4;

            // ✅ Determine if this card should be wide
            const isWideCard =
              index === 1 || (isFourCards && index === 2)
                ? "lg:col-span-2"
                : "";

            // ✅ Second & (if 4 cards) Third card => wide layout
            if (index === 1 || (isFourCards && index === 2)) {
              const showCustomDiv = index === 1; // ✅ Only 2nd card shows image/custom div

              return (
                <div
                  key={card.id}
                  className={[
                    isWideCard,
                    "rounded-[30px]",
                    "border-0 lg:border-2 lg:border-bgDark",
                    "p-6 transition-transform ",
                    "bg-white lg:bg-bgDark text-iconColor lg:text-white",
                    "flex flex-col lg:flex-row justify-between items-stretch",
                    mobileStyles,
                    desktopStyles,
                  ].join(" ")}
                >
                  {/* ✅ Mobile Layout */}
                  <div className="lg:hidden flex items-start gap-3 mb-3 justify-start">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#EDFFF2] flex items-center justify-center">
                      {Icon}
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-[18px] sm:text-[22px] font-main font-semibold mb-2 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-gray-500 lg:text-black font-main font-medium leading-[20px] opacity-90">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* ✅ Desktop Layout */}
                  <div
                    className={`hidden lg:flex w-full ${
                      showCustomDiv
                        ? "flex-row justify-between items-stretch"
                        : "flex-col justify-center items-start px-6"
                    }`}
                  >
                    <div
                      className={`${
                        showCustomDiv ? "w-[45%] pr-4" : "w-[80%]"
                      } flex flex-col justify-start text-left`}
                    >
                      <h3 className="text-[18px] sm:text-[22px] font-main font-semibold mb-2 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] font-main font-medium leading-5 opacity-90">
                        {card.description}
                      </p>
                    </div>

                    {/* ✅ Only 2nd card shows customDiv */}
                    {showCustomDiv && card.customDiv && (
                      <div className="w-[60%] flex justify-center items-center">
                        {card.customDiv}
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            // ✅ Default Card Design
            return (
              <div
                key={card.id}
                className={[
                  "rounded-[30px]",
                  "border-0 lg:border-2 border-[#DCE4E8]",
                  "transition-all p-6",
                  "flex flex-row items-start gap-4 justify-start lg:flex-col lg:items-start",
                  mobileStyles,
                  desktopStyles,
                ].join(" ")}
              >
                {/* ✅ Left Icon (Mobile) */}
                <div className="lg:hidden flex-shrink-0 w-12 h-12 rounded-xl bg-[#EDFFF2] flex items-center justify-center">
                  {Icon}
                </div>

                {/* ✅ Text */}
                <div className="flex flex-col justify-start h-full text-left items-start">
                  <h3 className="text-[22px] max-w-[260px] font-main font-medium text-iconColor mb-2 leading-[26px] sm:leading-[28px]">
                    {card.title}
                  </h3>
                  <p className="md:text-[14px] max-w-[250px] text-[16px] mt-4 text-gray-500 font-main font-medium leading-[20px] opacity-90">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LayoutCards;



import AnimatedSection from "../../../../layouts/AnimatedSection";
import GradientButton from "../../../../ui/Button/Button";

const HowWeBuild = () => {
  const cardsData = [
    {
      id: 1,
      title: "Discover",
      description: "Pinpoint where autonomy adds the most value",
      bgColor: "#F7F7F7",
      textColor: "#191919",
    },
    {
      id: 2,
      title: "Design",
      description: "Build reasoning and learning modules around your workflow",
      bgColor: "#410001",
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      title: "Deploy",
      description: "Integrate, monitor, and optimize in real time",
      bgColor: "#F7F7F7",
      textColor: "#191919",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-weBuildBg flex flex-col py-10 justify-center">
      {/* 🔸 Heading Section */}
      <AnimatedSection>
        <div className="flex flex-col items-center md:items-start  xl:items-start  2xl:xl:items-center   justify-center px-6 md:px-20  lg:px-32 py-8 gap-2  md:mx-16  ">
          <div className="px-5 py-2 border border-weBuildText rounded-full">
            <h1 className="font-poppins text-[14px] md:text-[16px] font-normal leading-[100%] text-weBuildText">
              How We Build Them
            </h1>
          </div>

          <h2 className="font-main font-medium text-[26px] md:text-[40px] leading-[110%] md:leading-[46px] tracking-[-0.01em] text-white  text-center  md:text-left  xl:text-left  2xl:text-left   max-w-[800px]">
            From idea to autonomous system —{" "}
            <span className="bg-gradient-to-r from-[#FFBD72] to-[#FF6A00] bg-clip-text text-transparent">
              FAST.
            </span>
          </h2>

          <p className="font-main mt-2 font-medium text-[15px] sm:text-[16px] md:text-[18px] text-gray-300  max-w-[500px] leading-[22px]  text-center  md:text-left  xl:text-left">
            We map your goals, design the agent's logic, and deploy a working
            prototype in weeks, not quarters.
          </p>
        </div>
      </AnimatedSection>


      {/* 🔹 Cards Section */}
      <div className="mx-auto w-full max-w-6xl py-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 justify-items-center place-items-center">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl p-8 w-[320px]  h-[180px]  md:w-[300px] min-h-[280px] md:min-h-[300px] transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col md:justify-start xl:justify-start 2xl:justify-start    "
              style={{
                backgroundColor: card.bgColor,
                color: card.textColor,
              }}
            >
              {/* 🔺 Arrow Container */}
              <div
                className="absolute  left-16   md:-top-6 md:left-1/2  2xl:-top-7 2xl:left-1/2    transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg border border-white  border-3"
                style={{
                  backgroundColor: card.bgColor,
                }}
              >
                <img
                  src="/Images/arrow.webp"
                  alt="Arrow"
                  className={`w-6 h-6 object-contain ${card.bgColor === "#410001" ? "invert brightness-0" : ""
                    }`}
                />
              </div>

              {/* 🔸 Card Content */}
              <div className="flex flex-col items-start  md:items-center justify-center   text-left  md:text-center mt-20 md:mt-24   2xl: md:text-center">
                <h3 className="font-main font-semibold text-2xl mb-2">
                  {card.title}
                </h3>
                <p className="font-main font-normal text-[16px] max-w-[240px] leading-[22px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔻 Bottom Description */}
      <div className=" text-center max-w-[1300px]   md:max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4  md:px-12   px-4  xl:px-12  2xl:px-12    ">
        <p className="font-main  max-w-[300px]    md:max-w-[700px]   md:text-left  xl:text-left 2xl:text-left    text-left  font-medium text-[14px]  md:text-xl text-gray-300 leading-relaxed">
          Every agent is teachable, auditable, and ready to scale safely across
          your ecosystem.
        </p>

        <GradientButton
          to="/contact"
          text="Start You Agent Project"
          width="250px"
          height="60px"
          arrowSize="20px"
          arrowBgSize="35px"
          fontSize="15px"
          hideArrowOnMobile={false}
          textTranslate="50px"
          arrowTranslate="-180px"
        />
      </div>
    </div>
  );
};

export default HowWeBuild;

import AnimatedSection from "@/layouts/AnimatedSection"
import GradientButton from "../../ui/Button/Button"
import StepsDescriptions from "./StepsDescriptions"

const OurProcess = () => {
  const stepsData = [
    { id: 1, step: "01", title: "Understand Your Business Needs", description: "We start by learning your goals, challenges, and what success looks like for you." },
    { id: 2, step: "02", title: "Align on a Shared Vision", description: "Together, we define clear objectives and ensure everyone's working toward the same outcome." },
    { id: 3, step: "03", title: "Estimate and Plan the Project", description: "We scope the work, set realistic timelines, and provide a transparent cost estimate." },
    { id: 4, step: "04", title: "Execute with Precision", description: "Our team designs, builds, tests, and delivers — keeping you in the loop every step of the way." },
  ]

  return (
    <section className="flex   lg:flex-row flex-col w-full min-h-screen overflow-hidden md:mt-0 mt-10">
      {/* Left Section - StepsDescriptions (No Animation) */}
      <div className="lg:w-[55%] w-full lg:p-16 lg:px-20 order-2 lg:order-1 px-10">
        <StepsDescriptions stepsData={stepsData} />
        <GradientButton
          to="/contact"
          text={"Let's Get Started"}
          width={"195px"}
          height={"50px"}
          arrowSize={"18px"}
          arrowBgSize={"35px"}
          fontSize={"15px"}
          textTranslate={"55px"}
          arrowTranslate={"-145px"}
          hideArrowOnMobile={false}
          className="my-5 md:my-2 mx-auto md:mx-0"
        />
      </div>

      {/* Right Section - Heading + Image (Animated with Framer Motion) */}

      <div
        className="flex flex-col lg:w-[35%] w-full order-1 lg:order-2"
      >
        {/* Heading Section */}
        <AnimatedSection>
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right flex-1 gap-2 lg:p-0 p-6  ">
            <div className="px-6 py-2 border border-badgeBorder  bg-badgeBg rounded-full flex items-center justify-center">
              <h1 className="font-poppins text-[13px] font-normal leading-[100%] text-badgeText">
                Our Process
              </h1>
            </div>

            <h2 className="font-main font-medium text-[26px] md:text-[32px] 2xl:text-[34px] leading-[110%] md:leading-[42px] tracking-[-0.01em] text-black max-w-[480px]">
              Systematic Approach
            </h2>

            <p className="font-main font-medium text-[16px] md:text-[18px] tracking-[-0.018em] text-gray-700 lg:max-w-[300px] 2xl:max-w-[750px] max-w-[300px]">
              A transparent, end-to-end process designed to align teams, reduce risk, and accelerate outcomes.
            </p>
          </div>
        </AnimatedSection>

        {/* Image Section (Animated together with heading) */}
        <div className="relative hidden lg:flex">
          <img
            src="/Images/Landing/TwoHands.webp"
            className="relative lg:-top-20 lg:left-33 z-50"
            alt="Twohand-Image"
          />
          <img
            src="/Images/Landing/Bowl.webp"
            className="absolute lg:left-30 lg:top-12 z-40"
            alt="Bowl-Image"
          />
        </div>

      </div>
    </section>
  )
}

export default OurProcess

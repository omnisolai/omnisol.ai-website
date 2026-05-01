import OurAchievement from "../../../components/commons/OurAchievement"
import GradientSection from "../../../components/commons/GradientCTA"
import HeadingSection from "../../../components/commons/HeadersAllScreen";
import Industries from "../../../components/commons/IndustriesSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import Hero from "../../../components/commons/ServicesHero";
import AiServiceCards from "./_components/AiServiceCards";
import LackOfVisibility from "./_components/LackOfVisibility";

const GenerativeAi = () => {
  return (
    <>
      <Hero
        Heading={"Reimagine What Your Business Can Create with Generative AI"}
        description={"From AI copilots to full-scale generative ecosystems, Omnisol helps you move from automation to true co-creation with AI."}
        ButtonText={"Generate with Gen AI"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDescription={"We build generative AI that creates high-quality content, automates workflows, and accelerates growth from copy to conversations, our AI produces, personalizes, and scales content that sells."}
        cardDescOne={"Generative AI that creates powerful, conversion-ready content instantly."}
        cardDescTwo={"Automate content workflows and boost sales with intelligent AI."}
        cardDescThree={"AI that produces, personalizes, and scales content effortlessly."}
        ButtonWidth={"250px"}
        ButtonHeight={"60px"}
        arrowSize={"20px"}
        arrowBgSize={"40px"}
        ButtonTextSize={"16px"}
        ButtonTextTransalate={"60px"}
        ButtonarrowTranslate={"-180px"}
      />

      <div >
        <div className=" mt-8  md:mt-20   " >
          <HeadingSection
            Heading={"Powered by OmnisolAi"}
            Title={"Generative AI That Works Where It Matters"}
            Description={"Each solution is designed to deliver measurable business value — fast, scalable, and fully aligned with your operations."} />
        </div>
        <div className="w-[90%] mx-auto" >
          <AiServiceCards />
        </div>

        <LackOfVisibility />

        {/* Images and text Sections */}
        <div className="flex flex-col gap-4  py-10 ">
          <Industries
            imageSrc="/Images/Services/AI-Development/Fintech.webp"
            heading={"Fintech"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={false}
          />
          <Industries
            imageSrc="/Images/Services/AI-Development/Healthcare.webp"
            heading={"Healthcare"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={true}
          />
          <Industries
            imageSrc="/Images/Services/AI-Development/Retail.webp"
            heading={"Retail"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={false}
          />
          <Industries
            imageSrc="/Images/Services/AI-Development/Manufacturing.webp"
            heading={"Manufacturing"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={true}
          />
        </div>

        {/*  Missing Your Industris*/}
        <MissingYourIndustry />
      </div>
      <OurAchievement />
      <GradientSection />
    </>
  )
}

export default GenerativeAi;

import OurAchievement from "../../../components/commons/OurAchievement"
import GradientSection from "../../../components/commons/GradientCTA"
import HeadingSection from "../../../components/commons/HeadersAllScreen";
import Industries from "../../../components/commons/IndustriesSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import Hero from "../../../components/commons/ServicesHero";
import LayoutCards from "../../../components/commons/LayoutCards";
import Testimonials from "../../../components/commons/Testimonials";
import Faqs from "../../../components/commons/Faq";


const AiConsulting = () => {


  const cardsData = [
    {
      id: 1,
      title: "AI Maturity Evaluation",
      description:
        "Assess your current capabilities and determine how ready your business is for AI."
    },
    {
      id: 2,
      title: "High-Impact Use Case Discovery",
      description:
        "Identify strategic AI opportunities that deliver the fastest and biggest ROI.",
      customDiv: (
        <div className="w-full h-full flex justify-end relative left-6 mt-1 overflow-hidden">
          <img
            src="/Images/Services/LogosSection.webp"
            className="transition-transform duration-300 hover:scale-125"
            alt="LogosSection"
          />
        </div>
      )
    },
    {
      id: 3,
      title: "AI Strategy & Execution Roadmap",
      description:
        "Define a clear AI strategy backed by a step-by-step implementation plan."
    },
    {
      id: 4,
      title: "AI Governance & Compliance",
      description:
        "Establish safe, secure, and compliant AI practices across your organization."
    },
    {
      id: 5,
      title: "Leadership AI Enablement",
      description:
        "Equip executives with the knowledge and clarity to lead AI-driven transformation."
    }
  ];



  return (
    <>
      <Hero
        Heading={"Kickstart Your AI Journey with Expert Guidance"}
        description={"Before you invest, get clarity that saves time, money, and effort. Omnisol’s AI Advisory services help you evaluate readiness, uncover real opportunities, and create a roadmap that leads to results — not confusion."}
        ButtonText={"Schedule your consultation session"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDescription={"Our consultants bring technical depth and business insight to every project.We design AI solutions that reduce costs, optimize workflows, and unlock new opportunities."}
        cardDescOne={"AI Consulting to let you know our potential"}
        cardDescTwo={"Once known then shown - AI POC"}
        cardDescThree={"End-to-end encryption and adherence to global data standards."}
        ButtonWidth={"340px"}
        ButtonHeight={"60px"}
        arrowSize={"20px"}
        arrowBgSize={"40px"}
        ButtonTextSize={"15px"}
        ButtonTextTransalate={"55px"}
        ButtonarrowTranslate={"-280px"}
      />

      <div className="my-20" >
        <LayoutCards
          cards={cardsData}
          shadowCards={[3]}
          mobileHeading={"Kickstart Your AI Journey with Expert Guidance"}
        />
        <Testimonials />

      </div>
      <div >
        <div className=" mt-8  md:mt-20" >
          <HeadingSection
            Heading={"Industries"}
            Title={"Your industry, our intelligence."}
            Description={" Omnisol AI development adapts to the rhythm of your business — whether that’s predicting demand, automating logistics, or personalizing customer experiences."} />
        </div>
        {/* Images and text Sections */}
        <div className="flex flex-col gap-4 py-10 ">
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

      <div className="w-[80%] mx-auto" >
        <Faqs />
      </div>
      <GradientSection />
    </>
  )
}

export default AiConsulting

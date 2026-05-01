import OurAchievement from "../../../components/commons/OurAchievement";
import GradientSection from "../../../components/commons/GradientCTA";
import HeadingSection from "../../../components/commons/HeadersAllScreen";
import Industries from "../../../components/commons/IndustriesSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import Hero from "../../../components/commons/ServicesHero";
import LayoutCards from "../../../components/commons/LayoutCards";
import Testimonials from "../../../components/commons/Testimonials";
import Faqs from "../../../components/commons/Faq";
import GradientButton from "../../../ui/Button/Button";


const TechnicallyFeasibility = () => {


  const cardsData = [
    {
      id: 1,
      title: "ROI Forecasting",
      description: "We calculate realistic return expectations and build strategies that directly support revenue growth."
    },
    {
      id: 2,
      title: "Risk Mitigation",
      description:
        "We identify possible technical or operational obstacles early and craft solutions to prevent costly surprises.",
      customDiv: (
        <div className="w-full h-full flex  items-center  justify-end   relative   ">
          <img src="/Images/Services/technical.png"
            className="w-[500px]  h-[450px]   absolute lg:-top-62  lg:left-30"
            alt="LogosSection" />
        </div>
      ),
    },
    {
      id: 3,
      title: "Technology Alignment",
      description:
        "We match your project with the right tools, platforms, and emerging tech to keep it relevant and efficient."
    },
    {
      id: 4,
      title: "Cost & Resource Planning",
      description: "We deliver clear budget projections and resource plans so you can move forward with confidence."
    },
    {
      id: 5,
      title: "End-to-End Technical Support",
      description: "From assessment to execution, we stay involved — ensuring your product is engineered right the first time."
    },
  ];

  return (
    <>
      <Hero
        Heading={"Technical Feasibility That Turns Vision Into Viable Reality"}
        description={"Before you invest, know exactly what’s possible.Omnisol provides hands-on technical assistance to validate your concept, engineer with precision, and ensure every move delivers measurable ROI."}
        ButtonText={"See If It’s Possible"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDescription={"We work as your technical arm — assessing infrastructure, scalability, and risk while defining the smartest path from concept to implementation.Our goal is simple: help you make informed, confident decisions that save time, reduce cost, and guarantee long-term success."}
        cardDescOne={"Assess your current digital maturity"}
        cardDescTwo={"Identify technology gaps and opportunities"}
        cardDescThree={"Design a roadmap to modernize workflows, data, and customer experiences."}
        ButtonWidth={"220px"}
        ButtonHeight={"58px"}
        arrowSize={"20px"}
        arrowBgSize={"45px"}
        ButtonTextSize={"16px"}
        ButtonTextTransalate={"55px"}
        ButtonarrowTranslate={"-155px"}
      />

      <div className="my-20" >
        <HeadingSection
          Heading={"What You Gain"}
          Title={"From Insight to Implementation — With Full Technical Backing"}
          Description={"Our Discovery Workshop is fast, focused, and designed to turn ideas into execution."}

        />
        <LayoutCards
          cards={cardsData}
          shadowCards={[3]}
          mobileHeading={"Every Vision Needs a Roadmap"}
        />

        <GradientButton
          to="/contact"
          text="Let’s Make It Feasible"
          width="240px"
          height="55px"
          arrowSize="20px"
          arrowBgSize="38px"
          fontSize="15px"
          hideArrowOnMobile={false}
          textTranslate="60px"
          arrowTranslate="-170px"
          className="mx-auto"
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

      <div className="w-[80%] mx-auto" >
        <Faqs />
      </div>
      <GradientSection />
    </>
  )
}

export default TechnicallyFeasibility

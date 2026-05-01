
import Hero from "../../../components/commons/ServicesHero";
import WhyAgentic from "../../../components/commons/WhyAgentic";
import HeadingSection from "../../../components/commons/HeadersAllScreen";
import Industries from "../../../components/commons/IndustriesSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import AnimatedSection from "../../../layouts/AnimatedSection";
import OurAchievement from "../../../components/commons/OurAchievement"
import GradientSection from "../../../components/commons/GradientCTA"
import GradientButton from "../../../ui/Button/Button";
// import StepsDecsriptions from "../../../components/commons/stepsDescriptions";
// import { motion } from "framer-motion";


const DigitalTransformation = () => {

  //  const stepsData = [
  //   { id: 1, step: "01", title: "Discovery & Planning", description:"We learn your business goals, define success metrics, and agree on what “good” looks like." },
  //   { id: 2, step: "02", title: "Use Case & Idea Validation", description: "Together, we pick the right AI use cases that offer the biggest impact and best chance of success." },
  //   { id: 3, step: "03", title: "Data Preparation", description: "We gather, clean, and prepare the data your AI needs to perform well." },
  //   { id: 4, step: "04", title: "Prototype Development (PoC)", description: "We create a small-scale version of your solution to test technical and business feasibility." },
  //    { id: 5, step: "05", title: "MVP Build-Out", description: "We expand the prototype into a functional product with a user interface and essential integrations." },
  //     { id: 6, step: "06", title: "Testing & Feedback", description: "Real users interact with the MVP, and we refine based on insights." },
  //      { id: 7, step: "07", title: "Scale & Launch", description: "Once proven, we scale your AI product for full deployment and long-term success." },
  // ];


  return (
    <>
      <Hero
        Heading={"Digital Transformation Consulting That Drives Real Change"}
        description={"Your business is ready to grow — we make technology work for it."}
        ButtonText={"Start Your Transformation"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDescription={"Great design feels invisible because it simply works. With AI insights data backed decisions and human empathy we build products that connect logic with emotion."}
        cardDescOne={"Deep user research that uncovers real behavior and intent"}
        cardDescTwo={"AI enhanced UI UX that stays ahead of user needs"}
        cardDescThree={"Interactive prototypes that validate ideas fast and guide development"}
        ButtonWidth={"280px"}
        ButtonHeight={"58px"}
        arrowSize={"18px"}
        arrowBgSize={"42px"}
        ButtonTextSize={"15px"}
        ButtonTextTransalate={"60px"}
        ButtonarrowTranslate={"-210px"}
      />


      <WhyAgentic
        badgeText={"Yesss"}
        mainHeading={"Harness AI to Power Your Digital Evolution"}
        descriptionOne={"Move beyond upgrades  build intelligence into everything you do. Omnisol integrates AI into your core operations to automate, predict, and optimize performance at every level."}
        cards={[
          {
            title: "Adaption",
            description: "AI-driven process automation.",
            image: "/Images/Services/AIAgents/Adoption.webp",
          },
          {
            title: "Predictive Analysis Algorithm",
            description: "Predictive analytics for smarter decisions.",
            image: "/Images/Services/AIAgents/MultiAgent.webp",
          },
          {
            title: "Hybrid Teams",
            description: "Intelligent systems that scale with your business.",
            image: "/Images/Services/AIAgents/Adoption.webp",
          },
        ]} />

      <GradientButton
        to="/contact"
        text="Start Your AI Prject"
        width="250px"
        height="60px"
        arrowSize="22px"
        arrowBgSize="42px"
        fontSize="16px"
        hideArrowOnMobile={false}
        textTranslate="60px"
        arrowTranslate="-180px"
        className="mx-auto -mt-20"
      />

      <div >
        <AnimatedSection>
          <div className=" mt-8  md:mt-20" >
            <HeadingSection
              Heading={"Industries"}
              Title={"Your industry, our intelligence."}
              Description={" Omnisol AI development adapts to the rhythm of your business — whether that’s predicting demand, automating logistics, or personalizing customer experiences."} />
          </div>
        </AnimatedSection>
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

export default DigitalTransformation;

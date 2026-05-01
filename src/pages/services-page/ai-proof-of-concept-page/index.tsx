
import Hero from "../../../components/commons/ServicesHero";
import WhyAgentic from "../../../components/commons/WhyAgentic";
import HeadingSection from "../../../components/commons/HeadersAllScreen";
import Industries from "../../../components/commons/IndustriesSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import AnimatedSection from "../../../layouts/AnimatedSection";
import OurAchievement from "../../../components/commons/OurAchievement"
import GradientSection from "../../../components/commons/GradientCTA"
import GradientButton from "../../../ui/Button/Button";
import StepsDecsriptions from "../../../components/commons/StepsDescriptions";
import { motion } from "framer-motion";


const AiPoc = () => {


  const stepsData = [
    { id: 1, step: "01", title: "Discovery & Planning", description: "We learn your business goals, define success metrics, and agree on what “good” looks like." },
    { id: 2, step: "02", title: "Use Case & Idea Validation", description: "Together, we pick the right AI use cases that offer the biggest impact and best chance of success." },
    { id: 3, step: "03", title: "Data Preparation", description: "We gather, clean, and prepare the data your AI needs to perform well." },
    { id: 4, step: "04", title: "Prototype Development (PoC)", description: "We create a small-scale version of your solution to test technical and business feasibility." },
    { id: 5, step: "05", title: "MVP Build-Out", description: "We expand the prototype into a functional product with a user interface and essential integrations." },
    { id: 6, step: "06", title: "Testing & Feedback", description: "Real users interact with the MVP, and we refine based on insights." },
    { id: 7, step: "07", title: "Scale & Launch", description: "Once proven, we scale your AI product for full deployment and long-term success." },
  ];


  return (
    <>
      <Hero
        Heading={"Test Your AI Ideas Before You Scale Them"}
        description={"Validate your concept with a working AI prototype — ready in just 4 weeks. Our Proof of Concept (PoC) and MVP development services help you explore what’s possible, see real results, and make smart investment decisions before going all in."}
        ButtonText={"Get in Touch"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDescription={
          "We turn your AI ideas into real, testable prototypes fast. Validate value, reduce risk, and scale only when the results prove it."
        }

        cardDescOne={"Test AI ideas quickly with functional, results driven prototypes"}
        cardDescTwo={"Build PoCs and MVPs that deliver measurable early impact"}
        cardDescThree={"Move from concept to scalable AI product with clarity"}

        ButtonWidth={"180px"}
        ButtonHeight={"60px"}
        arrowSize={"20px"}
        arrowBgSize={"45px"}
        ButtonTextSize={"16px"}
        ButtonTextTransalate={"55px"}
        ButtonarrowTranslate={"-115px"}
      />


      <WhyAgentic
        badgeText={"What We Deliver"}
        mainHeading={"From Big Ideas to Working Prototypes"}
        descriptionOne={"We help you turn “what if” into “what works.”Our team designs, tests, and launches small, focused AI versions of your idea so you can see real outcomes — not just slide decks."}
        cards={[
          {
            title: "AI Strategy Roadmap",
            description: "We start by mapping your AI journey — defining goals, project scope, timelines, and budgets so everyone’s on the same page.",
            image: "/Images/Services/AIAgents/Adoption.webp",
          },
          {
            title: "AI Proof of Concept (PoC)",
            description: "Next, we build a simple version of your AI idea that proves the technology works. It’s about testing value, not building a full app yet.",
            image: "/Images/Services/AIAgents/MultiAgent.webp",
          },
          {
            title: "Minimum Viable Product (MVP)",
            description: "Once the PoC succeeds, we turn it into a real, usable product — with a clean interface, proper integrations, and everything ready for market testing.",
            image: "/Images/Services/AIAgents/Adoption.webp",
          },
        ]} />

      <GradientButton
        to="/contact"
        text="Start Your AI Project"
        width="250px"
        height="60px"
        arrowSize="22px"
        arrowBgSize="42px"
        fontSize="16px"
        hideArrowOnMobile={false}
        textTranslate="60px"
        arrowTranslate="-180px"
        className="mx-auto  -mt-20"
      />

      <div className="flex flex-col lg:flex-row justify-center mx-auto w-[90%] mt-20 p-4">
        <motion.div
          className="max-w-[450px] mx-auto lg:mx-0 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <HeadingSection
            Heading="How We Work"
            Title="A Clear, Practical Approach to Building AI Solutions"
            Description="We move quickly — but thoughtfully. Our process is designed to reduce risk, align with your business goals, and deliver visible progress every step of the way."
            align="left"
          />
        </motion.div>


        {/* Steps Section */}
        <StepsDecsriptions stepsData={stepsData} direction="right" />
      </div>



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

export default AiPoc;

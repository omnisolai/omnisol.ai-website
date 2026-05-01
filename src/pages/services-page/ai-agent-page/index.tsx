
import Hero from "../../../components/commons/ServicesHero";
import WhyAgentic from "../../../components/commons/WhyAgentic";
import HowWeBuild from "./_components/HowWeBuild";
import HeadingSection from "../../../components/commons/HeadersAllScreen";
import Industries from "../../../components/commons/IndustriesSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import AnimatedSection from "../../../layouts/AnimatedSection";
import OurAchievement from "../../../components/commons/OurAchievement"
import GradientSection from "../../../components/commons/GradientCTA"


const AiAgents = () => {
  return (
    <>
      <Hero
        Heading={"Build Autonomous Workflows with AI Agent Development Services"}
        description={"Create intelligent agents that learn, adapt, and act — automating complex work so your team can focus on growth."}
        ButtonText={"Build Your AI Agent"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDescription={"Omnisol engineers AI agents that operate like digital teammates: fast, reliable, and fully aligned with your business goals."}
        cardDescOne={"Agents that make decisions, not just predictions"}
        cardDescTwo={"Plug-and-play integration with your systems"}
        cardDescThree={"Secure, monitored, and endlessly scalable"}
        ButtonWidth={"250px"}
        ButtonHeight={"60px"}
        arrowSize={"22px"}
        arrowBgSize={"40px"}
        ButtonTextSize={"16px"}
        ButtonTextTransalate={"60px"}
        ButtonarrowTranslate={"-180px"}
      />

    <WhyAgentic
        badgeText={"Why Agentic AI"}
        mainHeading={"Automation can follow instructions. Agentic AI understands intent."}
        descriptionOne={"Our agents reason, remember, and collaborate to deliver outcomes not just output."}
       descriptionTwo={"They move beyond rule-based automation to handle ambiguity, learn from feedback, and improve with every interaction.."}
        cards={[
          {
            title: "Adaption",
            description: "Adaptive intelligence that grows with your data",
            image: "/Images/Services/AIAgents/Adoption.webp",
          },
          {
            title: "Multi-Agent",
            description: "Multi-agent coordination across departments",
            image: "/Images/Services/AIAgents/MultiAgent.webp",
          },
          {
            title: "Hybrid Teams",
            description: "Human oversight when you want it, full autonomy when you don’t",
            image: "/Images/Services/AIAgents/Adoption.webp",
          },
        ]}/>
<HowWeBuild />

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

export default AiAgents;
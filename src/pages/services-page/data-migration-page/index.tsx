import OurAchievement from "../../../components/commons/OurAchievement"
import GradientSection from "../../../components/commons/GradientCTA"
import HeadingSection from "../../../components/commons/HeadersAllScreen";
import Industries from "../../../components/commons/IndustriesSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import Hero from "../../../components/commons/ServicesHero";
import Testimonials from "../../../components/commons/Testimonials";


const DataMigration = () => {
  return (
    <>
      <Hero
        Heading={"Turn Your Mess into AI SaaS"}
        description={"Transform outdated, fragmented data into structured intelligence.Our Data Migration Services make it effortless to move from legacy chaos to modern, AI-ready systems — clean, secure, and optimized for scale."}
        ButtonText={"Migrate Smarter with Omnisol"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDescription={"Whether you’re shifting from spreadsheets, old CRMs, or outdated platforms, Omnisol ensures a seamless migration to your new AI-powered SaaS environment.We handle every step — from audit to migration to validation — so your data works smarter, not harder."}
        cardDescOne={"Migration: Move without disrupting your operations."}
        cardDescTwo={"Eliminate duplicates, errors, and outdated records."}
        cardDescThree={"End-to-end encryption and adherence to global data standards."}
        ButtonWidth={"320px"}
        ButtonHeight={"60px"}
        arrowSize={"20px"}
        arrowBgSize={"40px"}
        ButtonTextSize={"15px"}
        ButtonTextTransalate={"60px"}
        ButtonarrowTranslate={"-240px"}
      />

      <Testimonials />
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
      <GradientSection />
    </>
  )
}

export default DataMigration;

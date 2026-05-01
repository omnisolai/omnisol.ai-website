import OurAchievement from "../../../components/commons/OurAchievement"
import GradientSection from "../../../components/commons/GradientCTA"
import HeadingSection from "../../../components/commons/HeadersAllScreen";
import Industries from "../../../components/commons/IndustriesSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import Hero from "../../../components/commons/ServicesHero";
import LayoutCards from "../../../components/commons/LayoutCards";
import Testimonials from "../../../components/commons/Testimonials";
import Faqs from "../../../components/commons/Faq";
import GradientButton from "../../../ui/Button/Button";


const UserExperience = () => {

  const cardsData = [
    {
      id: 1,
      title: "Experience Strategy & Research",
      description: "We dig into your users’ world — understanding behavior, intent, and goals to design with purpose."
    },
    {
      id: 2,
      title: "AI-Enhanced UI/UX Design",
      description:
        "From dashboards to mobile apps, we create adaptive, intelligent interfaces that stay ahead of your users’ needs.",
      customDiv: (
        <div className="w-full h-full flex items-center justify-end relative">
          <img src="/Images/Services/uiux.png"
            className="h-60  absolute lg:bottom-2  lg:-right-1"
            alt="LogosSection" />
        </div>
      ),



    },
    {
      id: 3,
      title: "Prototyping & Interaction Design",
      description:
        "Turn ideas into something you can see, touch, and test.We build interactive prototypes that bring your concept to life early."
    },
    {
      id: 4,
      title: "Design-to-Development Continuity",
      description: "We don’t hand off pixels — we ship polished, production-ready designs that translate seamlessly into code."
    },
    {
      id: 5,
      title: "Final Presentation",
      description: "You get a complete package — the prototype, process insights, project plan, estimated costs, and timeline — ready for execution."
    },
  ];

  return (
    <>
      <Hero
        Heading={"Design That Thinks, Learns, and Feels Human"}
        description={"We design interfaces that don’t just look good — they understand.Omnisol combines human intuition with AI precision to craft digital experiences that evolve with your users and deliver real impact."}
        ButtonText={"Book a Call"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDescription={
          "Great design feels invisible because it simply works. With AI insights data backed decisions and human empathy we build products that connect logic with emotion."
        }
        cardDescOne={"Deep user research that uncovers real behavior and intent"}
        cardDescTwo={"AI enhanced UI UX that stays ahead of user needs"}
        cardDescThree={"Interactive prototypes that validate ideas fast and guide development"}
        ButtonWidth={"165px"}
        ButtonHeight={"60px"}
        arrowSize={"18px"}
        arrowBgSize={"43px"}
        ButtonTextSize={"15px"}
        ButtonTextTransalate={"60px"}
        ButtonarrowTranslate={"-100px"}
      />

      <div className="my-20" >
        <HeadingSection
          Heading={"What You Gain"}
          Title={"Design that Works Smarter, Not Harde"}
          Description={"We believe great design is invisible — it works so naturally that users never have to think twice.With AI-driven insights, data-backed decision-making, and a touch of human empathy, we build products that connect logic with emotion."}

        />
        <LayoutCards
          cards={cardsData}
          shadowCards={[3]}
          mobileHeading={"Every Vision Needs a Roadmap"}
        />

        <GradientButton
        to="/contact"
          text="Book Your Discovery Session"
          width="300px"
          height="55px"
          arrowSize="20px"
          arrowBgSize="38px"
          fontSize="14px"
          hideArrowOnMobile={false}
          textTranslate="60px"
          arrowTranslate="-220px"
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

export default UserExperience

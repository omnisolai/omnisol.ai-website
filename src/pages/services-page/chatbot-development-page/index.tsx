import Hero from "../../../components/commons/ServicesHero";
import AnimatedSection from "../../../layouts/AnimatedSection";
import HeadingSection from "../../../components/commons/HeadersAllScreen";
import CardGroupSection from "../chatbot-development-page/_components/CardGroupSection"
import GradientButton from "../../../ui/Button/Button";
import NumberSection from "./_components/NumberSection";
import Testimonials from "@/components/commons/Testimonials";
import Industries from "@/components/commons/IndustriesSection"
import MissingYourIndustry from "@/components/commons/MissingYourIndustry";
import OurAchievement from "@/components/commons/OurAchievement"
import GradientSection from "@/components/commons/GradientCTA"
import Faqs from "../../../components/commons/Faq";

const ChatbotDevelopmentService = () => {
  return (
    <>
      <Hero
        Heading={"No Small Talk. Only Smart Talk."}
        description={" Our AI chatbots don’t just chat — they understand, act, and deliver. We design AI chatbots that go beyond scripted replies."}
        ButtonText={"Build your Chat Agent"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDescription={"We create high-conversion AI chatbots that turn conversations into customers.Our chatbots automate leads, qualify prospects, and boost sales—24/7, without friction"}
        cardDescOne={"We Identify needs and define the chatbot's purpose clearly."}
        cardDescTwo={"Build intelligent, scalable chatbots tailored to your goals."}
        cardDescThree={"We Deploy, optimize, and enhance performance continuously."}
        ButtonWidth={"250px"}
        ButtonHeight={"60px"}
        arrowSize={"20px"}
        arrowBgSize={"40px"}
        ButtonTextSize={"16px"}
        ButtonTextTransalate={"60px"}
        ButtonarrowTranslate={"-180px"}
      />

      <AnimatedSection>
        <div className=" mt-8  md:mt-20" >
          <HeadingSection
            Heading={"Solutions"}
            Title={"Chatbot Solutions"}
            Description={"Every chatbot we build is trained to think, learn, and solve — not just reply. Whether it’s serving customers or powering internal ops, these systems are engineered to make conversations productive and outcomes measurable."} />
        </div>
      </AnimatedSection>


      <CardGroupSection />

      <div className="mt-10 justify-center flex">
        <GradientButton
          to="/contact"
          text="See What AI Can Say for Your Business"
          fromColor="from-orange"
          toColor="to-orange-100"
          width="365px"
          height="60px"
          textTranslate="70px"
          arrowTranslate="-295px"
          fontSize="14px"
          arrowSize="20px"
          arrowBgSize="45px"
        />
      </div>



      <AnimatedSection>
        <div className=" mt-8  md:mt-20" >
          <HeadingSection
            Heading={"Powered by Omnisol AI"}
            Title={"At Omnisol, we believe conversations are data — and data is opportunity."}
            Description={"We fine-tune every model on your domain, brand tone, and workflows — so it doesn’t just talk like you, it thinks like your business."} />
        </div>
      </AnimatedSection>


      <NumberSection />

      <AnimatedSection>
        <div className="mt-8 md:mt-20 md:ml-8 lg:px-15 block md:flex">
          <HeadingSection
            Heading="Tools"
            Title="Technologies & tools we use for AI chatbot development"
            Description="We use advanced tools and frameworks in our AI chatbot development services to build fast, intelligent, and scalable conversational experiences. Here are the tools we put to work:"
            align="left"
            // 👇 ye button sirf desktop/laptop view me dikhayega
            button={
              <div className="hidden md:block">
                <GradientButton
                  to="/contact"
                  text="Start Your Chatbot Project"
                  fromColor="from-orange"
                  toColor="to-orange-100"
                  width="300px"
                  height="60px"
                  fontSize="16px"
                  arrowSize="23px"
                  arrowBgSize="45px"
                  hideArrowOnMobile={false}
                  textTranslate="60px"
                  arrowTranslate="-235px"
                />
              </div>
            }
          />
          <img src="/Images/Services/Chat-Development-Services/TechGroup.png"
            className="-mt-12 mx-2 h-72 md:h-120"
            alt="" />

          {/* 👇 ye button sirf mobile view me dikhayega (image ke niche aa jayega) */}
          <div className=" md:hidden mt-4 mb-10 justify-center flex">
            <GradientButton
              to="/contact"
              text="Start Your Chatbot Project"
              fromColor="from-orange"
              toColor="to-orange-100"
              width="300px"
              height="55px"
              fontSize="15px"
              arrowSize="20px"
              arrowBgSize="40px"
              hideArrowOnMobile={false}
            />
          </div>
        </div>

      </AnimatedSection>


      <Testimonials />




      <div >
        <AnimatedSection>
          <div className="mt-8  md:mt-20" >
            <HeadingSection
              Heading={"Industries"}
              Title={"Your industry, our intelligence."}
              Description={" Omnisol AI development adapts to the rhythm of your business — whether that’s predicting demand, automating logistics, or personalizing customer experiences."} />
          </div>
        </AnimatedSection>
        {/* Images and text Sections */}
        <div className="flex flex-col gap-4 ">
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
      <Faqs />
      <GradientSection />




    </>
  )
}

export default ChatbotDevelopmentService;
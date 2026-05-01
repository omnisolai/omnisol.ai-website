import HeadingSection from "../components/commons/HeadersAllScreen";
import AnimatedSection from "../layouts/AnimatedSection";
import Industries from "../components/commons/IndustriesSection";
import MissingYourIndustry from "../components/commons/MissingYourIndustry";
import GradientSection from "../components/commons/GradientCTA";
import Faqs from "../components/commons/Faq";
import Testimonials from "../components/commons/Testimonials";
import OurAchievement from "../components/commons/OurAchievement";
import GradientButton from "../ui/Button/Button";
import WhoWeAre from "../components/commons/WhoWeAre";
import WavesBgSection from "../components/commons/WavesBgSection";
import AISolutionWeDeliver from "../components/commons/AISolutionWeDeliver";
import OurProcess from "../components/commons/OurProcess";
import HeroSection from "./landing-page/HeroSection";

const Landingpage = () => {
  return (
    <>
      <HeroSection />
      {/* All in One Section */}
      <AISolutionWeDeliver />
      <OurProcess />

      <section
        className="w-[95%] mx-auto overflow-hidden relative"  // ✅ overflow-x-hidden ko overflow-hidden me change kiya (prevent both x & y scroll glitches)
      >
        <AnimatedSection>
          <div>
            <HeadingSection
              Heading={"Choose your needs"}
              Title={"Engagement Models That Fit Your Vision"}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          {/* ✅ Added parent container ka overflow-hidden for background image rounding issues */}
          <div className="overflow-hidden">
            <div
              className="
          grid grid-cols-1 md:grid-cols-2 gap-8 
          mt-10 md:mt-16 px-4 md:px-0 font-main 
          max-w-[1400px] mx-auto
        "
            >
              {/* ✅ Left Card */}
              <div
                className="
            bg-[url('/engage_1.png')] 
            text-white bg-no-repeat bg-cover bg-center 
            p-6 rounded-2xl rounded-tr-[110px]
            overflow-hidden   // ✅ added: prevents corner bleed issues
          "
              >
                <h3 className="mb-3 text-2xl font-medium">
                  Project-Based Delivery
                </h3>
                <p className="mb-10">Best for defined goals and fixed timelines.</p>

                <div className="flex flex-col gap-y-4 mb-10">
                  <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                    <p>Ideal when you have a clear scope and outcome in mind</p>
                  </div>
                  <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                    <p>We plan, build, and deliver end-to-end</p>
                  </div>
                  <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                    <p>Predictable costs, measurable results</p>
                  </div>
                </div>

                <GradientButton
                to="/contact"
                  text={"Let's discuss your project"}
                  width="280px"
                  height="58px"
                  arrowSize="22px"
                  arrowBgSize="45px"
                  fontSize="16px"
                  textTranslate="55px"
                  arrowTranslate="-215px"
                  hideArrowOnMobile={true}
                />
              </div>

              {/* ✅ Right Card */}
              <div
                className="
            bg-[url('/engage_2.png')] 
            text-white bg-no-repeat bg-cover bg-center 
            p-6 rounded-2xl rounded-tr-[110px]
            overflow-hidden   // ✅ added: prevents background bleed (was causing left vertical line)
          "
              >
                <h3 className="mb-3 text-2xl font-medium">Dedicated Team</h3>
                <p className="mb-10">
                  Perfect for long-term collaboration and flexibility.
                </p>

                <div className="flex flex-col gap-y-4 mb-10">
                  <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                    <p>Handpicked team fully aligned with your objectives</p>
                  </div>
                  <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                    <p>Scales with your project as it grows</p>
                  </div>
                  <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                    <p>Seamless integration with your workflows</p>
                  </div>
                </div>

                <GradientButton
                to="/contact"
                  text={"Pick your team"}
                  width="195px"
                  height="58px"
                  arrowSize="22px"
                  arrowBgSize="45px"
                  fontSize="16px"
                  textTranslate="55px"
                  arrowTranslate="-135px"
                  hideArrowOnMobile={true}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="font-main text-black w-[90%] md:w-[65%] mx-auto text-center md:mt-20 2xl:mt-20 mt-10">
            <h4 className="font-semibold md:text-4xl 2xl:text-4xl text-2xl leading-[1.7]">
              Our flexible team{" "}
              <span className="">
                <img
                  className="inline h-10"
                  src="/Images/Hero/Avtars.webp"
                  alt=""
                />
              </span>{" "}
              has a wide range of skills, which lets us look at projects from a
              complete point of view that combines creativity and usefulness.
            </h4>
          </div>
        </AnimatedSection>
      </section>


      <div className="mt-20">
        <OurAchievement />
      </div>

      <div className="w-[90%]  mx-auto">
        <WhoWeAre />
      </div>

      <AnimatedSection>
        <div >
          <HeadingSection
            Heading={"Industries"}
            Title={"Your industry, our intelligence."}
            Description={
              " Omnisol AI development adapts to the rhythm of your business — whether that’s predicting demand, automating logistics, or personalizing customer experiences."
            }
          />
        </div>
      </AnimatedSection>
      {/* Images and text Sections */}
      <div className="flex flex-col gap-4  py-10 ">
        <Industries
          imageSrc="Images/Services/AI-Development/Fintech.webp"
          heading={"Fintech"}
          description={
            "Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."
          }
          buttonText={"Read More"}
          reverse={false}
        />
        <Industries
          imageSrc="Images/Services/AI-Development/Healthcare.webp"
          heading={"Healthcare"}
          description={
            "Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."
          }
          buttonText={"Read More"}
          reverse={true}
        />
        <Industries
          imageSrc="Images/Services/AI-Development/Retail.webp"
          heading={"Retail"}
          description={
            "Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."
          }
          buttonText={"Read More"}
          reverse={false}
        />
        <Industries
          imageSrc="Images/Services/AI-Development/Manufacturing.webp"
          heading={"Manufacturing"}
          description={
            "Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."
          }
          buttonText={"Read More"}
          reverse={true}
        />
      </div>
      {/*  Missing Your Industris*/}
      <MissingYourIndustry />
      {/* <WavesBgSection /> */}
      <Testimonials />
      <Faqs />
      <GradientSection />


    </>
  );
};

export default Landingpage;

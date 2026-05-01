import SpecialHero from '../../components/commons/SpecialHero.tsx';
import HeadersAllScreen from '../../components/commons/HeadersAllScreen.tsx';
import { ArrowRight, Star, Rocket } from "lucide-react";
import AiServiceCards from './_components/AIServiceCards.tsx';
import GradientButton from '../../ui/Button/Button.tsx';
import SpecialScreenCards from "../../components/commons/SpecialScreenCards.tsx";
import Faq from '../../components/commons/Faq.tsx';
import WhyDedicatedTeam from './_components/WhyDedicatedTeam.tsx';


const cards = [
    { icon: <ArrowRight className="w-6 h-6" />, text: "End-to-end ownership from discovery to deployment" },
    { icon: <Star className="w-6 h-6" />, text: "Transparent timelines and cost estimates", highlight: true },
    { icon: <Rocket className="w-6 h-6" />, text: "Built for fast delivery and measurable outcomes" },
];



function DedicatedTeam() {
    return (
        <div>
            <SpecialHero
                SpecialHeroColor="#FFE5D8"
                heading="Build a Dedicated Tech Team That Delivers Every Time"
                description="Skip recruitment. Skip risk. Get a world-class development team built around your goals, ready to integrate seamlessly with your business and start delivering from day one"
                buttonText="Get In Touch"
                cardData={[
                    "AI-powered software development tailored to your business needs",
                    "Prototype and deploy custom AI agents in weeks, not months",
                    "Delivering intelligent, high-ROI solutions for scalable growth",
                ]}
                stats={[
                    { value: 20, label: "Projects Delivered" },
                    { value: 92, label: "Customer Success Rate" },
                    { value: 32, label: "Cost - Time Optimization" },
                ]}
                mobileLogos={["OpenAI", "Gemini", "Dialogflow", "botpress", "n8n"]}
                desktopLogos={["Visa", "Spotify", "LinkedIn", "Zoom"]}
            />


            <HeadersAllScreen
                Heading='What you Gain'
                Title='Our Project Delivery FrameWork'
            />
            <AiServiceCards />

            <div className='flex justify-center my-10'>
                <GradientButton
                    to="/contact"
                    text="Let's Build your next Big Thing"
                    width="295px"
                    height="60px"
                    arrowSize="25px"
                    arrowBgSize="45px"
                    fontSize="15px"
                    hideArrowOnMobile={true}
                    textTranslate="59px"
                    arrowTranslate="-232px"

                />
            </div>

            <WhyDedicatedTeam />
            

            <HeadersAllScreen
                Heading='Project Delivery Option'
                Title='Have a Defined Goal? Go Project-Based.'
                Description="If your scope and deliverables are clear, our project-based model guarantees speed, accuracy, and fixed-cost delivery."
            />

            <SpecialScreenCards cards={cards} />
            <div className='flex justify-center mb-10'>
                <GradientButton
                    to="/special/project-based-delivery"
                    text={"Start your Project"}
                    width="205px"
                    height="57px"
                    arrowSize="25px"
                    arrowBgSize="40px"
                    fontSize="15px"
                    hideArrowOnMobile={true}
                    textTranslate="50px"
                    arrowTranslate="-145px"
                />
            </div>

            <Faq />
        </div>
    )
}

export default DedicatedTeam;
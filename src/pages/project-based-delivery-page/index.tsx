import React from 'react'
import SpecialHero from '../../components/commons/SpecialHero.tsx'
import { ArrowRight, Star, Rocket } from "lucide-react";
import AiServiceCards from '../project-based-delivery-page/_components/AIServiceCards.tsx'
import HeadersAllScreen from '../../components/commons/HeadersAllScreen.tsx'
import GradientButton from '../../ui/Button/Button.tsx'
import WhyPBD from './_components/WhyPBD.tsx'
import SpecialScreenCards from "../../components/commons/SpecialScreenCards.tsx"
import Faq from "../../components/commons/Faq.tsx"

const cards = [
    { icon: <ArrowRight className="w-6 h-6" />, text: "Direct access to a custom-built team" },
    { icon: <Star className="w-6 h-6" />, text: "Flexible scaling and deep integration", highlight: true },
    { icon: <Rocket className="w-6 h-6" />, text: "Continuous collaboration and support" },
];


const ProjectBasedDelivery = () => {
    return (
        <div>
            <SpecialHero
                SpecialHeroColor="#D8FFFF"
                heading="Infinite Possibilities, Delivered."
                description="Experience project-based development built on precision and trust. We handle your projects end-to-end — ensuring the lowest possible CapEx, near-zero OpEx, and uncompromised quality from start to finish."
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

            <WhyPBD />


            <HeadersAllScreen
                Heading='Dedicated Team Option'
                Title='Need Long-Term Partnership Instead?'
                Description="If your needs are evolving and ongoing, our Dedicated Team model gives you flexibility and control with zero recruitment overhead."
            />

            <SpecialScreenCards cards={cards} />

            <div className='flex justify-center mb-10'>
                <GradientButton
                    to="/special/dedicated-team"
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

export default ProjectBasedDelivery;
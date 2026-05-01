import React from 'react'
import SpecialHero from '../../components/commons/SpecialHero.tsx'

const GoToMarketPage = () => {
    return (
        <div>
            <SpecialHero
                SpecialHeroColor="#D9FFD8"
                heading="Let’s Grow Together — Partner with Omnisol"
                description="Join forces with us to bring cutting-edge AI solutions to your clients. Our Joint Go-To-Market program helps agencies and tech partners expand offerings, close bigger deals, and deliver more value — all while sharing success."
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
        </div>
    )
}

export default GoToMarketPage
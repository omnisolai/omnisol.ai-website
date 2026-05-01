import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GradientButton from "../../ui/Button/Button"
import SocialProof from "../../components/commons/SocialProof";
import CountUp from "react-countup";

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const mobileLogos = ["OpenAI", "Gemini", "Dialogflow", "botpress", "n8n"];
    const desktopLogos = ["Visa", "Spotify", "LinkedIn", "Zoom"];
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
    const [activeCard, setActiveCard] = useState(0);
    const controls = useAnimation();
    const cardData = ['AI-powered software development tailored to your business needs'
        , 'Prototype and deploy custom AI agents in weeks, not months',
        'Delivering intelligent, high-ROI solutions for scalable growth'];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cardVariants: Variants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            x: -100,
            transition: { duration: 0.6, ease: "easeIn" },
        },
    };

    useEffect(() => {
        if (isMobile && inView) {
            controls.start("visible");
            const interval = setInterval(() => {
                setActiveCard((prev) => (prev + 1) % cardData.length);
            }, 2500);
            return () => clearInterval(interval);
        }
    }, [inView, controls, isMobile]);

    return (
        <section className="pt-10 relative z-10 overflow-hidden">

            {/* Hero Screen */}
            <div className="w-[95%] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-main w-full md:w-[57%] mb-8 md:mb-12 text-center md:text-left"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-medium text-[26px] leading-[34px] md:text-[42px] md:leading-[1.2] 2xl:text-[48px] tracking-[-0.01em] text-black mb-4"
                    >
                        Experience Business Intelligence Like Never Before with Omnisol AI
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[14px] md:text-base font-medium w-full md:w-[55%] mx-auto md:mx-0 mb-6 text-gray-700"
                    >
                        Automate workflows in weeks, not quarters. Trusted by startups and Fortune 500s.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="z-50 hidden md:inline-block"
                    >
                        <GradientButton
                            to="/contact"
                            text="Let's Get Started "
                            width="195px"
                            height="50px"
                            arrowSize="20px"
                            arrowBgSize="35px"
                            fontSize="15px"
                            hideArrowOnMobile={true}
                            textTranslate="50px"
                            arrowTranslate="-140px"

                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-4 md:hidden flex justify-center"
                    >

                    </motion.div>
                </motion.div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
                    <div
                        className="font-poppins w-full md:w-1/2 grid grid-cols-3 gap-4"
                    >
                        {[
                            { value: 25, label: "startups and Fortune 1000 Project" },
                            { value: 54, label: "ROI Delivered" },
                            { value: 32, label: "Small and Big Wins" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left">
                                <h3
                                    className="font-bold text-xl md:text-2xl mb-1 md:mb-2"
                                >
                                    <CountUp end={stat.value} />+
                                </h3>
                                <p className="text-xs md:text-base text-gray-700">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div
                        ref={ref}
                        className={`lg:w-1/2 flex ${isMobile ? "flex-col" : "flex-row"
                            } gap-4 justify-center lg:justify-start`}
                    >
                        {isMobile ? (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCard}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="w-60 h-50 border border-white/40 bg-[#9FE0FF]/20 rounded-md backdrop-blur-md shadow-lg shadow-black/20 p-4 flex flex-col justify-center mx-auto"
                                >
                                    <p className="font-main font-medium text-[14px] leading-[22px] text-center text-black">
                                        {cardData[activeCard]}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            cardData.map((item: string, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.5 + index * 0.15 }}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3 }
                                    }}
                                    className={`w-60 h-50 bg-glass-bg/14 rounded-md backdrop-blur-md p-4 flex ${index === 1 ? "items-end" : "items-start"} mx-auto`}
                                >
                                    <p className="font-main font-medium text-[14px] leading-[22px] text-black text-center">
                                        {item}
                                    </p>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <SocialProof
                isMobile={isMobile}
                mobileLogos={mobileLogos}
                desktopLogos={desktopLogos}

            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block absolute top-[33%] right-28 z-[-1]"
            >
                <img src="/blur_ball.png" alt="bg_bottom" className="w-40 h-40 rounded-full blur-sm" />
            </motion.div>


            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="hidden md:block absolute -bottom-10 right-1/2 translate-x-1/2 z-[-1]"
            >
                <img src="/blur_ball.png" alt="bg_bottom" className="w-40 h-40 rounded-full blur-sm" />
            </motion.div>

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="hidden md:block absolute bottom-0 right-8 z-[-1]"
            >
                <img src="/blur_ball.png" alt="bg_bottom" className="w-40 h-40 rounded-full blur-sm" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
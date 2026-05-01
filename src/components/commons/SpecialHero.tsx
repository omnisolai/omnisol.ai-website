import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GradientButton from "../../ui/Button/Button";
import CountUp from "react-countup";

interface Stat {
    value: number;
    label: string;
}

interface SpecialHeroProps {
    SpecialHeroColor: string;
    heading: string;
    description: string;
    buttonText: string;
    cardData: string[];
    stats: Stat[];
    mobileLogos: string[];
    desktopLogos: string[];
    heroImageLeft?: string;
    heroImageRight?: string;
}

const SpecialHero = ({
    SpecialHeroColor,
    heading,
    description,
    buttonText,
    cardData,
    stats,
    mobileLogos,
    desktopLogos,
    heroImageLeft = "/blur_ball.png",
    heroImageRight = "/testimonial_img.png",
}: SpecialHeroProps) => {

    const [isMobile, setIsMobile] = useState(false);
    const [activeCard, setActiveCard] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.3 });
    const controls = useAnimation();

    // Mobile detection
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Auto-slide for mobile
    useEffect(() => {
        if (isMobile && inView) {
            controls.start("visible");
            const interval = setInterval(() => {
                setActiveCard((prev) => (prev + 1) % cardData.length);
            }, 2500);
            return () => clearInterval(interval);
        }
    }, [isMobile, inView, controls]);

    const cardVariants: Variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        exit: { opacity: 0, x: -100, transition: { duration: 0.6 } },
    };

    return (
        <>
            <div
                className="min-h-screen px-10 -mt-40 relative"
                style={{
                    backgroundImage: `linear-gradient(to top, white, ${SpecialHeroColor})`,
                }}
            >

                {/* Decorative Images */}
                <img src={heroImageLeft} className="absolute top-20 -left-20" alt="" />
                <img src={heroImageRight} className="absolute h-60 right-1 top-80" alt="" />

                {/* HERO CONTENT */}
                <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center gap-4 md:pt-32 pt-40 pb-14">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-main font-medium pt-16 text-[26px] md:text-[42px] leading-9 md:leading-[52px] max-w-[300px] md:max-w-[800px]"
                    >
                        {heading}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-main font-medium text-[14px] md:text-[16px] max-w-[300px] md:max-w-[600px]"
                    >
                        {description}
                    </motion.p>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <GradientButton
                            to="/contact"
                            text={buttonText}
                            width="160px"
                            height="50px"
                            arrowSize="20px"
                            arrowBgSize="35px"
                            fontSize="15px"
                            hideArrowOnMobile={true}
                            textTranslate="50px"
                            arrowTranslate="-110px"
                        />
                    </motion.div>
                </div>

                {/* Stats + Cards */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-4">

                    {/* Stats */}
                    <div className="font-poppins w-full md:w-1/2 grid grid-cols-3 gap-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center md:text-left">
                                <h3 className="font-bold text-xl md:text-2xl mb-1 md:mb-2">
                                    <CountUp end={stat.value} />
                                </h3>
                                <p className="text-xs md:text-base text-gray-700">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Cards */}
                    <div
                        ref={ref}
                        className={`lg:w-1/2 flex ${isMobile ? "flex-col" : "flex-row"} gap-4 justify-center lg:justify-start`}
                    >
                        {isMobile ? (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCard}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="w-60 h-50 border border-sky-400 bg-[#9FE0FF]/20 rounded-md backdrop-blur-md shadow-lg p-4 flex flex-col justify-center mx-auto"
                                >
                                    <p className="font-main text-[14px] leading-[22px] text-center text-black">
                                        {cardData[activeCard]}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            cardData.map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                                    whileHover={{ y: -8 }}
                                    className="w-60 h-50 bg-glass-bg/14 rounded-md backdrop-blur-md p-4 flex items-center justify-center mx-auto"
                                >
                                    <p className="font-main text-[14px] leading-[22px] text-black text-center">
                                        {text}
                                    </p>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Social Proof */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative z-30 w-full h-auto sm:h-20 bg-black flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 sm:py-4 gap-3 sm:gap-0"
            >
                {/* Left */}
                <div className="flex items-center gap-4">
                    <img src="/Images/Hero/Avtars.webp" alt="Avatars" className="w-20 h-auto mt-6 md:mt-0" />
                    <p className="hidden md:flex text-white font-main text-[16px]">Getting benefits with AI</p>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap items-center justify-center md:gap-10 gap-6 w-full sm:w-auto">
                    {isMobile
                        ? mobileLogos.map((name, index) => (
                            <motion.img
                                key={name}
                                src={`/Images/Hero/${name}.webp`}
                                alt={name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-20 invert brightness-0"
                            />
                        ))
                        : desktopLogos.map((name) => (
                            <motion.img
                                key={name}
                                src={`/Images/Hero/${name}.webp`}
                                alt={name}
                                className="w-[60px] sm:w-[100px]"
                            />
                        ))}
                </div>
            </motion.div>
        </>
    );
};

export default SpecialHero;

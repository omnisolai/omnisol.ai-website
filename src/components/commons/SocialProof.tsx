import type { FC } from "react";
import { motion, useAnimation } from "framer-motion";

interface SocialProofProps {
    isMobile: boolean;
    mobileLogos: string[];
    desktopLogos: string[];
}

const SocialProof: FC<SocialProofProps> = ({ isMobile, mobileLogos, desktopLogos }) => {
    return (
        < motion.div
            initial={{ opacity: 0, y: 30 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 w-full h-auto sm:h-20 bg-black flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-2 sm:py-0 gap-3 sm:gap-0"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-center  justify-center sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto"
            >
                <img
                    src="/Images/Hero/Avtars.webp"
                    alt="Avatars"
                    className="w-20 h-auto mt-6 md:mt-0"
                />
                <p className="hidden md:flex text-white font-main text-[14px] sm:text-[16px] md:text-[18px] text-center sm:text-left">
                    Getting benefits with AI
                </p>
            </motion.div>

            <div className="flex flex-wrap sm:flex-nowrap mb-10 md:mb-0 items-center justify-center md:gap-10 gap-6 w-full sm:w-auto">
                {isMobile ? (
                    <div className="grid grid-cols-2 gap-6 justify-items-center">
                        {mobileLogos.map((name, index) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.2 + index * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ scale: 1.1, opacity: 1 }}
                                className={`${index === mobileLogos.length - 1
                                    ? "col-span-2 flex justify-center"
                                    : ""
                                    }`}
                            >
                                <img
                                    src={`/Images/Hero/${name}.webp`}
                                    alt={name}
                                    className={`w-20 sm:w-[100px] h-auto opacity-80 transition-all ${name !== "n8n" ? "sm:w-20 invert brightness-0" : ""
                                        }`}
                                />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    desktopLogos.map((name, index) => (
                        <motion.img
                            key={name}
                            src={`/Images/Hero/${name}.webp`}
                            alt={name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 0.8, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.2 + index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{ opacity: 1, y: -4 }}
                            className="w-[60px] sm:w-[100px] h-auto transition-all"
                        />
                    ))
                )}
            </div>
        </motion.div >
    );
};

export default SocialProof;
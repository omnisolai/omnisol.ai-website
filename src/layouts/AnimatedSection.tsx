import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // har baar trigger hoga jab section view me aaye
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      // Jab section view me aaye to in animation
      controls.start("visible");
    } else {
      // Out animation nahi — sirf reset kar do taki next baar trigger ho sake
      controls.set("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        },
      }}
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
        // overflow: "hidden",
      }}
    >
      {children}
    </motion.section>
  );
}

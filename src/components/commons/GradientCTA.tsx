import AnimatedSection from "@/layouts/AnimatedSection";
import GradientButton from "@/ui/Button/Button";

const GradientSection = () => {
  return (
    <AnimatedSection>
      <section className="relative w-full my-10 px-4 sm:px-6 lg:px-10">
        <div
          className="relative w-full max-w-[1200px] mx-auto rounded-[45px] flex flex-col justify-center items-center text-center 
        bg-[url('/GradientSectionBg/Bg.png')] bg-cover bg-center overflow-hidden py-16 sm:py-20 lg:py-24"
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 rounded-[45px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_80%)]" />

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col justify-center items-center">
            <h2
              className="text-3xl sm:text-5xl md:text-5xl lg:text-[64px] leading-tight sm:leading-snug lg:leading-[74px] tracking-[-1%] font-main font-medium text-iconColor max-w-[763px] mx-auto"
            >
              Ready to Revolutionize Your Business with AI?
            </h2>

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

          </div>
        </div>
      </section>
    </AnimatedSection>

  );
};

export default GradientSection;

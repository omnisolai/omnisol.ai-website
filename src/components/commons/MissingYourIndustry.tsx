import AnimatedSection from "../../layouts/AnimatedSection";
import GradientButton from "../../ui/Button/Button";


const MissingYourIndustry = () => {
  return (
    <AnimatedSection>
      <div
        className="w-[90%] md:w-[1000px] mx-auto my-10 rounded-xl bg-[#F3EFE8] flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-6 md:py-12  "
      >
        {/* 📝 Text Section */}
        <div className="flex flex-col gap-3 text-center md:text-left  md:mx-8 mx-0 1xl:mx-10 2xl:mx-10  ">
          <h1 className="font-main font-bold text-[20px]  md:text-[26px] text-black">
            Missing your industry?
          </h1>
          <p className="max-w-300px]   font-main font-medium text-[16px]  md:text-[20px] text-black">
            Contact us to get customized solution for you
          </p>
        </div>

        <GradientButton
          to="/contact"
          text="Contact Us"
          width="170px"
          height="50px"
          arrowSize="22px"
          arrowBgSize="38px"
          fontSize="16px"
          textTranslate="55px"
          arrowTranslate="-110px"
          hideArrowOnMobile={true}
        />

      </div>
    </AnimatedSection>

  );
};

export default MissingYourIndustry;

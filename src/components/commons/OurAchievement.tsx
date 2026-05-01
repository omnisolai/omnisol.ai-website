import GradientButton from "../../ui/Button/Button";
import CountUp from 'react-countup';


const OurAcheivements = () => {

  return (

    <section className="w-full bg-bgDark text-white py-16 md:py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-20 md:gap-32">
      {/* Left Side */}
      <div className="max-w-xl">
        <h2 className="font-bold text-3xl font-main md:text-5xl leading-tight mb-4 md:mb-6">
          Letting the numbers do the talking
        </h2>
        <p className="text-base font-main md:text-xl opacity-60 leading-snug mb-8 md:mb-10">
          Dozens of US startups and SMEs are thriving on the sheer talent and dedication of our talented teams.
        </p>
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

      {/* Right Side Numbers */}
      <div className="relative grid grid-cols-2 gap-8 md:gap-16 text-center md:text-left">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold font-poppins">
            <CountUp end={25} />+
          </h3>
          <p className="text-base md:text-lg opacity-90 mt-2 font-poppins">startups and Fortune 500</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold font-poppins"><CountUp end={98} /> %</h3>
          <p className="text-base md:text-lg opacity-90 mt-2 font-poppins">startups and Fortune 500</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold font-poppins"><CountUp end={32} />K</h3>
          <p className="text-base md:text-lg opacity-90 mt-2 font-poppins">startups and Fortune 500</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold font-poppins"><CountUp end={89} />%</h3>
          <p className="text-base md:text-lg opacity-90 mt-2 font-poppins">startups and Fortune 500</p>
        </div>

        {/* Cross Lines */}
        <span className="absolute left-1/2 top-0 bottom-0 w-px bg-line transform -translate-x-1/2"></span>
        <span className="absolute top-1/2 left-0 right-0 h-px bg-line transform -translate-y-1/2"></span>
      </div>
    </section>


  );
};

export default OurAcheivements;
import Slider from "react-slick";
import type { Settings } from "react-slick";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HeadingSection from "./HeadersAllScreen";
import SecButton from "./secButton";
import AnimatedSection from "@/layouts/AnimatedSection";
import { Link } from "react-router-dom";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Faqs = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const faqs = [
    {
      q: "What industries can benefit from AI-powered solutions?",
      a: "AI solutions can be applied to various industries, including healthcare, manufacturing, retail, fintech, and more. AI can help optimize processes, enhance customer experience, and improve decision-making.",
    },
    {
      q: "What is an AI Proof of Concept (PoC)?",
      a: "An AI PoC is a small-scale demonstration of how AI can solve specific business challenges. It validates the feasibility and potential value before full implementation.",
    },
    {
      q: "Can you integrate AI into existing systems?",
      a: "Yes, we specialize in seamless AI integration with existing software and systems through APIs, ensuring minimal disruption to your current operations.",
    },
    {
      q: "How can I get started with Omnisol's AI solutions?",
      a: "Getting started is easy! Contact us for a consultation where we'll discuss your needs and create a customized AI strategy for your business.",
    },
    {
      q: "What are the potential challenges of implementing AI?",
      a: "Some challenges include data quality, model accuracy, and change management — but our team helps mitigate these effectively.",
    },
  ];

  return (
    <section className="w-[90%] mx-auto relative py-12 sm:py-16 lg:py-20 z-10 ">
      {/* Header + Arrows */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12">
        <AnimatedSection>

          <HeadingSection
            Heading="FAQs"
            Title="Frequently Asked Questions"
            Description="Omnisol’s AI development adapts to the rhythm of your business"
            align="left"
          />
        </AnimatedSection>


        {/* Arrows on right side */}
        <div className="flex gap-3 mt-60  mx-20 hidden md:flex">
          <button
            aria-label="Previous"
            onClick={() => sliderRef.current?.slickPrev()}
            className="p-3 rounded-full border border-gray-300 hover:bg-gray-100  cursor-pointer transition-all"
          >
            <ArrowLeft className="w-7 h-7 text-gray-700" />
          </button>
          <button
            aria-label="Next"
            onClick={() => sliderRef.current?.slickNext()}
            className="p-3 rounded-full border border-gray-300 hover:bg-gray-100  cursor-pointer transition-all"
          >
            <ArrowRight className="w-7 h-7 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <AnimatedSection>
        <div className="mt-4 sm:mt-10 px-2 sm:px-4 lg:px-8">
          <div className="hidden sm:block">
            <Slider ref={sliderRef} {...settings} className="faqs">
              {faqs.map((faq, i) => (
                <FaqCard key={i} faq={faq} />
              ))}
            </Slider>
          </div>

          {/* Mobile (Stacked layout) */}
          <div className="flex flex-col gap-4 sm:hidden">
            {faqs.map((faq, i) => (
              <div key={i} className="w-full">
                <FaqCard faq={faq} />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

    </section>
  );
};

const FaqCard = ({ faq }: { faq: { q: string; a: string } }) => (
  <div className="group h-72 sm:h-80 lg:h-96 bg-faq/40 rounded-2xl flex flex-col justify-end p-4 sm:p-6 opacity-90 hover:opacity-100 transition-all duration-500 relative font-main overflow-hidden mx-0 sm:mx-2 w-full ">
    {/* Hover background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-2xl"
      style={{ backgroundImage: "url('/Faqs_bg.png')" }}
    ></div>

    {/* Question visible by default */}
    <div className="flex flex-col justify-end h-full group-hover:hidden relative z-10 transition-all duration-300">
      <p className="font-medium text-base sm:text-lg lg:text-xl leading-snug  text-faqText">
        {faq.q}
      </p>
    </div>

    {/* Logo on top-right */}
    <div className="absolute top-0 left-1 sm:right-6 group-hover:opacity-0 transition-all duration-500 z-10">
      <img src="/Omnisol_logo.png" alt="" className="w-8 sm:w-10 lg:w-35" />
    </div>

    {/* Hover content */}
    <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 opacity-0 group-hover:opacity-100 text-white z-10 transition-all duration-500 flex flex-col justify-between">
      <h3 className="font-semibold text-base sm:text-lg mb-2 leading-tight">
        {faq.q}
      </h3>

      {/* ✨ Line Clamp added here (6 lines + ellipsis) */}
      <p className="text-xs sm:text-sm lg:text-base mb-3 leading-relaxed line-clamp-6">
        {faq.a}
      </p>

      <Link to="/contact">
        <SecButton text="Contact Us" />
      </Link>
    </div>
  </div>
);

export default Faqs;
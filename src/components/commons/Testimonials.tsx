import AnimatedSection from "@/layouts/AnimatedSection";
import { useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTestimonialClick = (index: number) => {
    if (index !== activeTestimonial) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTestimonial(index);
        setTimeout(() => setIsAnimating(false), 100);
      }, 300);
    }
  };

  const testimonials = [
    {
      name: "Bob Glazebrook",
      position: "Principal, Visual Engineering Inc.",
      img: "/avatar.png",
      text: "OmnisolAI demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They're very well thought out and have an excellent response to feedback.",
    },
    {
      name: "Craig Barber",
      position: "Senior Developer, Tech Solutions",
      img: "/avatar_1.png",
      text: "Working with OmnisolAI has been a game-changer for our development process. Their AI solutions are innovative, reliable, and perfectly tailored to our business needs. Highly recommended for any tech-forward company.",
    },
    {
      name: "Sarah Johnson",
      position: "CTO, InnovateCorp",
      img: "/avatar_1.png",
      text: "The team at OmnisolAI delivered beyond our expectations. Their deep understanding of AI technologies and seamless integration capabilities made our project a huge success. Outstanding professional service.",
    },
    {
      name: "Michael Chen",
      position: "Product Manager, DataFlow Inc.",
      img: "/avatar_1.png",
      text: "Exceptional AI development services! OmnisolAI not only met our technical requirements but also provided valuable insights that improved our overall product strategy. A truly collaborative partnership.",
    },
  ];

  return (
    <AnimatedSection>
      <section className="relative  py-16 sm:py-20 lg:py-30 z-10">
        <div
          className={`flex flex-col md:flex-row gap-8 md:gap-12 py-8  md:mx-40  2xl:mx-60 text-center  md:text-left 2xl:text-left `}
        >
          {/* Left Content Section */}
          <div className={`flex flex-col justify-center flex-1 gap-4`}>
            <div className=" w-[180px] px-6 py-2  bg-badgeBg border border-badgeBorder rounded-full flex items-center justify-center mx-auto  md:mx-0   2xl:mx-0">
              <h1 className="font-poppins text-[14px]   font-normal leading-[100%] text-badgeText">
                Loved by Human
              </h1>
            </div>
            <h2
              className={`font-main   font-medium text-[26px]  md:text-[36px]  2xl:text-[36px]   leading-[110%] md:leading-[42px] tracking-[-0.01em] text-black `}
            >
              What clients think about OmnisolAI
            </h2>
          </div>
        </div>

        <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonial cards - visible only md and up */}
          <div className="hidden sm:flex flex-row gap-4 overflow-x-auto pb-4 sm:pb-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex flex-col bg-testimonial border-2 p-3 sm:p-4 w-full sm:w-48 lg:w-50 shrink-0 rounded-[14px] gap-y-3 cursor-pointer transition-all duration-700 ease-out hover:opacity-100 hover:shadow-lg relative overflow-hidden hover:ring-2 hover:ring-blue-200 ${
                  activeTestimonial === index
                    ? "opacity-100 transform shadow-2xl border-blue-400 ring-2 ring-blue-200"
                    : "opacity-50 border-testimonial-border"
                }`}
                onClick={() => handleTestimonialClick(index)}
                style={{
                  background:
                    activeTestimonial === index
                      ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1))"
                      : "",
                }}
              >
                <div>
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>
                <div className="font-main ">
                  <h4 className="font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <span className="font-regular text-xs sm:text-sm">
                    {testimonial.position}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial text, stars and rating */}
          <div className="relative overflow-hidden">
            <div
              className={`transition-all duration-600 ease-out transform ${
                isAnimating
                  ? "opacity-0 translate-y-8 scale-98 blur-sm"
                  : "opacity-100 translate-y-0 scale-100 blur-0"
              }`}
            >
              <p className="font-main text-lg sm:text-xl lg:text-2xl text-para my-6 sm:my-8 lg:my-10 w-full sm:w-[80%] lg:w-[60%] font-medium leading-relaxed">
                <span className="inline-block transition-all duration-500 ease-out">
                  {testimonials[activeTestimonial].text}
                </span>
              </p>

              {/* Stars */}
              <div className="inline-flex items-center gap-1 text-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span className="font-main text-black inline-block pl-4 text-lg leading-none">
                  5.0
                </span>
              </div>

              {/* Responsive Avatars - visible only on small screens */}
              <div className="flex gap-2 mt-4 sm:hidden justify-center cursor-pointer">
                {testimonials.map((testimonial, index) => (
                  <img
                    key={index}
                    src={testimonial.img}
                    alt={testimonial.name}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      activeTestimonial === index
                        ? "border-blue-400 opacity-100"
                        : "border-transparent opacity-20"
                    }`}
                    onClick={() => handleTestimonialClick(index)}
                  />
                ))}
              </div>

              {/* Name & Position below avatars on mobile */}
              <div className="sm:hidden mt-3 text-center font-main">
                <h4 className="font-semibold text-base">
                  {testimonials[activeTestimonial].name}
                </h4>
                <span className="font-regular text-sm text-gray-600">
                  {testimonials[activeTestimonial].position}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Large image on desktop, unchanged */}
        <div className="hidden lg:block absolute top-[75%] right-0 -translate-y-1/2 w-1/4">
          <img src="/testimonial_img.png" alt="" />
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Testimonials;

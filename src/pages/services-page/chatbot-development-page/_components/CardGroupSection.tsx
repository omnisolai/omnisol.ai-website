import Card from "../../../../ui/Card/Card";

const CardGroupSection = () => {
  const cardsData = [
    {
      heading: "Customer Support Bots",
      text: "Instant, context-aware assistance trained on your company’s knowledge base. Slash response times, scale customer care, and keep satisfaction scores soaring — all without adding headcount.",
      bgColor: "bg-cardBgOne",
      borderColor: "border-cardBorderOne",
      width: "w-[280px]",
      height: "h-auto",
    },
    {
      heading: "AI Copilot Chatbots",
      text: "Productivity meets intelligence. Real-time insights, task automation, and proactive recommendations — copilots that understand your team and keep them a step ahead.",
      bgColor: "bg-cardBgTwo",
      borderColor: "border-cardBorderOne",
      width: "w-[280px]",
      height: "h-auto",
    },
    {
      heading: "Multilingual Bots",
      text: "Speak the world’s languages effortlessly. With adaptive translation and cultural nuance, your brand becomes instantly local, wherever your users are.",
      bgColor: "bg-cardBgThree",
      borderColor: "border-cardBorderOne",
      width: "w-[95%] sm:w-[300px] md:w-[260px] lg:w-[280px]",
      height: "h-[250px] sm:h-[270px] md:h-[280px] lg:h-[300px]",
      className: "top-[7px] sm:top-[15px] md:top-[18px] lg:top-10"
    },
    {
      heading: "Internal Workflow Bots",
      text: "Your new favorite coworker. From HR queries to IT tickets, these bots streamline internal ops, freeing teams from repetitive requests and manual routing.",
      bgColor: "bg-cardBgFour",
      borderColor: "border-cardBorderOne",
      width: "w-[280px]",
      height: "h-auto",
    },
    {
      heading: "Sales & Lead Bots",
      text: "Automate outreach that actually converts. Our AI sales bots engage, qualify, and book demos autonomously — letting your sales team focus on closing, not chasing.",
      bgColor: "bg-cardBgFive",
      borderColor: "border-cardBorderOne",
      width: "w-[280px]",
      height: "h-auto",
    },
    {
      heading: "Voice & Call Bots",
      text: "Conversations that sound human — literally. Handle phone and voice interactions with natural, emotion-aware dialogue that enhances your brand’s accessibility.",
      bgColor: "bg-cardBgSix",
      borderColor: "border-cardBorderOne",
      width: "w-[95%] sm:w-[300px] md:w-[260px] lg:w-[280px]",
      height: "h-[270px] sm:h-[300px] md:h-[320px] lg:h-[330px]",
      className: "-top-[7px] sm:-top-[15px] md:-top-[18px] lg:-top-10"
    },
    {
      heading: "Omni-Channel Integration",
      text: "One voice, everywhere.Deploy consistent, intelligent conversations across web, app, chat, and enterprise tools — one brain, many channels.",
      bgColor: "bg-cardBgSeven",
      borderColor: "border-cardBorderOne",
      width: "w-[280px]",
      height: "h-auto",
    },
    {
      heading: "Contextual AI Agents",
      text: "Beyond chat — into comprehension.These next-gen agents reason, act, and adapt dynamically to user tone and intent, creating truly autonomous conversational systems.",
      bgColor: "bg-cardBgEight",
      borderColor: "border-cardBorderOne",
      width: "w-[280px]",
      height: "h-auto",
    },
    {
      heading: "Transactional & Informational Bots",
      text: "No fluff, just function.Enable bookings, payments, and real-time answers with bots that keep workflows moving and customers satisfied.",
      bgColor: "bg-cardBgNine",
      borderColor: "border-cardBorderOne",
      width: "w-[95%] sm:w-[300px] md:w-[260px] lg:w-[280px]",
      height: "h-[270px] sm:h-[290px] md:h-[310px] lg:h-[320px]",
      className: "-top-[7px] sm:-top-[18px] md:-top-[20px] lg:-top-22"
    
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 sm:px-6 lg:px-10 py-12 sm:py-16 gap-8 lg:gap-10">
      {/* Left: Cards Grid */}
      <div className="w-full lg:flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-y-7 md:gap-x-8 lg:gap-y-7 lg:gap-x-72">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              className="
                w-full
                flex
                justify-center
                md:block
              "
            >
              {/* Mobile: Full width, Desktop: Original width */}
              <div className="
                w-full 
                max-w-full
                md:w-auto 
                md:max-w-none
              ">
                <Card
                  heading={card.heading}
                  text={card.text}
                  bgColor={card.bgColor}
                  borderColor={card.borderColor}
                  width="w-full md:w-[280px]"
                  height={card.height}
                  className={card.className}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image (Desktop Only) */}
      <div className="hidden lg:flex flex-1 lg:justify-end">
        <img
          src="/Images/Services/Chat-Development-Services/RightSide.png"
          alt="Illustration"
          className="w-full max-w-md lg:max-w-[3000%] lg:ml-[693px] -mt-40 object-cover"
        />
      </div>
    </section>
  );
};

export default CardGroupSection;
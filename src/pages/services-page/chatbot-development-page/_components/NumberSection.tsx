const NumberSection = () => {
  const stats = [
    {
      heading: "24/7",
      text: "availability with  human-like consistency",
    },
    {
      heading: "85%",
      text: "Proven 85% average reduction in response time",
    },
    {
      heading: "100%",
      text: "Deployed across startups, enterprises, and SaaS platforms",
    },
  ];

  return (
    <section className="w-full bg-bgDark   py-8  px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between text-white">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="text-left md:text-left flex-1 -md:mt-150 md:mb-0 px-0 md:px-4 lg:px-20"
        >
          <h2
            className="font-bold font-poppins text-[30px] leading-[136.67px] tracking-[-0.018em] -mb-10"
          >
            {item.heading}
          </h2>
          <p className="font-normal font-poppins text-[20px] leading-[30px] tracking-[-0.018em] opacity-90">
            {item.text}
          </p>
        </div>
      ))}
    </section>
  );
};

export default NumberSection;

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Job {
  title: string;
  experience: string;
  deadline: string;
  path: string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function OpenPositions() {
  const categories = [
    "All",
    "AI Engr",
    "Python expert",
    "Support",
    "Design",
    "Digital Marketing",
  ];

  const addDays = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split("T")[0];
  };

  const randomInRange = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const jobs: Record<string, Job[]> = {
    "AI Engr": [
      { title: "Wordpress Developer", experience: "2 Years", deadline: "", path: "" },
      { title: "Javascript", experience: "1 Year", deadline: "", path: "" },
    ],
    "Python expert": [
      { title: "Apps Developer", experience: "3 Years", deadline: "", path: "" },
      { title: "IOS Developer", experience: "2 Years", deadline: "", path: "" },
      { title: "Node JS Developer", experience: "3 Years", deadline: "", path: "" },
      { title: "React Native Developer", experience: "4 Years", deadline: "", path: "" },
      { title: "Python Developer", experience: "5 Years", deadline: "", path: "" },
      { title: "UI/UX Designer", experience: "3 Years", deadline: "", path: "" },
    ],
    Support: [{ title: "Customer Support", experience: "1 Year", deadline: "", path: "" }],
    Design: [{ title: "Graphic Designer", experience: "2 Years", deadline: "", path: "" }],
    "Digital Marketing": [
      { title: "SEO Specialist", experience: "3 Years", deadline: "", path: "" },
    ],
  };

  Object.keys(jobs).forEach((category) => {
    jobs[category] = jobs[category].map((job) => ({
      ...job,
      deadline: addDays(randomInRange(10, 15)),
    }));
  });

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const allJobs = Object.values(jobs).flat();
  const displayedJobs =
    activeCategory === "All" ? allJobs : jobs[activeCategory] || [];

  return (
    <section className="w-full flex flex-col items-center bg-white py-10 px-4 md:px-8">
      <div className="w-full max-w-5xl mb-10">
        <h2 className="font-main font-medium tracking-[-0.01em]
lg:text-[40px] lg:leading-[74px]
md:text-[48px] md:leading-[58px]
sm:text-[36px] sm:leading-[46px]
text-[28px] leading-[38px]">
          Open Positions
        </h2>
      </div>

      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-10">
        <motion.div
          className="relative w-full lg:w-auto flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide cursor-grab"
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
        >
          <div className="flex flex-nowrap lg:flex-col gap-4 px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-left cursor-pointer font-medium font-main leading-10 text-[16px] sm:text-[24px] md:text-[27px] lg:text-[20.23px] tracking-[-0.018em] transition-colors duration-200 ${activeCategory === cat
                    ? "text-orange-600"
                    : "text-black hover:text-orange"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="flex-1 flex flex-col">
          {displayedJobs.map((job, i) => (
            <Link
              to="/careers/job-application"
              key={i}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-7 border-b border-bodrerbottom shadow-[0px_80px_23.5px_0px_rgba(49,44,79,0.03)] p-3 bg-white hover:shadow-md transition duration-300 hover:border-orange-500 cursor-pointer relative"
            >
              <div className="
                flex flex-col md:flex-row 
                md:items-center md:justify-between 
                bg-white rounded-[10px] p-2 
                w-full sm:w-auto
              ">
                <div className="w-full md:w-[250px] text-left">
                  <h3 className="font-main font-medium text-[20px] leading-[100%] truncate">
                    {job.title}
                  </h3>
                </div>

                <div className="w-full md:w-[180px] flex flex-col md:items-center text-left md:text-center mt-3 md:mt-0">
                  <span className="text-[14px] text-bgborder font-main font-medium leading-[100%] mb-2">
                    Experience
                  </span>
                  <span className="text-[20px] text-darktext font-main font-medium leading-[100%]">
                    {job.experience}
                  </span>
                </div>

                <div className="w-full md:w-[180px] flex flex-col md:items-center text-left md:text-center mt-3 md:mt-0">
                  <span className="text-[14px] text-bgborder font-main font-medium leading-[100%] mb-2">
                    Deadline
                  </span>
                  <span className="text-[20px] text-darktext font-main font-medium leading-[100%]">
                    {job.deadline}
                  </span>
                </div>
              </div>

              {/* Arrow icon is now just a visual inside same link */}
              <div className="hidden sm:flex items-center justify-center sm:w-[60px] sm:shrink-0">
                <img
                  src="/HiringPage/ArrowIcon.png"
                  alt="arrow icon"
                  className="w-6 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>

              <div className="absolute right-3 top-1/2 -translate-y-1/2 sm:hidden">
                <img
                  src="/HiringPage/ArrowIcon.png"
                  alt="arrow icon"
                  className="w-6 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
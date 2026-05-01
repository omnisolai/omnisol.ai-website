import { useEffect, useState } from "react";
import ctdImage from "../../../public/ctdImage.png";
import blurBall from "../../../public/blur_ball.png";
import GradientButton from "../../ui/Button/Button";
import CtdForm from "@/components/commons/CtdForm";

const TARGET_DATE = new Date("2026-06-01T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, seconds };
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Blur balls */}
      <img
        src={blurBall}
        alt=""
        className="absolute bottom-[-180px] left-[-250px] w-[500px] h-[500px] opacity-60 pointer-events-none select-none"
        aria-hidden="true"
      />
      <img
        src={blurBall}
        alt=""
        className="absolute top-[-120px] -right-[300px] w-[500px] h-[500px] opacity-60 pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* Construction sign — bottom right */}
      <img
        src={ctdImage}
        alt="Website Under Construction Sign"
        className="absolute -rotate-35 -bottom-30 right-0 w-[300px] pointer-events-none select-none z-10"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Countdown timer */}
        <div className="flex items-center gap-4 sm:gap-6 mb-3">
          <div className="flex flex-col items-center">
            <span className="text-[72px] sm:text-[120px] font-black leading-none bg-linear-to-b from-[#FD741D] to-[#A72201] bg-clip-text text-transparent">
              {pad(timeLeft.days)}
            </span>
            <span className="text-[32px] tracking-tighter text-gray-400 uppercase mt-1">Days</span>
          </div>

          <span className="text-[60px] sm:text-[90px] font-black leading-none mb-6 text-AiCardText">:</span>

          <div className="flex flex-col items-center">
            <span className="text-[72px] sm:text-[120px] font-black leading-none bg-linear-to-b from-[#FD741D] to-[#A72201] bg-clip-text text-transparent">
              {pad(timeLeft.hours)}
            </span>
            <span className="text-[32px] tracking-tighter text-gray-400 uppercase mt-1">Hours</span>
          </div>

          <span className="text-[60px] sm:text-[90px] font-black leading-none mb-6 text-AiCardText">:</span>

          <div className="flex flex-col items-center">
            <span className="text-[72px] sm:text-[120px] font-black leading-none bg-linear-to-b from-[#FD741D] to-[#A72201] bg-clip-text text-transparent">
              {pad(timeLeft.seconds)}
            </span>
            <span className="text-[32px] tracking-tighter text-gray-400 uppercase mt-1">Seconds</span>
          </div>
        </div>

        <h1
          className="text-[38px] sm:text-[72px] font-extrabold uppercase tracking-tight leading-tight"
          style={{ color: "#050101", fontFamily: "var(--font-poppins)" }}
        >
          Under Construction
        </h1>

        <p
          className="text-[16px] sm:text-[36px] font-thin mb-6"
          style={{ color: "#191919", fontFamily: "var(--font-poppins)" }}
        >
          We're Building Something Awesome.
        </p>

        {/* ✅ No 'to' prop — only onClick opens the popup */}
        <GradientButton
          text="Let Me Know When It's Live"
          width="290px"
          height="60px"
          arrowSize="20px"
          arrowBgSize="45px"
          fontSize="16px"
          hideArrowOnMobile={false}
          textTranslate="55px"
          arrowTranslate="-222px"
          onClick={() => setIsPopupOpen(true)}
        />

        <CtdForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </div>
    </div>
  );
};

export default Countdown;
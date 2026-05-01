import React from "react";
import GradientButton from "@/ui/Button/Button";

const ReferralSection: React.FC = () => {
  return (
    <section className="w-full bg-lightbg py-16 px-6 md:px-12 lg:px-40">
      {/* Title */}
      <h2 className="font-main font-medium text-[48px] leading-[74px] tracking-[-0.01em] mb-10">
        Referrals
      </h2>

      {/* Top Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Invite by Email */}
        <div className="border-2 border-lightborder rounded-3xl p-6  bg-white flex flex-col justify-between h-full">
          <div>
            <h3 className="font-main font-medium text-[clamp(18px,2.5vw,25.23px)] leading-[clamp(30px,4vw,47px)] tracking-[-0.018em] text-para mb-2">
              invite your friends through email
            </h3>
            <p className="font-main font-normal text-[16px] leading-[100%] tracking-[0] text-para opacity-50 mb-10">
              We begin by understanding your goals, challenges, and team
              structure
            </p>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border border-foamborder rounded-lg px-4 py-2  outline-none text-foamtext  font-main font-normal text-[16px] leading-6 tracking-[0] align-middle   focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Button below input */}
          <div className="flex justify-start mt-6">
            <GradientButton
              to="/contact"
              text="Invite"
              width="140px"
              height="60px"
              textTranslate="70px"
              arrowTranslate="-70px"
              fontSize="15px"
              arrowSize="20px"
              arrowBgSize="47px" />
          </div>
        </div>

        {/* Share through social media */}
        <div className="border-2 border-lightborder rounded-3xl p-6  bg-white flex flex-col justify-between h-full">
          <div>
            <h3 className="font-main font-medium text-[clamp(18px,2.5vw,25.23px)] leading-[clamp(30px,4vw,47px)]  tracking-[-0.018em] text-para mb-2">
              Share through social media
            </h3>
            <p className="font-gilroyRegular font-normal text-[16px] leading-[100%] text-para opacity-50 tracking-[0] mb-10">
              We begin by understanding your goals, challenges, and team
              structure
            </p>

            {/* Input with icon */}
            <div className="relative w-full">
              <img
                src="/ReferralPage/Input.png"
                alt="link"
                className="absolute right-1.5 sm:right-[15px] lg:right-[50px] top-1/2 -translate-y-1/2 w-6 h-6 "
              />
              <input
                type="text"
                readOnly
                value="https://omnisol.ai/54akljQMN"
                className="w-full border border-inputbg rounded-lg pl-4 pr-9 py-2 text-center   text-orangetext bg-inputbg font-main font-normal text-[18px] leading-[38px] tracking-[-0.018em]   outline-none"
              />
            </div>
          </div>

          {/* Icons below input */}
          <div className="flex  justify-center gap-3 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-5 mt-4 flex-wrap">
            <img src="/ReferralPage/Facebook.png" alt="Facebook" className="w-7 h-7 cursor-pointer" />
            <img src="/ReferralPage/Twitter.png" alt="X" className="w-7 h-7 cursor-pointer" />
            <img src="/ReferralPage/Linkedin.png" alt="LinkedIn" className="w-7 h-7 cursor-pointer" />
            <img src="/ReferralPage/Whatsapp.png" alt="WhatsApp" className="w-7 h-7 cursor-pointer" />
            <img src="/ReferralPage/Telegram.png" alt="Telegram" className="w-7 h-7 cursor-pointer" />
            <img src="/ReferralPage/Messenger.png" alt="Messenger" className="w-7 h-7 cursor-pointer" />
            <img src="/ReferralPage/Share.png" alt="Messenger" className="w-7 h-7 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        {/* Card 1 */}
        <div className="border-2 border-lightborder rounded-3xl p-6  flex items-center gap-5 bg-white">
          <img src="/ReferralPage/Dollar.png" alt="Earning Icon" className="w-12 h-12 shrink-0" />
          <div>
            <h4 className="font-main font-medium text-para opacity-40 text-[15px] leading-[15.95px] tracking-[-0.018em] mb-1">
              Your Earning
            </h4>
            <p className="text-para text-2xl font-main font-medium tracking-[-0.018em]">$245,25.00</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-2 border-lightborder rounded-3xl p-6  flex items-center gap-5 bg-white">
          <img src="/ReferralPage/Earning.png" alt="Profit Icon" className="w-12 h-12 shrink-0" />
          <div>
            <h4 className="font-main font-medium text-para opacity-40 text-[15px] leading-[15.95px] tracking-[-0.018em] mb-1">
              Your Profit
            </h4>
            <p className="text-para text-2xl font-main font-medium tracking-[-0.018em]">$165,25.00</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-2 border-lightborder rounded-3xl p-6  flex items-center gap-5 bg-white">
          <img src="/ReferralPage/Man.png" alt="Referrals Icon" className="w-12 h-12 shrink-0" />
          <div>
            <h4 className="font-main font-medium text-para opacity-40 text-[15px] leading-[15.95px] tracking-[-0.018em] mb-1">
              Total Referrals
            </h4>
            <p className="text-para font-main text-2xl font-medium tracking-[-0.018em]">637</p>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center max-w-3xl mx-auto leading-relaxed px-3">
        {/* Line 1 */}
        <p className="flex flex-wrap items-center justify-center gap-3 font-main font-bold text-[16.4px] md:text-[35.27px] leading-8 md:leading-[50.81px] tracking-[-0.01em] text-black opacity-80">
          <span>Every great AI product</span>
          <img
            src="/ReferralPage/Background.png"
            alt="AI Earth"
            className="inline-block w-6 h-6 md:w-10 md:h-10"
          />
          <span>starts small —</span>
        </p>

        {/* Line 2 */}
        <p className="flex flex-wrap items-center justify-center gap-3 font-main font-bold text-[16.4px] md:text-[35.27px] leading-8 md:leading-[50.81px] tracking-[-0.01em] text-black opacity-80 mt-2">
          <span>with clarity, confidence, and proof.</span>
        </p>

        {/* Line 3 */}
        <p className="flex flex-wrap items-center justify-center gap-2 font-main font-bold text-[16.4px] md:text-[35.27px] leading-8 md:leading-[50.81px] tracking-[-0.01em] text-black opacity-80 mt-3">
          <span>Omnisol</span>
          <img
            src="/ReferralPage/Star.png"
            alt="Omnisol Icon"
            className="inline-block w-6 h-6 md:w-10 md:h-10"
          />
          <span>helps you get there faster.</span>
        </p>
      </div>


    </section>
  );
};

export default ReferralSection;

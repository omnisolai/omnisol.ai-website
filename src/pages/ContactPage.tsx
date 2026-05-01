import React from "react";
import HeadingSection from "../components/commons/HeadersAllScreen";
import Form from "../components/commons/ContactForm";
// import BookingSection from "../components/commons/BookingSection";

const ContactPage: React.FC = () => {

  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 bg-white flex flex-col lg:flex-row items-start justify-between gap-18">
      {/* LEFT SIDE — Heading + Contact Info */}
      <div className="w-full lg:w-[45%] flex flex-col gap-25  text-left">
        <HeadingSection
          Heading="Contact us"
          Title="A project with OmnisolAI"
          Description="Dozens of US startups and SMEs are thriving on the sheer talent and dedication of our talented teams."
          align="left"
        />

        {/* CONTACT DETAILS (Visible only on desktop) */}
        <div className="hidden lg:flex flex-col gap-6 text-black opacity-60 text-[18px] font-medium font-main leading-[30px] tracking-[-0.018em]">
          <div className="flex items-center gap-3">
            <img
              src="/FooterAssests/Email.png"
              alt="mail"
              className="w-5 h-5"
            />
            <p>info@omnisol.com</p>
          </div>

     
        </div>

        {/* SOCIAL ICONS (Visible only on desktop) */}
        <div className="hidden lg:flex items-center gap-4 mt-2 opacity-60">
          <img
            src="/FooterAssests/Facebook.png"
            alt="Facebook"
            className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
          />
          <img
            src="/FooterAssests/Twitter.png"
            alt="Twitter"
            className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
          />
          <img
            src="/FooterAssests/Linkedin.png"
            alt="LinkedIn"
            className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
          />
          <img
            src="/FooterAssests/Instagram.png"
            alt="Instagram"
            className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
          />
          <img
            src="/FooterAssests/Youtube.png"
            alt="Instagram"
            className="w-7 h-7 cursor-pointer hover:opacity-80 transition"
          />
        </div>
      </div>

      {/* RIGHT SIDE — Form + Mobile Contact Below */}
      <div className="w-full lg:w-[80%] -mt-35 sm:-mt-2 md:mt-0 ">
        <Form />

        {/* MOBILE CONTACT DETAILS BELOW FORM */}
        <div className="flex flex-col lg:hidden  gap-4 text-black opacity-60 text-[18px] font-medium font-main -mt-4  ml-5 leading-[30px] tracking-[-0.018em]">
          <div className="flex items-center gap-3">
            <img
              src="/FooterAssests/Email.png"
              alt="mail"
              className="w-5 h-5"
            />
            <p>info@omnisol.com</p>
          </div>
          {/* MOBILE — SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-3   opacity-60">
            <img
              src="/FooterAssests/Facebook.png"
              alt="Facebook"
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
            />
            <img
              src="/FooterAssests/Twitter.png"
              alt="Twitter"
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
            />
            <img
              src="/FooterAssests/Linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
            />
            <img
              src="/FooterAssests/Instagram.png"
              alt="Instagram"
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
            />
            <img
              src="/FooterAssests/Youtube.png"
              alt="Instagram"
              className="w-7 h-7 cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
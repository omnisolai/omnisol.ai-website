import { Facebook, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full py-10 bg-footerBg text-black overflow-hidden shadow-[inset_0px_95px_123.6px_-32px_rgba(119,118,141,0.25)] ">

      {/* Top Logo */}
      <div className="hidden lg:flex mb-10 justify-center">
        <img
          src="/FooterAssests/TopLogo.png"
          alt="footer shadow"
          className="md:mt-12 max-w-full h-[120px] sm:h-[160px] md:h-[200px]"
        />
      </div>

      <div className="md:flex justify-evenly flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10">

        {/* First column */}
        <div className="space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-0">
            <img src="/FooterAssests/Logo.png" alt="logo" className="w-[42px] h-[38px]" />
            <h2 className="text-[32px] leading-[36px] font-light tracking-tight font-main">Omnisol AI</h2>
          </div>
          <p className="text-[20px] leading-[30px] max-w-[420px] font-medium tracking-tight font-main mx-auto md:mx-0">
            Automate workflows in weeks, not quarters. Trusted by startups and Fortune 500s.
          </p>
        </div>

        {/* Second column */}
        <div className="text-[20px] leading-[30px] font-main font-medium tracking-tight flex flex-col gap-4">
          <Link to="/special/dedicated-team" onClick={scrollToTop} className="cursor-pointer hover:text-NavLinks">Dedicated Team</Link>
          <Link to="/special/project-based-delivery" onClick={scrollToTop} className="cursor-pointer hover:text-NavLinks">Project Based Delivery</Link>
          <Link to="/special/go-to-market" onClick={scrollToTop} className="cursor-pointer hover:text-NavLinks">Go-To-Market</Link>
        </div>

        {/* Third column */}
        <div className="text-center md:text-left text-[20px] leading-[30px] font-main font-medium tracking-tight">
          <div className="flex justify-center md:justify-start gap-2 py-4 items-center">
            <Mail size={24} strokeWidth={1} />
            <span>info@omnisol.ai</span>
          </div>

          <div className="flex justify-center md:justify-start pt-16 gap-10">
            <a href="https://www.facebook.com/omnisolai" target="_blank" rel="noopener noreferrer">
              <Facebook size={36} strokeWidth={2} className='cursor-pointer' />
            </a>
            <a href="https://www.instagram.com/omnisolai" target="_blank" rel="noopener noreferrer">
              <Instagram size={36} strokeWidth={2} className='cursor-pointer' />
            </a>
            <a href="https://www.linkedin.com/company/omnisolai" target="_blank" rel="noopener noreferrer">
              <Linkedin size={36} strokeWidth={2} className='cursor-pointer' />
            </a>
            <a href="https://www.youtube.com/@omnisolai" target="_blank" rel="noopener noreferrer">
              <Youtube size={36} strokeWidth={2} className='cursor-pointer' />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className='my-16 text-center text-[20px] leading-[30px] font-main font-medium tracking-tight flex flex-wrap justify-center gap-4'>
        <Link to="/legal/privacy-policy" onClick={scrollToTop} className='cursor-pointer underline hover:text-NavLinks'>Privacy Policy</Link>
        <Link to="/legal/terms-and-conditions" onClick={scrollToTop} className='cursor-pointer underline hover:text-NavLinks'>Terms & Conditions</Link>
        <Link to="/legal/cookie-policy" onClick={scrollToTop} className='cursor-pointer underline hover:text-NavLinks'>Cookie Policy</Link>
      </div>

    </footer>
  );
};

export default Footer;
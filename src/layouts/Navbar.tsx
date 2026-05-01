import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import logo from "/Images/Logo.webp";
import sketch_logo from "/Images/omnisol-logo-sketch.png";
import GradientButton from "../ui/Button/Button";
import SecButton from "../components/commons/secButton";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    services: false,
    consulting: false,
    company: false,
    engagement: false,
  });

  const navigate = useNavigate();

  const location = useLocation();
  const isHeaderWhite =
    location.pathname === "/" ||
    location.pathname === "/contact" ||
    location.pathname === "/special/project-based-delivery" ||
    location.pathname === "/special/dedicated-team" ||
    location.pathname === "/referralPage" ||
    document.querySelector("[data-bg='white']") !== null ||
    location.pathname.includes('hiring') ||
    location.pathname.includes('go-to-market') ||
    location.pathname.includes('blog') ||
    location.pathname.includes("legal") ||
    location.pathname.includes('careers');


  const bgColor = isHeaderWhite ? "bg-white" : "bg-hero";

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const serviceButtonRef = useRef<HTMLSpanElement | null>(null);

  // ✅ Close all dropdowns when menu closes
  useEffect(() => {
    if (!menuOpen) {
      setOpenDropdowns({
        services: false,
        consulting: false,
        company: false,
        engagement: false,
      });
    }
  }, [menuOpen]);

  // ✅ Desktop hover open/close
  const handleServiceMouseEnter = () => setServiceOpen(true);
  const handleServiceMouseLeave = (event: React.MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget as Node) &&
      serviceButtonRef.current &&
      !serviceButtonRef.current.contains(event.relatedTarget as Node)
    ) {
      setServiceOpen(false);
    }
  };

  const handleDropdownMouseEnter = () => setServiceOpen(true);
  const handleDropdownMouseLeave = (event: React.MouseEvent) => {
    if (
      serviceButtonRef.current &&
      !serviceButtonRef.current.contains(event.relatedTarget as Node) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget as Node)
    ) {
      setServiceOpen(false);
    }
  };

  // ✅ Click outside closes dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        serviceButtonRef.current &&
        !serviceButtonRef.current.contains(event.target as Node)
      ) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Scroll close dropdown
  useEffect(() => {
    const handleScroll = () => setServiceOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setServiceOpen(false);
    setMenuOpen(false);
  };

  const mobileMenuLinks = {
    services: [
      { to: "/services/ai-development", label: "AI Development Service" },
      { to: "/services/ai-agents", label: "AI Agent Development" },
      { to: "/services/chatbot-development", label: "Chatbot Development" },
      { to: "/services/generative-ai", label: "AI Gen Development" },
      { to: "/services/data-migration", label: "Data Migration Service" },
      // { to: "/services/restore-vibe-coding", label: "Restoration Vibe Coding" },
    ],
    consulting: [
      { to: "/services/ai-consulting", label: "AI Consulting" },
      { to: "/services/ai-proof-of-concept", label: "AI Proof of Concept" },
      { to: "/services/digital-transformation", label: "Digital Transformation" },
      { to: "/services/technical-feasibility", label: "Technical Feasibility" },
      { to: "/services/user-experience", label: "User Experience & Design" },
      // { to: "/services/discovery-workshop", label: "Discovery Workshop" },
    ],
    company: [
      { to: "/services/workshop", label: "Workshop" },
      { to: "/special/go-to-market", label: "GTM" },
      { to: "/careers/open-positions", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  };


  return (
    <nav className={`relative w-full  py-4 px-4 md:px-10 flex justify-between items-center`}>
      {!isHeaderWhite && (
        <div className="absolute inset-0 bg-linear-to-r pointer-events-none"></div>
      )}

      {/* Left Section */}
      <div
        className={`flex items-center gap-3 md:gap-12 md:z-50 transition-all duration-300 ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100 z-50"
          }`}
      >
        <Link to="/" className="flex items-center gap-2 cursor-pointer relative z-50">
          <img
            src={logo}
            alt="Omnisol AI Logo"
            className="w-[34px] h-[34px] object-contain"
          />
          <h1 className="font-main font-medium text-[22px] md:text-[26px] tracking-[-0.018em] text-NavLinks">
            Omnisol AI
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-8 font-main font-medium text-[16px] ${!isHeaderWhite ? "text-white" : "text-black"}`}>
          {/* ✅ Services Dropdown */}
          <li className="relative flex items-center gap-1">
            <span
              ref={serviceButtonRef}
              className="cursor-pointer transition-all select-none flex items-center gap-1"
              onMouseEnter={handleServiceMouseEnter}
              onMouseLeave={handleServiceMouseLeave}
            >
              Services
              <motion.span
                animate={{ rotate: serviceOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {serviceOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </motion.span>
            </span>

            {/* ✅ Services Menu */}
            <AnimatePresence>
              {serviceOpen && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }} // ⬅️ Reduced delay
                  className="fixed top-[90px] left-0 right-0 w-full bg-white text-black shadow-lg z-40"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-90px)] overflow-y-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="w-full lg:w-4/6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                          {Object.entries(mobileMenuLinks).map(([title, links]) => (
                            <div key={title}>
                              <h3 className="font-medium mb-6 text-2xl capitalize">{title}</h3>
                              <ul className="space-y-4 text-base font-normal">
                                {links.map((link) => (
                                  <li key={link.to}>
                                    <Link
                                      to={link.to}
                                      onClick={handleLinkClick}
                                      className="hover:text-orange transition-colors duration-200"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Engagement Section */}
                        <div className="bg-header-sub p-6 rounded-xl">
                          <h4 className="font-semibold mb-2 text-header-sub-color">
                            Engagement Models we have
                          </h4>
                          <p className="text-sm text-black opacity-70">
                            For tailored AI solutions specific to your needs.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mt-4">

                            <Link
                              onClick={handleLinkClick}
                              to={"special/project-based-delivery"}
                              className="relative border border-header-box-border rounded-lg p-4 bg-header-box overflow-hidden cursor-pointer">
                              <h3
                                className="text-header-box-border font-medium mb-10">
                                Project Based delivery
                              </h3>

                              <img
                                src={sketch_logo}
                                alt="logo"
                                className="absolute bottom-1 right-2 h-full w-auto object-contain opacity-90 translate-x-1/4 translate-y-1/4"
                              />
                            </Link>

                            <Link
                              onClick={handleLinkClick}
                              to={"special/dedicated-team"}
                              className="relative border border-header-box-border rounded-lg p-4 bg-header-box overflow-hidden cursor-pointer">
                              <h3
                                className="text-header-box-border font-medium">
                                Dedicated Team
                              </h3>
                              <img
                                src={sketch_logo}
                                alt="logo"
                                className="absolute bottom-1 right-2 h-full w-auto object-contain opacity-90 translate-x-1/4 translate-y-1/4"
                              />
                            </Link>

                          </div>

                        </div>
                      </div>

                      {/* Right Side */}
                      <div className="w-full lg:w-2/6 bg-[url('/mega_bg.png')] bg-cover bg-right bg-no-repeat text-white p-6 rounded-lg flex flex-col justify-between">
                        <div>
                          <h4 className="text-2xl mb-4 font-medium">
                            Should AI be the next step for your business?
                          </h4>
                          <p className="text-base leading-relaxed opacity-90">
                            Book a free consultation call with us to explore
                            whether AI fits your needs.
                          </p>
                        </div>
                        <Link
                          to={"/contact"}
                          onClick={handleLinkClick}
                        >
                          <div className="mt-6">
                            <SecButton text="Contact Us" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link to="/blog" className="cursor-pointer transition-colors duration-200">
              Blog
            </Link>
          </li>

          <li className="relative">
            <Link to="/careers/open-positions" className="cursor-pointer">
              We are hiring
            </Link>
            <span className="absolute bg-NavNewLinkBg px-1.5 py-0.3 rounded-sm -top-3 right-[-24px] text-[10px] text-NavNewText font-semibold rotate-[-8deg]">
              NEW
            </span>
          </li>
        </ul>
      </div>

      {/* Right Button */}
      <div className="z-50 hidden md:block">
        {
          location.pathname.includes("contact")
            ? null :
            <GradientButton
              to="/contact"
              text="Let's Talk"
              width="135px"
              height="50px"
              arrowSize="20px"
              arrowBgSize="35px"
              fontSize="15px"
              textTranslate="50px"
              arrowTranslate="-85px"
              hideArrowOnMobile={false}
            />
        }
      </div>

      {/* Mobile Hamburger */}
      <div
        className={`md:hidden z-[999] cursor-pointer flex flex-col justify-center items-center w-8 h-8 ${menuOpen ? "hidden" : ""
          }`}
        onClick={() => setMenuOpen(true)}
      >
        <span className={`block w-6 h-[2px]  ${!isHeaderWhite ? "text-white" : "text-black"} mb-[6px]`} />
        <span className={`block w-6 h-[2px]  ${!isHeaderWhite ? "text-white" : "text-black"} mb-[6px]`} />
        <span className={`block w-6 h-[2px]  ${!isHeaderWhite ? "text-white" : "text-black"} mb-[6px]`} />
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bg-white w-full h-full z-900 overflow-y-auto font-main transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-medium text-black">Menu</h2>
          <button
            className="text-black text-xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="p-5 space-y-5">
          {Object.entries({ ...mobileMenuLinks, engagement: [] }).map(([section, links]) => (
            <div className="border-b border-gray-100 pb-4 mt-6" key={section}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setOpenDropdowns({
                    services: false,
                    consulting: false,
                    company: false,
                    engagement: false,
                    [section]: !openDropdowns[section as keyof typeof openDropdowns],
                  })
                }
              >
                <span className="text-xl font-medium text-black capitalize">
                  {section === "engagement" ? "Engagement Models" : section}
                </span>
                {openDropdowns[section as keyof typeof openDropdowns] ? (
                  <ChevronUp className="text-gray-600 w-5 h-5 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="text-gray-600 w-5 h-5 transition-transform duration-300" />
                )}
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: openDropdowns[section as keyof typeof openDropdowns]
                    ? "auto"
                    : 0,
                  opacity: openDropdowns[section as keyof typeof openDropdowns] ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }} // ⬅️ Smooth, slower dropdown
                className="overflow-hidden"
              >
                {section !== "engagement" && (
                  <div className="pl-4 space-y-3 mt-3">
                    {links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={handleLinkClick}
                        className="block text-gray-600 text-base hover:text-blue-600 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}

                {section === "engagement" && (
                  <div className="bg-header-sub p-6 rounded-xl mt-4 flex flex-col gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-header-sub-color text-lg">
                        Engagement Models we have
                      </h4>
                      <p className="text-sm text-black opacity-70">
                        For tailored AI solutions specific to your needs.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border border-header-box-border rounded-lg p-4 bg-header-box">
                        <Link
                          to={"special/project-based-delivery"}
                          className="text-header-box-border font-medium">
                          Project-based delivery
                        </Link>
                      </div>
                      <div className="border border-header-box-border rounded-lg p-4 bg-header-box">
                        <Link
                          to={"special/dedicated-team"}
                          className="text-header-box-border font-medium">
                          Dedicated Team
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-[url('/FooterAssests/Bg.png')] bg-cover bg-no-repeat bg-right text-white rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-3">
              Should AI be the next step for your business?
            </h3>
            <p className="text-sm leading-relaxed mb-4 opacity-90">
              Book a free consultation call with us.
            </p>
            <Link
              to={"/contact"}
              onClick={handleLinkClick}
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
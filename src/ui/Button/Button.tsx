import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { GradientButtonProps } from "../../types/Button.types";

interface ExtendedGradientButtonProps extends GradientButtonProps {
  hideArrowOnMobile?: boolean;
  textTranslate?: string;
  arrowTranslate?: string;
  to?: string; // optional route path
}

const GradientButton: React.FC<ExtendedGradientButtonProps> = ({
  type = "button",
  onClick,
  text,
  fromColor = "from-[#FD741D]",
  toColor = "to-[#A72201]",
  className = "",
  width = "200px",
  height = "60px",
  fontSize = "16px",
  arrowSize = "40px",
  arrowBgSize = "50px",
  hideArrowOnMobile = false,
  textTranslate = "60px",
  arrowTranslate = "-90px",
  disabled = false,
  to,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldAnimate = !(hideArrowOnMobile && isMobile) && !disabled;

  const handleClick = () => {
    if (disabled) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (to) {
      navigate(to); // redirect if 'to' prop is provided
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => !disabled && setHovered(false)}
      disabled={disabled}
      className={`relative flex items-center justify-center gap-4
        ${disabled
          ? "cursor-not-allowed bg-gradient-to-b from-gray-400 to-gray-500 text-gray-200"
          : `cursor-pointer bg-gradient-to-b ${fromColor} ${toColor} text-white hover:bg-black hover:from-black hover:to-black`
        }
        rounded-full
        transition-all duration-500 ease-in-out
        overflow-hidden
        ${className}`
      }
      style={{
        width,
        height,
        minWidth: width,
        minHeight: height,
      }}
    >
      {/* Text */}
      <span
        className="relative font-poppins transition-transform duration-500 ease-in-out"
        style={{
          fontSize,
          whiteSpace: "nowrap",
          transform:
            hovered && shouldAnimate ? `translateX(${textTranslate})` : "translateX(0)",
        }}
      >
        {text}
      </span>

      {/* Arrow Circle */}
      {!hideArrowOnMobile || !isMobile ? (
        <span
          className={`relative flex items-center justify-center rounded-full transition-transform duration-500 ease-in-out ${disabled ? "bg-gray-300" : "bg-white"
            }`}
          style={{
            width: arrowBgSize,
            height: arrowBgSize,
            minWidth: arrowBgSize,
            minHeight: arrowBgSize,
            transform:
              hovered && shouldAnimate ? `translateX(${arrowTranslate})` : "translateX(0)",
          }}
        >
          <img
            src="/Button/Icon.png"
            alt="icon"
            className={`${disabled ? "opacity-50" : ""} absolute`}
            style={{
              width: arrowSize,
              height: arrowSize,
              transition: "transform 0.3s ease-in-out",
              transform: hovered && !disabled ? "translateX(-3px)" : "translateX(0)",
            }}
          />
        </span>
      ) : null}
    </button>
  );
};

export default GradientButton;
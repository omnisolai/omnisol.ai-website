import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface GradientButtonProps {
  text: string;
  fromColor?: string;
  toColor?: string;
  icon?: IconDefinition;
  iconColor?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  /** Custom width for the button (e.g. "180px" | "100%") */
  width?: string;
  /** Custom height for the button (e.g. "60px") */
  height?: string;
  /** Maximum width allowed for text before truncating (default 130px) */
  textMaxWidth?: string;
  /** Width/height of the arrow icon (default 40px) */
  arrowSize?: string;
  /** Size of the white circular background behind the arrow (default 50px) */
  arrowBgSize?: string;
  fontSize? : string;
  hideArrowOnMobile?: boolean;
  textTranslate?: string; 
  arrowTranslate?: string;
  /** Optional prop to disable the button and change its appearance */
  disabled?: boolean;
}

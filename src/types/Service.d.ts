export interface HeadingsTypes {
  Heading: string;
  Title: string;
  Description?: string;
  align?: "left" | "center";
  button?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  extraClass?: string;
  imageWidth?: string;
  imageMaxWidth?: string;
  imageHeight?: string;
}



export interface ImageTextSectionProps {
  imageSrc: string;
  heading: string;
  description: string;
  buttonText?: string;
  reverse?: boolean;
}




export interface HeroSectionProps {
  Heading: string
  description: string
  ButtonText: string
  LeftHeading: string
  LeftDescription: string
  cardDescOne: string
  cardDescTwo: string
  cardDescThree: string
  ButtonWidth: string
  ButtonHeight: string
  arrowSize: string
  arrowBgSize: string
  ButtonTextSize: string
  ButtonTextTransalate: string
  ButtonarrowTranslate: string
}


export interface WhyAgenticCardProps {
  title: string;
  description: string;
  image: string;

}

export interface WhyAgenticProps {
  badgeText: string;
  mainHeading: string;
  descriptionOne: string,
  descriptionTwo?: string,
  cards: WhyAgenticCardProps[];
}


export type Step = {
  id: number;
  step: string;
  title: string;
  description: string;
};

export type StepsSectionProps = {
  stepsData: Step[];
  direction?: "left" | "right";
};



interface CardData {
  id: number;
  title: string;
  description: string;
  customDiv?: React.ReactNode;
}

interface LayoutCardsProps {
  cards: CardData[];
  shadowCards?: number[];
  mobileHeading?: React.ReactNode;
  mobileIcon?: React.ReactNode;
}
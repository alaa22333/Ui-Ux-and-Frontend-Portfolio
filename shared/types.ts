import { links } from "@/constants/data";



export type Section = (typeof links)[number]["title"];

export interface ComponentProps {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void; // Make setIsOpen a required prop
  selectedPage?: Section;
  setSelectedPage: React.Dispatch<React.SetStateAction<Section>>;
  showNav?: boolean;
  setShowNav?: (showNav: boolean) => void;
}
export type ChildrenProps = {
  children: React.ReactNode;
};
export interface DesignProps {
  img: HTMLImageElement;
  name: String;
  behance: String;
  dribble: String;
  description: String;
}
export interface WebProps {
  img: HTMLImageElement;
  url: String;
  git: String;
  uses: String[];
  name: String;
  description: String;
  direction: String;
  oppDirection: String;
}
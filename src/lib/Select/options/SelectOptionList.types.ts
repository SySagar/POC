import { ReactNode } from "react";

export type selectOptionListTypes = {
    options: ReactNode[];
  handleOptionClick: (selectedOption: ReactNode) => void;
  selectedValue: string;
  };
import React from 'react';
import { useContext } from 'react';

// Step 1: Create Context
export type SelectContextProps = {
    isOpen: boolean;
    focused: boolean;
    value: string;
    disabled: boolean;
    placeholder: string;
    selectRef: React.RefObject<HTMLDivElement>;
    handleClick: () => void;
    handleBlur: () => void;
    handleFocus: () => void;
    handleChange: (selectedValue: string) => void;
    handleOptionClick: (selectedOption: string) => void;
    handleDisable: () => void;
    handlePlaceholder: () => void;
  };
  export const SelectContext = React.createContext<SelectContextProps | undefined>(undefined);

  export function useSelectContext() {
    const context = useContext(SelectContext);
    if (!context) {
      throw new Error(
        'ProductCard.* component must be rendered as child of ProductCard component'
      );
    }
    return context;
  }
  
  export default SelectContext;
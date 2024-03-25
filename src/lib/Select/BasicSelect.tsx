import React, { useState, useRef, useContext, FC, ReactNode } from 'react';
import SelectOptionsList from './options/SelectOptionsList';
import SelectedValue from './options/SelectValue';
import './select.css';

// Step 1: Create Context
type SelectContextProps = {
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
};
const SelectContext = React.createContext<SelectContextProps | undefined>(undefined);

// Step 3: Create Compound Component
export type BasicSelectProviderProps = {
  value?: React.ReactNode;
  options?: React.ReactNode;
};
const BasicSelect = ({ value,options }:BasicSelectProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [currvalue, setCurrValue] = useState<string>('');
  const [disabled, setDisabled] = useState(false);
  const [placeholder, setPlaceholder] = useState('Select');

  const handleClick = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleBlur = () => {
    setFocused(false);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleChange = (selectedValue: string) => {
    setCurrValue(selectedValue);
    setIsOpen(false);
  };

  const handleOptionClick = (selectedOption: string) => {
    setCurrValue(selectedOption);
    setIsOpen(false);
  };

  const contextValue: SelectContextProps = {
    isOpen,
    focused,
    value: currvalue,
    disabled,
    placeholder,
    selectRef,
    handleClick,
    handleBlur,
    handleFocus,
    handleChange,
    handleOptionClick,
  };

  return (
    <SelectContext.Provider value={contextValue}>
     <div
      ref={selectRef}
      className={`select ${isOpen ? 'open' : ''} ${focused ? 'focused' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      tabIndex={disabled ? -1 : 0}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {/* <SelectedValue
        value={value}
        placeholder={placeholder}
        onClick={handleClick}
      /> */}
      {value || placeholder}
      {isOpen && (
        // <SelectOptionsList
        //   options={['Option 1', 'Option 2', 'Option 3']} 
        //   handleOptionClick={handleChange}
        //   selectedValue={value}
        // />
        <div>
        {options}
        </div>
      )}
    </div>
    </SelectContext.Provider>
  );
};

BasicSelect.Options = SelectOptionsList;
BasicSelect.Value = SelectedValue;

export default BasicSelect;

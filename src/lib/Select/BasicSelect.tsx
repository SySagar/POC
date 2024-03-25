import React, { useState, useRef, useContext, FC, ReactNode } from 'react';
import SelectOptionsList from './options/SelectOptionsList';
import SelectedValue from './options/SelectValue';
import { SelectContext, SelectContextProps } from './hooks/SelectContext';
import './select.css';

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
      {value || placeholder}
      {isOpen && (
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

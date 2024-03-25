import React, { FC, ReactNode } from 'react';
import SelectOption from './SelectOption';

type SelectOptionsListProps = {
  options: ReactNode[];
  handleOptionClick: (selectedOption: string) => void;
  selectedValue: ReactNode;
};
const SelectOptionsList: FC<SelectOptionsListProps> = ({ options, handleOptionClick, selectedValue }) =>{
  return (
  <div className="options-list">
    {options.map((option, index) => (
      <SelectOption
        key={index}
        option={option}
        onClick={() => handleOptionClick(String(option))}
        selected={String(option) === selectedValue}
      />
    ))}
  </div>
)};

export default SelectOptionsList;
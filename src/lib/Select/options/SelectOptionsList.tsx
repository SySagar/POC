import SelectOption from "./SelectOption";
import { FC } from "react";
import { selectOptionListTypes } from "./SelectOptionList.types";

const SelectOptionsList:FC<selectOptionListTypes> = ({ options, handleOptionClick, selectedValue }) => (
    <div className="options-list">
      {options.map((option,index) => (
        <SelectOption
          key={index}
          option={option}
          onClick={() => handleOptionClick(option)}
          selected={option === selectedValue}
        />
      ))}
    </div>
  );

export default SelectOptionsList;
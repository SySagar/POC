import { selectOptionTypes } from "./SelectOption.types";

const SelectOption = ({ option, onClick, selected }:selectOptionTypes) => (
    <div
      role="option"
      className={`option ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {option}
    </div>
  );

export default SelectOption;
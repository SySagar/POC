import { FC, ReactNode } from 'react';

type SelectOptionProps = {
  option: ReactNode;
  onClick: () => void;
  selected: boolean;
};
const SelectOption: FC<SelectOptionProps> = ({ option, onClick, selected }) => {
  
  return(
  <div
    role="option"
    className={`option ${selected ? 'selected' : ''}`}
    onClick={onClick}
  >
    {option}
  </div>
)};

export default SelectOption;
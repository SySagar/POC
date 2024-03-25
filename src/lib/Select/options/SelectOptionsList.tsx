import { FC, ReactNode } from 'react';
import { useSelectContext } from '../hooks/SelectContext';
import SelectOption from './SelectOption';

type SelectOptionsListProps = {
  options: ReactNode[];
  selectedValue: ReactNode;
};
const SelectOptionsList: FC<SelectOptionsListProps> = ({ options,  selectedValue }) =>{
  const {handleOptionClick,isOpen} = useSelectContext();

  console.log('isOpen:', isOpen);
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
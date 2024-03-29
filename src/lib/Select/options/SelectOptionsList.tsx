import { FC, ReactNode } from 'react';
import { useSelectContext } from '../hooks/SelectContext';
import SelectOption from './SelectOption';
import * as stylex from "@stylexjs/stylex";

type SelectOptionsListProps = {
  options: ReactNode[];
  selectedValue: ReactNode;
};

const styles = stylex.create({
  optionsList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    marginTop: '4px',
    borderRadius: '4px',
    display: 'none',
  },
  open: {
    display: 'block',
  },
});

const SelectOptionsList: FC<SelectOptionsListProps> = ({ options,  selectedValue }) =>{
  const {handleOptionClick,isOpen} = useSelectContext();

  console.log('isOpen:', isOpen);
  return (
  <div 
   {...stylex.props(styles.optionsList, isOpen && styles.open)}
  >
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
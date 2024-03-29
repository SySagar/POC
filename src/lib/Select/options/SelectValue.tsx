import React, { FC } from 'react';
import { useSelectContext } from '../hooks/SelectContext';
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  selectedValue: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 10px',
    flex: '1 1 auto',
  },
  openSelectedValue: {
    border: '2px solid #6699CC',
    borderRadius: '4px 4px 0 0',
  }
});

type SelectedValueProps = {
  value: React.ReactNode;
  placeholder: string;
};
const SelectValue: FC<SelectedValueProps> = ({ placeholder }) => {
  const {handleClick,value,isOpen} = useSelectContext();
  return(
  <div 
  {...stylex.props(styles.selectedValue, isOpen && styles.openSelectedValue)}
  onClick={handleClick}>
    {value || placeholder}
  </div>
)};

export default SelectValue;
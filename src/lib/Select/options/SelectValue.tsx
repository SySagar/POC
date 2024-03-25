import React, { FC } from 'react';
import { useSelectContext } from '../hooks/SelectContext';

type SelectedValueProps = {
  value: React.ReactNode;
  placeholder: string;
};
const SelectValue: FC<SelectedValueProps> = ({ placeholder }) => {
  const {handleClick,value} = useSelectContext();
  return(
  <div className="selected-value" onClick={handleClick}>
    {value || placeholder}
  </div>
)};

export default SelectValue;
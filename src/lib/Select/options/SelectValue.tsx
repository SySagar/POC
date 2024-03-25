import React, { FC } from 'react';

type SelectedValueProps = {
  value: React.ReactNode;
  placeholder: string;
  onClick: () => void;
};
const SelectValue: FC<SelectedValueProps> = ({ value, placeholder, onClick }) => {
  
  return(
  <div className="selected-value" onClick={onClick}>
    {value || placeholder}
  </div>
)};

export default SelectValue;
import { FC, ReactNode } from 'react';
import * as stylex from "@stylexjs/stylex";

type SelectOptionProps = {
  option: ReactNode;
  onClick: () => void;
  selected: boolean;
};

const styles = stylex.create({
  option: {
    padding: '8px 12px',
    cursor: 'pointer',
    backgroundColor: {
      default: '#fff',
      ":hover": '#D3D3D3',
    },
  },
  selected: {
    backgroundColor: '#f9f9f9',
  },
});

const SelectOption: FC<SelectOptionProps> = ({ option, onClick, selected }) => {
  
  return(
  <div
    role="option"
    {...stylex.props(styles.option, selected && styles.selected)}
    onClick={onClick}
  >
    {option}
  </div>
)};

export default SelectOption;
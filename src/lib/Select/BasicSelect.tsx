import React, { useState, useRef } from "react";
import SelectOptionsList from "./options/SelectOptionsList";
import SelectedValue from "./options/SelectValue";
import { SelectContext, SelectContextProps } from "./hooks/SelectContext";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../utils/token.stylex";

const styles = stylex.create({
  select: {
    display: "flex",
    position: "relative",
    minHeight: "40px",
    maxWidth: "200px",
    fontSize: "16px",
    backgroundColor: {
      default: colors.primary,
    },
    borderRadius: "4px",
    cursor: "pointer",
  },
  open: {
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    display: "block",
  },
});

export type BasicSelectProviderProps = {
  value?: React.ReactNode;
  options?: React.ReactNode;
};
const BasicSelect = ({ value, options }: BasicSelectProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [currvalue, setCurrValue] = useState<string>("");
  const [disabled, setDisabled] = useState(false);
  const [placeholder, setPlaceholder] = useState("Select");

  const handleClick = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleDisable = () => {
    setDisabled(!disabled);
  };

  const handlePlaceholder = () => {
    setPlaceholder("New Placeholder");
  };

  const handleBlur = () => {
    setFocused(false);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleChange = (selectedValue: string) => {
    setCurrValue(selectedValue);
    setIsOpen(false);
  };

  const handleOptionClick = (selectedOption: string) => {
    setCurrValue(selectedOption);
    setIsOpen(false);
  };

  const contextValue: SelectContextProps = {
    isOpen,
    focused,
    value: currvalue,
    disabled,
    placeholder,
    selectRef,
    handleClick,
    handleBlur,
    handleFocus,
    handleChange,
    handleOptionClick,
    handleDisable,
    handlePlaceholder,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <div
        ref={selectRef}
        {...stylex.props(styles.select)}
        tabIndex={disabled ? -1 : 0}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {value || placeholder}
        {isOpen && <div>{options}</div>}
      </div>
    </SelectContext.Provider>
  );
};

BasicSelect.Options = SelectOptionsList;
BasicSelect.Value = SelectedValue;

export default BasicSelect;

import { FC } from "react";
import { selectValueTypes } from "./selectValue.types";

const SelectedValue: FC<selectValueTypes> = ({ value, placeholder, onClick }) => (
    <div className="selected-value" onClick={onClick}>
      {value || placeholder}
    </div>
  );

export default SelectedValue;
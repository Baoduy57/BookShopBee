import { Input } from "antd";
import React, { useState } from "react";
import { WrapperTextStyle } from "./style";

const InputForm = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { placeholder = "Input login", ...rests } = props;
  return (
    <WrapperTextStyle
      placeholder={placeholder}
      valueInput={valueInput}
      {...rests}
    />
  );
};

export default InputForm;

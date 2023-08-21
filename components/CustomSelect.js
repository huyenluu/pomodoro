import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { CircleButton, SelectContainer } from "../styles/Settings.styles";
import { useTheme } from "styled-components";
import { color } from "framer-motion";

function CustomSelect({ handleSelect, colorSelected, fontSelected,type }) {
  const theme = useTheme();
  const {colors, fonts} = theme;
  const {tomato, violet, turquoise} = colors;
  const options =  type === 'color' 
  ? [tomato, violet, turquoise]
  : Object.values(fonts)

  return (
    <SelectContainer >
      {options.map((option, index) => (
        <CircleButton $color={type=== 'color' ?option:null} $font={type === 'font'?option:null}
          key={index}
          className={`${fontSelected === option? "selected" : ""}`}
          onClick={() => handleSelect(type, option)}
        >
          {type === 'font' && "Aa"}
          {type === 'color' && colorSelected === option && <IoMdCheckmark/>}
        </CircleButton>
      ))}
    </SelectContainer>
  );
}

export default CustomSelect;

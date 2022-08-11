import React from "react";
import styled from "styled-components";
import palette, { Palette } from "../../theme";

export const SquareBorder = ({
  className,
  color,
}: {
  className?: string;
  color: keyof Palette;
}) => {
  return <Square color={color} className={className} />;
};
const Square = styled("div")<{ color: keyof Palette }>`
  width: 15px;
  height: 15px;
  border: 1px solid
    ${(props) => (props.color ? palette[props.color] : "inherit")}; ;
`;

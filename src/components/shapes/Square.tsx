import React from "react";
import styled from "styled-components";
import { defaultTheme, Palette } from "../../theme";

interface IProps {
  color?: keyof Palette;
  className?: string;
  borderRadius?: string;
  width?: number;
  height?: number;
  borderColor?: keyof Palette;
}
export const Square = ({
  color,
  width,
  height,
  borderRadius,
  className,
  borderColor,
}: IProps) => {
  return (
    <SquaresShape
      borderColor={borderColor}
      color={color}
      width={width}
      height={height}
      borderRadius={borderRadius}
      className={className}
    />
  );
};
const SquaresShape = styled("div")<IProps>`
  width: ${(props) => (props.width ? props.width : 15)}px;
  height: ${(props) => (props.height ? props.height : props.width || 15)}px;
  ${(props) =>
    props.borderColor
      ? `border: 1px solid ${defaultTheme.palette[props.borderColor]}`
      : ""};
  ${(props) =>
    props.color
      ? `background-color:  
    ${defaultTheme.palette[props.color!]}`
      : ""};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0")};
`;

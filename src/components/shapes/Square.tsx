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
  children?: any;
}
export const Square = ({
  color,
  width,
  height,
  borderRadius,
  className,
  borderColor,
  children,
}: IProps) => {
  return (
    <SquaresShape
      borderColor={borderColor}
      color={color}
      width={width}
      height={height}
      borderRadius={borderRadius}
      className={className}
    >
      {children}
    </SquaresShape>
  );
};
const SquaresShape = styled("div")<IProps>`
  width: ${(props) => (props.width ? props.width : 15)}px;
  height: ${(props) => (props.height ? props.height : props.width || 15)}px;
  border: 1px solid
    ${(props) =>
      props.borderColor
        ? `${defaultTheme.palette[props.borderColor]}`
        : "transparent"};
  background-color: ${(props) =>
    props.color ? `${defaultTheme.palette[props.color]}` : "transparent"};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0")};
`;

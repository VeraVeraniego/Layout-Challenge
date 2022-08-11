import React from "react";
import styled from "styled-components";
import palette, { Palette } from "../../theme";
interface IProps {
  color: keyof Palette;
  className?: string;
  borderRadius?: string;
  width: number;
  height?: number;
}
export const Square = ({
  color,
  width,
  height,
  borderRadius,
  className,
}: IProps) => {
  //bordercolor missing
  return (
    <SquaresShape
      color={color}
      width={width}
      height={height}
      borderRadius={borderRadius}
      className={className}
    />
  );
};
const SquaresShape = styled("div")<IProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => (props.height ? props.height : props.width)}px;
  background-color: ${(props) => palette[props.color]};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0")};
`;

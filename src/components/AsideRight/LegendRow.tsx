import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
import { Square } from "../shapes/Square";
// import { IData } from "./PieChart";
import { Data } from "./StorageChartAndInfo";

export const LegendRow = ({ name, files, value, color }: Data) => {
  return (
    <RowContainer>
      <Square width={28} color={color} borderRadius="8px" />
      <Title>
        {name}
        <br />
        <span>{files} files</span>
      </Title>
      <SizeSquare width={54} height={21} color="white" borderRadius="4px">
        <span>{value} GB</span>
      </SizeSquare>
    </RowContainer>
  );
};
const SizeSquare = styled(Square)`
  position: absolute;
  right: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    vertical-align: middle;
  }
`;
const Title = styled.h3`
  margin-left: 7px;
  & > span {
    font-size: 8px;
    line-height: 9px;
    color: ${defaultTheme.palette.darkgray};
  }
`;
const RowContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* flex-direction: row; */
`;

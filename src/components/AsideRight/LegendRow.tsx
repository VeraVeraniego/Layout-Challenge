import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
import { Square } from "../shapes/Square";
// import { IData } from "./PieChart";
import { Data } from "./StorageChartAndInfo";

export const LegendRow = ({ name, files, value, color }: Data) => {
  return (
    <RowContainer>
      <Square width={28} color={color} />
      <Square color={defaultTheme.palette.inactive} width={15} />
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
`;

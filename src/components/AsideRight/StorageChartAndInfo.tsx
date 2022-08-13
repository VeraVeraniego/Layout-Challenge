import React, { Fragment } from "react";
import styled from "styled-components";
import { defaultTheme, Palette } from "../../theme";
import { Square } from "../shapes/Square";
import { LegendRow } from "./LegendRow";
import { ThePieChart } from "./PieChart";
export interface Data {
  name: string;
  files: number;
  value: number;
  color: string | keyof Palette;
}
export const StorageChartAndInfo = () => {
  const data: Data[] = [
    {
      name: "Documents",
      files: 3000,
      value: 200,
      color: defaultTheme.palette.orange,
    },
    {
      name: "Photos",
      files: 420,
      value: 125,
      color: defaultTheme.palette.blue,
    },
    { name: "Videos", files: 69, value: 75, color: defaultTheme.palette.green },
    { name: "Audios", files: 159, value: 50, color: defaultTheme.palette.gray },
  ];
  return (
    <Container>
      <Title>Storage</Title>
      <ThePieChart data={data} />
      <LegendContainer>
        {data.map((ele, index) => {
          return (
            <Fragment key={index}>
              <LegendRow
                key={index}
                name={ele.name}
                color={ele.color}
                files={ele.files}
                value={ele.value}
              ></LegendRow>
              <HR />
            </Fragment>
          );
        })}
      </LegendContainer>
    </Container>
  );
};
const HR = styled.hr`
  border: 1px solid ${defaultTheme.palette.hr};
`;

const LegendContainer = styled.div`
  gap: 9px;
  margin-top: 27px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
`;
const Title = styled.h2`
  font-size: 20px;
  line-height: 23px;
  color: ${defaultTheme.palette.darkblue};
  margin-bottom: 22px;
`;
const Container = styled.section`
  /* may change to fragment if none styles applied */
`;

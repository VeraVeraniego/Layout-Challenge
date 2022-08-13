import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
import { Square } from "../shapes/Square";
interface IProps {
  data: {
    name: string;
    files: number;
    value: number;
    color: string;
  }[];
}
export const ThePieChart = ({ data }: IProps) => {
  const spaceUsed = data.reduce((acc, ele) => ele.value + acc, 0);
  return (
    <>
      <ChartContainer>
        <PieChartContainer>
          <PieChart width={160} height={160}>
            <Pie
              data={data}
              cx={"50%"}
              cy={"50%"}
              innerRadius={70}
              outerRadius={80}
              paddingAngle={8}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </PieChartContainer>
        <InsideDataContainer>
          <Square width={125} color="white" borderRadius="50%" />
          <Percentage>
            {(spaceUsed * 100) / 500}%
            <br />
            <span>Used</span>
          </Percentage>
        </InsideDataContainer>
      </ChartContainer>
      <Details>{spaceUsed} GB of 500GB used</Details>
    </>
  );
};
const Details = styled.p`
  margin-top: 20px;
  font-size: 8px;
  line-height: 9px;
  color: ${defaultTheme.palette.darkgray};
  text-align: center;
`;
const Percentage = styled.h3`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  line-height: 20px;
  & > span {
    font-size: 14px;
    line-height: 16px;
    color: ${defaultTheme.palette.darkgray};
  }
`;
const PieChartContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const InsideDataContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ChartContainer = styled.div`
  position: relative;
`;

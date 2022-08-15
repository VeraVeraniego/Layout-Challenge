import React from "react";
import styled from "styled-components";
import { ISharedFolders } from "../../interfaces/interfaces";
import { defaultTheme } from "../../theme";
import { Square } from "../shapes/Square";

export const ProjectFolder = ({ title, date, circles }: ISharedFolders) => {
  return (
    <Container color="white">
      <Row1>
        <Square color="orange" width={30} height={26} />
        <CirclesContainer>
          {circles.map((ele, index) => {
            console.log(title + index);
            return (
              <Circle key={title + index} borderColor={ele} index={index} />
            );
          })}
        </CirclesContainer>
      </Row1>
      <h3>{title}</h3>
      <span>Created: {date}</span>
    </Container>
  );
};
const Circle = styled(Square)<{ index: number }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${defaultTheme.palette.white};
  position: relative;
  right: ${(props) => props.index * 6}px;
`;

const CirclesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
`;
const Container = styled(Square)`
  margin-top: 16px;
  height: 79px;
  padding: 13px 11px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 150px;
  flex-grow: 1;
  box-shadow: 0px 4px 16px rgba(58, 58, 58, 0.07);
  border-radius: 12px;

  & > h3 {
    color: ${defaultTheme.palette.darkblue};
    margin-top: 6px;
    font-size: 12px;
    line-height: 14px;
  }
  & > span {
    color: ${defaultTheme.palette.darkgray};
    margin-top: 2px;
    font-size: 8px;
    line-height: 9px;
  }
`;

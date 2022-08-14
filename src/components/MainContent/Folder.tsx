import React from "react";
import { Square } from "../shapes/Square";
import { MdMoreVert } from "react-icons/md";
import styled from "styled-components";
import { defaultTheme } from "../../theme";

export const Folder = ({ subfolders }: { subfolders: number }) => {
  return (
    <FolderContainer color={defaultTheme.palette.white} height={133}>
      <MoreIcon />
      <Row1>
        <SquareBG
          color={defaultTheme.palette.lightyellow}
          width={30}
          height={26}
        >
          <SquareFront
            color={defaultTheme.palette.orange}
            width={30}
            height={26}
          />
        </SquareBG>
        <CirclesContainer>
          <Circle
            // borderRadius="50%"
            // color="green"
            // borderColor="gray"
            width={18}
          ></Circle>
          <CircleOverlapped></CircleOverlapped>
        </CirclesContainer>
      </Row1>
      <h3></h3>
      <span></span>
    </FolderContainer>
  );
};
const Circle = styled(Square)`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${defaultTheme.palette.white};
  border-color: ${defaultTheme.palette.gray};
`;
const CircleOverlapped = styled(Circle)`
  position: relative;
  left: -6px;
`;
const CirclesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SquareFront = styled(Square)`
  position: absolute;
  top: -5px;
  right: -5px;
`;
const SquareBG = styled(Square)`
  position: relative;
`;
const MoreIcon = styled(MdMoreVert)`
  color: ${defaultTheme.palette.inactive};
  font-size: 20px;
  position: absolute;
  top: 16px;
  right: 13px;
  &:hover {
    color: ${defaultTheme.palette.darkblue};
  }
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 23px;
`;

const FolderContainer = styled(Square)`
  padding: 25px 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 160px;
  box-shadow: 0px 4px 16px rgba(58, 58, 58, 0.07);
  border-radius: 12px;
`;

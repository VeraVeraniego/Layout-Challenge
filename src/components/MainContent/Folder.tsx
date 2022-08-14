import React from "react";
import { Square } from "../shapes/Square";
import { MdMoreVert } from "react-icons/md";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
export interface IFolderData {
  title: string;
  subfolders: number;
  date: string;
}
export const Folder = ({ title, subfolders, date }: IFolderData) => {
  const auxArray = Array(subfolders).fill("");
  return (
    <FolderContainer color="white" height={133}>
      <MoreIcon />
      <Row1>
        <SquareBG color="lightyellow" width={30} height={26}>
          <SquareFront color="orange" width={30} height={26} />
        </SquareBG>
        <CirclesContainer>
          {auxArray.map((ele, index) => {
            if (index === 0) return <Circle />;
            if (index < 2) return <Circle2 />;
            if (index === 2) {
              if (subfolders > 3)
                return <Circle3>+{subfolders - index}</Circle3>;
              else return <Circle3 />;
            }
          })}
        </CirclesContainer>
      </Row1>
      <h3>{title}</h3>
      <span>Created: {date}</span>
    </FolderContainer>
  );
};
const Circle = styled(Square)`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${defaultTheme.palette.white};
  border-color: ${defaultTheme.palette.gray};

  /* border: 1px solid blue; */
`;
const Circle2 = styled(Circle)`
  position: relative;
  left: -6px;
`;
const Circle3 = styled(Circle2)`
  /* border: 1px solid green; */
  left: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    font-size: 8px;
    line-height: 9px;
  }
  /* text-align: center;
  vertical-align: center;
  line-height: 100%; */
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

  & > h3 {
    color: ${defaultTheme.palette.darkblue};
    margin-top: 29px;
    font-size: 12px;
    line-height: 14px;
  }
  & > span {
    color: ${defaultTheme.palette.darkgray};
    margin-top: 10px;
    font-size: 8px;
    line-height: 9px;
  }
`;

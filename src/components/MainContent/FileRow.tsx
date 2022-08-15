import React from "react";
import styled from "styled-components";
import { defaultTheme, Palette } from "../../theme";
import { Square } from "../shapes/Square";
export interface IFile {
  color: keyof Palette;
  name: string;
  members: number;
  lastModified: string;
}
export const FileRow = ({ color, name, members, lastModified }: IFile) => {
  return (
    <RowContainer color="white">
      <ColorAndName>
        <Square color={color} width={21} borderRadius="5px" />
        <h5>{name}</h5>
      </ColorAndName>
      <Members>
        {members === 1 ? members + " member" : members + " members"}
      </Members>
      <Date>{lastModified}</Date>
    </RowContainer>
  );
};
const Members = styled.h5`
  position: absolute;
  margin-right: 215px;
`;
const Date = styled.h5`
  margin-right: 85px;
`;
const ColorAndName = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  & > h5 {
    color: ${defaultTheme.palette.darkblue};
    margin-left: 12px;
    font-size: 12px;
    line-height: 14px;
  }
`;
const RowContainer = styled(Square)`
  position: relative;
  color: ${defaultTheme.palette.darkgray};
  font-size: 12px;
  line-height: 14px;
  padding-left: 13px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 53px;

  height: 42px;
  width: 100%;
`;

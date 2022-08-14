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
      <h5>{members === 1 ? members + " member" : members + " members"}</h5>
      <h5></h5>
    </RowContainer>
  );
};
const ColorAndName = styled.div`
  display: flex;
  align-items: center;
  & > h5 {
    color: ${defaultTheme.palette.darkblue};
    margin-left: 12px;
    font-size: 12px;
    line-height: 14px;
  }
`;
const RowContainer = styled(Square)`
  padding-left: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  width: 100%;
`;

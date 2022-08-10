import React from "react";
import styled from "styled-components";
import palette from "../../theme";
const ListItem = styled.li`
  width: 100%;
  display: flex;
  & > span {
    align-items: center;
    margin-left: 19px;
    vertical-align: middle;
    text-align: center;
  }
`;
const Rectangle = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid ${palette.darkgray};
`;
export const TabTitle = ({ title }: { title: string }) => {
  return (
    <ListItem>
      <Rectangle />
      <span>{title}</span>
    </ListItem>
  );
};

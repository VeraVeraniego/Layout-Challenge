import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../theme";
const ListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  & > span {
    margin-left: 19px;
    vertical-align: middle;
    text-align: center;
  }
`;
const Rectangle = styled.div`
  margin-left: 25px;
  width: 15px;
  height: 15px;
  border: 1px solid ${palette.darkgray};
`;
const Highlight = styled("div")<{ active: boolean }>`
  height: 44px;
  width: 7px;
  background-color: ${(props) => (props.active ? "#fff" : "inherit")};
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
`;
export const TabTitle = ({ title }: { title: string }) => {
  return (
    <ListItem>
      <Rectangle />
      <span>{title}</span>
    </ListItem>
  );
};

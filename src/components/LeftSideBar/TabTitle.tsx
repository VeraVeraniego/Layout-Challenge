import React from "react";
import styled from "styled-components";
import palette, { GlobalStyle } from "../../theme";
import { SquareBorder } from "../shapes/SquareBorder";
export const TabTitle = ({
  title,
  activeTab,
  index,
  onClick,
}: {
  title: string;
  activeTab: number;
  index: number;
  onClick: (T: number) => void;
}) => {
  return (
    <ListItem
      onClick={() => {
        onClick(index);
      }}
    >
      <GlobalStyle />
      <Highlight active={activeTab === index} />
      <TabSquareBorder color={activeTab === index ? "white" : "darkgray"} />
      <Title color={activeTab === index ? palette.white : palette.darkgray}>
        {title}
      </Title>
    </ListItem>
  );
};
const TabSquareBorder = styled(SquareBorder)`
  margin-left: 25px;
`;
const Title = styled("span")`
  color: ${(props) => (props.color ? props.color : "inherit")};
`;
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

const Highlight = styled("div")<{ active: boolean }>`
  height: 44px;
  width: 7px;
  background-color: ${(props) => (props.active ? palette.white : "inherit")};
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
`;

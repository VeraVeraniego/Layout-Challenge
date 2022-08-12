import React from "react";
import styled from "styled-components";
import { defaultTheme, GlobalStyle } from "../../theme";
import { Square } from "../shapes/Square";
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
      <TabSquareBorder
        borderColor={activeTab === index ? "white" : "darkgray"}
      />
      <Title
        color={
          activeTab === index
            ? defaultTheme.palette.white
            : defaultTheme.palette.darkgray
        }
      >
        {title}
      </Title>
    </ListItem>
  );
};
const TabSquareBorder = styled(Square)`
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
  background-color: ${(props) =>
    props.active ? defaultTheme.palette.white : "inherit"};
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
`;

import React from "react";
import styled from "styled-components";
import palette from "../../theme";
import { TabTitle } from "./TabTitle";

const SideBarContainer = styled.section`
  background-color: ${palette.darkblue};
  width: 16.5vw;
`;
const Gradient = styled.div`
  width: 74px;
  height: 21px;
  background: linear-gradient(270deg, #689ef8 0%, #ff6860 56.25%, #ff9f00 100%);
  border-radius: 5px;
`;
const TabsContainer = styled.ul`
  color: ${palette.darkgray};
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 33px;
`;
export const LeftSideBar = () => {
  return (
    <SideBarContainer>
      <Gradient />
      <TabsContainer>
        <TabTitle title="Home" />
        <TabTitle title="My Files" />
        <TabTitle title="Recent Files" />
        <TabTitle title="Shared Files" />
        <TabTitle title="File Request" />
        <TabTitle title="Trash" />
      </TabsContainer>
    </SideBarContainer>
  );
};

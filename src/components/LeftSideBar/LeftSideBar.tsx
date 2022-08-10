import React from "react";
import styled from "styled-components";
import palette from "../../theme";
import { TabTitle } from "./TabTitle";

const SideBarContainer = styled.section`
  background-color: ${palette.darkblue};
  width: 16.5vw;
`;
const Gradient = styled.div`
  margin-top: 36px;
  margin-left: 32px;
  width: 74px;
  height: 21px;
  background: linear-gradient(270deg, #689ef8 0%, #ff6860 56.25%, #ff9f00 100%);
  border-radius: 5px;
`;
const TabsContainer = styled.ul`
  margin-top: 51px;
  color: ${palette.darkgray};
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 33px;
  user-select: none;
  cursor: pointer;
`;
export const LeftSideBar = () => {
  const tabsToMap = [
    "Home",
    "My Files",
    "Recent Files",
    "Shared Files",
    "File Request",
    "Trash",
  ];
  return (
    <SideBarContainer>
      <Gradient />
      <TabsContainer>
        {tabsToMap.map((ele) => {
          return <TabTitle title={ele} />;
        })}
      </TabsContainer>
    </SideBarContainer>
  );
};

import React, { useState } from "react";
import styled from "styled-components";
import palette, { GlobalStyle } from "../../theme";
import { CreateButton } from "./CreateButton";
import { TabTitle } from "./TabTitle";

const SideBarContainer = styled.section`
  background-color: ${palette.darkblue};
  width: 16.5vw;
  position: relative;
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
  gap: 4px;
  user-select: none;
  cursor: pointer;

  & > hr {
    color: #464c61;
    margin-top: 15px;
  }
`;

export const LeftSideBar = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabsToMap = [
    "Home",
    "My Files",
    "Recent Files",
    "Shared Files",
    "File Request",
    "Trash",
  ];

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <SideBarContainer>
      <GlobalStyle />
      <Gradient />
      <TabsContainer>
        {tabsToMap.map((ele, index) => {
          return (
            <TabTitle
              onClick={handleClick}
              key={index}
              index={index}
              activeTab={activeTab}
              title={ele}
            />
          );
        })}
        <hr />
      </TabsContainer>
      <CreateButton />
    </SideBarContainer>
  );
};

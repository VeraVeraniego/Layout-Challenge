import React, { useState } from "react";
import styled from "styled-components";
import { defaultTheme, GlobalStyle } from "../../theme";
import { CreateButton } from "./CreateButton";
import { TabTitle } from "./TabTitle";

export const LeftSideBar = ({ className }: { className?: string }) => {
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
    <SideBarContainer className={className}>
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

const SideBarContainer = styled.section`
  background-color: ${defaultTheme.palette.darkblue};
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
  color: ${defaultTheme.palette.darkgray};
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

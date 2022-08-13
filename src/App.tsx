import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { AsideRight } from "./components/AsideRight/AsideRight";
import { LeftSideBar } from "./components/LeftSideBar/LeftSideBar";
import { MainContent } from "./components/MainContent/MainContent";
import { defaultTheme, GlobalStyle } from "./theme";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PageContainer>
        <LeftSideBarFlexed></LeftSideBarFlexed>
        <MainContentFlexed></MainContentFlexed>
        <AsideRightFlexed></AsideRightFlexed>
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;

const LeftSideBarFlexed = styled(LeftSideBar)`
  width: 16.5vw;

  /* flex-basis: 200px; */
`;
const MainContentFlexed = styled(MainContent)`
  width: 55.8vw;
`;
const AsideRightFlexed = styled(AsideRight)`
  /* flex-basis: 252px; */
  width: 24.5vw;
`;

const PageContainer = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 1.6vw;
`;

import React from "react";
import styled from "styled-components";
import { AsideRight } from "./components/AsideRight/AsideRight";
import { LeftSideBar } from "./components/LeftSideBar/LeftSideBar";
import { MainContent } from "./components/MainContent/MainContent";
import { GlobalStyle } from "./theme";
const PageContainer = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 1.6vw;
`;
function App() {
  return (
    <PageContainer>
      <GlobalStyle />
      <LeftSideBar></LeftSideBar>
      <MainContent></MainContent>
      <AsideRight></AsideRight>
    </PageContainer>
  );
}

export default App;

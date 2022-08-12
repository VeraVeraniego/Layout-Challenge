import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
const MainSection = styled.section`
  width: 55.8vw;
  background-color: ${defaultTheme.palette.bglightgray};
`;
export const MainContent = () => {
  return <MainSection>MainSection</MainSection>;
};

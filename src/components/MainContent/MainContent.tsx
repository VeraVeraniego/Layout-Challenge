import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
const MainSection = styled.section`
  background-color: ${defaultTheme.palette.bglightgray};
`;
export const MainContent = ({ className }: { className?: string }) => {
  return <MainSection className={className}>MainSection</MainSection>;
};

import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
import { UserSection } from "./UserSection";
const AsideContainer = styled.section`
  width: 24.5vw;
  background-color: ${defaultTheme.palette.bglightgray};
`;
export const AsideRight = () => {
  return (
    <AsideContainer>
      <UserSection />
    </AsideContainer>
  );
};

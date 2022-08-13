import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
import { StorageChartAndInfo } from "./StorageChartAndInfo";
import { UserSection } from "./UserSection";
const AsideContainer = styled.section`
  width: 24.5vw;
  background-color: ${defaultTheme.palette.bglightgray};
`;
export const AsideRight = () => {
  return (
    <AsideContainer>
      <UserSection />
      <HR />
      <AsideBodyContainer>
        <StorageChartAndInfo />
      </AsideBodyContainer>
    </AsideContainer>
  );
};
const AsideBodyContainer = styled.div`
  margin: 1.5vw 3vw;
`;
const HR = styled.hr`
  border: 1px solid ${defaultTheme.palette.hr};
`;

import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
import { Square } from "../shapes/Square";
import { StorageChartAndInfo } from "./StorageChartAndInfo";
import { UserSection } from "./UserSection";
const AsideContainer = styled.section`
  background-color: ${defaultTheme.palette.bglightgray};
`;
export const AsideRight = ({ className }: { className?: string }) => {
  return (
    <AsideContainer className={className}>
      <UserSection />
      <HR />
      <AsideBodyContainer>
        <StorageChartAndInfo />
        <Square
          color={defaultTheme.palette.white}
          width={194}
          height={202}
          borderRadius="18px"
        ></Square>
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

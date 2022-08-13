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
        <UpgradeContainer
          color={defaultTheme.palette.white}
          height={202}
          borderRadius="18px"
        >
          <Gradient width={119} height={73} borderRadius="11px" />
          <TextUpgrade>
            Buy more space now!
            <br />
            <span>Upgrade to cloud premium</span>
          </TextUpgrade>
          <Button>Upgrade Account!</Button>
        </UpgradeContainer>
      </AsideBodyContainer>
    </AsideContainer>
  );
};
const Button = styled.button`
  font-size: 10px;
  line-height: 12px;
  background-color: ${defaultTheme.palette.orange};
  color: ${defaultTheme.palette.white};
  border: none;
  width: auto;
  height: 30px;
  border-radius: 7px;
  padding: 10px 18px;
  display: inline-flex;
  align-items: center;
`;
const TextUpgrade = styled.h3`
  font-size: 12px;
  line-height: 14px;

  text-align: center;
  & > span {
    font-size: 8px;
    line-height: 9px;
    color: ${defaultTheme.palette.darkgray};
  }
`;
const Gradient = styled(Square)`
  background: linear-gradient(270deg, #689ef8 0%, #ff6860 56.25%, #ff9f00 100%);
`;
const UpgradeContainer = styled(Square)`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const AsideBodyContainer = styled.div`
  margin: 1.5vw 3vw;
`;
const HR = styled.hr`
  border: 1px solid ${defaultTheme.palette.hr};
`;

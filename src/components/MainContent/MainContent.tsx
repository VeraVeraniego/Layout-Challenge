import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
import { Square } from "../shapes/Square";
export const MainContent = ({ className }: { className?: string }) => {
  return (
    <MainSection className={className}>
      <SearchBar color={defaultTheme.palette.white}>
        <Square borderColor="gray" />
        <Input placeholder="Search" />
      </SearchBar>
      <SectionTitle>
        <h2>Recently Used</h2>
        <div>
          <Square borderColor="darkblue" />
          <Square borderColor="darkgray" />
        </div>
      </SectionTitle>
    </MainSection>
  );
};
const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    display: flex;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  color: ${defaultTheme.palette.darkblue};
  font-size: 10px;
  line-height: 12px;
  border: none;
  margin-left: 7px;
`;
const SearchBar = styled(Square)`
  width: 100%;
  height: 29px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 7px 12px;
`;
const MainSection = styled.section`
  padding: 25px 18px;
  background-color: ${defaultTheme.palette.bglightgray};
`;

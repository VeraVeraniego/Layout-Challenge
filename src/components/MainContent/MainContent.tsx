import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
import { Square } from "../shapes/Square";
import { FileRow, IFile } from "./FileRow";
import { Folder, IFolderData } from "./Folder";
export const MainContent = ({ className }: { className?: string }) => {
  const foldersData: Array<IFolderData> = [
    { title: "App Project", subfolders: 2, date: "20.02.2022" },
    { title: "Project: fitbit", subfolders: 3, date: "18.05.2021" },
    { title: "Client Documents", subfolders: 5, date: "4.03.2020" },
  ];
  const recentFiles: Array<IFile> = [
    {
      color: "orange",
      name: "Travel Landing Page",
      members: 5,
      lastModified: "Mar 8,2020",
    },
    {
      color: "green",
      name: "True Photos",
      members: 12,
      lastModified: "Mar 9,2020",
    },
    {
      color: "red",
      name: "Dashboard Structure",
      members: 10,
      lastModified: "Mar 20,2020",
    },
    {
      color: "blue",
      name: "Character Illustration",
      members: 3,
      lastModified: "Mar 25,2020",
    },
  ];
  return (
    <MainSection className={className}>
      <SearchBar color="white">
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
      <FoldersContainer>
        {foldersData.map((ele, index) => (
          <Folder
            title={ele.title}
            subfolders={ele.subfolders}
            date={ele.date}
            key={index}
          />
        ))}
      </FoldersContainer>
      <SectionTitle>
        <h2>Recent Files</h2>
        <span>View All</span>
      </SectionTitle>
      <ListedFiles>
        <RowHead>
          <span>Name</span>
          <span>Members</span>
          <span>Last Modified</span>
        </RowHead>
        {recentFiles.map((ele, index) => (
          <FileRow
            key={index}
            color={ele.color}
            name={ele.name}
            members={ele.members}
            lastModified={ele.lastModified}
          />
        ))}
      </ListedFiles>
    </MainSection>
  );
};
const RowHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 60px;
  &:first-child span:first-of-type {
    margin-right: auto;
  }
  span:last-of-type {
    margin-right: 78px;
  }
  & > span {
    color: ${defaultTheme.palette.darkgray};
    font-size: 12px;
    line-height: 14px;
  }
`;
const ListedFiles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FoldersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 23px;
  gap: 14px;
  justify-content: space-between;
`;
const SectionTitle = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h2 {
    font-size: 20px;
    line-height: 23px;
  }
  & > div {
    display: flex;
    gap: 10px;
  }
  & > span {
    font-size: 12px;
    line-height: 14px;
    cursor: pointer;
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

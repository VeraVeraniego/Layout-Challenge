import React from "react";
import styled from "styled-components";
import { Square } from "../shapes/Square";

export const UserSection = () => {
  return (
    <UserInfoContainer>
      <Group1>
        <Square color="inactive" width={15} />
        <Square color="inactive" width={15} />
      </Group1>
      <Group2>
        <span>Name</span>
        <ProfilePic src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" />
      </Group2>
    </UserInfoContainer>
  );
};
const ProfilePic = styled.img`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
`;
const Group1 = styled.div`
  margin-left: 13.4%;
  display: flex;
  gap: 13px;
  /* background-color: #000; */
`;
const Group2 = styled(Group1)`
  margin-left: 0;
  margin-right: 13.4%;
  align-items: center;
  & > {
    font-size: 12px;
    line-height: 14px;
  }
`;
const UserInfoContainer = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

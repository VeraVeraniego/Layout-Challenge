import React from "react";
import styled from "styled-components";
import palette from "../../theme";
import { Square } from "../shapes/Square";

export const UserSection = () => {
  return (
    <UserInfoContainer>
      <Square color="inactive" width={15} />
      <Square color="inactive" width={15} />
      {/* <UserData */}
    </UserInfoContainer>
  );
};
const UserInfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
// const Test = styled.div`
//   width: 15px;
//   height: 15px;
//   background-color: ${palette.inactive};
// `;

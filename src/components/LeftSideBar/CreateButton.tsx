import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../theme";
import { Square } from "../shapes/Square";

export const CreateButton = () => {
  const optionsToCreate = [
    "Upload files",
    "Upload folder",
    "New folder",
    "More",
  ];
  return (
    <>
      <DialogOptionsContainer>
        {optionsToCreate.map((ele, index) => {
          return (
            <Option key={index}>
              <Square borderColor="bglightgray" />
              <span>{ele}</span>
            </Option>
          );
        })}
      </DialogOptionsContainer>
      <Button>
        <span>Create New</span>
        <div>+</div>
      </Button>
    </>
  );
};
const Option = styled.div`
  color: ${defaultTheme.palette.white};
  display: flex;
  flex-direction: row;
  margin-left: 15%;
  margin-top: 5px;
  & > span {
    margin-left: 7px;
  }
`;
const DialogOptionsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  right: 0;
  left: 0;
  bottom: 12vh;
  /* margin-top: auto; */
  position: absolute;
  padding-top: 14px;
  width: 75%;
  height: 110px;
  background-color: ${defaultTheme.palette.dialog};
  /* position: absolute; */
  border-radius: 9px;
  &::after {
    content: "";
    position: absolute;
    bottom: -35px;
    border: 25px solid transparent;
    border-top-color: ${defaultTheme.palette.dialog};
    width: 0px;
    border-radius: 15px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  position: absolute;
  margin-top: 90vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border: none;
  width: 75%;
  height: 30px;
  background-color: ${defaultTheme.palette.orange};
  color: ${defaultTheme.palette.white};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    font-size: 10px;
    margin: auto;
  }
  & > div {
    width: 21px;
    height: 21px;
    vertical-align: middle;
    line-height: 21px;
    background-color: ${defaultTheme.palette.lightorange};
    border-radius: 4px;
    margin-left: auto;
    margin-right: 4px;
  }
`;

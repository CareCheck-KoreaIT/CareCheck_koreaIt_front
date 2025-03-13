import { css } from "@emotion/react";

export const sidebar = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 31rem;
  height: 100%;
  background-color: #464667;
  border-top-right-radius: 2.8rem;
  border-bottom-right-radius: 2.8rem;
  color: #ffffff;
  font-weight: bold;
`;

export const header = css`
  margin-top: 5rem;
  font-size: 3rem;
  font-weight: bold;
`;

export const section = css`
  display: flex;
  flex-direction: column;
  height: 60rem;
  gap: 4.5rem;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21.2rem;
    height: 5rem;
    background-color: #464667;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

export const footer = css`
  display: flex;
  margin-bottom: 5rem;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    width: 17.7rem;
    height: 5rem;
    background-color: #ffffff;
    font-size: 2rem;
    color: #273a34;
    cursor: pointer;
  }
`;

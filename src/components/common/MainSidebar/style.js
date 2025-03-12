import { css } from "@emotion/react";

export const sidebar = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #464667;
  border-top-right-radius: 2.8rem;
  border-bottom-right-radius: 2.8rem;
  color: #ffffff;
`;

export const header = css`
  font-size: 3rem;
  font-weight: bold;
`;

export const section = css`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  & > div {
    width: 21.2rem;
    height: 3.8rem;
    background-color: #464667;
    cursor: pointer;
  }
`;

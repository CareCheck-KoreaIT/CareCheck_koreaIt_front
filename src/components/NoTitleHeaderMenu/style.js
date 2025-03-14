import { css } from "@emotion/react";
export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-top: 3rem;
  margin-left: 3rem;
  width: 130rem;
  height: 6rem;
`;

export const headerMenu = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10rem;
  height: 3rem;
  font-size: 2rem;

  & > svg {
    width: 3rem;
    height: 3rem;

    & > path {
      color: #404040;
    }
  }
`;

export const logoutBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21.4rem;
  height: 6.1rem;
  border-radius: 1.8rem;
  border: none;
  background-color: #464667;
  font-size: 2rem;
  color: #fafafa;

  & > svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1.5rem;

    & > path {
      color: #fafafa;
    }
  }
`;

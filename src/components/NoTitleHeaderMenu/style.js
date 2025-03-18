import { css } from "@emotion/react";
export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 3rem 5rem;
  width: 150rem;
  height: 6rem;
`;

export const headerMenu = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 9rem;
  height: 2rem;
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
  width: 20rem;
  height: 5.5rem;
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

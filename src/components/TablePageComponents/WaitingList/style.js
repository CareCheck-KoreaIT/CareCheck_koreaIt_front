import { css } from "@emotion/react";

export const list = css`
  justify-content: center;
  width: 100%;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  margin: 2rem 0;

  & tr {
    height: 5rem;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: #dbdbdb;
    }
  }

  & td {
    width: 33%;
    height: 5rem;
    box-sizing: border-box;
    border: 0.1rem solid #000000;
    font-size: 2rem;
    color: #000000;
    text-align: center;
  }
`;

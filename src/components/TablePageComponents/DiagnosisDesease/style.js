import { css } from "@emotion/react";

export const list = css`
  justify-content: center;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  margin: 2rem 0rem 2rem;
  
  & > tr, td {
    width: 20rem;
    height: 5rem;
    border: 0.1rem solid #000000;
    box-sizing: border-box;
    font-size: 2rem;
    color: #000000;

  & > td:nth-of-type(1) {
    width: 20rem;
  }
  & > td:nth-of-type(2) {
    width: 60rem;
  }
}
`;
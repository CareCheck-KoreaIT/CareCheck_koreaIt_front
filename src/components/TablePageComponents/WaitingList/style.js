import { css } from "@emotion/react";

export const list = css`
  justify-content: center;
  width: 100%;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  margin: 2rem 0rem 2rem;
  
  & > tr, td {
    width: 50rem;
    height: 5rem;
    box-sizing: border-box;
    border: 0.1rem solid #000000;
    font-size: 2rem;
  }
`; 
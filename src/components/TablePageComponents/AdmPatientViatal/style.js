import { css } from "@emotion/react";

export const list = css`
  justify-content: center;
  width: 100%;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  margin: 2rem 0rem 2rem;

  & > tr,
  td {
    width: 10rem;
    height: 5rem;
    box-sizing: border-box;
    border: 0.1rem solid #000000;
    font-size: 2rem;
  }
`;

export const nodata = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 1rem 0rem;
  border: 0.1rem solid #000000;
  width: 80rem;
  height: 5rem;
  font-size: 2rem;
`;
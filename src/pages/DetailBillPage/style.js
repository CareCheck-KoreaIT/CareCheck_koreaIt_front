import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-top: 3rem;
  width: 170rem;
  height: 6rem;
`;

export const container = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-left: 12rem;
  width: 100rem;
  border: 0.1rem solid #000000;
`;
export const title = css`
  text-align: center;
  font-size: 4rem;
  font-weight: 400;
`;
export const patientInfo = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  width: 50rem;
  height: 7rem;
`;

export const patientInfoHead = css`
  display: flex;
  gap: 0.1rem;
  & > div {
    width: 16.6rem;
    height: 2rem;
    background-color: #464667;
    color: #ffffff;
    text-align: center;
    font-size: 1.3rem;
  }
`;

export const patientTable = css`
  box-sizing: border-box;
  width: 50rem;
  margin-top: 0.8rem;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  table-layout: fixed;
  & td {
    border: 0.1rem solid #000000;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const billDetailInfo = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-left: 4rem;
  width: 92.7rem;
  height: auto;
`;

export const billDetailHead = css`
  box-sizing: border-box;
  display: flex;
  gap: 0.1rem;
  & > div {
    height: 2rem;
    background-color: #464667;
    color: #ffffff;
    text-align: center;
    font-size: 1.3rem;
  }
  & > div:nth-child(1) {
    width: 23rem;
  }
  & > div:nth-child(2) {
    width: 15.9rem;
  }
  & > div:nth-child(3) {
    width: 9.9rem;
  }
  & > div:nth-child(4) {
    width: 9.9rem;
  }
  & > div:nth-child(5) {
    width: 9.9rem;
  }
  & > div:nth-child(6) {
    width: 23rem;
  }
`;

export const billDetailTable = css`
  box-sizing: border-box;
  width: 50rem;
  margin-top: 0.8rem;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  table-layout: fixed;
  & td,
  & th {
    box-sizing: border-box;
    border: 0.1rem solid #000000;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
  }
  & th:nth-child(1),
  & td:nth-child(1) {
    width: 23rem;
  }
  & th:nth-child(2),
  & td:nth-child(2) {
    width: 16rem;
  }
  & th:nth-child(3),
  & td:nth-child(3) {
    width: 10rem;
  }
  & th:nth-child(4),
  & td:nth-child(4) {
    width: 10rem;
  }
  & th:nth-child(5),
  & td:nth-child(5) {
    width: 10rem;
  }
  & th:nth-child(6),
  & td:nth-child(6) {
    width: 23rem;
  }
`;

export const script = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  & > span {
    height: 5rem;
    font-size: 2rem;
    font-weight: 400;
  }
`;

export const totalPayInfo = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 20.5rem;
  height: 10rem;
  margin-left: 79.5rem;
`;

export const totalPayHead = css`
  display: flex;
  box-sizing: border-box;
  margin-top: 2.5rem;
  & > div {
    width: 16.6rem;
    height: 2rem;
    background-color: #464667;
    color: #ffffff;
    text-align: center;
    font-size: 1.3rem;
  }
`;

export const totalPayTable = css`
  box-sizing: border-box;
  width: 16.6rem;
  margin-top: 0.8rem;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  table-layout: fixed;
  & td {
    border: 0.1rem solid #000000;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;

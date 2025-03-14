import { css } from "@emotion/react";

export const sidebar = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 36rem;
  height: 100%;
  background-color: #464667;
  border-top-right-radius: 2.8rem;
  border-bottom-right-radius: 2.8rem;
  color: #ffffff;
  font-weight: bold;
`;

export const header = css`
  margin-top: 5rem;
  font-size: 2.6rem;
  font-weight: bold;
  & > h2 {
    color: #ffffff;
  }
`;

export const section = css`
  display: flex;
  flex-direction: column;
  height: 60rem;
  gap: 4.5rem;
  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 21.2rem;
    height: 3rem;
    color: #ffffff;
    background-color: #464667;
    font-size: 2rem;
    cursor: pointer;

    & > span {
      margin-left: 1rem;
    }
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

export const layout = css`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const select = css`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  width: 100%;

  & > select {
    margin-top: 5rem;
    margin-left: 5.5rem;
    width: 24rem;
    height: 3rem;
    font-size: 1.5rem;
    color: #aeaeae;
    outline-color: #aeaeae;
    border-radius: 0.8rem;
    background-color: #ffffff;
  }
`;

export const mainGroup = css`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  margin-top: 2rem;
  width: 100%;
`;

export const main = css`
  width: 72rem;
  height: 70rem;
  background-color: #464667;
  border-radius: 2.8rem;

`;


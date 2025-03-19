import { css } from "@emotion/react";

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

export const container = css`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  width: 100%;
  height: 100%;
`;

export const title = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: 4rem;
  font-weight: 400;
  color: #464667;
  cursor: default;

  & > p {
    margin: 0;
    padding: 0 0 1rem 1.5rem;
  }
`;

export const informationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  height: 80%;
`;

export const informationBox = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(70,70,103,1);
  -moz-box-shadow: 0px 0px 10px 1px rgba(70,70,103,1);
  box-shadow: 0px 0px 10px 1px rgba(70,70,103,1);
  padding: 1rem 2rem;
  width: 50%;
  height: 100%;
`;

export const usernameBox = css`


  & > p:nth-of-type(1) {
    font-size: 3rem;
    font-weight: 500;
    margin: 0;
  }

  & > p:not(:nth-of-type(1)) {
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
    color: #464667;
  }
`;
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

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-top: 5rem;
  width: 177.4rem;
  height: 6.1rem;

  & > h1 {
    font-size: 4rem;
    color: #464667;
  }
`;

export const headerMenu = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10rem;
  height: 3rem;
  font-size: 2.5rem;

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
  font-size: 2.2rem;
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

export const titleGroup = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 3rem;
`;


export const title1 = css`
    display: flex;
    justify-content: center;
    margin: 0;
    font-size: 6rem;
    color: #464667;
    cursor: default;
    font-weight: 400;
`;

export const title2 = css`
    display: flex;
    justify-content: center;
    margin: 0;
    font-size: 3.6rem;
    color: #464667;
    cursor: default;    
`;

export const inputGroup = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 8rem;
  
`;

export const input = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 74.4rem;
  font-size: 2rem;
  border-bottom: 0.1rem solid #3283CE;

  & > label {
    width: 15rem;
    height: 8.6rem;
    margin-right: 2rem;
    text-align: left;
    line-height: 8rem;

  }

  & > input {
    width: 74.4rem;
    height: 8.4rem;
    border: none;
    font-size: 2rem;

    &:focus {
      outline: none;
      border: none;
    }

  }

`;

export const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 17rem;

  & > button {
    width: 71rem;
    height: 11.6rem;
    background-color: #464667;
    outline: none;
    border-radius: 1.5rem;
    color: #ffffff;
    font-size: 3.6rem;
  }
`;
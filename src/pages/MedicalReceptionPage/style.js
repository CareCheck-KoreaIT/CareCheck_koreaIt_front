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

export const titleGroup = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 5rem;
`;


export const title1 = css`
    display: flex;
    justify-content: center;
    margin: 0;
    font-size: 5rem;
    color: #464667;
    cursor: default;
    font-weight: 400;
`;

export const title2 = css`
    display: flex;
    justify-content: center;
    margin: 0;
    font-size: 3rem;
    color: #464667;
    cursor: default;    
`;

export const inputGroup = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 2rem;
`;

export const input = css`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 71rem;
  font-size: 2rem;
  border-bottom: 0.1rem solid #3283CE;

  & > label {
    width: 10rem;
    height: 8.6rem;
    margin-right: 2rem;
    text-align: left;
    line-height: 8rem;
    
  }

  & > input {
      width: 60rem;
      height: 8.4rem;
      border: none;
      font-size: 2rem;

      &:focus {
        outline: none;
        border: none;
      }

      &::placeholder{
      font-size: 2rem;
      color: #9F9F9F;
      }
    }

`;

export const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

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
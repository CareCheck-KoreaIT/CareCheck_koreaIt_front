import { css } from "@emotion/react";

export const layout = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  box-sizing: border-box;
`;

export const container = css`
  width: 40rem;
  height: 20rem;
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
  text-align: center;
  position: relative;

  & > h3 {
    margin: 3rem 0;
    font-size: 2rem;
  }
`;

export const closeButton = css`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 3rem;
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

export const modalButtons = css`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
    & > button {
      padding: 8px 16px;
      width: 7rem;
      height: 4rem;
      border: none;
      background: #f44336;
      color: #fafafa;
      font-size: 16px;
      cursor: pointer;
      border-radius: 4px;

      &:hover {
        background: #d32f2f;
      }
  }

  button:first-of-type {
    margin-right: 1rem;
    background: #007bff;
    &:hover {
      background: #0056b3;
    }
  }
`;

import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
`;

export const sidebar = css`
  width: 30rem;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  width: 60rem;
`;

export const header = css`
  height: 15rem;
`;

export const mainContent = css`
  flex: 1; /* 남은 공간을 차지하게 설정 */
`;

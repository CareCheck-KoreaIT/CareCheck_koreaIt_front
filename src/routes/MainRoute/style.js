import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  height: 108rem; /* 화면 전체 높이 */
`;

export const sidebar = css`
  width: 34.7rem;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  width: 163.3rem;
`;

export const header = css`
  height: 15rem;
`;

export const mainContent = css`
  flex: 1; /* 남은 공간을 차지하게 설정 */
`;

import { css } from "@emotion/react";

export const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");

  html,
  body,
  #root {
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: "Noto Sans KR", serif;
    font-size: 62.5%; /** 1rem을 10px로 변환 */
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
  }
`;

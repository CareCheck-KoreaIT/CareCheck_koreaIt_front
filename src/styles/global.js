import { css } from "@emotion/react";

export const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");

  html,
  body,
  #root {
    height: 100%;
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

  body {
    font-size: 16px;
  }

  /* 화면 크기가 1024px 이하인 경우 폰트 크기 확대 */
  @media screen and (max-width: 1024px) {
    body {
      font-size: 18px;
    }
  }

  /* 화면 크기가 768px 이하인 경우 더 크게 설정 */
  @media screen and (max-width: 768px) {
    body {
      font-size: 20px;
    }
  }

  /* 고령층 사용자를 고려해 버튼 크기 확대 */
  @media screen and (max-width: 768px) {
    button {
      padding: 1rem 2rem;
      font-size: 1.5rem;
    }
  }
`;
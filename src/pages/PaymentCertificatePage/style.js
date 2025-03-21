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

export const table = css`
    width: 73.6rem;
    height: 80rem;
    table-layout: fixed;
    border-collapse: collapse; /* 테두리 중복 제거 */
    text-align: center;
    font-size: 3rem;
    border: 2px solid #000; /* 테이블 외부 테두리 */

    td {
        border: 1px solid #000; /* 셀 테두리 */
        padding: 1rem;
    }
`;

export const headerTitle = css`
    text-align: center;
    width: 20rem;
    height: 15rem;
    font-size: 3rem;
    word-spacing: 8rem;
`;

export const title = css`
    text-align: center;
    width: 16rem;
    height: 7rem;
    font-size: 3rem;
    word-spacing: 0.8rem; /* 어간 (단어 사이의 간격) 조절 */
`;

export const title2 = css`
    text-align: center;
    width: 16rem;
    height: 7rem;
    font-size: 3rem;
    word-spacing: 5rem;
`;

export const money = css`
    font-size: 3rem;
    word-spacing: 10rem;

    span:nth-of-type(2) {
    }
`;

export const note = css`
    font-size: 2rem;
    word-spacing: 0.5rem;
`;

export const bottomSpace = css`
    font-size: 2rem;
    margin-bottom: 2rem;
    word-spacing: 5rem;
`;

export const left = css`
    div {
        text-align: left;
        margin-left: 11rem;
    }
`;
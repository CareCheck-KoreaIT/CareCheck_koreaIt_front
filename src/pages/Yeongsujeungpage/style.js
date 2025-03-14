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
    border-collapse: collapse; /* 테두리 중복 제거 */
    text-align: center;
    margin-top: 3rem;

    font-size: 3rem;
  
    border: 2px solid #000; /* 테이블 외부 테두리 */

    td {
    border: 1px solid #000; /* 셀 테두리 */
    padding: 1rem;
    }
`;

export const Yeongsujeung = css`
    height: 15rem;
    font-size: 3rem;
    letter-spacing: 5rem; /* 자간을 띄우기 */
`;

export const YeongsujeungDiv = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4rem;
`;


export const Number = css`
    width: 16rem;
    height: 7rem;
    font-size: 3rem;
`;

export const Department = css`
    width: 16rem;
    height: 7rem;
    font-size: 3rem;
`;

export const Receipt = css`
    width: 16rem;
    height: 7rem;
    font-size: 3rem;
`;

export const money = css`
    font-size: 3rem;
    margin-bottom: 2rem; /* 2번째 p 태그만 마진 바텀 적용 */
    
    span:nth-of-type(2) {
        margin-left: 18rem;
    }

    span:nth-of-type(4) {
        margin-left: 18rem;
    }
`;

export const Detail = css`
    height: 7rem;
    font-size: 3rem;
`;

export const note = css`
    font-size: 2rem;
    
    span:nth-of-type(2) {
        letter-spacing: 2rem;
    }

    div:nth-last-of-type(2),
    div:nth-last-of-type(1) {
        text-align: left;
        margin-left: 12rem;
    }
`;

export const bottomSpace = css`
    font-size: 2rem;
    margin-bottom: 2rem; /* 2번째 p 태그만 마진 바텀 적용 */
    
    span:nth-of-type(2) {
        margin-left: 15rem;
    }
`;
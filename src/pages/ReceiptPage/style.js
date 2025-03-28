import { css } from "@emotion/react";

export const searchItems = css`
    display: flex;
    justify-content: flex-end;
    margin: 4rem 16rem 0rem;

    & > Select {
        font-size: 1.5rem;
    }
`;

export const searchInput = css`
    justify-self: flex-end;
`;

export const searchButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.3rem;
    background-color: #464667;
    border: 0.1rem solid #2c2c43;
    border-radius: 0.3rem;
    padding: 0.5rem;

    & > svg {
        color: #ffffff;
        width: 2rem;
        height: 2rem;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }
`;

export const tableContainer = css`
    display: flex;
    justify-content: center;
`;

export const table = css`
    width: 128rem;
    text-align: center;
    margin-top: 1rem;
    font-size: 1.5rem;
    border-collapse: collapse;
    border: 0.2rem solid #000000;
    box-sizing: border-box; /* 테이블 외부 테두리 */

    td {
        border: 0.1rem solid #000000;
    }

`;

export const trHeader = css`
    background-color: #464667;
    height: 5rem; /* 차트번호 행 높이 설정 */
    color: white;
`;

export const trData = css`
    height: 5rem; /* 데이터 행 높이 설정 */
`;

export const cancelButton = css`
    width: 10rem;
    height: 5rem;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
    color: white;
    background-color: #464667;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #464667;
    }
`;

export const PaymentButton = css`
    width: 10rem;
    height: 5rem;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
    color: white;
    background-color: #464667;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #464667;
    }
`;


export const footer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1rem;
`;

export const pageNumbers = css`
    display: flex;
    width: 25rem;
    
    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        margin-right: 0.5rem;
        border: 0.1rem solid #dbdbdb;
        border-radius: 0.5rem;
        width: 2.5rem;
        height: 2.5rem;
        font-weight: 600;
        font-size: 1.2rem;
        cursor: pointer;
        background-color: #ffffff;

        &:hover {
            background-color: #d2d2d3;
        }
        &:active {
            background-color: #a4a4ca;
        }

        &:disabled {
            background-color: #dbdbdb;
            cursor: default;
        }

        & > span {
            margin-bottom: 0.1rem;
        }
    }
`;

export const pageNum = (isSelect) => css`
    background-color: ${isSelect ? "#a4a4ca" : "#ffffff"} !important;
`;
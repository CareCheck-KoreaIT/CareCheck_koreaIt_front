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
    align-items: center;
    width: 100%;
`;

export const table = css`
    width: 80%;
    border-collapse: collapse; /* 테두리 중복 제거 */
    text-align: center;
    margin-top: 1rem;

    font-size: 1.5rem;
    
    border: 2px solid #000; /* 테이블 외부 테두리 */

    thead {
        background-color: #464667;
    }

    th,
    td {
        border: 1px solid #000; /* 셀 테두리 */
        padding: 0.5rem;
        height: 4rem;
    }

    th {
        font-weight: bold;
        color: #ffffff;
    }


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

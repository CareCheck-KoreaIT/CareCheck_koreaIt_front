import { css } from "@emotion/react";

export const modalTop = css`
    display: flex;
    justify-content: flex-end;
    font-size: 2.5rem;
    & > div {
        cursor: pointer;
        & > svg {
            fill: #d15a5a;
            &:hover {
                fill: #ff0000;
            }
        }
    }
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 5rem;
`;

export const headerIcon = css`
    font-size: 4rem;
    & path {
        fill: #999999;
    }
`;

export const headerTitle = css`
    margin: 0.5rem;
    font-size: 2rem;
`;

export const headerMessage = css`
    text-align: center;
    font-size: 1.5rem;
    color: #5a5a5a;
`;

export const main = css`
    display: flex;
    align-items: center;
    padding: 0 5rem;

    & > input {
        box-sizing: border-box;
        outline: none;
        margin-right: 1rem;
        border: 0;
        border-bottom: 0.2rem dotted #464667;
        /* border-radius: 0.5rem; */
        padding: 0.5rem 1rem;
        flex-grow: 1;
        font-size: 1.5rem;
        color: #666666;
        background-color: #ffffff;
    }

    & > button {
        box-sizing: border-box;
        border: 0.2rem solid #464667;
        border-radius: 0.5rem;
        padding: 0.5rem 1.5rem;
        background-color: #bab6dd;
        cursor: pointer;

        &:hover {
            background-color: #636394;
            color: #ffffff;
        }
        &:active {
            background-color: #464667;
            color: #ffffff;
        }
    }
`;
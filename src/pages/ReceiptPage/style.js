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
  margin-top: 5rem;

  font-size: 1.5rem;
  
  border: 2px solid #000; /* 테이블 외부 테두리 */

  thead {
    background-color: #464667;
  }

  th,
  td {
    border: 1px solid #000; /* 셀 테두리 */
    padding: 1rem;
    height: 4rem;
  }

  th {
    font-weight: bold;
    color: #ffffff;
  }


`;


export const cancelButton = css`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #464667;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #464667;
  }
`;

import { css } from "@emotion/react";

export const parent = css`
  display: flex; 
  width: 90%; 
  height: 100%; 
  gap: 10rem;

  & > div:nth-child(1) {
    flex: 1; 
    /* margin: 0rem 14rem; */
    text-align: center;
  }
  
  & > div:nth-child(2) {
    flex: 1; 
    /* margin: 0rem 10rem 4rem 2rem; */
    text-align: center;
  }
`;

export const headerTable = css`
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    border: 0.1rem solid #000000;
    border-radius: 1rem;

    width: 100%;
    height: 8rem;
    background-color: #464667;

    & > tr, td {
      font-size: 3rem;
      font-weight: bold;
      color: #ffffff;
      cursor: pointer;
    }

    margin-bottom: 2rem;
`;

export const waitingList = css` /*진료 대기자 명단*/
  width: 100%;
  border: 0.1rem solid black;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  & > tr, td {
    width: 40rem;
    height: 4rem;
    border: 0.1rem solid black;
    border-radius: 1rem;
    font-size: 1.8rem;
    color: #ffffff;
    background-color: #464667;
  }

  & > tr:first-child td:first-child {
    border-top-left-radius: 1rem; /* 첫 번째 행 첫 번째 td */
  }
`;

export const patientInfo = css` /*환자 정보*/
  justify-content: center;
  width: 100%;
  border: 0.1rem solid black;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  & > tr, td {
    width: 40rem;
    height: 4rem;
    border: 0.1rem solid black;
    border-radius: 1rem;
    font-size: 1.8rem;
    color: #ffffff;
    background-color: #464667;
  }
`;

export const diagnosisRegister = css` /*상병 등록*/
  justify-content: center;
  width: 100%;
  border: 0.1rem solid black;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  & > tr, td {
    width: 40rem;
    height: 4rem;
    border: 0.1rem solid black;
    border-radius: 1rem;
    font-size: 1.8rem;
    color: #ffffff;
    background-color: #464667;
  }
`;

export const prescriptionRegister = css` /*처방 등록*/
  justify-content: center;
  width: 100%;
  border: 0.1rem solid black;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  & > tr, td {
    width: 40rem;
    height: 4rem;
    border: 0.1rem solid black;
    border-radius: 1rem;
    font-size: 1.8rem;
    color: #ffffff;
    background-color: #464667;
  }
`;

export const t1 = css`
  justify-content: center;
  width: 100%;
  border: 0.1rem solid black;
  border-collapse: collapse;
  margin: 2rem 0rem 2rem;
  
  & > tr, td {
    width: 50rem;
    height: 5rem;
    border: 0.1rem solid black;
    border-radius: 1rem;
    box-sizing: border-box;
    border: 0.1rem solid #000000;
    font-size: 2rem;
    color: #ffffff;
  }
`;

/*orderPage*/

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

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 156.4rem;
  height: 6.1rem;

  & > h1 {
    font-size: 4rem;
    color: #464667;
  }
`;

export const headerMenu = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10rem;
  height: 3rem;
  font-size: 2.5rem;

  & > svg {
    width: 3rem;
    height: 3rem;
    
    & > path {
      color: #404040;
    }
  }
`;

export const logoutBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21.4rem;
  height: 6.1rem;
  border-radius: 1.8rem;
  border: none;
  background-color: #464667;
  font-size: 2.2rem;
  color: #fafafa;

  & > svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1.5rem;

    & > path {
      color: #fafafa;
    }
  }
`;

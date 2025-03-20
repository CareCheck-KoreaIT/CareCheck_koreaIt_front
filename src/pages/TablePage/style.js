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

export const parent = css`
  display: flex; 
  height: 100%;
  margin-top: 3rem;
  gap: 10rem;

  & > div:nth-child(1) {
    flex: 1; 
    width: 50rem;
    text-align: center;
  }
  
  & > div:nth-child(2) {
    flex: 2; 
    width: 70rem;
    text-align: center;
  }
`;

export const leftTable = css`
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    border: 0.1rem solid #000000;

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
  
    > tr, td {
    width: 40rem;
    height: 4rem;
    border: 0.1rem solid black;
    font-size: 1.8rem;
    color: #ffffff;
    background-color: #464667;
    } 
`;

export const rightTable = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 0.1rem solid #000000;
    height: 7rem;
    background-color: #464667;
    margin-bottom: 2rem;

    & > tr {
    font-size: 3rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    }
`;

export const cord = css`
    width: 1rem;
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
    font-size: 1.8rem;
    color: #ffffff;
    background-color: #464667;
  }
`;

export const diagnosisRegister = css` /*상병 등록*/
  justify-content: center;
  border: 0.1rem solid black;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  & > tr, td {
    width: 100%;
    height: 4rem;
    border: 0.1rem solid black;
    font-size: 1.8rem;
    color: #ffffff;
    background-color: #464667;
  }
  
  & > td:nth-of-type(1) {
    width: 20rem;
  }
  & > td:nth-of-type(2) {
    width: 60rem;
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
    box-sizing: border-box;
    border: 0.1rem solid #000000;
    font-size: 2rem;
    color: #ffffff;
  }
`;
import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    padding: 0 4rem;
    margin-top: 4rem;
`;

export const title = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: 400;
    color: #464667;
    border-bottom: 0.1rem solid #3283CE;

    cursor: default;
    
    & > p {
        margin: 0;
        padding: 0 0 1rem 1.5rem;
    }
    `;

export const usernameBox = css`
    display: flex;
    align-items: center;
    height: 5rem;
    margin-left: 3rem;
    margin-bottom: 2rem;
    font-size: 3.5rem;
  
    
    span:nth-of-type(1) {
    margin-right: 6rem;
    }
`;

export const AccountBox = css`
    display: flex;
    margin-left: 3rem;
    font-size: 3rem;
`;

export const userNumber = css`
    display: flex;
    margin-right: 3rem;
`;

export const authority = css`
    display: flex;
    letter-spacing: 5.5rem;
    margin-right: -2.5rem;
`;

export const changeButton = css`
    width: 8rem;
    height: 4rem;
    padding: 0.5rem 1rem;
    transform: translateY(-5px);
    font-size: 1.7rem;
    color: white;
    background-color: #464667;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: #464667;
    }
`;

export const passwordBox = css`
    display: flex;
    align-items: center;
    height: 5rem;
    margin-left: 3rem;
    font-size: 3rem;
    
    span:nth-of-type(1) {
        margin-right: 47rem;
    }
    `;

export const passwordMiddle = css`
    display: flex;
    margin-right: 40rem;
`;

export const emailBox = css`
    display: flex;
    align-items: center;
    height: 5rem;
    margin-left: 3rem;
    font-size: 3rem;
    
    span:nth-of-type(1) {
        margin-right: 19.3rem;
    }
`;

export const emailMiddle = css`
    display: flex;
    margin-right: 4rem;
`;

export const phoneNumberBox = css`
    display: flex;
    align-items: center;
    height: 5rem;
    margin-left: 3rem;
    font-size: 3rem;

    span:nth-of-type(1) {
        margin-right: 17.8rem;
    }
`;

export const middleBox2 = css`
    display: flex;
    margin-right: 3rem;
`;
export const correctionButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    width: 25rem;
    height: 7rem;
    outline: none;
    border-radius: 1rem;
    font-size: 2rem;
    background-color: #464667;
    color: #ffffff;
`;

export const emailInput = css`
  font-size: 2.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 1rem;
`;

export const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  export const modalContent = {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    width: "50rem",
  };
  
  export const modalInput = {
    width: "90%",
    padding: "2rem",
    margin: "8px 0",
};

export const modalButtons = {
    display: "flex",
    padding: "2rem",
    justifyContent: "space-between",
};
  
export const cancelButton = css`
    width: 8rem;
    height: 4rem;
    padding: 0.5rem 1rem;
    transform: translateY(-5px);
    font-size: 1.7rem;
    color: white;
    background-color: #464667;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: #464667;
    }
`;
  
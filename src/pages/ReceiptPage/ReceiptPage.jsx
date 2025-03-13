/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';

function ReceiptPage(props) {

    const data = [
        { no: 1, name: "홍길동", phone: "010-1234-4567", date: "2025.03.11", status: "취소" },
        { no: 2, name: "전우치", phone: "010-1234-4567", date: "1523.03.11", status: "취소" },
       
        
    ];
    return (
        
        <div css={s.tableContainer}>
            <table css={s.table}>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>이름</th>
                        <th>전화번호</th>
                        <th>접수날짜</th>
                        <th>상태</th>
                    </tr>
                </thead>
        
        <tbody>
        {data.map((row) => (
        <tr key={row.no}>
            <td>{row.no}</td>
            <td>{row.name}</td>
            <td>{row.phone}</td>
            <td>{row.date}</td>
            
            <td>
                <button css={s.cancelButton} onClick={() => handleCancel(row.name)}>
                {row.status}
                </button>
            </td>
            
            </tr>
        
        ))}
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        
        </tbody>
            </table>
        </div>
        
    );
}

export default ReceiptPage;
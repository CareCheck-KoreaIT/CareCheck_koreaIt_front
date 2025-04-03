/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Select from 'react-select';
import Swal from "sweetalert2";
import { useAdmissionMutation } from "../../mutations/admissionMutation";

function MedicalReceptionPage(props) {
  const admissionMutation = useAdmissionMutation();
  const location = useLocation();
  const { patientId } = location.state || {};
  // const [receptionData, setReceptionData] = useState({
  //   patientId: patientId || '',
  // });

  const [ clinicData, setClinicData] = useState({
    patientId: patientId || '',
    clinicDeft: null,
    usercode: null,
  });

  const clinicDeftOptions = [
    { value: '소아과', label:'소아과'},
    { value: '내과', label: '내과'}
  ];

  const usercodeOptions = [
    { value: '2025020003', label: '거북이'},
    { value: '2025020004', label: '두루미'},
    { value: '2025020005', label: '김둘리'}
  ]

  const isError = () => {
    const isEmptyInput = clinicData.patientId === "";
    const isNotSelected = Object.values(clinicData).map(value => !!value).includes(false);

    return isEmptyInput || isNotSelected;
  }

  const handleAdmissionListOnClick = async () => {
    if(isError()) {
      Swal.fire({
        icon: "error",
        title: "접수 등록 실패",
        html: "<div style='font-size: 1.5rem'>값을 모두 입력해주세요.</div>",
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      });
      return;
    }

    Swal.fire({
      icon: "question",
      title: "아래의 정보로 등록하시겠습니까?",
      html: `<div style='font-size:1.5rem'>환자 번호: ${clinicData.patientId} <br>진료과: ${clinicData.clinicDeft} <br>담당 의사: ${usercodeOptions.find(option => option.value === clinicData.usercode).label}</div>`,
      showDenyButton: true,
      confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      denyButtonText: "<div style='font-size: 1.5rem'>취소</div>",
    }).then(response => {
      // console.log(clinicData)
      admissionMutation.mutateAsync(clinicData)
        .then(response => {
          Swal.fire({
            icon: "success",
            title: "접수 등록 완료!",
            showConfirmButton: false,
            timer: 1000,
          })
        }).catch(error => {
          console.log(error)
          Swal.fire({
            icon: "error",
            title: "진료 접수 실패",
            html: `<div style='font-size: 1.5rem'>${error.response.data}</div>`,
            confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>"
          })
        })
    })

    // const result = await Swal.fire({
    //   title: '정말 등록하시겠습니까?',
    //   html: `<div style='font-size:1.5rem'>환자 번호: ${receptionData.patientId} <br>진료과: ${clinicData.clinicDeft} <br>담당 의사: ${clinicData.usercode ? usercodeOptions.find(option => option.value === usercode).label:'선택되지 않음'}</div>`,
    //   icon: 'question',
    //   showCancelButton: true,
    //   confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
    //   cancelButtonText: "<div style='font-size: 1.5rem'>취소</div>"
    // })
    //   if(result.isConfirmed) {
    //     const requestData = {
    //       ...clinicData,
    //       patientId: receptionData.patientId,
    //     };
      
    //   try {
       
    //     const response = await axios.post("http://localhost:8080/admission", requestData);
  
    //     if (response.status === 200) {
    //       Swal.fire({
    //         icon: "success",
    //         title: "접수 등록 완료!",
    //         // confirmButtonColor: "#3085d6",
    //         // confirmButtonText: "확인",
    //         showConfirmButton: false,
    //         timer: 1000,
    //       })
    //     }
    //   } catch (error) {
    //     let errorMessage = "접수 등록 실패";
        
    //     if (error.response && error.response.data) {
    //       // 1. message 필드가 있는 경우 (NotFoundException 같은 경우)
    //       if (error.response.data.message) {
    //         errorMessage = error.response.data.message;
    //       }
    //       // 2. error 필드가 있는 경우 (토큰 인증 실패 같은 경우)
    //       else if (error.response.data.error) {
    //         errorMessage = error.response.data.error;
    //       }
    //       // 3. 기타 예외 처리
    //       else {
    //         errorMessage = JSON.stringify(error.response.data);
    //       }
    //     }

    //     Swal.fire({
    //       icon: "error",
    //       title: "오류 발생",
    //       text: errorMessage, // 오류 메시지를 사용자에게 표시
    //     });
    //   }
    // }
  } 

  const handleReceptiOnChange = (e) => {
    setClinicData(prev => ({ 
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClinicOnChange = (selectedOption, actionMeta) => {
    setClinicData((prev) => ({
      ...prev,
      [actionMeta.name]: selectedOption ? selectedOption.value : null,
    }));
  };

  return (
    <>
      <div css={s.layout}>
        <div css={s.titleGroup}>
            <h1 css={s.title1}>CareCheck</h1>
            <p css={s.title2}>진료 접수</p>
        </div>
        <main css={s.inputGroup}>
          <div css={s.input}>
            <label css={s.inputNum} htmlFor="chartNumber">환자 번호</label>
            <input 
              type="text" 
              name="patientId" 
              value={clinicData.patientId} 
              onChange={handleReceptiOnChange} 
            />
          </div>
          <div css={s.input}>
            <label htmlFor="department">진료과</label>
            <Select 
            type="text" 
            name="clinicDeft" 
            options={clinicDeftOptions}
            value={clinicDeftOptions.find(option => option.value === clinicData.clinicDeft)} 
            onChange={handleClinicOnChange}
            placeholder="진료과 선택"
            />
          </div>
          <div css={s.input}>
            <label htmlFor="exaggeration">담당 의사</label>
            <Select
            type="text" 
            name="usercode"
            options={usercodeOptions} 
            value={usercodeOptions.find(option => option.value === clinicData.usercode)} 
            onChange={handleClinicOnChange}
            placeholder="담당 의사 선택"
            />
            </div>
        </main>
        <footer css={s.button}>
            <button onClick={handleAdmissionListOnClick}>등록</button>
        </footer>
      </div>
    </>
  );
}

export default MedicalReceptionPage;

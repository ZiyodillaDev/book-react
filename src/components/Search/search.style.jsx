import styled from "styled-components";

export const SearchAll = styled.div`
position: relative;
`;
export const CarouselBoxLineGradienit = styled.div`
  z-index: 10;
  max-width: 1261.9px;
  height: 346.97px;
  top: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background: linear-gradient(
    89.16deg,
    #263a3d 70.78%,
    rgba(25, 25, 25, 0) 105.05%
  );
  border-radius: 21px;
`;
export const SearchBox = styled.div`
  max-width: 1030px;
  min-height: 163px;
  margin: 0 auto;
  background: var(--main-bg-color);
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  position: absolute;
  right: 0;
  left: 0;
  top: 371px;
`;

export const SearchInput = styled.input`
  width: 710px;
  height: 48px;
  background: var(--search-input-bg);
  border-radius: 15px;
  border: 1px solid #f5f5f5;
  padding-left: 10px;
  outline: none;
  margin-right: 10px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
padding: 12px 24px;
caret-color: var(--main-text-color);
color: var(--main-text-color);

`;
export const SearchInputBtn = styled.button`
  padding: 12px 37px;
  width: 160px;
  height: 48px;
  background: #c9ac8c;
  border-radius: 15px;
  border: 1px solid #c9ac8c;
  flex: none;
  order: 1;
  flex-grow: 0;
  display: flex;
justify-content: center;
align-items: center;
padding: 12px 37px;
gap: 10px;
color: #EFDAC3;
`;

export const SearchHd = styled.h3`
  padding-top: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #d1b89d;
  text-align: center;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const SearchForm = styled.form`
display: flex;
justify-content: center;
gap: 14px;
flex-wrap: wrap;
`;
export const SearchIcon = styled.img`

`;
export const SearchData = styled.div`
top: 500px;
flex-wrap: wrap;
gap: 20px;
z-index: 10;
`;

// ////Modal

export const ModalForm = styled.form``;
export const ModalFormSelect = styled.select`
  padding: 14px 96px 14px 14px;
  width: 95%;
  height: 46px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  margin: 0 auto;
  color: white;
  margin-top: 20px;
`;
export const ModalFormOption = styled.option`

`;
export const EditFormInput = styled.input`
  padding: 14px 96px 14px 14px;
  width: 95%;
  height: 46px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  margin: 0 auto;
  color: white;
  margin-top: 20px;
`;
export const UploadBox = styled.div`
  margin-top: 20px;
  width: 95%;
  height: 157px;
  background: #2d303e;
  border: 1px dashed #ea7c69;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UploadBoxDiv = styled.div`
  text-align: center;
`;

export const UploadBoxImg = styled.img`

`;
export const UploadBoxHd = styled.h4`
font-weight: 500;
font-size: 14px;
line-height: 130%;
color: #EA7C69;
flex: none;
order: 0;
flex-grow: 0;
`;
export const UploadBoxPr = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 140%;
color: #ABBBC2;
flex: none;
order: 1;
flex-grow: 0;
`;

export const FormDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const ModalFormBtn = styled.button`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;
  gap: 8px;
  width: 217px;
  height: 48px;
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 0;
  color: #ea7c69;
  border: 1px solid #ea7c69;
  &:hover {
    background: #ea7c69;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
    color: white;
    border: 1px solid #ea7c69;
  }
`;

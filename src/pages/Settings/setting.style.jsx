import styled from "styled-components";

export const SettingAll = styled.div`
  margin-left: 250px;
  margin-top: 154px;
  width: 706px;
  height: calc(100vh - 234px);

`;
export const SettingP = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: var( --main-text-color);
`;
export const FormSetting = styled.form``;
export const Label = styled.label`
  color: var( --main-text-color);
`;
export const Select = styled.select`
  width: 708px;
  height: 44px;
  background: #f3f6f9;
  border-radius: 4px;
`;
export const Option = styled.option``;
export const Span = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #b5b5c3;
  opacity: 0.8;
`;

export const Dark = styled.div`
  margin-top: 10px;
`;
export const DarkTxt = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: var( --main-text-color);
`;

export const Line = styled.div`
  width: 709px;
  height: 2px;
  margin-top: 40px;
  background: #ecf0f3;
`;

export const ButtonSetting = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: var(--profile-button-color);
  width: 142px;
  height: 43px;
  left: 810px;
  top: 524px;
  margin-top: 32px;
  float: right;
  background: var(--profile-button-bg);
  border-radius: 4px;
`;

export const ModeLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 75px;
  height: 28px;
  & input:checked + span{
    background-color: #2196F3;
  }
  & input:focus + span{
    box-shadow: 0 0 1px #2196F3;
  }
  & input:checked + span::before{
      transform: translateX(42px);
  }
`
export const ModeInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`
export const ModeSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F3F6F9;
  transition: .4s;
  border-radius: 34px;
  &::before{
    position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 5px;
  bottom: 3px;
  background-color:#fff;
  transition: .4s;
  border-radius: 50%;  
  }

`

export const DarkButton = styled.button`
 width: 87px;
  height: 30px;
  background: #B7B7B7;
  display: block;
  border-radius: 100px;
  position: relative;
  border: none;
  z-index: 999 !important;
  &.active{
    background: #fff !important;
    & span{
    background: #3699FF !important;
    transform: translateX(50px) !important;
    }
  }
`
export const DarkSpan = styled.span`
  position: absolute;
  top: 2px;
  left: 5px;
  width: 25px;
  height: 25px;
  background: white;
  border-radius: 90px;
  transition: 0.3s;
`
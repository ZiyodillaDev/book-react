import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Profiles = styled.div`
  display: flex;
  height: calc(100vh - 80px);
`;
export const ProfileDiv = styled.div`
  padding-top: 83px;
  margin-left: 125px;
  `;
export const ProfileImgs = styled.img`
  width: 175px;
  height: 175px;
  object-fit: cover;
  border-radius: 50%;
`;
export const InputFile =styled.input`
  display: none;
`
export const Labels =styled.label`
  cursor: pointer;
`
export const CameraImg = styled.img`
  position: absolute;
  margin-left: -50px;
  margin-top: 100px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const AllForm = styled.div`
  padding-top: 126px;
  margin-left: 108px;
`;
export const HeadH = styled.p`
  margin-bottom: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: var(--main-text-color);
`;
export const Form = styled.form``;
export const Label = styled.label`
  color: var(--main-text-color);
`;
export const Input = styled.input`
  width: 707.96px;
  height: 44px;
  background: #f3f6f9;
  border-radius: 4px;
`;
export const InputPhone = styled.input`
  height: 44px;
  width: 340px;

  background: #f3f6f9;
  border-radius: 4px;
`;

export const DivOne = styled.div`
  margin-top: 22px;
`;
export const DivSecond = styled.div`
  margin-top: 22px;
`;
export const DivThird = styled.div`
  margin-top: 22px;
`;
export const Span = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #b5b5c3;
  opacity: 0.8;
`;

export const Line = styled.div`
  margin-top: 26px;
  width: 707.96px;
  height: 1px;
  background: #ecf0f3;
`;

export const Button = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  width: 141.99px;
  height: 43px;
  background: var(--profile-button-bg);
  border-radius: 4px;
  margin-top: 44px;
  float: right;
  color: var(--profile-button-color);
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Registers = styled.div`
  display: flex;
  gap: 108px;
  height: 100vh;

`;

export const Left = styled.div`
  max-width: 576px;
  background: rgba(201, 172, 140, 0.93);
`;

export const LeftImg = styled.img`
  width: 100%;
  padding-top: 100px;
  padding-left: 38px;
  padding-right: 38px;
  padding-bottom: 100px;
`;
export const Right = styled.div`
  margin-top: 75px;
`;
export const RightH = styled.h1`
  width: 147px;
  height: 51px;
  font-family: "Arial Black";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color: var(--main-text-color);
`;

export const RightP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: var(--main-text-color);
`;
export const RightLink = styled(Link)`
  text-decoration: none;
`;

export const RightForm = styled.form`
margin-top: 21px;
`;
export const RightInput = styled.input`
  margin-top: 16px;
  width: 330px;
  border-radius: 10px;
  height: 46px;
  background: transparent
`;

export const RightBtn = styled.button`
  background: var(--profile-button-bg);
  border-radius: 99px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  height: 46px;
  width: 328px;
  left: 0px;
  top: 0px;
  border-radius: 99px;
  margin-top: 34px;
  color: var(--profile-button-color);
`;

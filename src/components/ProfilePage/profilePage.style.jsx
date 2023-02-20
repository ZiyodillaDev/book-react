import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Profiles = styled.div``;
export const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileLink = styled(NavLink)`
  width: 400px;
  height: 80px;
  background: var(--profile-tab-bg);
  border-radius: 4px 4px 0px 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  padding-left: 23px;
  padding-top: 23px;
  text-decoration: none;
  color: #464e5f;

  &.active {
    background: var(--profile-tab-active-bg);
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #152540;
    & button {
      background: var(--profile-tab-number-active-bg);
      border: var(--profile-tab-number-bg-border);
      color: #fff;
    }
  }
`;

export const ProfBtn = styled.button`
  width: 35px;
  height: 35px;
  left: 423px;
  top: 22px;
  border: none;
  background: #e5eaee;
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3699ff;
`;

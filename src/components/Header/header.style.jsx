import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 100px;
`;

export const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: var(--main-bg-color);
  position: sticky;
  top: 0;
  padding: 27px 0;
`;

export const HeaderNavLogo = styled(NavLink)`
  font-family: Poppins;
  text-decoration: none;
  font-size: 25px;
  color: #d1b89d;
  display: inline-block;
  position: relative;
  &:hover {
    color: #d1b89d;
  }
`;
export const HeaderNavLinks = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
export const HeaderNavLink = styled(NavLink)`
  font-family: Poppins;
  font-size: 16px;
  color: var( --header-link-text-color);
  position: relative;
  text-decoration: none;
  &:hover {
    color: var(--header-link-text-color);
  }
  &.active {
    color: var(--header-link-text-active-color);
  }
`;

export const HeaderSelectbox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80px;
`;

export const HeaderOptionSelected = styled.div`
  position: relative;
  order: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const HeaderOptionSelectedImg = styled.img`
  border-radius: 50%;
  width: 45px;
  height: 45px;
`;

export const HeaderOptionsContainer = styled.div`
  position: absolute;
  top: 60px;
  left: -70px;
  display: none;
  flex-direction: column;
  background: var( --header-select-link-bg);
  color: var( --header-select-link-text-color);
  max-height: 0;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  order: 1;
  z-index: 99999 !important;


  &.active {
    padding: 5px 0;
    min-height: 240px;
    height: 100%;
    opacity: 1;
    display: flex;
  z-index: 99999 !important;

  }
`;
export const HeaderOptionSelectedArrowDown = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(47%) sepia(7%) saturate(13%) hue-rotate(326deg) brightness(97%)
    contrast(86%);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &.active {
    transform: rotateX(180deg);
    top: -6px;
  }
`;

export const Option = styled(NavLink)`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: var(--header-select-link-hover-bg);
  }
`;
export const OptionLabel = styled.label`
  cursor: pointer;
  color: var(--header-select-link-text-color);
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
`;

export const OptionRadio = styled.input`
  display: none;
`;

export const HeaderBtn = styled.button`
  border-radius: 50%;
  height: 49px;
  width: 49px;
  border: 1px solid grey;
`;

export const ProfileImg = styled.img`
object-fit: cover;
`
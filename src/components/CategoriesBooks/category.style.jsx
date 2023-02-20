  import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const CategoryBox = styled.div`
  margin-top: 140px;
`;
export const CategoryTitle = styled.h2`
  height: 48px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #c9ac8c;
`;
export const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
`;
export const CategoryNavLink = styled(NavLink)`
  width: 146px;
  height: 27px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: var(--genre-text-color);
  flex: none;
  order: 0;
  flex-grow: 0;
  text-decoration: none;
  &.active {
    color: var(--genre-text-active-color);
  }
  &:hover {
    color: var(--genre-text-active-color);
  }
`;
export const CategoryCardsBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`;

export const CategoryCard = styled(NavLink)`
width: 190px;
height: 352px;
flex: none;
order: 0;
flex-grow: 0;
  margin-top: 25px;
  overflow: hidden;
  text-decoration: none;
  text-align: left;
`;
export const CategoryCardTop = styled.div`
width: 190px;
height: 283px;

border-radius: 15px;

flex: none;
order: 0;
flex-grow: 0;
`;
export const CategoryCardBody = styled.div`
 
`;
export const CategoryCardTitle = styled.h3`
height: 27px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: var( --book-title-text-color);
flex: none;
order: 0;
flex-grow: 0;
margin-top: 12px;
margin-bottom: 6px;
`;
export const CategoryCardPr = styled.p`
height: 24px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: var(--header-link-text-color);
flex: none;
order: 1;
flex-grow: 0;
margin-bottom: 5px;
`;
export const CategoryCardTopImg = styled.img`
width: 100% !important;
height: 100%;
border-radius: 15px;

`;
export const CategoryOutlet = styled.div`
display: flex;
align-items: center;
justify-content:flex-start;
gap: 20px;
`;

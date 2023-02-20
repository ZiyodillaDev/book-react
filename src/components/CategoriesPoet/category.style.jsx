import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CardBgRight from "../../assets/images/cardRight.png";
import CardBgBottom from "../../assets/images/cardBottomLeft.png";
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
  width: 295px;
  height: 365px;
  background-color: var(--book-bg);
  border-radius: 22px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 25px;
  overflow: hidden;
  text-decoration: none;
`;
export const CategoryCardTop = styled.div`
  width: 295px;
  height: 224px;
  border-radius: 22px 22px 0px 0px;
`;
export const CategoryCardBody = styled.div`
  background-image: url(${CardBgRight}), url(${CardBgBottom});
  background-position: right, left bottom;
  background-repeat: no-repeat;

`;
export const CategoryCardTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var( --book-title-text-color);
  margin-top: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-left: 16px;
  max-width:290px;
`;
export const CategoryCardPr = styled.p`
  margin-top: 6px;
  padding-bottom: 65px;
  margin-left: 16px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: var(--header-link-text-color);
flex: none;
order: 0;
flex-grow: 0;
`;
export const CategoryCardTopImg = styled.img`
width: 100%;
height: 100%;
border-radius: 22px 22px 0px 0px;
`;
export const CategoryOutlet = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content:flex-start;
gap: 20px;
`;


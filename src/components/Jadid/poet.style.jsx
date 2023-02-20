import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CardBgRight from "../../assets/images/cardRight.png";
import CardBgBottom from "../../assets/images/cardBottomLeft.png";
export const CategoryCardsBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`;

export const CategoryCard = styled(NavLink)`
  width: 295px;
  height: 365px;
  background: #f5f5f5;
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
  color: #000000;
  margin-top: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-left: 16px;
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
color: rgba(0, 0, 0, 0.6);
flex: none;
order: 0;
flex-grow: 0;
`;
export const CategoryCardTopImg = styled.img`
width: 100%;
height: 100%;
`;
export const CategoryBox6 = styled.div``;
export const CategoryBox7 = styled.div``;
export const CategoryBox8 = styled.div``;

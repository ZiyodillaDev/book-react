import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PoetBg from '../../assets/images/aboutPoet.png'
export const AboutBox = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
gap: 64px;
margin-bottom: 100px;

`;
export const AboutHeroLeftImg = styled.img`
width: 100%;
height: 100%;
border-radius: 20px !important;

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
`;
export const CategoryCardBody = styled.div``;

export const AboutHeroLeft = styled.div`
width: 505px;
height: 681px;
background: url( ${PoetBg});
background-size: 505px  681px;
border-radius: 20px;

`;
export const AboutHeroRight = styled.div`


`;
export const CategoryCardTitle = styled.h3`
  height: 27px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: var(--book-title-text-color);
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 12px;
  margin-bottom: 6px;
`;
export const CategoryCardTop = styled.div`
  width: 190px;
  height: 283px;

  border-radius: 15px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const CategoryCardTopImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
export const CategoryCardsBox = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  gap: 20px;
  width: 100%;
  padding-bottom: 30px;
  overflow-x: scroll;
  ::-webkit-scrollbar{
    height: 20px;
    width: 10px;
    background: gray;
}`
export const AboutHeroRightTitle = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 72px;
text-align: left;
color: #D1B89D;
flex: none;
order: 0;
flex-grow: 0;

`;

export const SimpleAsarlar = styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 31px;
line-height: 46px;
color: #D1B89D;
flex: none;
order: 0;
flex-grow: 0;
`;

export const SimpleCarouselAll = styled(NavLink)`
  font-family: 'Poppins';
  text-decoration: none;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: var(--main-text-color);
flex: none;
order: 1;
flex-grow: 0;
`;
export const SipleTitle = styled.div`
  padding-bottom: 20px;

`;

export const SipleTitleAll = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const CategoryCardPr = styled.p`
  height: 24px;

  font-family: "Poppins";
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
export const AboutHeroRightPr = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: var(--main-text-color);
flex: none;
order: 1;
flex-grow: 0;
max-width: 670px;

`;
export const AboutHeroRightData = styled.div`
width: 304px;
margin-top: 44px;

`;
export const AboutHeroRightDataFlex = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
export const AboutHeroRightDataSpan = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
color: var(--header-link-text-color);
flex: none;
order: 0;
flex-grow: 0;

`;
export const PoetBirthdayYear = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 39px;
line-height: 144.4%;
color: #D1B89D;

flex: none;
order: 1;
flex-grow: 0;

`;



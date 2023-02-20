import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PoetBg from '../../assets/images/QorqmaBook.png'
export const AboutBox = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
gap: 64px;
margin-bottom: 100px;

`;
export const AboutHeroLeftImg = styled.img`
width: 100% ;
height:100% ;
border-radius: 20px;

`;
export const AboutHeroLeft = styled.div`
width: 505px;
height: 681px;
background: url( ${PoetBg});
background-size: 505px  681px;
border-radius: 20px;

`;
export const AboutHeroRight = styled.div`


`;
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
export const AboutHeroRightPr = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: var( --main-text-color);
order: 1;
flex-grow: 0;
width: 100%;
margin-top: 30px;

`;
export const AboutHeroRightData = styled.div`
margin-top: 44px;

`;
export const AboutHeroRightDataFlex = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 14px;
`;
export const AboutHeroRightDataSpan = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: var(--header-link-text-color);
flex: none;
order: 0;
flex-grow: 0;

`;
export const AboutHeroRightDataSpanApi = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: var( --main-text-color);
flex: none;
order: 1;
flex-grow: 0;
`;


export const Line = styled.div`
width: 510.64px;
height: 0px;

border: 1px solid rgba(209, 184, 157, 0.6);
transform: rotate(-0.11deg);

flex: none;
order: 1;
flex-grow: 0;
margin-left: 20px;
`;
export const AboutBox4 = styled.div`


`;
export const WullDataSpan = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #D1B89D;

flex: none;
order: 0;
flex-grow: 0;
margin-right: 20px ;


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
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

::-webkit-scrollbar-thumb:horizontal{
    border-radius: 10px;
}

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
export const CategoryCardTop = styled.div`
  width: 190px;
  height: 283px;

  border-radius: 15px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const CategoryCardBody = styled.div``;
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
export const CategoryCardPr = styled.p`
color: var(--header-link-text-color);
`

export const CategoryCardTopImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius:15px ;
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
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: var(--main-text-color);
text-decoration: none;
flex: none;
order: 1;
flex-grow: 0;
`;

export const SipleTitleAll = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
export const SipleTitle = styled.div`
  padding-bottom: 20px;

`;
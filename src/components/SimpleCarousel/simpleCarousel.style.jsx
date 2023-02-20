import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const CategoryNavLink = styled(NavLink)`
  width: 146px;
  height: 27px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: rgba(13, 13, 13, 0.6);
  flex: none;
  order: 0;
  flex-grow: 0;
  text-decoration: none;
  &.active {
    color: #c9ac8c;
  }
  &:hover {
    color: #c9ac8c;
  }
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
export const CategoryCardTopImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const SipleTitleAll = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
export const SipleTitle = styled.div`
  padding-bottom: 20px;

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
color: var( --main-text-color);
flex: none;
order: 1;
flex-grow: 0;
text-decoration: none;
`;

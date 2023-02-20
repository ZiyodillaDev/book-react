
import styled from "styled-components";
import bgLine from '../../assets/images/AlisherNavoiy.png'
export const SimpleDiv = styled.div``;

export const CarouselBox =styled.div`
/* width: auto; */
max-width: 1261.9px;
height: 346.97px;
background-image: url(${bgLine});
background-position: right;
background-repeat: no-repeat;
position: relative;
`
export const CarouselBoxHd =styled.div`
/* width: auto; */
/* font-family:'Roboto' ; */

`

export const CarouselBoxLineGradienit =styled.div`
/* width: auto; */
/* position: absolute; */
z-index: 10;
max-width: 1261.9px;
height: 346.97px;
top: 10px;
background-position: center;
background-repeat: no-repeat;
background: linear-gradient(89.16deg, #263A3D 70.78%, rgba(25, 25, 25, 0) 105.05%);
border-radius: 21px;
`
export const SearchBox =styled.div`
width: 1030px;
height: 163px;
margin: 0 auto;
background: #FFFFFF;
box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
border-radius: 15px;
position: absolute;
right: 0;
left: 0;
bottom: -80px;
`

export const SearchInput =styled.input`
width: 710px;
height: 48px;
background: #F5F5F5;
border-radius: 15px;
border: 1px solid #F5F5F5;
padding-left: 10px;
outline: none;
margin-right: 10px;

`
export const SearchInputBtn =styled.button`
padding: 12px 37px;
width: 160px;
height: 48px;
background: #C9AC8C;
border-radius: 15px;
border: 1px solid #C9AC8C;
flex: none;
order: 1;
flex-grow: 0;
`

export const SearchHd =styled.h3`
padding-top: 20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 48px;
color: #D1B89D;
flex: none;
order: 0;
flex-grow: 0
`
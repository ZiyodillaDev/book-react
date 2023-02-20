import React from "react";
import "./carousel.css";
import {
  CategoryCard,
  CategoryCardBody,
  CategoryCardPr,
  CategoryCardsBox,
  CategoryCardTitle,
  CategoryCardTop,
  CategoryCardTopImg,
  SimpleAsarlar,
  SimpleCarouselAll,
  SipleTitle,
  SipleTitleAll,
} from "./simpleCarousel.style";
import CardImg from "../../assets/images/bookDunyoningIshlari.png";
import { useTranslation } from "react-i18next";

export const CarouselBooks = () => {
  const { t } = useTranslation();

  return (
    <>
      <SipleTitle>
        <SipleTitleAll>
          <SimpleAsarlar>{t("main.works")}</SimpleAsarlar>
          <SimpleCarouselAll to="/books"> {t("main.seeAll")}</SimpleCarouselAll>
        </SipleTitleAll>

        <CategoryCardsBox>
          <CategoryCard to="/books">
            <CategoryCardTop>
              <CategoryCardTopImg src={CardImg} alt="catd-img" />
            </CategoryCardTop>
            <CategoryCardBody>
              <CategoryCardTitle>Abdulla Avloniy</CategoryCardTitle>
              <CategoryCardPr>1878-1934</CategoryCardPr>
            </CategoryCardBody>
          </CategoryCard>
          <CategoryCard to="/books">
            <CategoryCardTop>
              <CategoryCardTopImg src={CardImg} alt="catd-img" />
            </CategoryCardTop>
            <CategoryCardBody>
              <CategoryCardTitle>Abdulla Avloniy</CategoryCardTitle>
              <CategoryCardPr>1878-1934</CategoryCardPr>
            </CategoryCardBody>
          </CategoryCard>
          <CategoryCard to="/books">
            <CategoryCardTop>
              <CategoryCardTopImg src={CardImg} alt="catd-img" />
            </CategoryCardTop>
            <CategoryCardBody>
              <CategoryCardTitle>Abdulla Avloniy</CategoryCardTitle>
              <CategoryCardPr>1878-1934</CategoryCardPr>
            </CategoryCardBody>
          </CategoryCard>

          <CategoryCard to="/books">
            <CategoryCardTop>
              <CategoryCardTopImg src={CardImg} alt="catd-img" />
            </CategoryCardTop>
            <CategoryCardBody>
              <CategoryCardTitle>Abdulla Avloniy</CategoryCardTitle>
              <CategoryCardPr>1878-1934</CategoryCardPr>
            </CategoryCardBody>
          </CategoryCard>
          <CategoryCard to="/books">
            <CategoryCardTop>
              <CategoryCardTopImg src={CardImg} alt="catd-img" />
            </CategoryCardTop>
            <CategoryCardBody>
              <CategoryCardTitle>Abdulla Avloniy</CategoryCardTitle>
              <CategoryCardPr>1878-1934</CategoryCardPr>
            </CategoryCardBody>
          </CategoryCard>
          <CategoryCard to="/books">
            <CategoryCardTop>
              <CategoryCardTopImg src={CardImg} alt="catd-img" />
            </CategoryCardTop>
            <CategoryCardBody>
              <CategoryCardTitle>Abdulla Avloniy</CategoryCardTitle>
              <CategoryCardPr>1878-1934</CategoryCardPr>
            </CategoryCardBody>
          </CategoryCard>
          <CategoryCard to="/books">
            <CategoryCardTop>
              <CategoryCardTopImg src={CardImg} alt="catd-img" />
            </CategoryCardTop>
            <CategoryCardBody>
              <CategoryCardTitle>Abdulla Avloniy</CategoryCardTitle>
              <CategoryCardPr>1878-1934</CategoryCardPr>
            </CategoryCardBody>
          </CategoryCard>
          <CategoryCard to="/books">
            <CategoryCardTop>
              <CategoryCardTopImg src={CardImg} alt="catd-img" />
            </CategoryCardTop>
            <CategoryCardBody>
              <CategoryCardTitle>Abdulla Avloniy</CategoryCardTitle>
              <CategoryCardPr>1878-1934</CategoryCardPr>
            </CategoryCardBody>
          </CategoryCard>
          <CategoryCard to="/books">
            <CategoryCardTop>
              <CategoryCardTopImg src={CardImg} alt="catd-img" />
            </CategoryCardTop>
            <CategoryCardBody>
              <CategoryCardTitle>Abdulla Avloniy</CategoryCardTitle>
              <CategoryCardPr>1878-1934</CategoryCardPr>
            </CategoryCardBody>
          </CategoryCard>
          <CategoryCard to="/books">
            <CategoryCardTop>
              <CategoryCardTopImg src={CardImg} alt="catd-img" />
            </CategoryCardTop>
            <CategoryCardBody>
              <CategoryCardTitle>Abdulla Avloniy</CategoryCardTitle>
              <CategoryCardPr>1878-1934</CategoryCardPr>
            </CategoryCardBody>
          </CategoryCard>
        </CategoryCardsBox>
      </SipleTitle>
    </>
  );
};

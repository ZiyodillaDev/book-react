import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { CarouselBooks } from "../../components/SimpleCarousel/SimpleCarousel";

import {
  AboutBox,
  AboutHeroLeft,
  AboutHeroLeftImg,
  AboutHeroRight,
  AboutHeroRightData,
  AboutHeroRightDataFlex,
  AboutHeroRightDataSpan,
  AboutHeroRightPr,
  AboutHeroRightTitle,
  CategoryCard,
  CategoryCardBody,
  CategoryCardPr,
  CategoryCardsBox,
  CategoryCardTitle,
  CategoryCardTop,
  CategoryCardTopImg,
  PoetBirthdayYear,
  SimpleAsarlar,
  SimpleCarouselAll,
  SipleTitle,
  SipleTitleAll,
} from "./about.style";
import CardImg from "../../assets/images/bookDunyoningIshlari.png";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const [PoetData, setPoetData] = useState({});
  const GetPoet = async () => {
    const data = await axios.get(
      "http://localhost:5000/author/authorId/" + id,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (data.status === 201) {
      localStorage.setItem("about", JSON.stringify(data.data));
      setPoetData(data.data);
    }
  };
  const [Book, setBook] = useState({});

  const GetBook = async () => {
    const data = await axios.get("http://localhost:5000/author/books/" + id, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    if (data.status === 201) {
      console.log(data);
      setBook(data.data);
    }
  };

  console.log(Book);
  useEffect(() => {
    GetPoet();
    GetBook();
  }, [id]);
  return (
    <>
      <Header />
      <AboutBox>
        <AboutHeroLeft>
          <AboutHeroLeftImg src={"http://localhost:5000/" + PoetData.image} />
        </AboutHeroLeft>
        <AboutHeroRight>
          <AboutHeroRightTitle>
            {" "}
            {PoetData?.first_name + " " + PoetData?.last_name}{" "}
          </AboutHeroRightTitle>
          <AboutHeroRightPr>{PoetData?.bio}</AboutHeroRightPr>
          <AboutHeroRightData>
            <AboutHeroRightDataFlex>
              <AboutHeroRightDataSpan>{t("main.birthday")}</AboutHeroRightDataSpan>
              <AboutHeroRightDataSpan>{t("main.death")}</AboutHeroRightDataSpan>
            </AboutHeroRightDataFlex>
            <AboutHeroRightDataFlex>
              <PoetBirthdayYear>{PoetData?.date_of_birth}</PoetBirthdayYear>
              <PoetBirthdayYear>-</PoetBirthdayYear>
              <PoetBirthdayYear>{PoetData?.date_of_death}</PoetBirthdayYear>
            </AboutHeroRightDataFlex>
            <AboutHeroRightDataFlex>
              <AboutHeroRightDataSpan>
                {PoetData?.country}
              </AboutHeroRightDataSpan>
              <AboutHeroRightDataSpan>
                {PoetData?.country}
              </AboutHeroRightDataSpan>
            </AboutHeroRightDataFlex>
          </AboutHeroRightData>
        </AboutHeroRight>
      </AboutBox>

      <>
        <SipleTitle>
          <SipleTitleAll>
            <SimpleAsarlar>{t("main.works")}</SimpleAsarlar>
            <SimpleCarouselAll to="/books">
            {t("main.seeAll")}
            </SimpleCarouselAll>
          </SipleTitleAll>
          {Book.length ? (
            <CategoryCardsBox>
              {Book.map((book) => (
                <>
                  {" "}
                  <CategoryCard
                    to={"/bookabout" + book.genre_id + "_" + book.title}
                  >
                    <CategoryCardTop>
                      <CategoryCardTopImg
                        src={"http://localhost:5000/" + book.image}
                        alt="card-img"
                      />
                    </CategoryCardTop>
                    <CategoryCardBody>
                      <CategoryCardTitle>{book.title} </CategoryCardTitle>
                      <CategoryCardPr>{book.year}</CategoryCardPr>
                    </CategoryCardBody>
                  </CategoryCard>
                </>
              ))}
            </CategoryCardsBox>
          ) : (
            ""
          )}
        </SipleTitle>
      </>
    </>
  );
};

export default About;

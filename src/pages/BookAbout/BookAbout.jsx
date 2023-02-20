import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
  AboutHeroRightDataSpanApi,
  AboutHeroRightPr,
  AboutHeroRightTitle,
  Line,
  WullDataSpan,
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
} from "./bookAbout.style";
const BookAbout = () => {
  const { t } = useTranslation();

  const [Book, setBook] = useState([]);
  const [Books, setBooks] = useState([]);
  const { id } = useParams();
  console.log(id.at(2));
  const GetBook = async () => {
    const data = await axios.get(
      "http://localhost:5000/book/search?book=" + id.slice(2),
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (data.status === 201) {
      console.log(data);
      setBook(data.data);
    }
  };
  const GetBooks = async () => {
    const data = await axios.get(
      "http://localhost:5000/book/genreId/" + id.at(0),
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (data.status === 201) {
      setBooks(data.data);
    }
  };

  useEffect(() => {
    GetBook();
    GetBooks();
  }, [id]);
  return (
    <>
      <Header />
      <AboutBox>
        {Book?.map((book) => (
          <>
            <AboutHeroLeft>
              <AboutHeroLeftImg
                src={"http://localhost:5000/" + book.image}
                alt="imgbook"
              />
            </AboutHeroLeft>
            <AboutHeroRight>
              <AboutHeroRightData>
                <AboutHeroRightTitle> {book.title} </AboutHeroRightTitle>
                <AboutHeroRightDataFlex>
                  <AboutHeroRightDataSpan>
                    {t("main.numberPage")}
                  </AboutHeroRightDataSpan>
                  <AboutHeroRightDataSpanApi>
                    {" "}
                    {book.page} page
                  </AboutHeroRightDataSpanApi>
                </AboutHeroRightDataFlex>
                <AboutHeroRightDataFlex>
                  <AboutHeroRightDataSpan>
                    {" "}
                    {t("main.publish")}
                  </AboutHeroRightDataSpan>
                  <AboutHeroRightDataSpanApi>
                    {book.year} years
                  </AboutHeroRightDataSpanApi>
                </AboutHeroRightDataFlex>
                <AboutHeroRightDataFlex>
                  <AboutHeroRightDataSpan>
                    {" "}
                    {t("main.priceBook")}
                  </AboutHeroRightDataSpan>
                  <AboutHeroRightDataSpanApi>
                    ${book.price}{" "}
                  </AboutHeroRightDataSpanApi>
                </AboutHeroRightDataFlex>
                <AboutHeroRightDataFlex>
                  <WullDataSpan>{t("main.AllInfo")}</WullDataSpan>
                  <AboutHeroRightDataSpanApi>
                    {" "}
                    &darr;{" "}
                  </AboutHeroRightDataSpanApi>
                  <Line></Line>
                </AboutHeroRightDataFlex>
              </AboutHeroRightData>

              <AboutHeroRightPr>{book.description}</AboutHeroRightPr>
            </AboutHeroRight>
          </>
        ))}
      </AboutBox>

      <>
        <SipleTitle>
          <SipleTitleAll>
            <SimpleAsarlar>{t("main.works")}</SimpleAsarlar>
            <SimpleCarouselAll to="/books">
            {t("main.seeAll")}
            </SimpleCarouselAll>
          </SipleTitleAll>
          {Books.length ? (
            <CategoryCardsBox>
              {Books.map((book) => (
                <>
                  <CategoryCard
                    to={"/bookabout" + book.genre_id + "_" + book.title}
                  >
                    <CategoryCardTop>
                      <CategoryCardTopImg
                        src={"http://localhost:5000/" + book.image}
                        alt="catd-img"
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

export default BookAbout;

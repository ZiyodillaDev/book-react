import {
  CategoryBox,
  CategoryCard,
  CategoryCardBody,
  CategoryCardPr,
  CategoryCardsBox,
  CategoryCardTitle,
  CategoryCardTop,
  CategoryCardTopImg,
  CategoryFilter,
  CategoryNavLink,
  CategoryOutlet,
  CategoryTitle,
} from "./category.style";
import CardImg from "../../assets/images/bookDunyoningIshlari.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import {
  SearchBox,
  SearchData,
  SearchForm,
  SearchHd,
  SearchIcon,
  SearchInput,
  SearchInputBtn,
} from "../Search/search.style";

import searchIcon from "../../assets/images/searchIcon.png";
import { useTranslation } from "react-i18next";
export const CategoryBooks = () => {
  const { t } = useTranslation();

  const searchRef = useRef();
  const outletRef = useRef();
  const SearchBoxRef = useRef();
  const linksRef = useRef();
  const [PoetData, setPoetData] = useState([]);
  const [Book, setBook] = useState({});
  const [genre, setGenre] = useState();
  let id = 1;
  const GetBook = async () => {
    const data = await axios.get("http://localhost:5000/book/genreId/" + id, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    if (data.status === 201) {
      setBook(data.data);
    }
  };

  useEffect(() => {
    GetBook();
  }, [id]);
  // Search

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchRef.current.value = "";
  };
  const handleChange = () => {
    const id = searchRef.current.value;

    if (id !== "") {
      linksRef?.current?.children[0]?.classList?.remove("active");
      linksRef?.current?.children[1]?.classList?.remove("active");
      linksRef?.current?.children[2]?.classList?.remove("active");
      linksRef?.current?.children[3]?.classList?.remove("active");
      outletRef.current.classList.add("d-none");
      SearchBoxRef.current.classList.remove("d-none");

      const searchAuthor = async () => {
        const data = await axios.get(
          "http://localhost:5000/book/search?book=" + id
        );
        if (data.status === 201) {
          setPoetData(data.data);
          console.log(data.data);
        }
        id == "";
      };
      searchAuthor();
    } else if (id === "") {
      outletRef.current.classList.add("d-flex");
    }
  };
  const handleClick = (evt) => {
    console.dir(evt.target.localName);
    if (evt.target.localName === "a") {
      console.log("ishla");
      searchRef.current.value = "";
      outletRef.current.classList.remove("d-none");
      outletRef.current.classList.add("d-flex");
      SearchBoxRef.current.classList.add("d-none");
      console.log(SearchBoxRef.current);
    }
  };
  useEffect(() => {
    handleChange();
  }, []);
  return (
    <>
      <SearchBox className="">
        <SearchHd>{t("main.search")}</SearchHd>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            onChange={handleChange}
            ref={searchRef}
            type="search"
            placeholder={t("main.serachPlaceholder")}
          />
          <SearchInputBtn type="submit">
            <SearchIcon src={searchIcon} alt="serchicon" /> {t("main.search")}
          </SearchInputBtn>
        </SearchForm>
      </SearchBox>
      <CategoryBox>
        <CategoryTitle>{t("main.mainCategory")}</CategoryTitle>
        <CategoryFilter ref={linksRef} onClick={handleClick}>
          <CategoryNavLink to="temuriy">{t("main.timurid")} </CategoryNavLink>
          <CategoryNavLink to="jadid">{t("main.jadid")} </CategoryNavLink>
          <CategoryNavLink to="sovet">{t("main.sovet")} </CategoryNavLink>
          <CategoryNavLink to="mustaqillik">
            {t("main.independence")}{" "}
          </CategoryNavLink>
        </CategoryFilter>
        <CategoryCardsBox>
          <CategoryOutlet ref={outletRef} className="interes">
            <Outlet />
          </CategoryOutlet>
          <CategoryOutlet ref={SearchBoxRef}>
            <SearchData className="container d-flex align-items-center justify-content-between ">
              {PoetData.length ? (
                <CategoryCardsBox>
                  {PoetData.map((book) => (
                    <>
                      {" "}
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
                          <CategoryCardPr>{book.year} </CategoryCardPr>
                        </CategoryCardBody>
                      </CategoryCard>
                    </>
                  ))}
                </CategoryCardsBox>
              ) : (
                ""
              )}
            </SearchData>
          </CategoryOutlet>
        </CategoryCardsBox>
      </CategoryBox>
    </>
  );
};

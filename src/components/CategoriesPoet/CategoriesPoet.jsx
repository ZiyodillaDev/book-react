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
  CategoryTitle,
  CategoryOutlet,
} from "./category.style";

import CardImg from "../../assets/images/avloniy.png";
import { Poet } from "../Poet/Poet";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

//search
import {
  SearchAll,
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

export const CategoriesPoet = () => {
  const { t } = useTranslation();

  const [val, setVal] = useState(1);
  const searchData = JSON.parse(localStorage.getItem("search"));

  const GetPoet = async (id) => {
    const data = await axios.get("http://localhost:5000/author/genreId/" + id);

    if (data.status === 201) {
      localStorage.setItem("poet", JSON.stringify(data.data));
    }
  };
  useEffect(() => {
    console.dir(val);
    GetPoet(val);
  }, [val]);
  const searchRef = useRef();
  const outletRef = useRef();
  const SearchBoxRef = useRef();
  const linksRef = useRef();
  const [PoetData, setPoetData] = useState([]);

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
          "http://localhost:5000/author/search?author=" + id
        );
        if (data.status === 201) {
          setPoetData(data.data);
        }
        id == "";
      };
      searchAuthor();
    } else if (id === "") {
      outletRef.current.classList.add("d-flex");
    }
  };
  const handleClick = (evt) => {
    if (evt.target.localName === "a") {
      searchRef.current.value = "";
      outletRef.current.classList.remove("d-none");
      outletRef.current.classList.add("d-flex");
      SearchBoxRef.current.classList.add("d-none");
    }
  };
  useEffect(() => {
    handleChange();
  }, []);

  //

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
          <CategoryNavLink to="">{t("main.timurid")}</CategoryNavLink>
          <CategoryNavLink to="jadid">{t("main.jadid")}</CategoryNavLink>
          <CategoryNavLink to="sovet">{t("main.sovet")} </CategoryNavLink>
          <CategoryNavLink to="mustaqillik">
            {t("main.independence")}
          </CategoryNavLink>
        </CategoryFilter>
        <CategoryCardsBox>
          <CategoryOutlet ref={outletRef}>
            <Outlet />
          </CategoryOutlet>
          <div ref={SearchBoxRef}>
            <SearchData className="container d-flex align-items-center justify-content-between ">
              {PoetData?.map((poet) => {
                return (
                  <SearchAll>
                    <CategoryCard to={`about${poet.id}`} key={poet.id}>
                      <CategoryCardTop>
                        <CategoryCardTopImg
                          src={"http://localhost:5000/" + poet.image}
                          alt="catd-img"
                        />
                      </CategoryCardTop>
                      <CategoryCardBody>
                        <CategoryCardTitle>
                          {poet.first_name + " " + poet.last_name}
                        </CategoryCardTitle>
                        <CategoryCardPr>
                          {poet.date_of_birth + "-" + poet.date_of_death}
                        </CategoryCardPr>
                      </CategoryCardBody>
                    </CategoryCard>
                  </SearchAll>
                );
              })}
            </SearchData>
          </div>
        </CategoryCardsBox>
      </CategoryBox>
    </>
  );
};

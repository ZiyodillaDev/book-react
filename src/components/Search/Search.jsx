import { useEffect, useRef, useState } from "react";
import {
  SearchAll,
  SearchBox,
  SearchData,
  SearchForm,
  SearchHd,
  SearchIcon,
  SearchInput,
  SearchInputBtn,
} from "./search.style";
import {
  CategoryCard,
  CategoryCardBody,
  CategoryCardPr,
  CategoryCardsBox,
  CategoryCardTitle,
  CategoryCardTop,
  CategoryCardTopImg,
} from "../Poet/poet.style";
import searchIcon from "../../assets/images/searchIcon.png";
import axios from "axios";
export const Search = () => {
  const searchRef = useRef();
  const [PoetData, setPoetData] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(searchRef.current.value);
  };
  const handleChange = () => {
    const id = searchRef.current.value;
    const searchAuthor = async () => {
      const data = await axios.get(
        "http://localhost:5000/author/search?author=" + id
      );
      if (data.status === 201) {
        setPoetData(data.data);
        localStorage.setItem("search", JSON.stringify(data.data));
        console.log(data.data);
      }
    };
    searchAuthor();
  };
  useEffect(() => {
    handleChange();
  }, []);

  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <SearchBox className="">
        <SearchHd>Qidirish</SearchHd>
        <button onClick={() => setEditModal(true)}>Edit Modal</button>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            onChange={handleChange}
            ref={searchRef}
            type="search"
            placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
          />
          <SearchInputBtn type="submit">
            <SearchIcon src={searchIcon} alt="serchicon" /> Search
          </SearchInputBtn>
        </SearchForm>
      </SearchBox>

      <EditModal
        modal={editModal}
        setModal={setEditModal}
        title="Add new product item to list"
      ></EditModal>
    </>
  );
};

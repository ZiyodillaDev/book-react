import arrowDown from "../../assets/images/arrow-down.svg";
import add from "../../assets/images/add.png";
import {
  AddBookImgDiv,
  AddBookImgInput,
  AddBookInfo,
  AddBookSection,
  AddBookImgLabel,
  AddBookImgPlus,
  AddBookInfoTitle,
  AddBookForm,
  AddBookInputDiv,
  AddBookInput,
  AddBookLabel,
  AddBookSelect,
  AddBookOptionSelectedArrowDown,
  AddBookSelectOption,
  AddBookTextarea,
  AddBookSubmitBtn,
  AddBookImgAdded,
} from "./addBook.style";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  AddAuthorImgAdded,
  AddAuthorSelectOption,
} from "../AddAuthor/addAuthor.style";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { lang } from "../../lang/lang";

export const AddBook = () => {
  const { t } = useTranslation();

  const localData = localStorage.getItem("token");
  const [img, setImg] = useState("");
  const [author, setAuthor] = useState([]);
  const opArrowDown = useRef();
  const imgAdded = useRef();
  const titleRef = useRef();
  const pageRef = useRef();
  const yearRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const genreIdRef = useRef();
  const authorIdRef = useRef();
  const image = useRef();
  const handleOption = (evt) => {
    if (evt.target != evt.current) {
      opArrowDown.current.classList.toggle("active");
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("image", image.current?.files[0]);
    formData.append("title", titleRef.current?.value);
    formData.append("page", pageRef.current?.value);
    formData.append("year", yearRef.current?.value);
    formData.append("price", priceRef.current?.value);
    formData.append("genre_id", genreIdRef.current?.value);
    formData.append("author_id", authorIdRef.current?.value);
    formData.append("description", descRef.current?.value);
    console.log(formData);

    fetch("http://localhost:5000/book", {
      method: "POST",
      headers: {
        Authorization: localData,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          imgAdded.current.classList.add("active");
          setImg(`http://localhost:5000/${data.image}`);
          toast.success("Book added");
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Book not added");
      });
  };

  const genresId = async (id) => {
    const data = await axios.get(`http://localhost:5000/author/genreId/${id}`);
    setAuthor(data.data);
  };

  const opArrowDown2 = useRef();

  const handleOption2 = (evt) => {
    if (evt.target != evt.current) {
      opArrowDown2.current.classList.toggle("active");
    }
  };
  const handleChange = (evt) => {
    evt.preventDefault();
    const id = evt.target.value;
    genresId(id);
  };
  return (
    <AddBookSection>
      <AddBookImgDiv>
        <AddBookImgLabel htmlFor="img">
          <AddBookImgPlus src={add} />
          {t("main.click")} 
          <AddBookImgInput type="file" id="img" name="img" ref={image} />
          <AddBookImgAdded ref={imgAdded} src={img} alt="image" />
        </AddBookImgLabel>
      </AddBookImgDiv>
      <AddBookInfo>
        <AddBookInfoTitle>{t("header.addBook")}</AddBookInfoTitle>
        <AddBookForm onSubmit={handleSubmit}>
          <AddBookInputDiv>
            <AddBookInput ref={titleRef} type="text" placeholder=" " />
            <AddBookLabel htmlFor="">{t("main.title")}</AddBookLabel>
          </AddBookInputDiv>
          <AddBookInputDiv>
            <AddBookInput ref={pageRef} type="number" placeholder=" " />
            <AddBookLabel htmlFor="">{t("main.pages")}</AddBookLabel>
          </AddBookInputDiv>
          <AddBookInputDiv>
            <AddBookInput ref={yearRef} type="number" placeholder=" " />
            <AddBookLabel htmlFor="">{t("main.year")}</AddBookLabel>
          </AddBookInputDiv>
          <AddBookInputDiv>
            <AddBookInput ref={priceRef} type="number" placeholder=" " />
            <AddBookLabel htmlFor="">{t("main.price")}</AddBookLabel>
          </AddBookInputDiv>
          <AddBookInputDiv>
            <AddBookSelect
              onChange={handleChange}
              ref={genreIdRef}
              onClick={(evt) => handleOption(evt)}
              id="select"
            >
              <AddBookSelectOption hidden>{t("main.genre")}</AddBookSelectOption>
              <AddAuthorSelectOption value={1}>
                Temuriylar davri
              </AddAuthorSelectOption>
              <AddAuthorSelectOption value={2}>
                Jadid adabiyoti
              </AddAuthorSelectOption>
              <AddAuthorSelectOption value={3}>
                Sovet davri
              </AddAuthorSelectOption>
              <AddAuthorSelectOption value={4}>
                Mustaqillik davri
              </AddAuthorSelectOption>
            </AddBookSelect>
            <AddBookOptionSelectedArrowDown ref={opArrowDown} src={arrowDown} />
          </AddBookInputDiv>
          <AddBookInputDiv>
            <AddBookSelect
              ref={authorIdRef}
              onClick={(evt) => handleOption2(evt)}
              id="select"
            >
              <AddBookSelectOption hidden>{t("main.author")}</AddBookSelectOption>
              {author.map((el) => {
                return (
                  <AddAuthorSelectOption key={el.id} value={el.id}>
                    {el.first_name + " " + el.last_name}
                  </AddAuthorSelectOption>
                );
              })}
            </AddBookSelect>
            <AddBookOptionSelectedArrowDown
              ref={opArrowDown2}
              src={arrowDown}
            />
          </AddBookInputDiv>
          <AddBookInputDiv>
            <AddBookTextarea ref={descRef} placeholder=" " />
            <AddBookLabel htmlFor="">Bio</AddBookLabel>
          </AddBookInputDiv>
          <AddBookSubmitBtn>{t("main.create")}</AddBookSubmitBtn>
        </AddBookForm>
      </AddBookInfo>
    </AddBookSection>
  );
};

import arrowDown from "../../assets/images/arrow-down.svg";
import add from "../../assets/images/add.png";

import {
  AddAuthorImgDiv,
  AddAuthorImgInput,
  AddAuthorInfo,
  AddAuthorSection,
  AddAuthorImgLabel,
  AddAuthorImgPlus,
  AddAuthorInfoTitle,
  AddAuthorForm,
  AddAuthorInputDiv,
  AddAuthorInput,
  AddAuthorLabel,
  AddAuthorSelect,
  AddAuthorOptionSelectedArrowDown,
  AddAuthorSelectOption,
  AddAuthorTextarea,
  AddAuthorSubmitBtn,
  AddAuthorImgAdded,
} from "./addAuthor.style";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { lang } from "../../lang/lang";

export const AddAuthor = () => {
  const { t } = useTranslation();

  const opArrowDown = useRef();
  const imgAdded = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const dateBirth = useRef();
  const dateDeath = useRef();
  const country = useRef();
  const genre = useRef();
  const bio = useRef();
  const image = useRef();
  const handleOption = (evt) => {
    if (evt.target != evt.current) {
      opArrowDown.current.classList.toggle("active");
    }
  };
  const localData = localStorage.getItem("token");
  const [img, setImg] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("image", image.current?.files[0]);
    formData.append("first_name", firstName.current?.value);
    formData.append("last_name", lastName.current?.value);
    formData.append("date_of_birth", dateBirth.current?.value);
    formData.append("date_of_death", dateDeath.current?.value);
    formData.append("country", country.current?.value);
    formData.append("genre_id", genre.current?.value);
    formData.append("bio", bio.current?.value);
    console.log(formData);

    fetch("http://localhost:5000/author", {
      method: "POST",
      headers: {
        Authorization: localData,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data) {
          imgAdded.current.classList.add("active");
          setImg(`http://localhost:5000/${data.image}`);
          toast.success("Author added");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Author not added");
      });
    setTimeout(() => {
      genres();
    }, 1000);
  };
  const genres = async () => {
    const data = await axios.get("http://localhost:5000/genre");
  };
  genres();
  useEffect(() => {
    genres();
  }, []);

  return (
    <AddAuthorSection>
      <AddAuthorImgDiv>
        <AddAuthorImgLabel htmlFor="img">
          <AddAuthorImgPlus src={add} />
          {lang.uz.main.a}
          {t("main.click")}
          <AddAuthorImgInput type="file" id="img" name="img" ref={image} />
          <AddAuthorImgAdded ref={imgAdded} src={img} alt="image" />
        </AddAuthorImgLabel>
      </AddAuthorImgDiv>
      <AddAuthorInfo>
       
        <AddAuthorInfoTitle> {t("header.addAuthor")}</AddAuthorInfoTitle>
        <AddAuthorForm onSubmit={handleSubmit}>
          <AddAuthorInputDiv>
            <AddAuthorInput
              type="text"
              placeholder=" "
              id="first_name"
              name="first_name"
              ref={firstName}
            />
            <AddAuthorLabel htmlFor=""> {t("main.firstName")}</AddAuthorLabel>
          </AddAuthorInputDiv>
          <AddAuthorInputDiv>
            <AddAuthorInput
              type="text"
              placeholder=" "
              id="last_name"
              name="last_name"
              ref={lastName}
            />
            <AddAuthorLabel htmlFor="">{t("main.lastName")}</AddAuthorLabel>
          </AddAuthorInputDiv>
          <AddAuthorInputDiv>
            <AddAuthorInput
              type="number"
              placeholder=" "
              id="date_of_birth"
              name="date_of_birth"
              ref={dateBirth}
            />
            <AddAuthorLabel htmlFor=""> {t("main.birthday")}</AddAuthorLabel>
          </AddAuthorInputDiv>
          <AddAuthorInputDiv>
            <AddAuthorInput
              type="number"
              placeholder=" "
              id="date_of_death"
              name="date_of_death"
              ref={dateDeath}
            />
            <AddAuthorLabel htmlFor="">{t("main.death")}</AddAuthorLabel>
          </AddAuthorInputDiv>
          <AddAuthorInputDiv>
            <AddAuthorInput
              type="text"
              placeholder=" "
              id="country"
              name="country"
              ref={country}
            />
            <AddAuthorLabel htmlFor=""> {t("main.country")}</AddAuthorLabel>
          </AddAuthorInputDiv>
          <AddAuthorInputDiv>
            <AddAuthorSelect
              onClick={(evt) => handleOption(evt)}
              id="genre_id"
              name="genre_id"
              ref={genre}
            >
              <AddAuthorSelectOption hidden>
                {t("main.genre")}
              </AddAuthorSelectOption>
              <AddAuthorSelectOption value={1}>
                1.Temuriylar davri
              </AddAuthorSelectOption>
              <AddAuthorSelectOption value={2}>
                2.Jadid adabiyoti
              </AddAuthorSelectOption>
              <AddAuthorSelectOption value={3}>
                3.Sovet davri
              </AddAuthorSelectOption>
              <AddAuthorSelectOption value={4}>
                4.Mustaqillik davri
              </AddAuthorSelectOption>
            </AddAuthorSelect>
            <AddAuthorOptionSelectedArrowDown
              ref={opArrowDown}
              src={arrowDown}
            />
          </AddAuthorInputDiv>
          <AddAuthorInputDiv>
            <AddAuthorTextarea placeholder=" " id="bio" name="bio" ref={bio} />
            <AddAuthorLabel htmlFor="">Bio</AddAuthorLabel>
          </AddAuthorInputDiv>
          <AddAuthorSubmitBtn type="submit">
            {t("main.save")}
          </AddAuthorSubmitBtn>
        </AddAuthorForm>
      </AddAuthorInfo>
    </AddAuthorSection>
  );
};

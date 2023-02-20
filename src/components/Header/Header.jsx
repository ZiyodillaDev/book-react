import userImg from "../../assets/images/user.png";
import arrowDown from "../../assets/images/arrow.svg";
import "./header.css";
import { useRef, useState } from "react";
import {
  HeaderContainer,
  HeaderNav,
  HeaderNavLogo,
  HeaderNavLinks,
  HeaderNavLink,
  HeaderSelectbox,
  HeaderOptionSelected,
  HeaderOptionSelectedArrowDown,
  HeaderOptionsContainer,
  Option,
  OptionLabel,
  OptionRadio,
  HeaderBtn,
  ProfileImg,
} from "./header.style";
import { useTranslation } from "react-i18next";
import { lang } from "../../lang/lang";

export const Header = () => {
  const { t } = useTranslation();

  const opContainer = useRef();
  const opArrowDown = useRef();
  const handleOption = (evt) => {
    if (evt.target != opContainer.current) {
      opContainer.current.classList.toggle("active");
      opArrowDown.current.classList.toggle("active");
    }
  };
  const handleSelected = () => {
    if (opContainer.classList !== "active") {
      opContainer.current.classList.remove("active");
      opArrowDown.current.classList.remove("active");
    }
  };
  const [dataInfo, setDataInfo] = useState({});
  setTimeout(() => {
    let data = JSON.parse(localStorage.getItem("user"));
    // console.log(data);
    setDataInfo(data);
  }, 500);
  const handleSelecteds = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };
  return (
    <HeaderContainer>
      <HeaderNav>
        {lang.uz.header.add}
        <HeaderNavLogo onClick={handleSelected} to={"/"}>
          {t("header.logo")}
        </HeaderNavLogo>
        <HeaderNavLinks>
          <HeaderNavLink onClick={handleSelected} to={"/"}>
            {t("header.homePage")}
          </HeaderNavLink>
          <HeaderNavLink onClick={handleSelected} to={"/books"}>
            {t("header.books")}
          </HeaderNavLink>

          <HeaderSelectbox>
            <HeaderOptionsContainer ref={opContainer}>
              <Option onClick={handleSelected} to={"/profilePage"}>
                <OptionRadio type="radio" id="profile" name="profile" />
                <OptionLabel htmlFor="profile">
                  {" "}
                  {t("header.profil")}
                </OptionLabel>
              </Option>
              <Option onClick={handleSelected} to={"/addAuthor"}>
                <OptionRadio type="radio" id="addAuthor" name="addAuthor" />
                <OptionLabel htmlFor="addAuthor">
                  {t("header.addAuthor")}
                </OptionLabel>
              </Option>
              <Option onClick={handleSelected} to={"/addBook"}>
                <OptionRadio type="radio" id="addBook" name="addBook" />
                <OptionLabel htmlFor="addBook">
                  {t("header.addBook")}
                </OptionLabel>
              </Option>
              <Option onClick={handleSelecteds} to={"/"}>
                <OptionRadio type="radio" id="logout" name="logout" />
                <OptionLabel htmlFor="logout">{t("header.logOut")}</OptionLabel>
              </Option>
            </HeaderOptionsContainer>
            <HeaderOptionSelected onClick={(evt) => handleOption(evt)}>
              {/* <HeaderOptionSelectedImg src={userImg} /> */}
              <HeaderBtn>
                {dataInfo.image != null ? (
                  <ProfileImg
                    className="profileImg"
                    src={`http://localhost:5000/${dataInfo.image}`}
                    alt="image"
                  />
                ) : dataInfo.first_name != undefined ? (
                  dataInfo.first_name.at(0) + "." + dataInfo.last_name.at(0)
                ) : (
                  " " + " "
                )}
              </HeaderBtn>
              <HeaderOptionSelectedArrowDown
                src={arrowDown}
                ref={opArrowDown}
              />
            </HeaderOptionSelected>
          </HeaderSelectbox>
        </HeaderNavLinks>
      </HeaderNav>
    </HeaderContainer>
  );
};

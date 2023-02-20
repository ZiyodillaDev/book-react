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
  HeaderOptionSelectedImg,
  HeaderOptionSelectedArrowDown,
  HeaderOptionsContainer,
  Option,
  OptionLabel,
  OptionRadio,
  HeaderBtn,
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
  const [avatarName, setAvatarName] = useState({});
  setTimeout(() => {
    let data = JSON.parse(localStorage.getItem("user"));
    // console.log(data);
    setAvatarName(data);
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
                {avatarName.image != null ? (
                  <img
                    className="profileImg"
                    src={`http://localhost:5000/${avatarName.image}`}
                    alt="image"
                  />
                ) : avatarName.first_name != undefined ? (
                  avatarName.first_name.at(0) + "." + avatarName.last_name.at(0)
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

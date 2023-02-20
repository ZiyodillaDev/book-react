import {
  Dark,
  DarkTxt,
  FormSetting,
  Label,
  Option,
  Select,
  SettingAll,
  SettingP,
  Span,
  Line,
  ButtonSetting,
  DarkButton,
  DarkSpan,
} from "./setting.style";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { lang } from "../../lang/lang";
import i18next from "i18next";
import { setLanguage } from "../../redux/language/languageAction";
import { useDispatch } from "react-redux";

export const Settings = () => {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setThemes] = useState(localStorage.getItem("mode") || "light");
  if (document.body.classList == "body") {
    document.body.classList.add(localStorage.getItem("mode"));
  } else if (theme == "dark") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else if (theme == "light") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
  const handleClick = (evt) => {
    evt.target.classList.toggle("active");
    console.log(evt.target.value);
    if (!darkMode) {
      setThemes("light");
    } else {
      setThemes("dark");
    }
    if (document.body.classList == "body") {
      document.body.classList.add(localStorage.getItem("mode"));
    } else if (theme == "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    else if (theme == "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }   

    setDarkMode(!darkMode);
  };
  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  const { t } = useTranslation();
  const changeLanguage = (evt) => {
    evt.preventDefault();
    i18next.changeLanguage(evt.target.value);
    localStorage.setItem("language", evt.target.value);
    dispatch(setLanguage(localStorage.getItem("language")));
  };
  return (
    <div className="body">
      <SettingAll>
        <SettingP>{t("main.settings")}</SettingP>
        <FormSetting>
          {lang.uz.main.c}
          <Label htmlFor="select">{t("main.language")}</Label>
          <Select
            defaultValue={i18next.language}
            onChange={(evt) => changeLanguage(evt)}
            className="form-select"
            name="select"
            id="select"
          >
            <Option value="en">English</Option>
            <Option value="uz">Uzbek</Option>
            <Option value="ru">Russian</Option>
          </Select>
          <Span>{t("main.changeLanguage")}</Span>
          <Dark>
            <DarkTxt>{t("main.theme")}</DarkTxt>
          </Dark>
        </FormSetting>
        <DarkButton onClick={(evt) => handleClick(evt)} className="shadow">
          <DarkSpan></DarkSpan>
        </DarkButton>
        <Line></Line>
        <ButtonSetting>{t("main.save")}</ButtonSetting>
      </SettingAll>
    </div>
  );
};

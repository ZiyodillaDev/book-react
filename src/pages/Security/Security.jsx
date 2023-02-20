import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { api } from "../../API/api";
import { setUser } from "../../redux/user/userAction";
import {
  AllSecurity,
  SecurityTxt,
  SecurityForm,
  DivOne,
  Label,
  Input,
  Span,
  DivThird,
  DivSecond,
  ButtonS,
} from "./security.style";
import { lang } from "../../lang/lang";

export const Security = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const emailRef = useRef();
  const currentRef = useRef();
  const newPasswordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({
      email: emailRef.current.value,
      currentPassword: currentRef.current.value,
      newPassword: newPasswordRef.current.value,
    });
    const userSetting = async () => {
      const res = await fetch("http://10.10.3.114:5000/user/secutiry", {
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          currentPassword: currentRef.current.value,
          newPassword: newPasswordRef.current.value,
        }),
      });
      console.log(res);
    };
    userSetting();
  };
  return (
    <AllSecurity>
      <SecurityTxt>{t("main.recoveryPassword")}</SecurityTxt>
      <SecurityForm onSubmit={handleSubmit}>
        <DivOne>
          <Label htmlFor="Email">{t("main.email")}</Label>
          <Input
            ref={emailRef}
            placeholder={t("main.email")}
            className="form-control"
            type="email"
            id="email"
            name="email"
          />
          <Span>{t("main.spanName")}</Span>
        </DivOne>
        <DivSecond>
          <Label htmlFor="passwords">{t("main.currentPass")}</Label>
          <Input
            ref={currentRef}
            placeholder={t("main.currentPass")}
            className="form-control"
            type="password"
            id="passwords"
            name="passwords"
          />
          <Span>{t("main.spanName")}.</Span>
        </DivSecond>
        <DivThird>
          <Label htmlFor="password">{t("main.password")}</Label>
          <Input
            ref={newPasswordRef}
            placeholder={t("main.password")}
            className="form-control"
            type="password"
            id="password"
            name="password"
          />
          <Span>{t("main.spanName")}.</Span>
        </DivThird>
        <ButtonS type="submit">{t("main.save")}</ButtonS>
      </SecurityForm>
    </AllSecurity>
  );
};

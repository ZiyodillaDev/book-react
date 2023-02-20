import {
  Profiles,
  ProfileDiv,
  ProfileImgs,
  CameraImg,
  AllForm,
  HeadH,
  Form,
  Input,
  Label,
  DivOne,
  DivSecond,
  DivThird,
  Span,
  InputPhone,
  Line,
  Button,
  InputFile,
  Labels,
} from "./profile.style";
import ProfileImg from "../../assets/images/profile.png";
import Camera from "../../assets/images/Camera.png";
import { api } from "../../API/api";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userAction";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


export const Profile = () => {
  const { t } = useTranslation();

  const [all, setAll] = useState({});
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const imageRef = useRef();

  let localData = localStorage.getItem("token");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("image", imageRef.current?.files[0]);
    formData.append("first_name", firstNameRef.current?.value);
    formData.append("last_name", lastNameRef.current?.value);
    formData.append("phone", phoneRef.current?.value);
    console.log(formData);
    fetch("http://localhost:5000/user/account", {
      method: "PUT",
      headers: {
        Authorization: localData,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setTimeout(() => {
      All();
    }, 400);
  };

  const All = async () => {
    const res = await api.getUser({
      headers: {
        Authorization: localData,
      },
    });
    if (res.status === 201) {
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(setUser(res.data));
      setImg(`http://localhost:5000/${res.data.image}`);
      setAll(res.data);
      console.log(res.data);
    }
  };
  // All();
  useEffect(() => {
    All();
  }, []);

  return (
    <Profiles className="container">
      <ProfileDiv>
        <InputFile ref={imageRef} type="file" id="file" />
        <Labels htmlFor="file">
          <ProfileImgs src={img} alt="profil" />
          <CameraImg src={Camera} alt="camera" />
        </Labels>
      </ProfileDiv>
      <AllForm>
        <HeadH>{t("main.myProfil")}</HeadH>
        <Form onSubmit={handleSubmit}>
          <DivOne>
            <Label htmlFor="text">{t("main.firstName")}</Label>
            <Input
              defaultValue={all.first_name}
              ref={firstNameRef}
              placeholder="First Name"
              className="form-control"
              type="text"
              id="text"
              name="text"
            />
            <Span>{t("main.spanName")}</Span>
          </DivOne>
          <DivSecond>
            <Label htmlFor="text">{t("main.lastName")}</Label>
            <Input
              defaultValue={all.last_name}
              ref={lastNameRef}
              placeholder="Last Name"
              className="form-control"
              type="text"
              id="text"
              name="text"
            />
            <Span>{t("main.spanLastName")}</Span>
          </DivSecond>
          <DivThird>
            <Label htmlFor="tel">{t("main.phone")}</Label>
            <InputPhone
              defaultValue={all.phone}
              ref={phoneRef}
              placeholder="Phone"
              className="form-control"
              type="tel"
              id="tel"
              name="tel"
            />
            <Span>{t("main.spanPhone")}</Span>
          </DivThird>
          <Line></Line>
          <Button type="submit">{t("main.save")}</Button>
        </Form>
      </AllForm>
    </Profiles>
  );
};

import React, { useEffect, useRef } from "react";
import {
  Registers,
  Left,
  Right,
  LeftImg,
  RightH,
  RightP,
  RightLink,
  RightForm,
  RightInput,
  RightBtn,
} from "../Register/register.style";
import RegisterImg from "../../assets/images/loginImg.svg";
import { api } from "../../API/api";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/token/tokenAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser } from "../../redux/user/userAction";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const userLogin = async (user) => {
    const data = await api.userLogin(user);
    if (data.status === 201) {
      localStorage.setItem("token", data.data.token);
      dispatch(setToken(data.data.token));
      navigate("/");
    }
    const localData = localStorage.getItem("token");
    const All = async () => {
      const res = await api.getUser({
        headers: {
          Authorization: localData,
        },
      });
      if (res.status === 201) {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(setUser(res.data));
      }
    };
    All();
  };

 

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const values = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    userLogin(values);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <Registers className="container">
      <Left>
        <LeftImg src={RegisterImg} alt="register" />
      </Left>

      <Right>
        <RightH style={{ marginTop: "116px" }}>Sign up</RightH>
        <RightP>
          Already have an account?{" "}
          <RightLink to="/register"> Sign up</RightLink>
        </RightP>
        <RightForm onSubmit={handleSubmit}>
          <RightInput
            ref={emailRef}
            className="form-control"
            type="email"
            placeholder="Email"
          />
          <RightInput
            ref={passwordRef}
            className="form-control"
            type="password"
            placeholder="password"
          />
          <RightBtn type="submit">Next step</RightBtn>
        </RightForm>
      </Right>
    </Registers>
  );
};

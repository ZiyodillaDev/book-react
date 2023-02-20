import React, { useRef } from "react";
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
} from "./register.style";
import RegisterImg from "../../assets/images/registerImg.png";
import { api } from "../../API/api";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/token/tokenAction";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/user/userAction";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const userRegister = async (user) => {
    const data = await api.userRegister(user);
    if (data.status === 201) {
      localStorage.setItem("token", data.data.token);
      dispatch(setToken(data.data.token));
      navigate("/");
    }
    const localData = localStorage.getItem("token");
    api
      .getUser({
        headers: {
          Authorization: localData,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("user", JSON.stringify(res.data));
          dispatch(   (res.data));
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const values = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    userRegister(values);
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <Registers className="container">
      <Left>
        <LeftImg src={RegisterImg} alt="register" />
      </Left>

      <Right>
        <RightH>Sign up</RightH>
        <RightP>
          Already have an account? <RightLink to="/"> Sign in</RightLink>
        </RightP>
        <RightForm onSubmit={handleSubmit}>
          <RightInput
            ref={firstNameRef}
            className="form-control"
            type="text"
            placeholder="First name"
          />
          <RightInput
            ref={lastNameRef}
            className="form-control"
            type="text"
            placeholder="Last name"
          />
          <RightInput
            ref={phoneRef}
            className="form-control"
            type="tel"
            placeholder="Phone"
          />
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

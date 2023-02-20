import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Register } from "./pages/Register/Register";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./redux/token/tokenAction";
import { setUser } from "./redux/user/userAction";
import { api } from "./API/api";
import { Books } from "./pages/Books/Books";
import About from "./pages/About/About";
import BookAbout from "./pages/BookAbout/BookAbout";
import { Profile } from "./pages/Profile/Profile";
import { Security } from "./pages/Security/Security";
import { Settings } from "./pages/Settings/Settings";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { AddAuthor } from "./pages/AddAuthor/AddAuthor";
import { AddBook } from "./pages/AddBook/AddBook";
import { Poet } from "./components/Poet/Poet";
import { Jadid } from "./components/Jadid/Jadid";
import { Temuriy } from "./components/Temuriy/Temuriy";
import { Mustaqillik } from "./components/Mustaqillik/Mustaqillik";
import { Sovet } from "./components/Sovet/Sovet";
import axios from "axios";
import { Navigate } from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { lang } from "./lang/lang";
import { setLanguage } from "./redux/language/languageAction";
import { useState } from "react";

i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem("language") || "uz",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: { translation: lang.ru },
    en: { translation: lang.en },
    uz: { translation: lang.uz },
  },
});

function App() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.token);

  dispatch(setToken(localStorage.getItem("token") || ""));
  dispatch(setLanguage(localStorage.getItem("language") || ""));
  dispatch(setUser(JSON.parse(localStorage.getItem("user")) || ""));
  const [theme, setThemes] = useState(localStorage.getItem("mode") || "light");
  if (document.body.classList == "") {
    document.body.classList.add(localStorage.getItem("mode"));
  } else if (theme == "dark") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else if (theme == "light") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
  if (token) {
    return (
      <All className="container">
        <Routes>
          <Route path="/*" element={<Home />} />

          <Route path="/books/*" element={<Books />} />
          <Route path="/about:id" element={<About />} />
          <Route path="/bookabout:id" element={<BookAbout />} />
          <Route path="profilePage/*" element={<ProfilePage />}>
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="security" element={<Security />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/addAuthor" element={<AddAuthor />} />
          <Route path="/addBook" element={<AddBook />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </All>
    );
  }
  return (
    <All className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </All>
  );
}

const All = styled.div``;

export default App;

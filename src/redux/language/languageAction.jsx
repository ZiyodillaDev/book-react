import { REMOVE_LANGUAGE, SET_LANGUAGE } from "./languageType";

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
export const removeLanguage = () => {
  return {
    type: REMOVE_LANGUAGE,
    payload: "",
  };
};

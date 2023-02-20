import { REMOVE_THEME, SET_THEME } from "./themeType";

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};
export const removeTheme = () => {
  return {
    type: REMOVE_THEME,
    payload: "",
  };
};

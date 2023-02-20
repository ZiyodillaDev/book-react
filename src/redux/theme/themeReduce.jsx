import { REMOVE_THEME, SET_THEME } from "./themeType";

const initialState = {
  theme: "",
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case REMOVE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

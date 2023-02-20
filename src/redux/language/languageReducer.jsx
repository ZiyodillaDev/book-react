import { REMOVE_LANGUAGE, SET_LANGUAGE } from "./languageType";

const initialState = {
  language: "",
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case REMOVE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

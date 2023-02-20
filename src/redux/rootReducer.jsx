import { combineReducers } from "redux";
import { languageReducer } from "./language/languageReducer";
import { themeReducer } from "./theme/themeReduce";
import { tokenReducer } from "./token/tokenReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  language: languageReducer,
  theme: themeReducer,
});

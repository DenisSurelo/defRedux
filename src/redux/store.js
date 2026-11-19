import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer, filterReducer } from "./reducers";

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, enhancer);

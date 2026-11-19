import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "./actions";

export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(c => c.id !== action.payload);
    default:
      return state;
  }
};

export const filterReducer = (state = "", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

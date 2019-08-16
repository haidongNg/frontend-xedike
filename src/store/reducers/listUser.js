import { DATA_LIST_USER } from "../constans/types";

const initialState = [];

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_LIST_USER:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default userReducer;

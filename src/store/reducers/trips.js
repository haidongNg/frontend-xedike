import { LIST_TRIPS } from "../constans/types";

const initialState = [];

const tripsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_TRIPS:
      return [...payload];
    default:
      return state;
  }
};

export default tripsReducer;

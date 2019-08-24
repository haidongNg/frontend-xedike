import { DATA_LIST_TRIP_OF_USER } from "../constans/types";

const initialState = [];

const listHistoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_LIST_TRIP_OF_USER:
      return [...payload];
    default:
      return state;
  }
};

export default listHistoryReducer;

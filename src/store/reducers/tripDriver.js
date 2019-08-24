import { DATA_TRIP_DRIVER } from "../constans/types";

const initialState = [];

const tripDriverReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_TRIP_DRIVER:
      return [...payload];
    default:
      return state;
  }
};

export default tripDriverReducer;
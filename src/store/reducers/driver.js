import { PROFILEDRIVER } from "../constans/types";

const initialState = {};

const driverProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILEDRIVER:
      return payload;
    default:
      return state;
  }
};

export default driverProfileReducer;

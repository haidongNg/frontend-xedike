import { GET_ERRORS } from "../constans/types";

const initialState = {};

const errorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ERRORS:
      return  payload ;
    default:
      return state;
  }
};

export default errorsReducer;

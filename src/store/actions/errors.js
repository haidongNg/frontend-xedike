import { GET_ERRORS } from "../constans/types";

export const getErrors = err => {
  return {
    type: GET_ERRORS,
    payload: err
  };
};

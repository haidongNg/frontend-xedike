import Axios from "axios";
import _ from "lodash";
import { getErrors } from "./errors";
import { DATA_LIST_USER } from "../constans/types";
export const setListUser = data => {
  return {
    type: DATA_LIST_USER,
    payload: data
  };
};

export const getListUser = callback => {
  return dispatch => {
    Axios.get("http://localhost:5000/api/v1/users")
      .then(res => {
        dispatch(getErrors({}));
        dispatch(setListUser(res.data.users));
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

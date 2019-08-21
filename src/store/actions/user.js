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
    Axios.get("/api/v1/users")
      .then(res => {
        dispatch(getErrors({}));
        dispatch(setListUser(res.data.users));
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const getTripHistory = callback => {
  return dispatch => {
    Axios.get("/api/v1/users/trip-history")
      .then(res => {
        dispatch(getErrors({}));
        callback(res.data);
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};


export const rateDriver = (tripId, data, callback) => {
  return dispatch => {
    Axios.post(`/api/v1/trips/rates/${tripId}`, data)
    .then(res => {
      dispatch(getErrors({}));
      callback();
    })
    .catch(err => {
      dispatch(getErrors(_.get(err, "response.data", "")));
    })
  }
}
import Axios from "axios";
import _ from "lodash";
import { getErrors } from "../actions/errors";
import { PROFILEDRIVER } from "../constans/types";

export const setProfileDriver = profile => {
  return {
    type: PROFILEDRIVER,
    payload: profile
  };
};

export const getDriverProfile = (id, callback) => {
  return dispatch => {
    Axios.get(`http://localhost:5000/api/v1/users/drivers/profile/${id}`)
      .then(res => {
        dispatch(getErrors({}));
        dispatch(setProfileDriver(res.data));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const createDriverProfile = (data, callback) => {
  return dispatch => {
    Axios.post(
      "http://localhost:5000/api/v1/users/drivers/create-profile",
      data
    )
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const addCar = (data, callback) => {
  return dispatch => {
    Axios.post("http://localhost:5000/api/v1/users/drivers/add-car", data)
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

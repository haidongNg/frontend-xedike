import Axios from "axios";
import _ from "lodash";
import { getErrors } from "./errors";
import { LIST_TRIPS } from "../constans/types";

export const listTrips = (data) => ({
  type: LIST_TRIPS,
  payload: data
})

export const getTrips = callback => {
  return dispatch => {
    Axios.get("http://localhost:5000/api/v1/trips/")
      .then(res => {
        dispatch(getErrors({}));
        dispatch(listTrips(res.data));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const getTrip = (id, callback) => {
  return dispatch => {
    Axios.get(`http://localhost:5000/api/v1/trips/${id}`)
      .then(res => {
        callback(res.data);
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const createTrip = (data, callback) => {
  return dispatch => {
    Axios.post("http://localhost:5000/api/v1/trips/create-trip", data)
      .then(res => {
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const reservation = (tripid, data, callback) => {
  return dispatch => {
    Axios.post(`http://localhost:5000/api/v1/trips/book/${tripid}`, data)
      .then(res => {
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

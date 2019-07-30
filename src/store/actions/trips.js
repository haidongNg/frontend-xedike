import Axios from "axios";
import _ from "lodash";
import { getErrors } from "./errors";

export const getTrips = callback => {
  return dispatch => {
    Axios.get("http://localhost:5000/api/trips/")
      .then(res => {
        dispatch(getErrors({}));
        callback(res.data);
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const getTrip = (id, callback) => {
  return dispatch => {
    Axios.get(`http://localhost:5000/api/trips/${id}`)
      .then(res => {
        callback(res.data);
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const reservation = (tripid, data, callback) => {
  return dispatch => {
    Axios.post(`http://localhost:5000/api/trips/book/${tripid}`, data)
      .then(res => {
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

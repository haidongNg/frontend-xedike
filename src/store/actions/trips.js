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

import Axios from "axios";
import _ from "lodash";
import { getErrors } from "./errors";
import { LIST_TRIPS } from "../constans/types";

export const listTrips = data => ({
  type: LIST_TRIPS,
  payload: data
});

export const getTrips = callback => {
  return dispatch => {
    Axios.get("/api/v1/trips/")
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
    Axios.get(`/api/v1/trips/${id}`)
      .then(res => {
        dispatch(getErrors({}));
        callback(res.data);
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const createTrip = (data, callback) => {
  return dispatch => {
    Axios.post("/api/v1/trips/create-trip", data)
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const reservation = (tripid, data, callback) => {
  return dispatch => {
    Axios.post(`/api/v1/trips/book/${tripid}`, data)
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const deleteTrip = (id, callback) => {
  return dispatch => {
    Axios.delete(`/api/v1/trips/${id}`)
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const updateTrip = (id, data, callback) => {
  return dispatch => {
    Axios.put(`/api/v1/trips/${id}`, data)
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const canBookTrip = (idTrip, callback) => {
  return dispatch => {
    Axios.post(`/api/v1/trips/cancel/${idTrip}`)
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

// error
export const finishTrip = (tripId, callback) => {
  return dispatch => {
    Axios.patch(`/api/v1/trips/finish/${tripId}`)
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

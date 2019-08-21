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
    Axios.get(`/api/v1/users/drivers/profile/${id}`)
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
  const { address, passportId, mainJob } = data;
  return dispatch => {
    Axios.post("/api/v1/users/drivers/create-profile", {
      address,
      passportId,
      mainJob
    })
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const updateDriverProfile = (data, callback) => {
  const { address, passportId, mainJob } = data;
  return dispatch => {
    Axios.put("/api/v1/users/drivers/update-profile", {
      address,
      passportId,
      mainJob
    })
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
  const { brand, model, manufacturingYear, licensePlate, numberOfSeats } = data;
  return dispatch => {
    Axios.post("/api/v1/users/drivers/add-car", {
      brand,
      model,
      manufacturingYear,
      licensePlate,
      numberOfSeats
    })
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const updateCar = (id, data, callback) => {
  const { brand, model, manufacturingYear, licensePlate, numberOfSeats } = data;
  return dispatch => {
    Axios.put(`/api/v1/users/drivers/update-car/${id}`, {
      brand,
      model,
      manufacturingYear,
      licensePlate,
      numberOfSeats
    })
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const uploadCarImage = (carId, formData, callback) => {
  return dispatch => {
    Axios.post(
      `/api/v1/users/drivers/upload-car/${carId}`,
      formData
    )
      .then(res => {
        console.log(res.data);
        callback(res.data);
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const getCarInfo = (carId, callback) => {
  return dispatch => {
    Axios.get(`/api/v1/users/drivers/${carId}/cars`)
      .then(res => {
        dispatch(getErrors({}));
        callback(res.data);
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const getDriverUSer = callback => {
  return dispatch => {
    Axios.get("/api/v1/users/drivers/getDriverUsers")
      .then(res => {
        dispatch(getErrors({}));
        callback(res.data);
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};


export const getTripDriver = (id, callback) => {
  return dispatch => {
    Axios.get(`/api/v1/users/drivers/getTripDriver/${id}`)
    .then(res => {
      dispatch(getErrors({}));
      callback(res.data);
    })
    .catch(err => {
      dispatch(getErrors(_.get(err, "response.data", "")));
    })
  }
}
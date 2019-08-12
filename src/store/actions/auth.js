import Axios from "axios";
import _ from "lodash";
import jwtDecode from "jwt-decode";
import { SET_CURRENT_USER } from "../constans/types";
import setHeaders from "../../shared/helpers/setHeader";
import getFingerprint from "../../shared/helpers/getFingerprint";
import { getErrors } from "./errors";

export const signUp = (data, callback) => {
  return dispatch => {
    Axios.post("http://localhost:5000/api/v1/users/register", data)
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data")));
      });
  };
};

export const signIn = (data, callback) => {
  const { email, password } = data;
  return dispatch => {
    getFingerprint(fingerprint => {
      Axios.post("http://localhost:5000/api/v1/users/login", {
        email,
        password,
        fingerprint
      })
        .then(res => {
          const token = res.data.token;
          localStorage.setItem("token", token);

          const decode = jwtDecode(token);

          dispatch(setCurrentUser(decode));
          setHeaders(token, fingerprint);
          dispatch(getErrors({}));
          callback();
        })
        .catch(err => {
          dispatch(getErrors(_.get(err, "response.data", "")));
        });
    });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("token");
    dispatch(setCurrentUser({}));
    setHeaders();
  };
};

export const setCurrentUser = data => {
  return {
    type: SET_CURRENT_USER,
    payload: data
  };
};

export const getProfile = (id, callback) => {
  return dispatch => {
    Axios.get(`http://localhost:5000/api/v1/users/${id}`)
      .then(res => {
        dispatch(setCurrentUser(res.data));
        callback(res.data);
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "respose.data", "")));
      });
  };
};

export const uploadImage = (formdata, callback) => {
  return dispatch => {
    Axios.post("http://localhost:5000/api/v1/users/upload-avatar", formdata)
      .then(res => {
        callback(res.data);
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

export const updateProfile = (data, callback) => {
  const { fullName, gender, dateOfBirth } = data;
  return dispatch => {
    Axios.put("http://localhost:5000/api/v1/users/update", { fullName, gender, dateOfBirth })
      .then(res => {
        dispatch(getErrors({}));
        callback();
      })
      .catch(err => {
        dispatch(getErrors(_.get(err, "response.data", "")));
      });
  };
};

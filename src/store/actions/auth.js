import Axios from "axios";
import _ from "lodash";
import jwtDecode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "../constans/types";
import setHeaders from "../../shared/helpers/setHeader";
import getFingerprint from "../../shared/helpers/getFingerprint";

export const getErrors = err => {
  return {
    type: GET_ERRORS,
    payload: err
  };
};

export const signUp = (data, callback) => {
  return dispatch => {
    Axios.post("http://localhost:5000/api/users/register", data)
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
      Axios.post("http://localhost:5000/api/users/login", {
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
          dispatch(getErrors(_.get(err, "response.data")));
        });
    });
  };
};

export const setCurrentUser = data => {
  return {
    type: SET_CURRENT_USER,
    payload: data
  };
};

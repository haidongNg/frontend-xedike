import Axios from "axios";

const setHeaders = (token, fingerprint) => {
  if (token && fingerprint) {
    Axios.defaults.headers.common["fingerprint"] = fingerprint;
    Axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete Axios.defaults.headers.common["fingerprint"];
    delete Axios.defaults.headers.common["Authorization"];
  }
};

export default setHeaders;

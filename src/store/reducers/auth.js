import { SET_CURRENT_USER } from "../constans/types";
import _ from "lodash";
const initialState = {
  profile: {}, // decode (thong tin decode cua payload)
  isAuthenticated: false
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        profile: payload,
        isAuthenticated: !_.isEmpty(payload)
        // isEmpty() = true
        // action.payload = {}
        // ==> decoded = { }
        // ==> token ko co ==> isAuthenticated=false
      };

    default:
      return state;
  }
};

export default authReducer;

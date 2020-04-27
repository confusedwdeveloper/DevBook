import { SET_ALERT, REMOVE_ALERT } from "./types";
import { uuid } from "uuidv4";

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id,
    },
  });
  // wait certain amount of time then dispatch action to remove alert
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

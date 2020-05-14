import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
} from "./types";

// action to get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// action to create or update profile
// history to redirect after we submit the form
// edit parameter to know if we're creating or updating profile
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/profile", formData, config);
    // now same thing as get current profile. same type and same dispatch
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    // alert as confirmation
    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    // don't redirect if editing
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data.errors;

    // check if there are any errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
// action to add experience
// history to redirect
export const addExerience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put("/api/profile/experience", formData, config);
    // now same thing as get current profile. same type and same dispatch
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    // alert as confirmation
    dispatch(setAlert("Exerience Added", "success"));
    // redirect
    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    // check if there are any errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// action to add education
// history to redirect
export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put("/api/profile/education", formData, config);
    // now same thing as get current profile. same type and same dispatch
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    // alert as confirmation
    dispatch(setAlert("Education Added", "success"));
    // redirect
    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    // check if there are any errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// action to delete experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience deleted", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong! Please try again", "danger"));

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// action to delete education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education deleted", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong! Please try again", "danger"));

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// action to delete account and profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      const res = await axios.delete("/api/profile");

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(
        setAlert("Your account has been permanently deleted", "success")
      );
    } catch (err) {
      dispatch(setAlert("Something went wrong! Please try again", "danger"));

      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  }
};

import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  RESET_PROFILE_LOADING,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [], //for list of developers
  repos: [],
  loading: true,
  error: {},
};

export default function profile(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE: {
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    }
    case RESET_PROFILE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PROFILES: {
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    }
    case PROFILE_ERROR: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }
    case CLEAR_PROFILE: {
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    }
    case GET_REPOS: {
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}

import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};
// loading is whether authenticated user loading still

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_SUCCESS: {
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    }
    case REGISTER_FAIL: {
      // if fail login remove token completely
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
      // even though it failed it still done loading so false
    }
    default: {
      return state;
    }
  }
}

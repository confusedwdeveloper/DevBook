// set auth token in global header
import axios from "axios";

const setAuthToken = (token) => {
  // token comes in from local storage
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    // if what we pass in is not token, delete from global headers
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;

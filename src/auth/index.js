import React from "react";
import useLocalStorage from "./useLocalStorage";
import {noop} from "lodash-es";

const useAuthToken = () => useLocalStorage('auth-token');

export default useAuthToken;
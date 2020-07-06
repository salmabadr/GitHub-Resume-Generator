import actionTypes from "./actionTypes";
import axios from "axios";
import {
    host,
    usersPath
} from "../APIConfig";
import {
    getRepoInfo,
    setRepoInfo,
} from "./repoInfo";
import {
    setLanguages
} from "./langs";
import error from "./error";
import spinnerShown from "./showSpinner";

const getUserInfo = (userName) => {
    return (dispatch) => {
        // Reset redux store
        dispatch(setUserInfo({}));
        dispatch(setRepoInfo([]));
        dispatch(setLanguages({}));
        dispatch(error(""));

        // Request to get user's info
        return axios.get(`${host}${usersPath}/${userName}`)
            .then((res) => {
                if (res.data) {
                    // Add user's info to the store
                    dispatch(setUserInfo(res.data));
                    if (res.data.repos_url)
                        // get user's repositories info
                        dispatch(getRepoInfo(res.data.repos_url));
                    else dispatch(spinnerShown(false));
                } else {
                    dispatch(spinnerShown(false));
                    dispatch(error("Something went wrong, please try again"));
                };
            })
            .catch((err) => {
                dispatch(spinnerShown(false));
                if (err.response) {
                    if (err.response.status === 404)
                        dispatch(error("This username doesn't exist"));
                    else dispatch(error("Something went wrong, please try again"));
                } else dispatch(error("Something went wrong, please try again"));
            })
    }
}

const setUserInfo = (action) => {
    return {
        type: actionTypes.getUserInfo,
        data: action
    }
}

export default getUserInfo;
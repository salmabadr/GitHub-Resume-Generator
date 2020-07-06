import actionTypes from "./actionTypes";
import axios from "axios";
import {
    getLanguages
} from "./langs";
import spinnerShown from "./showSpinner";
import error from "./error";

const getRepoInfo = (reposPath) => {
    return (dispatch) => {
        // Request to get all user's repos
        return axios.get(reposPath)
            .then((res) => {
                if (res.data) {
                    // Add repos to the store
                    dispatch(setRepoInfo(res.data));
                    // filter all repos that have languages
                    const reposWithLangURLs =
                        res.data.filter(repo =>
                            repo.languages_url &&
                            repo.languages_url.length > 0
                        );
                    // Request to get languages of all repos containing them
                    if (reposWithLangURLs.length > 0)
                        dispatch(getLanguages(reposWithLangURLs));
                    else dispatch(spinnerShown(false));
                } else {
                    dispatch(spinnerShown(false));
                    dispatch(error("Something went wrong, please try again"));
                }
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

const setRepoInfo = (action) => {
    return {
        type: actionTypes.getRepoInfo,
        data: action
    }
}
export {
    getRepoInfo,
    setRepoInfo
}
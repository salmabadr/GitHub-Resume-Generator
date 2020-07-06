import actionTypes from "./actionTypes";
import axios from "axios";
import spinnerShown from "../actions/showSpinner";
import error from "./error";

const getLanguages = (reposWithLangURLs) => {
    return (dispatch) => {
        // Gather all reaqests to get languages of all repos
        const languagesRequests = reposWithLangURLs.map(
            (repo) => axios.get(repo.languages_url)
        );
        Promise
            .all(languagesRequests)
            .then((results) => {
                dispatch(spinnerShown(false))
                // Add langauges info to store
                if (results.length > 0)
                    dispatch(setLanguages(results));
                else dispatch(error("Something went wrong, please try again"));
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

const setLanguages = (action) => {
    return {
        type: actionTypes.getLanguages,
        data: action
    }
}
export {
    getLanguages,
    setLanguages,
}
import {
    combineReducers
} from "redux";
import userInfoReducer from "./userInfo";
import repoInfoReducer from "./repoInfo";
import languagesReducer from "./langs";
import showSpinnerReducer from "./showSpinner";
import errorReducer from "./error";

const rootReducer = combineReducers({
    userInfo: userInfoReducer,
    repos: repoInfoReducer,
    langs: languagesReducer,
    showSpinner: showSpinnerReducer,
    error: errorReducer,
});

export default rootReducer;
import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const showSpinnerReducer = (state = initialState.showSpinner, action) => {
    switch (action.type) {
        case actionTypes.showSpinner:
            return action.data;
        default:
            return state;
    }
}
export default showSpinnerReducer;
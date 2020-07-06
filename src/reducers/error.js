import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const showSpinnerReducer = (state = initialState.error, action) => {
    switch (action.type) {
        case actionTypes.error:
            return action.data;
        default:
            return state;
    }
}
export default showSpinnerReducer;
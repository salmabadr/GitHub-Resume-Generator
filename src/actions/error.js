import actionTypes from "./actionTypes";

const error = (action) => {
    return {
        type: actionTypes.error,
        data: action
    }
}
export default error;
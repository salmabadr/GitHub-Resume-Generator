import actionTypes from "./actionTypes";

const showSpinner = (action) => {
    return {
        type: actionTypes.showSpinner,
        data: action
    }
}
export default showSpinner;
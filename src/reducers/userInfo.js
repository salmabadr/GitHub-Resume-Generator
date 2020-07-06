import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const userInfoReducer = (state = initialState.userInfo, action) => {
    switch (action.type) {
        case actionTypes.getUserInfo:
            if (action.data) {
                const {
                    id,
                    login,
                    name,
                    html_url,
                    created_at,
                    location,
                    public_repos,
                    followers,
                } = action.data;
                return {
                    id: id,
                    username: name || login,
                    userProfileLink: html_url,
                    githubStartYear: created_at,
                    city: location && location.split(',')[0],
                    country: location && location.split(',')[1],
                    publicReposCount: public_repos,
                    followersCount: followers,
                }
            }
            break;
        default:
            return state;
    }
}
export default userInfoReducer;
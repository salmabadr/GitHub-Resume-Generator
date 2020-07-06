import {
    createStore,
    applyMiddleware
} from "redux";
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

// Add ReduxThunk library to perform async actions
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
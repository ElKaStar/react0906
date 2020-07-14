import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messageReducer from "./message-reducer";
import contentReducer from "./content-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    myPosts: contentReducer,
    profilePage: messageReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})



//let store = createStore(reducers, applyMiddleware(thunkMiddleware))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.__store__ = store

export default store
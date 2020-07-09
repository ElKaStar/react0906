import {applyMiddleware, combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import contentReducer from "./content-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    myPosts: contentReducer,
    profilePage: messageReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store